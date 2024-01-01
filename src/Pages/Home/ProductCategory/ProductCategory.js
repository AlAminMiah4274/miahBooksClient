import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCategoryCard from "./ProductCategoryCard";

const ProductCategory = () => {

    // loaded data from database using react/tanstack query 
    const { data: products = [] } = useQuery({
        queryKey: ["books"],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/books`);
                const data = await res.json();
                return data;
            } catch (err) {
                console.log(err);
            }
        }
    });

    return (
        <div className="my-10">

            <p className="text-5xl text-center">Our Books</p>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    products.map(product => <ProductCategoryCard
                        key={product._id}
                        product={product}
                    ></ProductCategoryCard>)
                }
            </div>

        </div>
    );
};

export default ProductCategory;