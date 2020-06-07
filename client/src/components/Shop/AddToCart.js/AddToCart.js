import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {
  Typography,
  Button,
  Select,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../muiTheme";
import styles from "./addToCartStyles";

function AddToCart(props) {
  let { classes, product, setIsProductSelected } = props;
  let [quantity, setQuantity] = useState(1);

  function handleChange(e) {
    setQuantity(e.target.value);
  }
  return (
    <div className={classes.root}>
      <ProductCard product={product} />
      <div className={classes.field}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Quantity
          </InputLabel>
          <Select value={quantity} onChange={handleChange} label="Quantity">
            <MenuItem value={1}>{1}</MenuItem>
            <MenuItem value={2}>{2}</MenuItem>
            <MenuItem value={3}>{3}</MenuItem>
            <MenuItem value={4}>{4}</MenuItem>
            <MenuItem value={5}>{5}</MenuItem>
            <MenuItem value={6}>{6}</MenuItem>
            <MenuItem value={7}>{7}</MenuItem>
            <MenuItem value={8}>{8}</MenuItem>
            <MenuItem value={9}>{9}</MenuItem>
            <MenuItem value={10}>{10}</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Button
        className={classes.buttons}
        color={"secondary.light"}
        size="large"
        onClick={() => setIsProductSelected(false)}
      >
        Go back
      </Button>
      <Button
        className={classes.buttons}
        variant="contained"
        color={"primary"}
        size="large"
        onClick={() => console.log(quantity)}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default withStyles(styles(theme))(AddToCart);
