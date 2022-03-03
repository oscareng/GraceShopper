import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiOwl } from "react-icons/gi";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          {/* <Link to="/home">Home</Link> */}
          <Link to="/womens">Womens</Link>
          <Link to="/mens">Mens</Link>
          <Link to="/products">GRACE NYC</Link>
          <Link to="/checkout">
            <AiOutlineShoppingCart id="logo" />
          </Link>
          <Link to="#" onClick={handleClick}>
            Logout
          </Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/home">Home</Link> */}
          <Link to="/womens">Womens</Link>
          <Link to="/mens">Mens</Link>
          <Link to="/products">GRACE NYC</Link>
          <Link to="/login">
            <GiOwl id="user-logo" />
          </Link>
          <Link to="/checkout">
            <AiOutlineShoppingCart id="logo" />
          </Link>
          {/* <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link> */}
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
