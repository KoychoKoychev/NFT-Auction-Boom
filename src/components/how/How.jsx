import { Grid, Button } from "@mui/material";
import styles from "./How.module.scss";
import classNames from "classnames";
import Step from "./Step";


export default function How({description="",title="",items=[],link="#"}) {
    return(
        <div className={classNames(styles.wrapper)}>
            <div className={classNames(styles.how_info)}>
                <h1 className={classNames(styles.how_title)}>{title}</h1>
                <p className={classNames(styles.how_descr)}>{description}</p>
                <Button variant="outlined" href={link} className={classNames(styles.how_button)}>LEARN MORE</Button>
            </div>
            <Grid container spacing={2.5}>
                {items.slice(0,3).map((el,index)=>{
                    return(
                        <Grid item key={index}>
                            <Step number={index+1} title={el.title} description={el.description}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}