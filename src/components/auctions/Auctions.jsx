import styles from "./Auctions.module.scss";
import classNames from "classnames";
import { Container, Grid, MenuItem, Select } from "@mui/material";
import Card from "../card/Card"

export default function Auctions({ cards = [] }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container maxWidth="xl">
                <div className={classNames(styles.auctionHead)}>
                    <span className={classNames(styles.auctionTitle)}>🔥 Live Auctions</span>
                    <Select
                        className={classNames(styles.selectMenu)}
                        id="select-auction-period"
                        defaultValue="This Week"
                    >
                        <MenuItem value="Today">Today</MenuItem>
                        <MenuItem value="This Week">This Week</MenuItem>
                        <MenuItem value="This Month">This Month</MenuItem>
                        <MenuItem value="This Year">This Year</MenuItem>
                        <MenuItem value="All Time">All Time</MenuItem>
                    </Select>
                </div>
                <Grid container spacing={2}>
                    {cards.slice(0, 4).map((card,index) => {
                        return (
                            <Grid item key={index}>
                                <Card name={card.name} user={{avatarUrl: card.owner.avatar.url, verified: card.owner.confirmed}} mediaUrl={card.source.url} price={card.price} likes={card.likes} currency={card.currency} timeLeft={card.timeLeft} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}