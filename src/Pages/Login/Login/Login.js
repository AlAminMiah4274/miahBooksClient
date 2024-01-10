import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const { userLogin, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const googleProvider = new GoogleAuthProvider();


    // to handle login form 
    const handleLoginForm = data => {

        // to stop showing login error during retry
        setLoginError('');

        userLogin(data.email, data.password)
            .then(() => {

                toast.success("Successfully log in");
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoginError(err.message);
            })
    };

    // function for login with google
    const handleGoogleLogin = () => {

        // to stop showing login error during retry
        setLoginError('');

        googleLogin(googleProvider)
            .then(() => {

                toast.success("Login successful with google");
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoginError(err.message);
            })
    };


    return (
        <div className="border my-20 lg:w-1/2 mx-auto p-10">
            <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

            <form onSubmit={handleSubmit(handleLoginForm)}>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text">Email</span></div>
                    <input type="email" placeholder="Your Name" {...register("email", {
                        required: "email is required"
                    })} className="input input-bordered w-full" />

                    {errors?.email && <p className="text-red-500 text-sm">{errors?.email?.message}</p>}
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text">Password</span></div>
                    <input type="password" placeholder="Your Password" {...register("password", {
                        required: "password is required"
                    })} className="input input-bordered w-full" />

                    {errors?.password && <p className="text-red-500 text-sm">{errors?.password?.message}</p>}
                </label>

                {/* to show error */}
                {loginError && <p className="text-red-500 mt-5">{loginError}</p>}

                <input type="submit" value="Submit" className="btn btn-neutral text-white w-full mt-10" />
            </form>

            <p className="text-sm text-center">New to Miah Books? <Link to="/register" className="text-success">Please register first</Link></p>
            <div className="divider">OR</div>

            {/* google sign in button */}
            <button onClick={handleGoogleLogin} className="btn btn-outline w-full">Login with Google</button>
        </div>
    );
};

export default Login;