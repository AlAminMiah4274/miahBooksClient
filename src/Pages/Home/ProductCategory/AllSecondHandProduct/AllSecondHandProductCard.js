import React from "react";

const AllSecondHandProductCard = ({ book }) => {

    const { name, image, orginalPrice, resalePrice, useYears } = book;

    return (
        <div className="card bg-white shadow-xl">

            <figure><img src={image} alt="" className="w-full h-52" /></figure>

            <div className="card-body">

                <h2 className="card-title">{name}</h2>
                <p>Orginal Price: ${orginalPrice}</p>
                <p>Resale Price: ${resalePrice}</p>
                <p>Use Time: {useYears}</p>

                <div className="card-actions justify-center">
                    <button className="btn btn-success text-white"
                        onClick={() => document.getElementById('bookingModal').showModal()}
                    >Book Now</button>
                </div>
            </div>

        </div>
    );
};

export default AllSecondHandProductCard;