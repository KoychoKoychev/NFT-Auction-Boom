import styles from "./ActivityListItem.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";
import { formatDistance, parseISO } from "date-fns";

export default function ActivityListItem({user,created_at,nft,type='like'}) {
    return(
        <div className={classNames(styles["activity-listItem"])}>
            <Avatar size={57} url={user.avatar.url} verified={user.verified}/>
            <div className={classNames(styles["activity-info-wrapper"])}>
                <p className={classNames(styles["activity-action"])}>
                    <span className={classNames(styles.user)}>{user.name}</span>
                    {type=="like"?<span> liked </span>:<span> bought </span>}
                    <Link className={classNames(styles.link)} href={`/product/${361}`}>{`\"${nft.name}\"`}</Link>
                    <span> by </span>
                    <Link className={classNames(styles.link)} href={`/profile/${401}`}>{nft.owner.username}</Link>
                </p>
                <p className={classNames(styles["activity-time"])}> 
                {formatDistance(new Date(parseISO(created_at)), Date.now(), { addSuffix: true })}
                </p>
            </div>
        </div>
    )
}