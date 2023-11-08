import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";

export default function MainLayout() {
    return (
        <div className="mainLayout">
            <Navbar/>
            <div className="mainContent">
                <Outlet />
            </div>
        </div>
    );
}