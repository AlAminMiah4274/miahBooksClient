import React from "react";

const MyOrderList = ({ order, index }) => {

    const {productName, price, buyerName, image} = order;

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{buyerName}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-circle w-12 h-12">
                        <img src={image} alt="" />
                    </div>
                </div>
            </td>
            <td>{productName}</td>
            <td>${price}</td>
            <td>
                {order.price && !order.paid && <button className="btn btn-success text-white btn-xs">PAY</button>}
                {order.price && order.paid && <p className="text-bold text-success">PAID</p>}
            </td>
        </tr>
    );
};

export default MyOrderList;