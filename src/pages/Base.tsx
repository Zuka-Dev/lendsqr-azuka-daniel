import React from "react";
import "./Base.scss";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import Dashboard from "./Dashboard/Dashboard";
import UserDetails from "./UserDetails/UserDetails";

const Base: React.FC = () => {
    return (
        <div className="base">
            <div className="nav">
                <NavBar />
            </div>
            <div className="content">
                <div className="side-bar">
                    <SideBar />
                </div>
                <div className="display">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/users/:id" element={<UserDetails />} />
                    </Routes>
                </div>
                
            </div>
        </div>
    );
};

export default Base;
