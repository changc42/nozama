import React from "react";
import { Typography, CardActionArea, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../muiTheme";
import styles from "./productCardStyling";

function ProductCard(props) {
  let { classes, product, setIsProductSelected, setSelectedProduct } = props;
  let { product_name, description, price, imgSrc } = product;

  function handleClick() {
    setIsProductSelected(true);
    setSelectedProduct(product_name);
  }
  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea onClick={() => handleClick()}>
        <img src={imgSrc} />
        <Typography variant="h5">{product_name}</Typography>
        <Typography
          variant="subtitle"
          style={{
            color: "gray",
            display: "block",
            fontFamily: "Officina Sans Bold",
          }}
        >
          {description}
        </Typography>
        <Typography
          variant="subtitle"
          style={{ color: "#bf3b32", fontFamily: "Officina Sans Bold" }}
        >
          ${price}
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles(theme))(ProductCard);
