import React from "react";
import MyOrderList from "./MyOrderList";
import { useQuery } from "@tanstack/react-query";

const MyOrder = () => {

    const { data: orders = [] } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/bookings`);
                const data = await res.json();
                return data;
            } catch (err) {
                console.log(err);
            }
        }
    });

    return (
        <div className="p-6">
            <h1 className="text-3xl mb-5">My Orders</h1>

            <div className="overflow-x-auto">
                <table className="table">

                    <thead className="bg-gray-300">
                        <tr>
                            <th>Qty</th>
                            <th>Buyer Name</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                            {
                                orders.map((order, i) => <MyOrderList
                                    key={order._id}
                                    order={order}
                                    index={i}
                                ></MyOrderList>)
                            }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrder;