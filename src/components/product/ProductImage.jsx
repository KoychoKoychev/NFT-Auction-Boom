import styles from "./ProductImage.module.scss";
import classNames from "classnames";

export default function ProductImage({url=""}) {
    return(
        <div className={classNames(styles["product-image"])}>
            <img src={url} alt="nft_alt_view" className={classNames(styles.image)}/>
        </div>
    )
}