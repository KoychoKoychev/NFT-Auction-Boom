import styles from "./Card.module.scss";
import classNames from "classnames";
import { Card as CardComp, Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Card(props) {
    const {name="",likes=0,mediaUrl="",user={avatar:{url:""},verified:fales},price="",currency=""} = props

    return(
        <CardComp className={classNames(styles.card)}>
            <Avatar size="33" url={user.avatar.url} verified={user.verified}/>
            <div className={classNames(styles.media)}>
                <img src={mediaUrl} alt="Card Image"/>
            </div>
            <div className={classNames(styles.cardData)}>
                <div className={classNames(styles.cardInfo)}>
                    <p className={classNames(styles.title)}>{name}</p>
                    <p className={classNames(styles.price)}>{price} {currency}</p>
                </div>
                <Chip 
                className={classNames(styles.likes)} 
                label={millify(Number(likes),{lowercase: true})}
                variant="outlined"
                clickable="true"
                icon={<FavoriteIcon className={classNames(styles.hearthIcon)} fontSize="inherit" color="primary"/>}
                />
            </div>
        </CardComp>
    )
}