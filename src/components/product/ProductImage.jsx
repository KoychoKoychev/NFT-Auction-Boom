import styles from "./ProductImage.module.scss";
import classNames from "classnames";

export default function ProductImage({URL=""}) {
    return(
        <div className={classNames(styles["product-image"])}>
            <img src={URL} alt="nft_alt_view" className={classNames(styles.image)}/>
        </div>
    )
}