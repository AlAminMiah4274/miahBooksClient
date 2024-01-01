import React from "react";
import Banner from "../Banner/Banner";
import AdvertisedItem from "../AdvertisedItem/AdvertisedItem";
import ProductCategory from "../ProductCategory/ProductCategory";
import PopularCategory from "../PopularCategory/PopularCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <ProductCategory></ProductCategory>
            <PopularCategory></PopularCategory>
        </div>
    );
};

export default Home;