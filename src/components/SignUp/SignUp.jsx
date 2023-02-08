import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm();
  control;

  const handleSignUp = (data) => {
    console.log(data);
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user.email);

        user.uid && toast.success("User Sign Up successfully");

        setSignUpError("");
      })
      .catch((err) => {
        console.error(err.message);
        setSignUpError(err.message);
      });
  };

  return (
    <Box fullWidth sx={{ padding: 5, marginX: "auto" }}>
      <h2>Please SignUp</h2>
      <form onSubmit={handleSubmit(handleSignUp)}>
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
        <Button variant="contained" type="submit" color="success">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
