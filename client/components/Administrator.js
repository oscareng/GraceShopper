import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CreateNewProduct from "./CreateNewProduct";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsReducer";
import useAuth from "../hooks/useAuth";
import UserInformation from "./UserInformation";

function Administrator() {
  const { user } = useAuth();
  const { isAdmin } = user;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isAdmin) {
    return (
      <div className="administrator">
        <div>
          <div>
            <h2 className="administrator_title"> Add a new product</h2>
            <CreateNewProduct />
          </div>

          <div>
            <h2 className="administrator_title">
              List of products {`(${products.length})`}
            </h2>
            <div className="all_products">
              {products.map((product) => {
                return (
                  <div key={product.id}>
                    <div className="administrator_list__box">
                      <div className="administrator_product_title_box">
                        <h2 className="all_products__name">
                          Product: {product.name}
                        </h2>
                      </div>
                      <img
                        className="all_products__image"
                        src={`../images/${product.imageUrl} `}
                      />
                      <h2 className="all_products__name">
                        Description: {product.description}
                      </h2>
                      <h2 className="all_products__name ">
                        Gender: {product.gender}
                      </h2>
                      <h2 className="all_products__name ">
                        Size: {product.size}
                      </h2>
                      <h2 className="all_products__name ">
                        Category: {product.category}
                      </h2>
                      <h2 className="all_products__name ">
                        Stock: {product.stock}
                      </h2>
                      <h2 className="all_products__name ">
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
          </div>

          <h2 className="administrator_title"> Users information</h2>
          <UserInformation />
        </div>
      </div>
    );
  } else {
    return (
      <h3>
        You are unable to see this page because you're not an administrator user
      </h3>
    );
  }
}

export default Administrator;
