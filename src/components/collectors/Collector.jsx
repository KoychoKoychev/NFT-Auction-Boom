import styles from "./Collector.module.scss";
import classNames from "classnames";
import User from "../user/User"
import { Grid } from "@mui/material";

export default function Collector({name,avatar,verified=false,type,nftsCount="",number=0,link}) {
    return(
        <div className={classNames(styles.container,type==="light"?styles.light:null)}>
            <Grid container
            alignItems="center"
            >
                <Grid item className={classNames(styles.col_num,type==="light"?styles.light:null)}>
                    {number}
                </Grid>
                <Grid item className={classNames(styles.col_info)}>
                    <a href={"/profile/"+link}><User name={name} info={nftsCount} avatar={avatar.url} verified={verified}/></a>
                </Grid>
            </Grid>
        </div>
    )
}