import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Confirmation from "./components/Confirmation";
import { LandingPage } from "./components/LandingPage";
import Home from "./components/Home";
import { me } from "./store";
import WomenProducts from "./components/WomenProducts";
import MenProducts from "./components/MenProducts";
import Checkout from "./components/Checkout";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/products/:id" component={SingleProduct} />
            {/* <Redirect to="/home" /> */}
            <Route path="/checkout" component={Checkout} />
            <Route exact path="/womens" component={WomenProducts} />
            <Route exact path="/mens" component={MenProducts} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/confirmation" component={Confirmation} />
            <Route exact path="/womens" component={WomenProducts} />
            <Route exact path="/mens" component={MenProducts} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
