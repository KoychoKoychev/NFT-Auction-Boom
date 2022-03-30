import { Grid, Container} from "@mui/material";
import Logo from "../logo/Logo";
import styles from "./Footer.module.scss";
import classNames from "classnames";

export default function Footer(props) {
    return (
        <Container className={classNames(styles.container)} maxWidth="xl">
            <Grid container
                className={classNames(styles.nav)}
                alignItems="center"
                justifyContent="space-around">
                <Grid item>
                    <Logo type="muted"/>
                </Grid>
                <Grid item>
                    <span className={classNames(styles.reserved)}>Bum All Rights Reserved 2021</span>
                </Grid>
                <Grid item>
                    <ul className={classNames(styles.navMenu)}>
                        <li className={classNames(styles.listItem)}><a className={classNames(styles.link)} href="/about">Privacy Policy</a></li>
                        <li className={classNames(styles.listItem)}><a className={classNames(styles.link)} href="/">Cookie Policy</a></li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    )
}