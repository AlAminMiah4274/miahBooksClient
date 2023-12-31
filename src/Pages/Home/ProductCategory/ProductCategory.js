import React from "react";

const ProductCategory = () => {

    

    return (
        <div className="my-10">

            <p className="text-5xl text-center">Our Books</p>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card bg-white shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCategory;