import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import { useState } from "react";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {

    const endDate = new Date(timeEnd)
    const [liveState, setLiveState] = useState((timeEnd && endDate>Date.now())?true:false)

    if(liveState){

        return (
            <div className={classNames(styles["product-info-timer"], liveState ? null : styles.hidden)}>
            <p className={classNames(styles.title)}>ENDS IN</p>
            <Countdown
                daysInHours={true}
                className={classNames(styles.timer)}
                date={endDate}
                onStart={() => timeEnd ? setLiveState(true) : null}
                onComplete={() => {
                    setLiveState(false);
                    onTimeEnd?onTimeEnd():null;
                }} />
        </div>
    )
    }else{
        return <div></div>
    }
}