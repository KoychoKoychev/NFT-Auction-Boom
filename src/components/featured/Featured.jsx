import { Container, ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss";
import classNames from "classnames";
import { useRouter } from "next/dist/client/router";

export default function Featured({items=[]}) {

    const router = useRouter();

    return(
        <Container className={classNames(styles.container)} maxWidth="xl">
            <ImageList cols={6} rows={2} className={classNames(styles.img_list)} gap={20} rowHeight={230}>
                {items.map((el,index)=>{
                    return(
                        <ImageListItem className={classNames(styles.img_item)} key={index} cols={index===0?3:1} rows={index===0?2:1 || 1}>
                            <img src={el.source.url} alt={el.name} onClick={()=>router.push(`/product/${el.id}`)}/>
                        </ImageListItem>
                    )
                })}
            </ImageList>
        </Container>
    )
}