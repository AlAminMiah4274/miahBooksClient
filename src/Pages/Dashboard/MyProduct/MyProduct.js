import { useQuery } from "@tanstack/react-query";
import React from "react";
import MyProductList from "./MyProductList";

const MyProduct = () => {

    const { data: products = [] } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/products`);
                const data = await res.json();
                return data;
            } catch (err) {
                console.log(err);
            }
        }
    });

    return (
        <div className="p-6">
            <h1 className="text-3xl mb-5">My Products</h1>

            <div className="overflow-x-auto">
                <table className="table">

                    <thead className="bg-gray-300">
                        <tr>
                            <th>Qty</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertisement</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {
                            products.map((product, i) => <MyProductList
                                key={product._id}
                                product={product}
                                index={i}
                            ></MyProductList>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyProduct;