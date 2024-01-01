import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Login = () => {

    const {userLogin} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginForm = data => {

        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
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

                <input type="submit" value="Submit" className="btn btn-neutral text-white w-full mt-10" />
            </form>

            <p className="text-sm text-center">New to Miah Books? <Link to="/register" className="text-success">Please register first</Link></p>
            <div className="divider">OR</div>

            <button className="btn btn-outline w-full">Login with Google</button>
        </div>
    );
};

export default Login;