import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
  const form = {
    agree: false,
  };

  return (
    <FormContainer
      defaultValues={form}
      onSuccess={action("submit")}
      FormProps={{
        "aria-autocomplete": "none",
        autoComplete: "new-password",
      }}
    >
      <TextFieldElement
        required
        autoComplete={"new-password"}
        margin={"dense"}
        label={"Name"}
        name={"default-text-field"}
      />
      <br />
      <TextFieldElement
        required
        type={"email"}
        margin={"dense"}
        label={"Email"}
        name={"default-email-field"}
      />
      <br />

      <PasswordElement
        margin={"dense"}
        label={"Password"}
        required
        name={"password"}
      />
      <br />
      <PasswordRepeatElement
        passwordFieldName={"password"}
        name={"password-repeat"}
        margin={"dense"}
        label={"Repeat Password"}
        required
      />
      <br />
      <Button type={"submit"} color={"primary"} variant={"contained"}>
        Submit
      </Button>
    </FormContainer>
  );
};

export default SignUp;
