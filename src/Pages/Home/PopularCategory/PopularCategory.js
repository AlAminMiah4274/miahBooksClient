import { useQuery } from "@tanstack/react-query";
import React from "react";
import PopularCategoryCard from "./PopularCategoryCard";

const PopularCategory = () => {

    const { data: books = [] } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/booking`);
                const data = await res.json();
                return data;
            } catch (err) {
                console.log(err);
            }
        }
    });

    return (
        <div className="my-14">
            <h1 className="text-5xl font-bold text-center mb-10">Popular Books</h1>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(book => <PopularCategoryCard
                        key={book._id}
                        book={book}
                    ></PopularCategoryCard>)
                }
            </div>

        </div>
    );
};

export default PopularCategory;