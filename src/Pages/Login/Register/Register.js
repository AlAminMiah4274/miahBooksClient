import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userCreate, userProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegisterForm = data => {

        userCreate(data.email, data.password)
            .then(() => {

                const userInfo = {
                    displayName: data.name
                };

                userProfileUpdate(userInfo)
                    .then(() => {

                        toast.success("Successfully registered");
                        navigate("/");
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className="border my-20 lg:w-1/2 mx-auto p-10">
            <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

            <form onSubmit={handleSubmit(handleRegisterForm)}>
                <label className="form-control w-full">
                    <div className="label"><span className="label-text">Name</span></div>
                    <input type="text" placeholder="Your Name" {...register("name", {
                        required: "name is required"
                    })} className="input input-bordered w-full" />

                    {errors?.name && <p className="text-red-500 text-sm">{errors?.name?.message}</p>}
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text">Email</span></div>
                    <input type="email" placeholder="Your Email" {...register("email", {
                        required: "email is required"
                    })} className="input input-bordered w-full" />

                    {errors?.email && <p className="text-red-500 text-sm">{errors?.email?.message}</p>}
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text">Password</span></div>
                    <input type="password" placeholder="Create a password" {...register("password", {
                        required: "password is required",
                        pattern: {
                            value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/,
                            message: "you must use one uppercase, one lowercase, one number, one specail character and minimum length should be 8"
                        }
                    })} className="input input-bordered w-full" />

                    {errors?.password && <p className="text-red-500 text-sm">{errors?.password?.message}</p>}
                </label>

                <input type="submit" value="Submit" className="btn btn-neutral w-full mt-10" />
            </form>

            <p className="text-center text-sm">Already have an account? <Link to="/login" className="text-success">Please login</Link></p>

        </div>
    );
};

export default Register;