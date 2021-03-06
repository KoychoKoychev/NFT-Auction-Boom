import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import { Grid, Stack } from "@mui/material";

export default function ProductInfo({ title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive }) {

    return (
        <div className={classNames(styles["product-info"])}>
            <div className={classNames(styles.product_title)}>
                <ProductInfoTitle text={title} />
            </div>
            <div className={classNames(styles.product_stats)}>
                <ProductInfoPrice amount={price} currency={currency} className={classNames(styles.price)} />
                <Stack direction="row" spacing={1} className={classNames(styles.stats)}>
                    {isLive ? <ProductInfoStatus /> : null}
                    <ProductInfoLikes amount={likes} />
                </Stack>
            </div>
            <Grid container spacing={2} alignItems="flex-end" className={classNames(styles.product_grid)}>
                <Grid item xs={7}>
                    <ProductInfoCreator name={creator.name} avatar={creator.avatar} verified={creator.verified} id={creator.id} />
                </Grid>
                <Grid item xs={5}>
                    <ProductInfoTimer onTimeEnd={onTimeEnd} timeEnd={timeEnd} />
                </Grid>
            </Grid>
        </div>
    );
}