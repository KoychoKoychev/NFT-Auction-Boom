import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";

import styles from "./ExplorePage.module.scss";
import classNames from "classnames";

import Card from "../../src/components/card/Card";

export default function Explore() {

    const [nfts, setNfts] = useState([]);
    const [nftFilters, setNftFilters] = useState(null);
    useEffect(async () => {
        const result = await fetch(process.env.apiUrl + '/explore')
        const exploreData = await result.json();
        setNfts(exploreData.nfts);
        setNftFilters(exploreData.filters);
    }, []);

    return (
        <div>
            <Header />
            <Container maxWidth='xl'>
                <Grid container justifyContent={'space-between'} className={classNames(styles.filters)}>
                    <Grid item>
                        <ExploreTitle text={'Explore'} />
                    </Grid>
                    <Grid item>
                        {nftFilters!=null?
                        <ExploreFilters filters={nftFilters} />
                        :null}
                    </Grid>
                </Grid>
                <Grid 
                container spacing={2} 
                justifyContent='space-between' 
                alignItems="stretch" 
                className={classNames(styles.cards)}>
                    {nfts.map((el)=>{
                        return(
                            <Grid item key={el.id}>
                                <Card 
                                className={classNames(styles.card)}
                                name={el.name} 
                                likes={el.likes} 
                                mediaUrl={el.source.url}
                                user={{'avatarUrl':el.owner.avatar.url, 'verified': el.owner.confirmed}}
                                price={el.price}
                                currency={el.currency}
                                timeLeft ={new Date(el.auction_end) - Date.now()}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}