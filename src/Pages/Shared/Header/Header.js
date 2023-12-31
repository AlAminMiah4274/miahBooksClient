import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {

    const { user, userLogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .catch(err => console.log(err))
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link>Blog</Link></li>
        <li>
            <details>
                <summary>Options</summary>
                <ul>
                    <li><Link>Seller</Link></li>
                    <li><Link>User</Link></li>
                </ul>
            </details>
        </li>

        {
            user?.uid ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><button onClick={handleLogOut}>Log Out</button></li>
                </> :
                <li><Link to="/login">Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-red-300">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-300 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="lg:text-3xl font-semibold">Miah Books</Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

            <div tabIndex={2} role="button" className="btn btn-ghost lg:hidden navbar-end">
                <label htmlFor="dashboardDrawer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Header;