import styles from "./ProfileUser.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";
import Avatar from "../avatar/Avatar";


export default function ProfileUser({name, info, avatar, verified}) {
    return(
        <div className={classNames(styles["profile-user"])}>
            <Avatar size={192} url={avatar} verified={verified}/>
            <Typography className={classNames(styles.name)} variant="h3">{name}</Typography>
            <Typography className={classNames(styles.body)} variant="body1">{info}</Typography>
        </div>
    )
}