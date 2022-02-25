import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import * as React from 'react';

import dataProfile from "../../data/profile.json"
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";



export default function Profile() {

    const router = useRouter();
    const { id } = router.query

    const [currProfile, setCurrProfile] = useState({});
    const [itemLoaded, setItemLoaded] = useState(false);


    useEffect(() => {
        setCurrProfile(dataProfile);
    }, [id]);

    useEffect(() => {
        if (currProfile != {} && id) {
            setItemLoaded(true);
        }
    }, [id]);

    console.log(currProfile);
    console.log(id);

    const filterObj = {
        sort: [
          { label: "Name (Ascending)", value: 1 },
          { label: "Name (Descending)", value: 2 },
        ],
        price: [
          { label: "0.3 - 0.5 ETH", value: 3 },
          { label: "0.5 - 2 ETH", value: 4, },
          { label: "2- 3 ETH", value: 5, },
        ],
      }

    return (
        <div>
            <Header />
            {itemLoaded
                ? <React.Fragment>
                    <ProfileHero image={currProfile.avatar.backgroundUrl} />
                    <ProfileUser name={currProfile.username} info={currProfile.info} avatar={currProfile.avatar.url} verified={currProfile.verified} />
                    <ProfileCollection 
                    user={{ name: currProfile.username, info: currProfile.info, avatar: currProfile.avatar.url, verified: currProfile.verified }}
                    filters={filterObj}
                    items={currProfile.nfts} />
                </React.Fragment>
                : null
            }
            <Footer />
        </div>
    )
}