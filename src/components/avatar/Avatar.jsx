import styles from "./Avatar.module.scss";
import classNames from "classnames";



export default function Avatar({ size = 90, url, verified = false }) {
    return (
        <div className={classNames(styles.avatar)}
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}>
            <img src={url} alt="Avatar image" className={classNames(styles.image)} />
            {verified ?
                <img src="/images/verified.svg" alt="verified icon" className={classNames(styles.badge)}/>
                :null
            }
        </div>
    )
}