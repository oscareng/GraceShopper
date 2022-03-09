import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Typography variant="h4"> Customer Information </Typography>
      <TextField label="First Name" variant="filled" required />
      <TextField label="Last Name" variant="filled" required />
      <TextField label="Email" variant="filled" type="email" required />
      <TextField label="Address 1" variant="filled" required />
      <TextField label="Address 2" variant="filled" required />
      <TextField
        label="City, State, Zip"
        variant="filled"
        type="password"
        required
      />
      <div>

        <Link to="/confirmation" style={{ textDecoration: "none" }}>
          <Button type="submit" variant="contained" color="primary">
            Confirm Order
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default Form;
