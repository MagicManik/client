import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './LoginPage.css';
import SocialLogin from './SocialLogin/SocialLogin';

const LoginPage = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    let location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    let errorMessage;

    useEffect(() => {

        if (user) {
            navigate(from, { replace: true });
        }

    }, [user, navigate, from])

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorMessage = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='bg-primary text-secondary py-14'>
                <div>
                    <form action="" className='loginBody' onSubmit={handleLogin}>
                        <h1 className='text-2xl  border-2 border-none uppercase'>Please Login</h1>
                        <div className='loginBox '>
                            <input ref={emailRef} type="text" required />
                            <span className=''>your email</span>
                        </div>
                        <div className='loginBox'>
                            <input ref={passwordRef} type="password" required />
                            <span className=''>Password</span>
                        </div>
                        {errorMessage}
                        <div className='button_3_body'>
                            <input type="submit" value="LOGIN" className='button_3' />
                        </div>
                    </form>
                </div>
                <p className='text-xl  text-center mt-2'><small>New to Pioneerflix ?</small> <Link to="/signup" className='text-green-500 text-sm'>Please SignUp</Link> </p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default LoginPage;