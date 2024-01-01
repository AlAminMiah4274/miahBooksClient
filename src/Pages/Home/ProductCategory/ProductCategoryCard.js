import React from "react";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({ product }) => {

    const { name, image, _id } = product;

    return (
        <div className="card bg-white shadow-xl">
            <figure><img src={image} alt="" className="w-full h-56" /></figure>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link to={`/secondHandProduct/${_id}`}><button className="btn btn-primary text-white">See More</button></Link>
                </div>
            </div>

        </div>
    );
};

export default ProductCategoryCard;