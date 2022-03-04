import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProductReducer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { fetchAddToBasket } from '../store/cartReducer';

const SingleProduct = () => {
  const product = useSelector((state) => state.product);
  console.log('My product:', product);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  function handleAdd(product) {
    dispatch(fetchAddToBasket(product));
  }
  return (
    <div className="single_product" key={product.id}>
      <img
        src={`../${product.imageUrl}`}
        style={{ width: '400px', height: '400px' }}
      />
      <h1 className="single_products__name">{product.name}</h1>
      <h2>Size: {product.size}</h2>
      <h2>Price: ${product.price}.00</h2>
      <h2>Description: {product.description}</h2>
      <button
        className="single_products__button"
        onClick={() => handleAdd(product)}
        type="button"
      >
        Add to Cart!
      </button>
    </div>
  );
};

export default SingleProduct;
