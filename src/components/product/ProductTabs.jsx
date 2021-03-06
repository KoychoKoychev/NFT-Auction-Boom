import styles from "./ProductTabs.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Table, TableCell, TableRow } from "@mui/material";
import User from "../user/User";
import { formatDistance, parseISO } from "date-fns";

export default function ProductTabs({ text, bids }) {

    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classNames(styles["product-tabs"])}>
            <TabContext value={value}>
                <div className={classNames(styles["product-tabs-border"])}>
                    <TabList onChange={handleChange} aria-label="product tabs">
                        <Tab label="Details" value="1" className={classNames(styles["tab-details"])} />
                        <Tab label="Bids" value="2" className={classNames(styles["tab-bids"])} />
                    </TabList>
                </div>
                <TabPanel value="1" className={classNames(styles["tab-details-text"])}>{text}</TabPanel>
                <TabPanel value="2" className={classNames(styles["tab-bids-table"])}>
                    <Table aria-label="bids table">
                        {bids.map((bid, i) => {
                            return (
                                <TableRow key={i} className={classNames(styles[`table-row-${i}`])}>
                                    <TableCell className={classNames(styles[`table-cell-1`])}>
                                        <User name={bid.user.name} avatar={bid.user.avatar} size="34" verified={bid.user.verified} id={bid.user.id} />
                                    </TableCell>
                                    <TableCell className={classNames(styles[`table-cell-2`])}>{bid.amount} ETH</TableCell>
                                    <TableCell className={classNames(styles[`table-cell-3`])}>{formatDistance(new Date(parseISO(bid.date)), Date.now(), { addSuffix: true })}</TableCell>
                                </TableRow>
                            )
                        })}
                    </Table>
                </TabPanel>
            </TabContext>
        </div>
    )
}