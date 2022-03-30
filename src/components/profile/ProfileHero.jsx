import styles from "./ProfileHero.module.scss";
import classNames from "classnames";

export default function ProfileHero({ image }) {
    return (
        <div className={classNames(styles["profile-hero"])}>
            <img src={image} alt="background" className={classNames(styles.image)} />
        </div>
    )
}