import React, { useState, useEffect } from "react";
import BigProductCard from "./ProductCard/ProductCard";
import { Grid } from "@material-ui/core";
import AddToCart from "./AddToCart.js/AddToCart";

export default function Shop() {
  let [isProductSelected, setIsProductSelected] = useState(false);
  let [selectedProduct, setSelectedProduct] = useState("default");
  let [allProducts, setAllProducts] = useState([
    {
      product_name: "Orange",
      price: 1.99,
      description: "High Vitamin C",
      imgSrc: "orange.jpg",
    },
    {
      product_name: "Apple",
      price: 2.99,
      description: "A healthy snack",
      imgSrc: "apple.jpg",
    },
    {
      product_name: "Justin Bieber Used Tissue",
      price: 500,
      description: "Baby, baby, baby, ohhhh",
      imgSrc: "used_tissue.jpg",
    },
    {
      product_name: "Pocky",
      price: 8.99,
      description: "Stick dipped in chocolate",
      imgSrc: "pocky.jpg",
    },
    {
      product_name: "Used Toilet Paper Roll",
      price: 4.99,
      description: "Can be used as bubble tea straw",
      imgSrc: "toilet_paper.jpg",
    },
    {
      product_name: "Dictionary",
      price: 29.99,
      description: "Helps you read",
      imgSrc: "dictionary.jpg",
    },
    {
      product_name: "Yeezys",
      price: 5000,
      description: "Fair and affordable price",
      imgSrc: "yeezy.jpg",
    },
    {
      product_name: "Stick",
      price: 50,
      description: "Pocky without the chocolate",
      imgSrc: "stick.png",
    },
  ]);
  useEffect(() => {
    fetch("api/mongo/getAllProducts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data);
      });
  }, []);

  function renderProducts() {
    return allProducts.map((e) => (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <BigProductCard
          product={e}
          setIsProductSelected={setIsProductSelected}
          setSelectedProduct={setSelectedProduct}
        />
      </Grid>
    ));
  }

  function renderSelectedProduct() {
    return (
      <AddToCart
        product={
          allProducts.filter((e) => e.product_name === selectedProduct)[0]
        }
        setIsProductSelected={setIsProductSelected}
      />
    );
  }
  return isProductSelected ? (
    renderSelectedProduct()
  ) : (
    <Grid container spacing={0}>
      {renderProducts()}
    </Grid>
  );
}
