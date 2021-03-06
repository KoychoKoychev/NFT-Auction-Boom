import styles from "./ExploreFilters.module.scss";
import classNames from "classnames";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";

export default function ExploreFilters({ filters,sortValue, priceValue, onSortChange, onPriceChange, onTextFieldChange}) {

    return (
        <div className={classNames(styles['explore-filters'])}>
            <Stack direction="row" spacing={2}>
                <FormControl >
                    <InputLabel id="select_sort_label">Sort by</InputLabel>
                    <Select
                        className={classNames(styles["explore-select-sort"])}
                        labelId="select_sort_label"
                        id="select_sort"
                        label="Sort by__"
                        onChange={onSortChange}
                        value={sortValue}
                    >
                        {filters.sort.map((el, index) => {
                            return (
                                <MenuItem key={index} value={el.value}>{el.label}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <FormControl >
                    <InputLabel id="select_price_label">Price range</InputLabel>
                    <Select
                        className={classNames(styles.select_price)}
                        labelId="select_price_label"
                        id="select_price"
                        label="Price range__"
                        onChange={onPriceChange}
                        value={priceValue}
                    >
                        {filters.price.map((el, index) => {
                            return (
                                <MenuItem key={index} value={el.value}>{el.label}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <TextField
                    className={classNames(styles.text_input)}
                    onChange={onTextFieldChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Search color="primary" /></InputAdornment>
                    }}
                    variant="standard"
                />
            </Stack>
        </div>
    )
}