import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProductReducer';
import Toastify from 'toastify-js';
import { useParams } from 'react-router';
import {
  fetchAddToBasket,
  fetchGetBasketItem,
  fetchIncreaseItemQuantity,
} from '../store/cartReducer';

const SingleProduct = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);
  console.log('PRODUCT', product);

  function handleAdd(product) {
    dispatch(fetchAddToBasket(product));
    Toastify({
      text: 'Item added to Cart',
      duration: 1500,
      gravity: 'top',
      position: 'right',
      stopOnFocus: true,
      style: {
        background: 'black',
      },
    }).showToast();
  }

  return (
    <div className="single_product" key={product.id}>
      <img
        className="all_products__image"
        src={`../images/${product.imageUrl}`}
        style={{ width: '600px', height: '400px' }}
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
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
