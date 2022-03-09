import * as React from 'react';
import styles from "./profilePage.module.scss";
import classNames from "classnames";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";

import dataProfile from "../../data/profile.json"
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";



export default function Profile() {

    const router = useRouter();
    const { id } = router.query

    const [profile, setCurrProfile] = useState(null);
    const [profileFilters, setProfileFilters] = useState(null);


    useEffect(async() => {
        if(id){
            const result = await fetch(process.env.apiUrl + `/users/${id}`);
            const profileData = await result.json();
            setCurrProfile(profileData.user);
            setProfileFilters(profileData.filters)
        }
    },[id])

    return (
        <div className={classNames(styles.profile_page)}>
            <Header />
            {profile!=null && profileFilters!=null
                ? <React.Fragment>
                    {console.log(profileFilters)}
                    <ProfileHero image={profile.avatar.backgroundUrl} />
                    <ProfileUser 
                    name={profile.username} 
                    info={profile.info} 
                    avatar={profile.avatar.url} 
                    verified={profile.verified} />
                    <ProfileCollection 
                    user={{ name: profile.username, info: profile.info, avatar: profile.avatar.url, verified: profile.verified }}
                    filters={profileFilters}
                    items={profile.nfts} />
                </React.Fragment>
                : null
            }
            <Footer />
        </div>
    )
}