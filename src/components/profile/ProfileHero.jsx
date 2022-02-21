import styles from "./ProfileHero.module.scss";
import classNames from "classnames";

export default function ProfileHero({ image }) {
    return (
        <div className={classNames(styles["product-actions"])}>
            <img src={image} alt="background" className={classNames(styles.image)} />
        </div>
    )
}