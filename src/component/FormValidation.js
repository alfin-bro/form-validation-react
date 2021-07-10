import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

function FormValidation() {
    const { register, handlerSubmit, errors } = useForm()
    
    const [userInfo, setUserInfo] = useState();

    const onSubmit = data => {
        setUserInfo(data)
        console.log(data);
    }
    return (
        <Form onSubmit={() => handlerSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className="font-weight-bold">Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter Username" ref={register} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="font-weight-bold">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={register}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="font-weight-bold">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={register}/>
            </Form.Group>
            <Button className="btn-block" variant="primary" type="submit"> Submit </Button>
        </Form>
    )
}

export default FormValidation;
