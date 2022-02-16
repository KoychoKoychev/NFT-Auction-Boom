import styles from "./Trending.module.scss";
import classNames from "classnames";
import { Container, Grid, MenuItem, Select } from "@mui/material";
import Card from "../card/Card"

export default function Trending({ cards = [] }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container maxWidth="xl">
                <div className={classNames(styles.trendingHead)}>
                    <span className={classNames(styles.trendingTitle)}>Trending</span>
                    <Select
                        className={classNames(styles.selectMenu)}
                        id="select-trending-period"
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
                                <Card name={card.name} likes={card.likes} user={{avatarUrl:card.owner.avatar.url, verified:card.owner.verified}} mediaUrl={card.source.url} price={card.price} currency={card.currency} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}