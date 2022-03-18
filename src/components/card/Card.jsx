import styles from "./Card.module.scss";
import classNames from "classnames";
import { Card as CardComp, Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";
import Countdown from "react-countdown";

export default function Card({ name = "", likes = 0, mediaUrl = "", user = { avatarUrl: "", verified: false, id:'' }, price = "", currency = "", timeLeft = 0, id='' }) {

    const [cardState, setCardState] = useState(false);

    return (
        <CardComp className={classNames(styles.card, cardState ? styles.live : null)}>
            <a href={'/profile/'+user.id}>
                <Avatar size="33" url={user.avatarUrl} verified={user.verified} />
            </a>
            <div className={classNames(styles.media)}>
                <img src={mediaUrl} alt="Card Image" />
                <div className={classNames(styles.badge)} style={{ display: cardState ? "flex" : "none" }}>
                    <CircleIcon className={classNames(styles.circleIcon)} fontSize="inherit" />
                    <span>LIVE</span>
                </div>
                <Countdown
                    daysInHours={true}
                    className={classNames(styles.countdown, cardState ? null : styles.hidden)}
                    date={Date.now() + timeLeft}
                    onStart={() => timeLeft > 0 ? setCardState(true) : null}
                    onComplete={() => setCardState(false)} />
            </div>
            <div className={classNames(styles.cardData)}>
                <div className={classNames(styles.cardInfo)}>
                    <a href={"/product/"+id}><p className={classNames(styles.title)}>{name}</p></a>
                    <p className={classNames(styles.price)}>~{price} {currency}</p>
                </div>
                <Chip
                    className={classNames(styles.likes)}
                    label={millify(Number(likes))}
                    variant="outlined"
                    clickable={true}
                    icon={<FavoriteIcon className={classNames(styles.hearthIcon)} fontSize="inherit" />}
                />
            </div>
        </CardComp>
    )
}