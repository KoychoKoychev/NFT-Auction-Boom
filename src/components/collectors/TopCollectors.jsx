import styles from "./TopCollectors.module.scss";
import classNames from "classnames";
import { Grid,Container,Select,MenuItem } from "@mui/material";
import CollectorColumn from "./CollectorColumn";


export default function TopCollectors({collectors=[]}) {

    const chunk = require('lodash.chunk');

    collectors.map((el,index)=>el.id = index+1)

    const splitArr = chunk(collectors.slice(0,12),3)

    return (
        <div className={classNames(styles.wrapper)}>
            <Container maxWidth="xl">
                <div className={classNames(styles.topColHead)}>
                    <span className={classNames(styles.topColTitle)}>Top Collectors</span>
                    <Select
                        className={classNames(styles.selectMenu)}
                        id="select-trending-period"
                        defaultValue="This Week"
                    >
                        <MenuItem value="Today">Today</MenuItem>
                        <MenuItem value="This Week">This Week</MenuItem>
                        <MenuItem value="This Month">This Month</MenuItem>
                        <MenuItem value="This Year">This Year</MenuItem>
                        <MenuItem value="All Time">All Time</MenuItem>
                    </Select>
                </div>
                <Grid container spacing={2}>
                    {splitArr.map((el) => {
                        return (
                            <Grid item >
                                <CollectorColumn items={el}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}