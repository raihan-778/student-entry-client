import { Box, Button, TextField, Typography } from "@mui/material";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginUseremail, setLoginUseremail] = useState("");
  const { login } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm();
  control;

  const handleLogin = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(data.email);
        setLoginUseremail(data.email);
        user.uid && toast.success("User login successfully");
        setLoginError("");
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };
  return (
    <Box sx={{ width: 400, height: 300 }}>
      <h2>Please Login!!</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        {/* First Name */}
        <Controller
          name="email"
          control={control}
          sx={{ m: 1, width: "25ch" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              type="email"
              varient="outline success"
              sx={{ m: 1, width: "50ch" }}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          sx={{ m: 1, width: "50ch" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="password"
              type="password"
              varient="outline success"
              sx={{ m: 1, width: "50ch" }}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
          )}
        />
        <Button variant="contained" type="submit" color="success">
          Login
        </Button>
      </form>
      <h2>
        Do not have an account! Please <Link to="/signup">singUp</Link>
      </h2>
    </Box>
  );
};

export default Login;
