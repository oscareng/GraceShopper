import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiOwl } from "react-icons/gi";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => {
  if (isLoggedIn) {
    if (isAdmin) {
      return (
        <div>
          {/* The navbar will show these links after you log in */}
          {/* <Link to="/home">Home</Link> */}
          <Link to="/womens">Women</Link>
          <Link to="/mens">Men</Link>
          <Link to="/">
            GRACE
            <GiOwl id="user-logo" />
            NYC
          </Link>
          <Link to="#" onClick={handleClick}>
            Logout
          </Link>
          <Link to="/checkout">
            <AiOutlineShoppingCart id="logo" />
          </Link>
          <Link>Admin</Link>
        </div>
      );
    } else {
      return (
        <div>
          {/* The navbar will show these links after you log in */}
          {/* <Link to="/home">Home</Link> */}
          <Link to="/womens">Women</Link>
          <Link to="/mens">Men</Link>
          <Link to="/">
            GRACE
            <GiOwl id="user-logo" />
            NYC
          </Link>
          <Link to="#" onClick={handleClick}>
            Logout
          </Link>
          <Link to="/checkout">
            <AiOutlineShoppingCart id="logo" />
          </Link>
        </div>
      );
    }
  } else {
    return (
      <div>
        {/* The navbar will show these links before you log in */}
        {/* <Link to="/home">Home</Link> */}
        <Link to="/womens">Women</Link>
        <Link to="/mens">Men</Link>
        <Link to="/">
          GRACE
          <GiOwl id="user-logo" />
          NYC
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/checkout">
          <AiOutlineShoppingCart id="logo" />
        </Link>
        {/* <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link> */}
      </div>
    );
  }
};

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
