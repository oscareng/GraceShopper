import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CreateNewProduct from "./CreateNewProduct";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsReducer";
import UserInformation from "../components/UserInformation";

function Administrator() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {/* {user.isAdmin! ? (
<h3>You're not an administrator</h3>
    ):( */}
      <div className="administrator_box">
        <h2> Add a new product</h2>
        <CreateNewProduct />

        <h2> List of products </h2>
        <div className="all_products">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <div className="all_products__box">
                  <h2 className="all_products__name">
                    Product: {product.name}
                  </h2>
                  <img
                    className="all_products__image"
                    src={`../images/${product.imageUrl} `}
                  />
                  <h2 className="all_products__price">
                    Description: {product.description}
                  </h2>
                  <h2 className="all_products__price">
                    Gender: {product.gender}
                  </h2>
                  <h2 className="all_products__price">Size: {product.size}</h2>
                  <h2 className="all_products__price">
                    Category: {product.category}
                  </h2>
                  <h2 className="all_products__price">
                    Stock: {product.stock}
                  </h2>
                  <h2 className="all_products__price">
                    Price: ${product.price}.00
                  </h2>
                  <Link to={`/editproduct/${product.id}`}>
                    <button className="all_products__button">
                      Edit product
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <h2> Users information</h2>
        {/* <UserInformation /> */}
      </div>
    </div>
  );
}

export default Administrator;
