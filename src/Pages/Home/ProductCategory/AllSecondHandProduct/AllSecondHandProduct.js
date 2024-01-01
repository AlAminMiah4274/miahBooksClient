import React from "react";
import { useLoaderData } from "react-router-dom";
import AllSecondHandProductCard from "./AllSecondHandProductCard";
import BookingModal from "../BookingModal/BookingModal";

const AllSecondHandProduct = () => {

    const product = useLoaderData();
    const books = product.books;

    return (
        <>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
                {
                    books.map(book => <AllSecondHandProductCard
                        key={book._id}
                        book={book}
                    ></AllSecondHandProductCard>)
                }
            </div>
            <div>
                <BookingModal></BookingModal>
            </div>
        </>
    );
};

export default AllSecondHandProduct;