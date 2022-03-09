import React from 'react';
import { createNewProduct } from '../store/administratorReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CreateNewProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      gender: '',
      size: '',
      description: '',
      category: '',
      stock: '',
      imageUrl: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createNewProduct({ ...this.state });
  }

  render() {
    const {
      name,
      price,
      gender,
      size,
      description,
      category,
      stock,
      imageUrl,
    } = this.state;
    const { handleSubmit, handleChange, fileUpload } = this;

    return (
      <div id="container">
        <form id="product-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input name="name" onChange={handleChange} value={name} />

          <label htmlFor="price">Price:</label>
          <input name="price" onChange={handleChange} value={price} />

          <label htmlFor="gender">Gender:</label>
          <select name="gender" value={gender} onChange={handleChange}>
            <option value="Choose">Choose</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          {/* <input name="gender" onChange={handleChange} value={gender} /> */}

          <label htmlFor="size">Size:</label>
          <select name="size" value={size} onChange={handleChange}>
            <option value="Choose">Choose</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          {/* <input name="size" onChange={handleChange} value={size} /> */}

          <label htmlFor="description">Description:</label>
          <input
            name="description"
            onChange={handleChange}
            value={description}
          />

          <label htmlFor="category">Category:</label>
          <select name="category" value={category} onChange={handleChange}>
            <option value="Choose">Choose</option>
            <option value="Shirt">Shirt</option>
            <option value="Sweater">Sweater</option>
            <option value="Hat">Hat</option>
            <option value="Blazer">Blazer</option>
            <option value="Cap">Cap</option>
          </select>
          {/* <input name="category" onChange={handleChange} value={category} /> */}

          <label htmlFor="stock">Stock:</label>
          <input name="stock" onChange={handleChange} value={stock} />

          <label htmlFor="imageUrl">Image:</label>
          <input
            type="file"
            id="imageUrl"
            accept=".jpg, .jpeg, .png"
            name="imageUrl"
            onChange={handleChange}
            value={imageUrl}
          />
          {/* <input name="imageUrl" onChange={handleChange} value={imageUrl} /> */}

          <div>
            <button type="submit">Add a new product</button>
          </div>
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createNewProduct: (product) => dispatch(createNewProduct(product, history)),
});

export default connect(null, mapDispatchToProps)(CreateNewProduct);
