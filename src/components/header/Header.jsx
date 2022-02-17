import { Grid, Container, Button } from "@mui/material";
import Logo from "../logo/Logo";
import styles from "./Header.module.scss";
import classNames from "classnames";
import SearchIcon from '@mui/icons-material/Search';


export default function Header(props) {
    return (
        <div className={classNames(styles.container)}>
            <Grid
                container
                className={classNames(styles.nav)}
                alignItems="center"
                justifyContent="space-around">
                <Grid item>
                    <Logo />
                </Grid>
                <Grid item>
                    <div className={classNames(styles.searchBar)}>
                        <SearchIcon className={classNames(styles.searchIcon)} />
                        <input className={classNames(styles.searchField)} placeholder="Find items, users and activities" />
                    </div>
                </Grid>
                <Grid item>
                    <ul className={classNames(styles.navMenu)}>
                        <li className={classNames(styles.listItem)}><a className={classNames(styles.link)} href="/">Home</a></li>
                        <li className={classNames(styles.listItem)}><a className={classNames(styles.link)} href="/about">Activity</a></li>
                        <li className={classNames(styles.listItem, styles.listButton)}><Button variant="contained" href="/">EXPLORE</Button></li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}