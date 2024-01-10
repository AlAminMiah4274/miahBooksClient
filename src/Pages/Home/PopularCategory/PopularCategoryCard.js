import React from "react";

const PopularCategoryCard = ({ book }) => {

    const {image, price, productName} = book;

    return (
        <div className="card bg-white shadow-xl">
            <figure><img src={image} alt="" className="w-full h-52" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>Price: ${price}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">See More</button>
                </div> */}
            </div>
        </div>
    );
};

export default PopularCategoryCard;