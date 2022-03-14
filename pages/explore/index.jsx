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
    const [sortValue, setSortValue] = useState('');
    const [priceValue, setPriceValue] = useState('');

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
            return el.price<1;
        },
        8: function (el) {
            return el.price>=1 && el.price<4;
        },
        9: function (el) {
            return el.price>=4;
        },
    }

    useEffect(async () => {
        if(nftFilters){
            const params = new URLSearchParams();
            if(nftFilters.sort) {
                params.append('sort', nftFilters.sort);
            }
            if(nftFilters.price) {
                params.append('price', nftFilters.price);
            }
            const response = await fetch(
                `${process.env.apiUrl}/explore?${params.toString()}`
            )
        }

        const result = await fetch(process.env.apiUrl + '/explore')
        const exploreData = await result.json();
        setNftFilters(exploreData.filters);
        if (sortValue && priceValue) {
            setNfts(exploreData.nfts.sort(filterFunctions[sortValue]).filter(filterFunctions[priceValue]));
        }else if(sortValue){
            setNfts(exploreData.nfts.sort(filterFunctions[sortValue]));
        }else if(priceValue){
            setNfts(exploreData.nfts.filter(filterFunctions[priceValue]));
        }else{
            setNfts(exploreData.nfts);
        }
    }, [sortValue, priceValue]);


    function onSortChange(ev) {
        setSortValue(ev.target.value);
    }
    function onPriceChange(ev) {
        setPriceValue(ev.target.value);
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
                        {nftFilters != null ?
                            <ExploreFilters
                                filters={nftFilters}
                                sortValue={sortValue}
                                priceValue={priceValue}
                                onSortChange={onSortChange}
                                onPriceChange={onPriceChange} />
                            : null}
                    </Grid>
                </Grid>
                <Grid
                    container spacing={2}
                    justifyContent="flex-start"
                    alignItems="stretch"
                    className={classNames(styles.cards)}>
                    {nfts.map((el) => {
                        return (
                            <Grid item key={el.id} xs={3}>
                                <Card
                                    className={classNames(styles.card)}
                                    name={el.name}
                                    likes={el.likes}
                                    mediaUrl={el.source.url}
                                    user={{ 'avatarUrl': el.owner.avatar.url, 'verified': el.owner.confirmed }}
                                    price={el.price}
                                    currency={el.currency}
                                    timeLeft={new Date(el.auction_end) - Date.now()}
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