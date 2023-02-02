import { Button } from "@mui/material";
import React from "react";
import {
  CheckboxElement,
  FormContainer,
  PasswordElement,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";

const Login = () => {
  const { handleSubmit, action } = useForm();

  const form = {
    agree: false,
  };

  return (
    <FormContainer
      defaultValues={form}
      sx={{
        margin: "0 auto",
      }}
      // onSuccess={action("submit")}
      FormProps={{
        "aria-autocomplete": "none",
        autoComplete: "new-password",
      }}
    >
      {/* <TextFieldElement
        required
        autoComplete={"new-password"}
        margin={"dense"}
        label={"Name"}
        name={"default-text-field"}
      /> */}
      <br />
      <TextFieldElement
        required
        type={"email"}
        margin={"dense"}
        label={"Email"}
        name={"default-email-field"}
      />
      <br />
      <TextFieldElement
        required
        // parseError={parseError}
        type={"email"}
        margin={"dense"}
        label={"Email with ParseError"}
        name={"default-email-field-with-parsed"}
      />
      {/* <br />
      <TextFieldElement
        margin={"dense"}
        label={"Number"}
        name={"number-text-field"}
        required
        type={"number"}
      /> */}
      <br />
      <PasswordElement
        margin={"dense"}
        label={"Password"}
        required
        name={"password"}
      />
      {/* <br />
      <PasswordRepeatElement
        passwordFieldName={"password"}
        name={"password-repeat"}
        margin={"dense"}
        label={"Repeat Password"}
        required
      /> */}
      <br />
      <CheckboxElement name={"agree"} label={"Agree"} required />
      <br />
      <Button type={"submit"} color={"primary"} variant={"contained"}>
        Submit
      </Button>
    </FormContainer>
  );
};

export default Login;
