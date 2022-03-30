import styles from "./ProductInfoCreator.module.scss";
import classNames from "classnames";
import User from "../user/User";

export default function ProductInfoCreator({name="",avatar="",verified=false, id}) {
    return(
        <div className={classNames(styles["product-info-creator"])}>
            <p className={classNames(styles.title)}>CREATOR</p>
            <div className={classNames(styles["user-container"])}>
                <User name={name} avatar={avatar} verified={verified} id= {id} size="39"/>
            </div>
        </div>
    );
}