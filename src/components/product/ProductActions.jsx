import styles from "./ProductActions.module.scss";
import classNames from "classnames";
import { Button, Grid } from "@mui/material";

export default function ProductActions({ isLive, currency, buyAmount, bidAmount, onBuy, onBid }) {
    return (
        <div className={classNames(styles["product-actions"])}>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Button 
                    onClick={onBuy}
                    variant="contained" 
                    disabled={!isLive}
                    className={classNames(styles["buy-button"], styles.button)}>BUY FOR {buyAmount} {currency}</Button>
                </Grid>
                <Grid item xs={5}>
                    <Button 
                    onClick={onBid}
                    variant="outlined"
                    disabled={!isLive}
                    className={classNames(styles["bid-button"], styles.button)}>PLACE BID FOR {bidAmount} {currency}</Button>
                </Grid>
            </Grid>
        </div>
    )
}