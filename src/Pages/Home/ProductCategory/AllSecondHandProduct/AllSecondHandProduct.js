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
            <h1 className="text-5xl text-center font-semibold mt-10">Choose your favourite books at minimum price</h1>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
                {
                    books.map((book, i) => <AllSecondHandProductCard
                        key={i}
                        book={book}
                        setBookInfo={setBookInfo}
                    ></AllSecondHandProductCard>)
                }
            </div>

            {
                bookInfo && <BookingModal
                    bookInfo={bookInfo}
                    setBookInfo={setBookInfo}
                ></BookingModal>
            }
        </>
    );
};

export default AllSecondHandProduct;