import React from "react";
import { FetchAllProducts } from "@/services/api-service";
import { ApiResponse, Product } from "@/types";
import ProductItem from "./ProductItem";
import { Grid } from "@mui/material";

const Products = async () => {
  const response: ApiResponse = await FetchAllProducts.getAllProducts();
  const products: Product[] = response.results;

  return (
     <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
