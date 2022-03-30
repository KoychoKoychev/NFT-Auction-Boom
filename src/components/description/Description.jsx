import styles from "./Description.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function Description({ text, image }) {
    return (
        <div className={classNames(styles.description)}>
            <Typography variant="body1" className={classNames(styles.text)}>{text}</Typography>
            <div className={classNames(styles.img_wrapper)}>
                <img src={image} alt="description" className={classNames(styles.image)}/>
            </div>
        </div>
    )
}