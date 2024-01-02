import React from "react";
import Header from "../../Pages/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>

            <div className="drawer lg:drawer-open">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">

                    <Outlet></Outlet>

                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 h-full bg-white">
                        <li><Link to="/dashboard">My Order</Link></li>
                        <li><Link to="/dashboard/myProduct">My Products</Link></li>
                        <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                        <li><Link to="/dashboard/allSeller">All Sellers</Link></li>
                        <li><Link to="/dashboard/allBuyer">All Buyers</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;