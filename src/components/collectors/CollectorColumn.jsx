import styles from "./CollectorColumn.module.scss";
import classNames from "classnames";
import Collector from "./Collector";

export default function CollectorColumns({items=[]}) {
    return(
        <div className={classNames(styles.wrapper)}>
            {items.map((el,index)=>{
                return(
                    <Collector
                    key={el.id} 
                    number={el.id} 
                    name={el.name} 
                    nftsCount={el.nftsCount} 
                    avatar={el.avatar}
                    verified={el.verified}
                    type={index===1 ? "light":"dark"}/>
                )
            })}
        </div>
    )
}