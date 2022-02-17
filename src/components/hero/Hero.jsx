import styles from "./Hero.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function Hero({text=""}) {
    return(
        <div className={classNames(styles.hero)}>
            <Typography variant="h1" component="h2" className={classNames(styles.text)}>{text}</Typography>
        </div>
    )
}