import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";

import styles from "./ExplorePage.module.scss";
import classNames from "classnames";

import dataExplore from "../../data/nfts.json"
import Card from "../../src/components/card/Card";

export default function Explore() {

    const [exploreCards, setExploreCards] = useState([]);
    useEffect(() => {
        setExploreCards(dataExplore);
    }, []);


    const filtersObj = {
        "sort": [
            {
                "label": "Name (Ascending)",
                "value": 1
            },
            {
                "label": "Name (Descending)",
                "value": 2
            }
        ],
        "price": [
            {
                "label": "0.3 - 0.5 ETH",
                "value": 3
            },
            {
                "label": "0.5 - 2 ETH",
                "value": 4
            },
            {
                "label": "2- 3 ETH",
                "value": 5
            }
        ]
    }

    return (
        <div>
            <Header />
            <Container maxWidth='xl'>
                <Grid container justifyContent={'space-between'} className={classNames(styles.filters)}>
                    <Grid item>
                        <ExploreTitle text={'Explore'} />
                    </Grid>
                    <Grid item>
                        <ExploreFilters filters={filtersObj} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent={'space-between'} className={classNames(styles.cards)}>
                    {exploreCards.map((el)=>{
                        return(
                            <Grid item key={el.id}>
                                <Card 
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