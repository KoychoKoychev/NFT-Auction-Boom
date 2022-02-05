import styles from "./Collector.module.scss";
import classNames from "classnames";
import User from "../user/User"
import { Grid } from "@mui/material";

export default function Collector({name,avatar,verified=false,type="darker",nftsCount="",number=0}) {
    return(
        <div className={classNames(styles.container,type==="lighter"?styles.light:styles.dark)}>
            <Grid container
            alignItems="center"
            >
                <Grid item className={classNames(styles.col_num,type==="lighter"?styles.light:styles.dark)}>
                    {number}
                </Grid>
                <Grid item className={classNames(styles.col_info)}>
                    <User name={name} info={nftsCount} avatar={avatar} verified={verified}/>
                </Grid>
            </Grid>
        </div>
    )
}