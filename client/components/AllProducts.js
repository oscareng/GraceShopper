import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productsReducer';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  //this grabs the robots from the redux store
  const products = useSelector((state) => state.products);
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
                // style={{ width: '200px', height: '200px' }}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
