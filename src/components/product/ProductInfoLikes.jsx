import styles from "./ProductInfoLikes.module.scss";
import classNames from "classnames";
import { Chip } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from "millify";

export default function ProductInfoLikes({ amount = 0 }) {
    return (
        <div className={classNames(styles["product-info-likes"])}>
            <Chip
                className={classNames(styles.likes)}
                label={millify(Number(amount),{lowercase:true})}
                variant="outlined"
                clickable={true}
                icon={<FavoriteIcon className={classNames(styles.hearthIcon)} fontSize="inherit" />}
            />
        </div>
    )
}