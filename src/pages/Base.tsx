import React from "react";
import "./Base.scss";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import Dashboard from "./Dashboard/Dashboard";

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
                    </Routes>
                </div>
                {/* <div className="display">
                    <Routes>
                        <Route path="/dash" element={<Dashboard />} />
                    </Routes>
                </div> */}
            </div>
        </div>
    );
};

export default Base;
