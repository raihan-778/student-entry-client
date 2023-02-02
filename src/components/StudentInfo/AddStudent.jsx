import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React from "react";

const AddStudent = () => {
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
