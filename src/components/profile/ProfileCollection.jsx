import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";
import { Container, Grid, Typography } from "@mui/material";
import ProfileUser from "./ProfileUser";
import ProfileCollectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";

export default function ProfileCollection({ user, filters, items, sortValue, priceValue, onSortChange, onPriceChange, onTextFieldChange }) {
    return (
        <div className={classNames(styles["profile-collection"])}>
            <Container maxWidth='xl' className={classNames(styles.wrapper)}>
                <Grid className={classNames(styles.filters)} container>
                    <Grid item xs='3'>
                        <Typography className={classNames(styles.title)} variant="h3">Collection</Typography>
                    </Grid>
                    <Grid item xs='9' className={classNames(styles.sort)}>
                        <ProfileCollectionFilters 
                        filters={filters}
                        sortValue={sortValue}
                        priceValue={priceValue}
                        onSortChange={onSortChange}
                        onPriceChange={onPriceChange}
                        onTextFieldChange={onTextFieldChange} />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={2}>
                    {items.map((el, index) => {
                        return (
                            <Grid item xs='3' key={index} className={classNames(styles.cards)}>
                                <Card name={el.name}
                                    likes={el.likes}
                                    mediaUrl={el.source.url}
                                    user={{ verified: user.verified, avatarUrl: user.avatar, id: user.id }}
                                    price={el.price}
                                    currency={el.currency}
                                    id={el.id}
                                    timeLeft={new Date(el.auction_end) - Date.now()}
                                />
                            </Grid>)
                    })}
                </Grid>
            </Container>
        </div>
    )
}
