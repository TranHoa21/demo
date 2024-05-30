import React from "react";
import "../../style/nav/style.scss";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <div className="nav-container">
            <div className="nav-menu">
                <div className="logo"><img className="logo-item" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716618511/Red_and_Yellow_Catering_Flat_Illustrative_Food_Place_Logo_f8dldv.png" /></div>
            </div>
            <div className=" nav-menu">
                <NavLink className={`nav-link  ${pathname === '/' ? 'active' : ''}`} to="/">Home</NavLink>
                <NavLink className={`nav-link  ${pathname === '/menu' ? 'active' : ''}`} to="/menu">Menu</NavLink>
                <NavLink className={`nav-link  ${pathname === '/event' ? 'active' : ''}`} to="/event">Event</NavLink>
                <NavLink className={`nav-link  ${pathname === '/categary' ? 'active' : ''}`} to="/blog">Categary</NavLink>
                <NavLink className={`nav-link  ${pathname === '/about' ? 'active' : ''}`} to="/about">About</NavLink>
            </div>
            <div className=" nav-menu">
                <NavLink className={`nav-link  ${pathname === '/Let-Talk' ? 'active' : ''}`} to="/Let-Talk">Book a take</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
