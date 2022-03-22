import styles from "./TopCollectors.module.scss";
import classNames from "classnames";
import { Grid,Container,Select,MenuItem } from "@mui/material";
import CollectorColumn from "./CollectorColumn";


export default function TopCollectors({collectors=[], filters=[] , onChange, sortValue}) {

    const chunk = require('lodash.chunk');

    collectors.map((el,index)=>el.num = index+1)

    const splitArr = chunk(collectors.slice(0,12),3)

    return (
        <div className={classNames(styles.wrapper)}>
            <Container maxWidth="xl">
                <div className={classNames(styles.topColHead)}>
                    <span className={classNames(styles.topColTitle)}>Top Collectors</span>
                    <Select
                        className={classNames(styles.selectMenu)}
                        id="select-trending-period"
                        value = {sortValue}
                        onChange = {onChange}
                    >
                        {filters.map((el,index)=>{
                            return <MenuItem key={index} value={el.value}>{el.label}</MenuItem>
                        })}
                    </Select>
                </div>
                <Grid container spacing={2}>
                    {splitArr.map((el,index) => {
                        return (
                            <Grid item key={index}>
                                <CollectorColumn key={el.id} items={el}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}