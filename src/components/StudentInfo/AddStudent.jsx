import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";

const AddStudent = () => {
  const navigate = useNavigate();
  const imgHostKey = "37e7a67acc4b35dd634f1b051a00876d";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handelAddStudent = (data) => {
    console.log(data.imgUrl[0]);
    const image = data.imgUrl[0];
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
        const StudentInfo = {
          image: imgData.data.url,
          firstName: data.first_name,
          title: data.title,
          description: data.description,
        };
        fetch("https://my-task-management-server.vercel.app/media-task", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(taskInfo),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            toast.success(`New task ${data.title} added successfully`);
            navigate("/media");
          });
      });
  };

  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const divisions = ["A", "B", "C", "D", "E"];

  return (
    <Box
      component="form"
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
      <FormControl>
        <TextField
          required
          id="outlined-required"
          label="image"
          name="image"
          type="file"
          defaultValue="select image"
          {...register("image", {
            required: "first name is required",
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
          {...register("last-nam", { required: "last name is required" })}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={section}
          label="class"
          type="select"
          name="class"
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
          variant="filled"
        />

        <TextareaAutosize
          aria-label="Address Line 01"
          minRows={3}
          placeholder="Address Line 01"
          style={{ width: 300 }}
          variant="filled"
        />

        <TextareaAutosize
          aria-label="Address Line 02"
          minRows={3}
          placeholder="Address Line 02"
          style={{ width: 300 }}
          variant="filled"
        />
        <TextField
          required
          id="roll-number"
          label="Roll Number"
          defaultValue="Enter your Roll "
          variant="filled"
        />
      </FormControl>
    </Box>
  );
};

export default AddStudent;
