import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useState } from "react";

const AddStudent = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const imgHostKey = "37e7a67acc4b35dd634f1b051a00876d";

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
      <div>
        <h2 className="text-xl  font-bold">Add Student</h2>
        <form onSubmit={handleSubmit(handelAddStudent)}>
          <div className="form-control w-full text-slate-700 max-w-s">
            <label className="label">
              <span className="label-text">Enter Profile Image</span>
            </label>
            <input
              name="image"
              {...register("image", {
                required: "image is required",
              })}
              type="file"
              placeholder="Type image url"
              className="input input-bordered neutral  w-full max-w-xs"
            />
            {errors.img?.type === "required" && (
              <p className="text-orange-600" role="alert">
                {errors.image?.message}
              </p>
            )}
          </div>

          {/* First Name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              {...register("first_name", {
                required: "First name field cannot be empty",
              })}
              type="text"
              placeholder="Type your Product Name"
              name="first_name"
              className="input input-bordered neutral  w-full max-w-xs"
            />
            {errors.name?.type === "required" && (
              <p className="text-orange-600" role="alert">
                {errors.first_name?.message}
              </p>
            )}
          </div>
          {/* Middle Name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Middle Name</span>
            </label>
            <input
              {...register("middle_name", {
                required: "Middle Name field cannot be empty",
              })}
              type="text"
              placeholder="Type your Product Name"
              name="middle_name"
              className="input input-bordered neutral  w-full max-w-xs"
            />
            {errors.name?.type === "required" && (
              <p className="text-orange-600" role="alert">
                {errors.middle_name?.message}
              </p>
            )}
          </div>
          {/* Last Name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              {...register("last_name", {
                required: "Last Name field cannot be empty",
              })}
              type="text"
              placeholder="Type your Product Name"
              name="last_name"
              className="input input-bordered neutral  w-full max-w-xs"
            />
            {errors.name?.type === "required" && (
              <p className="text-orange-600" role="alert">
                {errors.last_name?.message}
              </p>
            )}
          </div>

          {/* Class */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Select Product Condition?</span>
            </label>
            <select
              {...register("class", {
                required: "Please Select Class",
              })}
              name="class"
              type="select"
              className="select select-bordered neutral w-full max-w-xs"
            >
              <option selected default>
                Class
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>
          {/* Division*/}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Division</span>
            </label>
          </div>
          <select
            {...register("division", {
              required: "Please select Division",
            })}
            name="division"
            type="select"
            className="select select-bordered neutral text-slate-700 w-full max-w-xs"
          >
            <option disabled selected>
              Division
            </option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
          {/* Roll Number */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Roll Number</span>
            </label>
            <input
              {...register("rool_number", {
                required: "enter short rool number",
              })}
              type="text"
              placeholder="Type here"
              name="rool_number"
              className="input input-bordered neutral  w-full max-w-xs"
            />
          </div>
          {/* Address Line 1*/}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address Line 1</span>
            </label>
            <textarea
              {...register("address_one", {
                required: "enter used Duration",
              })}
              row="4"
              column="32"
              type="text"
              placeholder="Type here"
              name="address_one"
              className="input input-bordered neutral  w-full max-w-xs"
            />
          </div>
          {/* Address Line 2*/}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address Line 2</span>
            </label>
            <textarea
              {...register("address_two", {
                required: "enter used Duration",
              })}
              row="4"
              column="32"
              type="text"
              placeholder="Type here"
              name="address_two"
              className="input input-bordered neutral  w-full max-w-xs"
            />
          </div>

          <input
            className="btn mt-5 w-full max-w-xs btn-accent"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
