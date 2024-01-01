import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllSecondHandProductCard from "./AllSecondHandProductCard";
import BookingModal from "../BookingModal/BookingModal";

const AllSecondHandProduct = () => {

    const [bookInfo, setBookInfo] = useState(null); // to send as a prop to the modal 
    const product = useLoaderData();
    const books = product.books;

    return (
        <>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
                {
                    books.map(book => <AllSecondHandProductCard
                        key={book._id}
                        book={book}
                        setBookInfo={setBookInfo}
                    ></AllSecondHandProductCard>)
                }
            </div>
            
            {
                bookInfo && <BookingModal
                    bookInfo={bookInfo}
                ></BookingModal>
            }
        </>
    );
};

export default AllSecondHandProduct;