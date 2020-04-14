import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./styles.css";
import "bootstrap/scss/bootstrap.scss";
import * as Yup from "yup";

export default function Form() {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  });
  const { control, handleSubmit, errors } = useForm({
    validationSchema: loginSchema
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Form onSubmit={handleSubmit(values => console.log(values))}>
        <FormGroup>
          <Label>Email</Label>
          <Controller
            as={Input}
            control={control}
            name="email"
            defaultValue=""
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Controller
            as={Input}
            control={control}
            name="password"
            type="password"
            defaultValue=""
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </FormGroup>
        <Button type="submit" color="primary">
          Login
        </Button>
      </Form>
    </div>
  );
}
