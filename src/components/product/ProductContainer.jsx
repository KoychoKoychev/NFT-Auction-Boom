import styles from "./ProductContainer.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";
import { useState } from "react";
import { useEffect } from "react";
import { parseISO } from "date-fns";


export default function ProductContainer({ name="", owner, price, currency, likes, auction_end, details, source, bids}) {

    const [isLive,setLiveState] = useState(true);
    useEffect(()=>{
        if(Date.now() >= new Date(parseISO(auction_end))){
            setLiveState(false)
        }
    },[auction_end])

    const bidAmount = bids.lenght > 0 ? Math.max(...bids.map(el=>Number(el.amount))) : 0.01;

    function onBid() {}

    function onBuy() {
        setLiveState(false);
    }

    function onTimeEnd() {
        setLiveState(false)
    }

    return (
        <div className={classNames(styles["product-container"])}>
            <Grid container justifyContent={"space-around"}>
                <Grid item xs={6}>
                    <ProductImage url={source.url}/>
                </Grid>
                <Grid item xs={5}>
                    <ProductInfo 
                    title={name} 
                    creator={{name:owner.username, avatar:owner.avatar.url, verified:owner.verified, id:owner.id}}
                    price={price}
                    currency={currency}
                    likes={likes}
                    timeEnd={auction_end}
                    isLive={isLive}
                    onTimeEnd={onTimeEnd}
                    />
                    <ProductTabs text={details} bids={bids}/>
                    <ProductActions isLive={isLive}
                     currency={currency} 
                     buyAmount={price} 
                     bidAmount={bidAmount} 
                     onBid={onBid} 
                     onBuy={onBuy}/>
                </Grid>
            </Grid>
        </div>
    )
}