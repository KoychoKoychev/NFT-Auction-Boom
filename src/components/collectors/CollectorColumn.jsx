import styles from "./CollectorColumn.module.scss";
import classNames from "classnames";
import Collector from "./Collector";

export default function CollectorColumn({items=[]}) {
    return(
        <div className={classNames(styles.wrapper)}>
            {items.map((el,index)=>{
                return(
                    <Collector
                    key={el.id} 
                    number={el.id} 
                    name={el.username} 
                    nftsCount={el.nfts.length} 
                    avatar={el.avatar}
                    verified={el.verified}
                    type={index===1 ? "light":"dark"}/>
                )
            })}
        </div>
    )
}