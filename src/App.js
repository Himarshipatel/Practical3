import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import * as Yup from 'yup';
//import "bootstrap/scss/bootstrap.scss";
import "./index.css" ;

function App() {


const schema = Yup.object().shape({
  email:Yup.string()
  .email()
  .required(),
  password:Yup.string()
  .min(8)
  .required()
});

const {control,handleSubmit,errors} = useForm(
  {validationSchema:schema});

  return (
    <div>
      <Form onSubmit={handleSubmit(values=>console.log(values))}>
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
         {errors.password &&(
           <small className="text-danger">{errors.password.message}</small>
         )}
        </FormGroup>
        <Button type="submit" color="primary">Login</Button>
      </Form>
    

    </div>
  );
}

export default App;
