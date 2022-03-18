import styles from "./Trending.module.scss";
import classNames from "classnames";
import { Container, Grid, MenuItem, Select } from "@mui/material";
import Card from "../card/Card"

export default function Trending({ cards = [], filters }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container maxWidth="xl">
                <div className={classNames(styles.trendingHead)}>
                    <span className={classNames(styles.trendingTitle)}>Trending</span>
                    <Select
                        className={classNames(styles.selectMenu)}
                        id="select-trending-period"
                        defaultValue={1}
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
                                id={card.id}
                                name={card.name} 
                                likes={card.likes} 
                                user={{avatarUrl:card.owner.avatar.url, 
                                verified:card.owner.verified,
                                id:card.owner.id}} 
                                mediaUrl={card.source.url} 
                                price={card.price} 
                                currency={card.currency}
                                timeLeft ={new Date(card.auction_end) - Date.now()}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}