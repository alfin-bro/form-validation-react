import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Form, Button } from 'react-bootstrap'

import { useForm } from 'react-hook-form';
import { useState } from 'react';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()


  const [userInfo, setUserInfo] = useState();

  const onSubmit = data => {
    setUserInfo(data)
    console.log(data);
  }
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col py-4 text-center">
            <h1 style={{ letterSpacing: "1.3px" }} className="text-primary">
              Form Validation With React
          </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-8 mx-auto bg-light p-5 rounded-xl">
            <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className="font-weight-bold">Username</Form.Label>
                <Form.Control type="text" {...register("username", { required: true })} placeholder="Enter Username" />
                {errors.username && <p className="text-danger">username is required</p>}

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="font-weight-bold">Email address</Form.Label>
                <Form.Control {...register("email", { required: true })} type="email" placeholder="Enter email" />
                {errors.email && <p className="text-danger">email is required</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="font-weight-bold">Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  {...register("password",
                  {
                    required: {
                      value: true,
                      message: "password is required"
                    },
                    minLength: {
                      value: 4,
                      message: "password value must be more than 4 characters"
                    },
                    maxLength: {
                      value: 10,
                      message: "password value must be less than 10 characters"
                    },
                  })}/>
                <p className="text-danger">{errors.password?.message}</p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label className="font-weight-bold">Age</Form.Label>
                <Form.Control type="number" placeholder="Age" {...register("age",
                  {
                    required: {
                      value: true,
                      message: "age is required"
                    },
                    min: {
                      value: 17,
                      message: "age value must be more than 17 years old"
                    },
                    max: {
                      value: 35,
                      message: "age value must be less than 35 years old"
                    },
                  })} />
                <p className="text-danger">{ errors.age?.message}</p>



              </Form.Group>


              <Button className="btn-block" variant="primary" type="submit"> Submit </Button>
            </Form>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
