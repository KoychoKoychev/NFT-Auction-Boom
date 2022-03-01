import styles from "./ActivityList.module.scss";
import classNames from "classnames";
import { Stack } from "@mui/material";
import ActivityListItem from "./ActivityListItem";

export default function ActivityList({items}) {
    return(
        <div className={classNames(styles["activity-list"])}>
            <Stack direction='column' spacing={2} alignItems='center'>
                {items.map((el,index)=>{
                    return <ActivityListItem 
                    key={index}
                    user={el.user} 
                    created_at={el.created_at} 
                    nft={el.nft} 
                    type={el.type}
                    />
                })}
            </Stack>
        </div>
    )
}