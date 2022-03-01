import styles from "./ActivityFilters.module.scss";
import classNames from "classnames";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function ActivityFilters({filters}) {
    return(
        <div className={classNames(styles["activity-filters"])}>
            {/* <Stack direction="row" spacing={2}>
                <FormControl >
                    <InputLabel id="select_sort_label">Sort by</InputLabel>
                    <Select
                        className={classNames(styles["profile-select-sort"])}
                        labelId="select_sort_label"
                        id="select_sort"
                        label="Sort by_"
                        variant="outlined"
                        color="primary"
                    >
                        {filters.sort.map((el, index) => {
                            return (
                                <MenuItem key={index} value={el.value}>{el.label}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <FormControl >
                    <InputLabel id="select_price_label">Type</InputLabel>
                    <Select
                        className={classNames(styles.select_price)}
                        labelId="select_price_label"
                        id="select_price"
                        label="Type_"
                        variant="outlined"
                        color="primary"
                    >
                        {filters.type.map((el, index) => {
                            return (
                                <MenuItem key={index} value={el.value}>{el.label}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <TextField
                    className={classNames(styles.text_input)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Search color="primary"/></InputAdornment>
                    }}
                    variant="standard"
                />
            </Stack> */}
        </div>
    )
}