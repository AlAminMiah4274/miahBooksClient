import React from "react";
import Header from "../../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-[1200px] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;