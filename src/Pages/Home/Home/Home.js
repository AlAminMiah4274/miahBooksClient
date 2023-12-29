import React from "react";
import Banner from "../Banner/Banner";
import AdvertisedItem from "../AdvertisedItem/AdvertisedItem";
import ProductCategory from "../ProductCategory/ProductCategory";
import PopularCategory from "../PopularCategory/PopularCategory";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <ProductCategory></ProductCategory>
            <PopularCategory></PopularCategory>
        </>
    );
};

export default Home;