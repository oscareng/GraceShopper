import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../store/singleProductReducer";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useParams } from "react-router";
import useCart from "../hooks/useCart";
import { fetchAddToBasket } from "../store/cartReducer";
const SingleProduct = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { addToCart } = useCart();
  console.log(product);
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  return (
    <div className="single_product" key={product.id}>
      <img
        className="all_products__image"
        src={`../images/${product.imageUrl}`}
        style={{ width: "600px", height: "400px" }}
      />
      <h1 className="single_products__name">{product.name}</h1>
      <h2>Size: {product.size}</h2>
      <h2>Price: ${product.price}.00</h2>
      <h2>Description: {product.description}</h2>
      <Button
        onClick={() => addToCart(product)}
        size="medium"
        variant="contained"
        style={{ backgroundColor: "grey" }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default SingleProduct;
