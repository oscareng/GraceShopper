import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsReducer";
import { Link } from "react-router-dom";

const AllProducts = () => {
  //this grabs the robots from the redux store
  const products = useSelector((state) => state.products);
<<<<<<< HEAD
  console.log("MY PRODUCTS:", products);
=======
>>>>>>> 2508654b722ec8fbc909de334027a79102a9882b
  //This gives up the dispatch function from redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id} className="all-products">
            <h2>{product.name}</h2>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.imageUrl}
<<<<<<< HEAD
                style={{ width: "200px", height: "200px" }}
=======
                // style={{ width: '200px', height: '200px' }}
>>>>>>> 2508654b722ec8fbc909de334027a79102a9882b
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
