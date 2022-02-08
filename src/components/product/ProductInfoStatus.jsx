import styles from "./ProductInfoStatus.module.scss";
import classNames from "classnames";
import { Chip } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

export default function ProductInfoStatus(props) {
    return (
        <div className={classNames(styles["product-info-status"])}>
            <Chip 
            className={classNames(styles.status)}
            label="LIVE"
            icon={<CircleIcon className={classNames(styles.circleIcon)} fontSize="inherit" />}
            />
        </div>
    )
}