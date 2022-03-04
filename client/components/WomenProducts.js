import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsReducer";
import { Link } from "react-router-dom";

const WomenProducts = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="all_products">
      {products.map((product) => {
        if (product.gender === "Female") {
          return (
            <div key={product.id}>
              <div className="all_products__box">
                <h2 className="all_products__name">{product.name}</h2>
                <img className="all_products__image" src={product.imageUrl} />
                <h2 className="all_products__price">${product.price}.00</h2>
                <Link to={`/products/${product.id}`}>
                  <button className="all_products__button">
                    See product detail
                  </button>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default WomenProducts;
