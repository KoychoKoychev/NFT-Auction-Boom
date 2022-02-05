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
                        <ImageListItem className={classNames(styles.img_item)} key={index} cols={el.cols || 1} rows={el.rows || 1}>
                            <img src={el.image} alt={el.title} onClick={()=>router.push(el.href)}/>
                        </ImageListItem>
                    )
                })}
            </ImageList>
        </Container>
    )
}