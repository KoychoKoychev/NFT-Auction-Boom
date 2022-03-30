import { Grid } from "@mui/material";
import styles from "./Step.module.scss";
import classNames from "classnames";

export default function Step({number=0,title="",description=""}) {
    return(
        <div className={classNames(styles.wrapper)}>
            <Grid container
            className={classNames(styles.step_grid)}
            alignItems="center"
            >
                <Grid item className={classNames(styles.step_num)}>
                    {number}
                </Grid>
                <Grid item className={classNames(styles.step_info)}>
                    <p className={classNames(styles.step_title)}>{title}</p>
                    <p className={classNames(styles.step_descr)}>{description}</p>
                </Grid>
            </Grid>
        </div>
    )
}