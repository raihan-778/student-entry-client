import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { Box, MenuItem, Select, TextField } from "@mui/material";

const AddStudent = ({ name, label, required }) => {
  // const { control, handleSubmit } = useController();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const imgHostKey = "37e7a67acc4b35dd634f1b051a00876d";

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm();
  control;

  const handelAddStudent = (data) => {
    console.log(data);
    const image = data.url[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);

          const studentInfo = {
            firstName: data.first_name,
            middleName: data.middle_name,
            lastName: data.last_name,
            class: data.class,
            division: data.division,
            image: imgData.data.url,
            rollNumber: data.roll_number,
            // addressOne: data.address_one,
            // addressTwo: data.address_two,
          };
          console.log(studentInfo);
          fetch("http://localhost:5000/student-info", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(studentInfo),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(
                `new Student ${data.first_name} added successfully`
              );
              // navigate("/");
            });
        }
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: 5,
      }}
    >
      <h2 varient="h3">Add Student</h2>
      <form onSubmit={handleSubmit(handelAddStudent)}>
        {/* First Name */}
        <Controller
          name="first_name"
          control={control}
          sx={{ m: 1, width: "25ch" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="firstName"
              varient="outline success"
              sx={{ m: 1, width: "25ch" }}
              error={!!errors.first_name}
              helperText={errors.first_name ? errors.first_name.message : ""}
            />
          )}
        />

        {/* Middle Name */}
        <Controller
          name="middle_name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="MiddleName"
              varient="outline success"
              sx={{ m: 1, width: "25ch" }}
              error={!!errors.middle_name}
              helperText={errors.middle_name ? errors.middle_name.message : ""}
            />
          )}
        />

        {/* Last Name */}
        <Controller
          name="last_name"
          control={control}
          margin="normal"
          render={({ field }) => (
            <TextField
              {...field}
              label="LastName"
              color="success"
              sx={{ m: 1, width: "25ch" }}
              error={!!errors.last_name}
              helperText={errors.last_name ? errors.last_name.message : ""}
            />
          )}
        />
        <br />
        <br />
        {/* Class */}
        <Controller
          name="class"
          control={control}
          margin="normal"
          render={({ field }) => (
            <Select
              {...field}
              label="Class"
              varient="outline"
              sx={{
                borderColor: "red",
                borderWidth: 2,
                borderRadius: 2,
                paddingX: 5,
              }}
            >
              <MenuItem selected default>
                Class
              </MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
            </Select>
          )}
        />

        {/* Division*/}
        <Controller
          name="division"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Class"
              varient="outline"
              sx={{
                borderColor: "red",
                borderWidth: 2,
                borderRadius: 2,
                paddingX: 5,
              }}
            >
              <MenuItem selected default>
                Division
              </MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="E">E</MenuItem>
            </Select>
          )}
        />

        {/* Roll Number */}
        <Controller
          name="roll_number"
          control={control}
          margin="normal"
          render={({ field }) => (
            <TextField
              {...field}
              label="Roll Number"
              color="success"
              sx={{ m: 1, width: "25ch" }}
              error={!!errors.Roll_number}
              helperText={errors.roll_number ? errors.last_name.message : ""}
            />
          )}
        />
        {/* Address Line 1*/}
        <Controller
          name="roll_number"
          control={control}
          margin="normal"
          render={({ field }) => (
            <TextField
              {...field}
              label="Roll Number"
              color="success"
              sx={{ m: 1, width: "25ch" }}
              error={!!errors.Roll_number}
              helperText={errors.roll_number ? errors.last_name.message : ""}
            />
          )}
        />

        {/* Address Line 2*/}
        {/* file upload */}
        <Controller
          name="url"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="file"
              onChange={(e) => {
                field.onChange(e.target.files);
              }}
              multiple
            />
          )}
        />
        <br />
        <br />
        <input
          className="btn mt-5 w-full max-w-xs btn-accent"
          value="Submit"
          type="submit"
        />
      </form>
    </Box>
  );
};

export default AddStudent;
