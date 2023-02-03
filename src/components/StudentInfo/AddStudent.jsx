import {
  Box,
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "-1rem 0 2rem 0",
    padding: "0 7rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
    marginTop: "auto",
  },
  textField: {
    width: "100%",
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem",
  },
  select: {
    variant: "outlined",
  },
}));

const AddStudent = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const imgHostKey = "37e7a67acc4b35dd634f1b051a00876d";

  const [classValue, setClassValue] = useState("");
  const [divisionValue, setDivisionValue] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
          addressTwo: data.address_one,
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

  const classes = useStyles();
  const divisions = ["A", "B", "C", "D", "E"];

  const handleOnChange = () => {
    setDivisionValue(data.division);
  };
  return (
    <Box
      component="form"
      className={classes.root}
      onSubmit={handleSubmit(handelAddStudent)}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        "&.MuiFormControl-root": { mx: 5, width: "50%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" gutterBottom>
        Add Student
      </Typography>

      <TextField
        required
        id="outlined-required"
        label="image"
        name="image"
        type="file"
        {...register("image", {
          required: "image is required",
        })}
      />
      <TextField
        required
        id="outlined-required"
        label="First Name"
        name="first_name"
        defaultValue="Enter First Name"
        {...register("first_name", {
          required: "first name is required",
        })}
      />
      <TextField
        required
        id="outlined-disabled"
        label="Middle Name"
        name="middle_name"
        defaultValue="Enter Middle Name"
        {...register("middle_name", {
          required: "middle name is required",
        })}
      />
      <TextField
        required
        id="outlined-disabled"
        label="Last Name"
        name="last_name"
        defaultValue="Enter Last Name"
        {...register("last_name", { required: "last name is required" })}
      />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={section}
        label="class"
        type="select"
        name="class"
        onChange={handleOnChange}
        {...register("class", { required: "class" })}
        // onChange={handleChange}
      >
        {classes.map((singleClass) => (
          <MenuItem key={singleClass} value={singleClass}>
            {singleClass}
          </MenuItem>
        ))}
      </Select>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={section}
        label="Division"
        type="select"
        name="division"
        {...register("division", { required: "division is required" })}
        // onChange={handleChange}
      >
        {divisions.map((division) => (
          <MenuItem value={division} key={division}>
            {division}
          </MenuItem>
        ))}
      </Select>
      <TextField
        required
        id="roll-number"
        label="Roll Number"
        defaultValue="Enter your Roll "
        name="roll_number"
        {...register("roll_number", { required: "roll_number is required" })}
        variant="filled"
      />

      <TextareaAutosize
        aria-label="Address Line 01"
        minRows={3}
        placeholder="Address Line 01"
        style={{ width: 300 }}
        variant="filled"
        name="address_one"
        {...register("address_one", { required: "address_one is required" })}
      />

      <TextareaAutosize
        aria-label="Address Line 02"
        minRows={3}
        placeholder="Address Line 02"
        style={{ width: 300 }}
        variant="filled"
        name="address_two"
        {...register("address_two", { required: "address_two is required" })}
      />

      <Button type="submit">Add Student</Button>
    </Box>
  );
};

export default AddStudent;
