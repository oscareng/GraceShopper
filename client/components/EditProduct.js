import React from "react";
import { deleteProduct, updateProduct } from "../store/administratorReducer";
import {
  fetchSingleProduct,
  getSingleProduct,
} from "../store/singleProductReducer";
import { connect } from "react-redux";
import products from "../store/productsReducer";

export class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      gender: "",
      size: "",
      description: "",
      category: "",
      stock: "",
      imageUrl: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSingleProduct(id);
  }

  componentWillUnmount() {
    this.props.clearProduct();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.product.id) {
      this.setState({
        name: this.props.product.name || "",
        price: this.props.product.price || "",
        gender: this.props.product.gender || "",
        size: this.props.product.size || "",
        description: this.props.product.description || "",
        category: this.props.product.category || "",
        stock: this.props.product.stock || "",
        imageUrl: this.props.product.imageUrl || "",
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handlePriceChange(evt) {
    const newPrice = parseInt(evt.target.value);
    this.setState({
      [evt.target.name]: newPrice,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    console.log("mystate", this.state);
    console.log("myproduct", this.props.product);
    this.props.updateProduct({
      ...this.props.product,
      ...this.state,
    });
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

    const { handleSubmit, handleChange, handlePriceChange } = this;

    return (
      <div>
        <form id="product-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input name="name" onChange={handleChange} value={name} />

          <label htmlFor="price">Price:</label>
          <input name="price" onChange={handlePriceChange} value={price} />

          <label htmlFor="gender">Gender:</label>
          <select name="gender" onChange={handleChange} value={gender}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>

          {/* <input name="gender" onChange={handleChange} value={gender} /> */}

          <label htmlFor="size">Size:</label>
          <select name="size" value={size} onChange={handleChange}>
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
          {/* <select name="category" value={category} onChange={handleChange}>
            <option value="Shirt">Shirt</option>
            <option value="Sweater">Sweater</option>
            <option value="Hat">Hat</option>
            <option value="Blazer">Blazer</option>
            <option value="Cap">Cap</option>
          </select> */}

          <input name="category" onChange={handleChange} value={category} />

          <label htmlFor="stock">Stock:</label>
          <input name="stock" onChange={handleChange} value={stock} />

          <label htmlFor="imageUrl">Image:</label>
          {/* <input
            type="file"
            id="imageUrl"
            accept=".jpg, .jpeg, .png"
            name="imageUrl"
            onChange={handleChange}
            value={imageUrl}
          /> */}
          <input name="imageUrl" onChange={handleChange} value={imageUrl} />

          <div>
            <button type="submit">Update product</button>
          </div>
        </form>

        <form onSubmit={(ev) => ev.preventDefault()}>
          <button
            className="delete"
            onClick={() => this.props.deleteProduct(this.props.match.params.id)}
          >
            Delete
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => ({
  product,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateProduct: (product) => dispatch(updateProduct(product, history)),
  deleteProduct: (product) => dispatch(deleteProduct(product, history)),
  fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  clearProduct: () => dispatch(getSingleProduct({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
