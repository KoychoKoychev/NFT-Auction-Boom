import styles from "./Collector.module.scss";
import classNames from "classnames";
import User from "../user/User"
import { Grid } from "@mui/material";

export default function Collector({name,avatar,verified=false,type="dark",nftsCount="",number=0}) {
    return(
        <div className={classNames(type==="light"?styles.container_light:styles.container)}>
            <Grid container
            alignItems="center"
            >
                <Grid item className={classNames(type==="light"?styles.col_num_light:styles.col_num)}>
                    {number}
                </Grid>
                <Grid item className={classNames(styles.col_info)}>
                    <User name={name} info={nftsCount} avatar={avatar} verified={verified}/>
                </Grid>
            </Grid>
        </div>
    )
}