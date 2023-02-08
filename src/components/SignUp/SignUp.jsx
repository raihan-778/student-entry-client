import { Box, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

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
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(data.password);
        setLoginUserpassword(data.password);
        user.uid && toast.success("User login successfully");

        setLoginError("");
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };

  return (
    <Box fullWidth sx={{ padding: 5, marginX: "auto" }}>
      <h2>Please SignUp</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        {/* First Name */}
        <Controller
          name="email"
          control={control}
          sx={{ m: 1, width: "50ch" }}
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
      </form>
    </Box>
  );
};

export default SignUp;
