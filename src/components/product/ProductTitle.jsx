import styles from "./ProductTitle.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function ProductTitle({ text = "" }) {
    return (
        <div className={classNames(styles["product-info-title"])}>
            <Typography className={classNames(styles.title)} variant="h1">{text}</Typography>
        </div>
    )
}