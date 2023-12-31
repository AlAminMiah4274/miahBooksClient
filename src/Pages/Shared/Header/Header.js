import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const menuItems = <>
        <li><Link>Home</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Login</Link></li>
    </>

    return (
        <div className="navbar bg-red-300">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="text-3xl font-semibold">Nostalgic Narratives</Link>
            </div>

            <div className="flex items-center">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-full md:w-auto" />
                </div>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;