import styles from "./Collector.module.scss";
import classNames from "classnames";
import User from "../user/User"
import { Grid } from "@mui/material";

export default function Collector({name,avatar,verified=false,type="dark",nftsCount="",number=0}) {
    return(
        <div className={classNames(styles.container,type==="light"?styles.light_wrapper:null)}>
            <Grid container
            alignItems="center"
            >
                <Grid item className={classNames(styles.col_num,type==="light"?styles.light_num:null)}>
                    {number}
                </Grid>
                <Grid item className={classNames(styles.col_info)}>
                    <User name={name} info={nftsCount} avatar={avatar} verified={verified}/>
                </Grid>
            </Grid>
        </div>
    )
}