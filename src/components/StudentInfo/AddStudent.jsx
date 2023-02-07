import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";

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
    const image = data.image[0];
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
        }
        const studentInfo = {
          image: imgData.data.url,
          firstName: data.first_name,
          middleName: data.middle_name,
          lastName: data.last_name,
          class: data.class,
          division: data.division,
          rollNumber: data.roll_number,
          addressOne: data.address_one,
          addressTwo: data.address_two,
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
            toast.success(`new Student ${data.firstName} added successfully`);
            // navigate("/");
          });
      });
  };

  return (
    <div className="flex pt-20 h-auto justify-center w-full items-center">
      <h2 className="text-5xl  font-bold">Add Student</h2>
      <form onSubmit={handleSubmit(handelAddStudent)}>
        {/* First Name */}
        <Controller
          name="first_name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="firstName"
              varient="outline"
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
              varient="outline"
              error={!!errors.middle_name}
              helperText={errors.middle_name ? errors.middle_name.message : ""}
            />
          )}
        />

        {/* Last Name */}
        <Controller
          name="last_name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="LastName"
              varient="outline"
              error={!!errors.last_name}
              helperText={errors.last_name ? errors.last_name.message : ""}
            />
          )}
        />

        {/* Class */}
        <Controller
          name="class"
          control={control}
          render={({ field }) => (
            <Select {...field} label="Class" varient="outline" mt-2>
              <MenuItem selected default>
                Class
              </MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
              <MenuItem>4</MenuItem>
              <MenuItem>5</MenuItem>
              <MenuItem>6</MenuItem>
              <MenuItem>7</MenuItem>
              <MenuItem>8</MenuItem>
              <MenuItem>9</MenuItem>
              <MenuItem>10</MenuItem>
              <MenuItem>11</MenuItem>
              <MenuItem>12</MenuItem>
            </Select>
          )}
        />

        {/* Division*/}

        {/* <Controller
          as={
            <Select>
              <MenuItem disabled selected>
                Division
              </MenuItem>
              <MenuItem>A</MenuItem>
              <MenuItem>B</MenuItem>
              <MenuItem>C</MenuItem>
              <MenuItem>D</MenuItem>
              <MenuItem>E</MenuItem>
            </Select>
          }
          control={control}
          name="mySelect"
        /> */}

        {/* Roll Number */}

        {/* Address Line 1*/}

        {/* Address Line 2*/}

        <input
          className="btn mt-5 w-full max-w-xs btn-accent"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddStudent;
