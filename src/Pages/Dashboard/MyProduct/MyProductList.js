import React from "react";

const MyProductList = ({ product, index }) => {

    const { productPrice, productName } = product;

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>${productPrice}</td>
            <td>
                {product.sold && <p className="text-red-500 font-semibold">SOLD</p>}
                {!product.sold && <p className="text-green-500 font-semibold">AVAILABLE</p>}
            </td>
            <td>
                {product.sold && <p className="text-red-500 font-semibold">NOT AVAILABLE</p>}
                {!product.sold && <button className="btn btn-warning btn-xs text-white">ADVERTISE</button>}
            </td>
            <td><button className="btn btn-xs btn-error text-white">DELETE</button></td>
        </tr>
    );
};

export default MyProductList;