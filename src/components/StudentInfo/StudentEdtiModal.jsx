import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Controller, useForm } from "react-hook-form";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function StudentEdtiModal({ student }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm();

  const handelEditStudent = (data) => {
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
            className: data.class,
            division: data.division,
            image: imgData.data.url,
            rollNumber: data.roll_number,
            addressOne: data.address_one,
            addressTwo: data.address_two,
          };
          console.log(studentInfo);
          fetch("https://student-entry-server.vercel.app/student-info", {
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

  const {
    firstName,
    middleName,
    lastName,
    className,
    division,
    image,
    rollNumber,
    addressOne,
  } = student;
  return (
    <Box
      sx={{
        style,
        backgroundColor: "#fff",
        padding: 5,
      }}
    >
      <h2 varient="h3">Add Student</h2>
      <form onSubmit={handleSubmit(handelEditStudent)}>
        {/* First Name */}
        <Controller
          name="first_name"
          control={control}
          sx={{ m: 1, width: "25ch" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="firstName"
              defaultValue={firstName}
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
              defaultValue={middleName}
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
              defaultValue={lastName}
              sx={{ m: 1, width: "25ch" }}
              error={!!errors.last_name}
              helperText={errors.last_name ? errors.last_name.message : ""}
            />
          )}
        />
        <br />
        <br />
        {/* Class */}
        <InputLabel id="student-class">Class</InputLabel>
        <Controller
          name="class"
          control={control}
          margin="normal"
          render={({ field }) => (
            <Select
              id="student-class"
              {...field}
              varient="outline"
              label="Class"
              defaultValue={className}
              sx={{
                borderColor: "red",
                borderWidth: 2,
                borderRadius: 2,
                paddingX: 5,
                marginRight: 2,
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
        <InputLabel id="student-division">Division</InputLabel>
        <Controller
          name="division"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              id="student-division"
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
        <br />

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
          name="address_one"
          control={control}
          margin="normal"
          render={({ field }) => (
            <TextField
              {...field}
              label="Address One"
              color="success"
              type="text"
              sx={{ m: 1, width: "50ch" }}
              error={!!errors.address_one}
              helperText={errors.address_one ? errors.last_name.message : ""}
            />
          )}
        />

        {/* Address Line 2*/}
        <Controller
          name="address_two"
          control={control}
          margin="normal"
          render={({ field }) => (
            <TextField
              {...field}
              label="Address Two"
              color="success"
              type="text"
              sx={{ m: 1, width: "50ch" }}
              error={!!errors.address_two}
              helperText={errors.address_two ? errors.last_name.message : ""}
            />
          )}
        />
        {/* file upload */}
        <InputLabel id="add-profile-pic">Add Profile Picture</InputLabel>
        <Controller
          name="url"
          control={control}
          render={({ field }) => (
            <input
              sx={{ padding: 3 }}
              id="add-profile-pic"
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
        <Button variant="contained" type="submit" color="success">
          Submit
        </Button>
      </form>
    </Box>
  );
}
