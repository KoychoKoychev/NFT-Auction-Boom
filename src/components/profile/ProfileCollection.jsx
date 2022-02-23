import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";
import { Container, Grid, Typography } from "@mui/material";
import ProfileUser from "./ProfileUser";
import ProfileCollectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";

export default function ProfileCollection({ user, filter, items }){
    return(
        <div className={classNames(styles["profile-collection"])}>
            <Container maxWidth='xl'>
                <ProfileUser name={user.name} info={user.info} avatar={user.avatar} verified={user.verified}/>
            </Container>
            <Grid className={classNames(styles.filters)} container>
                <Grid item xs='3'>
                    <Typography className={classNames(styles.title)} variant="h3">Collection</Typography>
                </Grid>
                <Grid item xs='9'>
                    <ProfileCollectionFilters filters={filter}/>
                </Grid>
            </Grid>
            <Grid container>
                {items.map((el,index)=>{
                    <Grid item xs='3' key={index}>
                        <Card name={el.name} 
                              likes={el.likes} 
                              mediaUrl={el.mediaUrl} 
                              user={el.user} 
                              price={el.price}
                              currency={el.currency} 
                              timeLeft={el.timeLeft}
                        />
                    </Grid>
                })}
            </Grid>
        </div>
    )
}
