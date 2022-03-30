import * as React from 'react';
import styles from "./profilePage.module.scss";
import classNames from "classnames";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";
import ProfileHero from "../../../src/components/profile/ProfileHero";
import ProfileUser from "../../../src/components/profile/ProfileUser";

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

export default function Profile() {

    const router = useRouter();
    const { id } = router.query

    const [profile, setCurrProfile] = useState(null);
    const [profileFilters, setProfileFilters] = useState(null);

    const [allNfts, getAllNfts] = useState([]);
    const [nfts, setNfts] = useState([]);
    const [sortValue, setSortValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [searchStr, setSearchString] = useState('');

    const filterFunctions = {
        1: function (a, b) {
            return new Date(a.auction_end) - new Date(b.auction_end);
        },
        2: function (a, b) {
            return new Date(b.auction_end) - new Date(a.auction_end);
        },
        3: function (a, b) {
            return a.name.localeCompare(b.name);
        },
        4: function (a, b) {
            return b.name.localeCompare(a.name);
        },
        5: function (a, b) {
            return a.price - b.price;
        },
        6: function (a, b) {
            return b.price - a.price;
        },
        7: function (el) {
            return el.price < 0.1;
        },
        8: function (el) {
            return el.price >= 0.1 && el.price < 0.5;
        },
        9: function (el) {
            return el.price >= 0.5;
        },
    }

    function onSortChange(ev) {
        setSortValue(ev.target.value);
    }
    async function onPriceChange(ev) {
        setPriceValue(ev.target.value);
    }

    function inputChange(ev) {
        const str = ev.target.value.trim().toLowerCase();
        setSearchString(str);
    }


    useEffect(async () => {
        if (id) {
            const result = await fetch(process.env.apiUrl + `/users/${id}`);
            const profileData = await result.json();
            setCurrProfile(profileData.user);
            setProfileFilters(profileData.filters);
            getAllNfts(profileData.user.nfts);
            if (sortValue && priceValue) {
                setNfts(profileData.user.nfts.sort(filterFunctions[sortValue]).filter(filterFunctions[priceValue]));
                getAllNfts(profileData.user.nfts.sort(filterFunctions[sortValue]).filter(filterFunctions[priceValue]));
            }else if(sortValue){
                setNfts(profileData.user.nfts.sort(filterFunctions[sortValue]));
                getAllNfts(profileData.user.nfts.sort(filterFunctions[sortValue]));
            }else if(priceValue){
                setNfts(profileData.user.nfts.filter(filterFunctions[priceValue]));
                getAllNfts(profileData.user.nfts.filter(filterFunctions[priceValue]));
            }else{
                setNfts(profileData.user.nfts);
            }
        }
    }, [id, sortValue, priceValue])

    useEffect(async () =>{
        if(searchStr){
            setNfts(allNfts.filter(el=>el.name.toLowerCase().includes(searchStr)))
        }else{
            setNfts(allNfts)
        }
    },[searchStr])

    return (
        <div className={classNames(styles.profile_page)}>
            <Header />
            {profile != null && profileFilters != null
                ? <React.Fragment>
                    <ProfileHero image={profile.avatar.backgroundUrl} />
                    <ProfileUser
                        name={profile.username}
                        info={profile.info}
                        avatar={profile.avatar.url}
                        verified={profile.verified} />
                    <ProfileCollection
                        user={{ name: profile.username, info: profile.info, avatar: profile.avatar.url, verified: profile.verified, id: profile.id }}
                        filters={profileFilters}
                        sortValue={sortValue}
                        priceValue={priceValue}
                        onSortChange={onSortChange}
                        onPriceChange={onPriceChange}
                        onTextFieldChange={inputChange}
                        items={nfts} />
                </React.Fragment>
                : null
            }
            <Footer />
        </div>
    )
}