import styles from "./Auctions.module.scss";
import classNames from "classnames";
import { Container, Grid, MenuItem, Select } from "@mui/material";
import Card from "../card/Card"

export default function Auctions({ cards = [], filters=[] }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container maxWidth="xl">
                <div className={classNames(styles.auctionHead)}>
                    <span className={classNames(styles.auctionTitle)}>🔥 Live Auctions</span>
                    <Select
                        className={classNames(styles.selectMenu)}
                        id="select-auction-period"
                        defaultValue="1"
                    >
                        {filters.map((el,index)=>{
                            return <MenuItem key={index} value={el.value}>{el.label}</MenuItem>
                        })}
                    </Select>
                </div>
                <Grid container spacing={2}>
                    {cards.slice(0, 4).map((card,index) => {
                        return (
                            <Grid item key={index}>
                                <Card 
                                name={card.name} 
                                user={{avatarUrl: card.owner.avatar.url, verified: card.owner.confirmed}} 
                                mediaUrl={card.source.url} price={card.price} likes={card.likes} 
                                currency={card.currency} 
                                timeLeft ={new Date(card.auction_end) - Date.now()} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}