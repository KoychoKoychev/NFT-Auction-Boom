import styles from "./Avatar.module.scss";
import classNames from "classnames";
import { ClassNames } from "@emotion/react";
import { height } from "@mui/material/node_modules/@mui/system";


export default function Avatar({size=90,url,verified=false}) {
    return(
        <div className={classNames(styles.avatar)}
        style={{
            width:`${size}px`,
            height:`${size}px`,
        }}>
            <img src={url} alt="Avatar image" className={classNames(styles.image)} />
            <img src="images/verified.svg" alt="verified icon" className={classNames(styles.badge)}
            style={{
                display:verified?"block":"none"
            }}/>
        </div>
    )
}