import Avatar from "../avatar/Avatar";
import styles from "./User.module.scss";
import classNames from "classnames";


export default function User({ name = "", info = "", avatar = "", size = 55, verified = false, id }) {
    return (
        <div className={classNames(styles.user)}>
            <Avatar className={classNames(styles.avatar)} size={size} url={avatar} verified={verified} />
            <div className={classNames(styles.inline)}>
            <a href={"/profile/" + id}>
                <span className={classNames(styles.name)}>{name}</span>
                <span className={classNames(styles.info)}>{info?("Items " + info):null}</span>
            </a>
            </div>
        </div>
    )
}