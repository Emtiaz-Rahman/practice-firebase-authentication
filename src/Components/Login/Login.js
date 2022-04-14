import React from 'react';
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import app from '../../firebase.init';
import './LogIn.css'

const auth = getAuth(app);
const LogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    const handleEmailBlur = (event) => {
        console.log(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        console.log(event.target.value)
    }
    const handleFormSbmit = event => {
        console.log('from submit')
        event.preventDefault();
    }
    return (
        <div>
            <div className='registration w-25 mx-auto'>
                <h4 className='text-primary '>Please Login</h4>
                <div className='d-flex justify-content-between'>
                    <Button onClick={handleGoogleSignIn}>Google SignIn</Button>
                    <Button>Facebook</Button>
                    <Button>Github</Button>
                </div>
                <Form onSubmit={handleFormSbmit} className='input-form'>
                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default LogIn;