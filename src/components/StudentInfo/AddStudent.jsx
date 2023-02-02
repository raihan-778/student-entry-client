import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";

const AddStudent = () => {
  const imgHostKey = "37e7a67acc4b35dd634f1b051a00876d";
  /* 
  import { useQuery } from "@tanstack/react-query";





const AddTask = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const imgHostKey = "37e7a67acc4b35dd634f1b051a00876d";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handelAddTask = (data) => {
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
        const taskInfo = {
          img: imgData.data.url,
          email: data.email,
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

  return (
    <form
      onSubmit={handleSubmit(handelAddTask)}
      className="grid grid-cols-1 lg:w-1/2 md:1/2 w-full mx-auto gap-4"
    >
      <div className="w-full mx-auto">
        <div className="mb-2 text-left block">
          <Label htmlFor="email1" value="Enter Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          defaultValue={user.email}
          placeholder="Type your email here"
          // className="input input-bordered w-full max-w-xs"
          {...register("email", {
            required: "email is required",
          })}
        />
      </div>

      <div>
        <div className="mb-2 text-left block">
          <Label htmlFor="img1" value="Image Url" />
        </div>
        <TextInput
          id="img1"
          type="file"
          name="imgUrl"
          placeholder="Please add a title of your task"
          // className="input input-bordered w-full max-w-xs"
          {...register("imgUrl", {
            required: "imgUrl is required",
          })}
          aria-invalid={errors.imgUrl ? "true" : "false"}
        />
        {errors.imgUrl && (
          <p className="text-red-500" role="alert">
            {errors.imgUrl?.message}
          </p>
        )}
      </div>
      <div>
        <div className="mb-2 text-left block">
          <Label htmlFor="title1" value="Task title" />
        </div>
        <TextInput
          id="title1"
          type="text"
          name="title"
          placeholder="Please add a title of your task"
          // className="input input-bordered w-full max-w-xs"
          {...register("title", {
            required: "title is required",
          })}
          aria-invalid={errors.title ? "true" : "false"}
        />
        {errors.title && (
          <p className="text-red-500" role="alert">
            {errors.title?.message}
          </p>
        )}
      </div>
      <div id="textarea">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea
          id="comment"
          name="description"
          placeholder="enter a description"
          required={true}
          rows={4}
          {...register("description", {
            required: "description is required",
          })}
        />
      </div>

      <div>
        <Button className="w-24" type="submit">
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default AddTask;

   */
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue="Enter First Name"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Middle Name"
          defaultValue="Enter Middle Name"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Last Name"
          defaultValue="Enter Last Name"
        />
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={section}
          label="class"
          // onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </div>
      <div>
        <InputLabel id="demo-simple-select-label">Division</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={section}
          label="Division"
          // onChange={handleChange}
        >
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={"B"}>B</MenuItem>
          <MenuItem value={"C"}>C</MenuItem>
          <MenuItem value={"D"}>D</MenuItem>
          <MenuItem value={"E"}>E</MenuItem>
        </Select>
        <TextField
          required
          id="roll-number"
          label="Roll Number"
          defaultValue="Enter your Roll "
          variant="filled"
        />
        <InputLabel id="Address Line 01">Address Line One</InputLabel>
        <TextareaAutosize
          aria-label="Address Line 01"
          minRows={3}
          placeholder="Address Line 01"
          style={{ width: 300 }}
          variant="filled"
        />
        <InputLabel id="Address Line 02">Address Line Two</InputLabel>
        <TextareaAutosize
          aria-label="Address Line 02"
          minRows={3}
          placeholder="Address Line 02"
          style={{ width: 300 }}
          variant="filled"
        />
      </div>
      <div>
        <InputLabel id="email">Email</InputLabel>
        <TextField
          required
          id="email"
          label="Email"
          defaultValue="raihan@gmail.com"
          variant="standard"
        />
        <InputLabel id="password">Password</InputLabel>
        <TextField
          required
          id="password"
          label="Password"
          defaultValue="*****"
          variant="standard"
        />
        <TextField
          id="repet-password"
          label="Repet Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />

        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
      </div>
    </Box>
  );
};

export default AddStudent;
