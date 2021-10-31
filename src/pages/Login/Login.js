import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../image/logo.png';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-bg">
            <div className="container d-flex mt-5">
                <Card className="login p-3 rounded shadow w-25 mx-auto">
                    <div className="mx-auto">
                        <img className="logo" src={logo} alt="" />
                    </div>
                    <p className="text-center mt-2 fw-bold">Login and Travel the world</p>
                    <button onClick={handleGoogleLogin} className="btn btn-outline-danger fw-bold mt-2">
                        <FontAwesomeIcon className="me-2" icon={faGoogle}></FontAwesomeIcon> Login with Google</button>
                </Card>
            </div>
        </div>
    );
};

export default Login;