import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imghostkey;
    const navigate = useNavigate();

    const handleAddProductForm = data => {

        const image = data.productImage[0];
        const form = new FormData();
        form.append("image", image);

        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: "POST",
            body: form
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {

                    const product = {
                        productName: data.productName,
                        productPrice: data.productPrice,
                        productCondition: data.productCondition,
                        sellerNumber: data.sellerNumber,
                        sellerLocation: data.sellerLocation,
                        productCategory: data.productCategory,
                        purchaseYear: data.purchaseYear,
                        productImage: imgData.data.url,
                        description: data.description
                    };

                    fetch(`http://localhost:5000/products`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(productData => {

                            if (productData.acknowledged) {
                                toast.success("your book successfully added");
                                navigate("/dashboard/myProduct");
                            };
                        })
                };
            })
    };

    return (
        <div className="border lg:w-3/5 mx-auto p-6 my-10">
            <h1 className="text-3xl text-center mb-5">Add A Product</h1>

            <form onSubmit={handleSubmit(handleAddProductForm)}>

                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Product Name</span></div>
                        <input type="text" {...register("productName", {
                            required: "product name is required"
                        })} placeholder="Name" className="input input-bordered w-full" />

                        {errors?.productName && <p className="text-red-500 text-sm">{errors?.productName?.message}</p>}
                    </label>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Product Price</span></div>
                        <input type="text" {...register("productPrice", {
                            required: "product price is required"
                        })} placeholder="Price" className="input input-bordered w-full" />

                        {errors?.productPrice && <p className="text-red-500 text-sm">{errors?.productPrice?.message}</p>}
                    </label>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Product Condition</span></div>
                        <select {...register("productCondition")} className="select select-bordered">
                            <option value='excellent'>Excellent</option>
                            <option value='good'>Good</option>
                            <option value='fair'>Fair</option>
                        </select>
                    </label>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Seller Phone Number</span></div>
                        <input type="text" {...register("sellerNumber", {
                            required: "phone number is required"
                        })} placeholder="Number" className="input input-bordered w-full" />

                        {errors?.sellerNumber && <p className="text-red-500 text-sm">{errors?.sellerNumber?.message}</p>}
                    </label>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Seller Location</span></div>
                        <select {...register("sellerLocation")} className="select select-bordered">
                            <option value='dhaka'>Dhaka</option>
                            <option value='barishal'>Barishal</option>
                            <option value='chittagong'>Chittagong</option>
                            <option value='khulna'>Khulna</option>
                            <option value='sylhet'>Sylhet</option>
                            <option value='cumilla'>Cumilla</option>
                            <option value='mymensingh'>Mymensingh</option>
                            <option value='rangpur'>Rangpur</option>
                        </select>
                    </label>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Product Category</span></div>
                        <select {...register("productCategory")} className="select select-bordered">
                            <option value='computer science'>Computer Science</option>
                            <option value='history'>History</option>
                            <option value='fiction'>Fiction</option>
                            <option value='literature'>Literature</option>
                            <option value='self development'>Self Development</option>
                            <option value='politics'>Politics</option>
                        </select>
                    </label>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Year of Purchase</span></div>
                        <input type="text" {...register("purchaseYear", {
                            required: "purchase is required"
                        })} placeholder="Year" className="input input-bordered w-full" />

                        {errors?.purchaseYear && <p className="text-red-500 text-sm">{errors?.purchaseYear?.message}</p>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Product Image</span></div>
                        <input type="file" {...register("productImage", {
                            required: "product image is required"
                        })} className="file-input file-input-bordered w-full" />

                        {errors?.productImage && <p className="text-red-500 text-sm">{errors?.productImage?.message}</p>}
                    </label>
                </div>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text">Description</span></div>
                    <textarea {...register("description", {
                        required: "description is required"
                    })} className="textarea textarea-bordered h-24" placeholder="Write your thoughts"></textarea>

                    {errors?.description && <p className="text-red-500 text-sm">{errors?.description?.message}</p>}
                </label>

                <input type="submit" value="Submit" className="btn btn-success w-full mt-10 text-white" />

            </form>

        </div>
    );
};

export default AddProduct;