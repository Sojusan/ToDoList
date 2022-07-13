import React from "react";
import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div >
            <h1>Hey router is setup</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >

                <Link to="/login">Login</Link> |{" "}
                <Link to="/signup">Sgnup</Link>
            </nav>
            <Outlet />
        </div>
    )

};

export default HomePage;
