import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
    faClipboardList,
    faCommentDots,
    faPlusCircle,
    faShoppingCart,
    faTasks,
    faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    const email = sessionStorage.getItem("email");
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(
            `https://shrouded-meadow-58285.herokuapp.com/checkIfAdmin?email=${email}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data[0]) {
                    setIsAdmin(true);
                }
            });
    }, [email]);

    const id = "60799c3a92b36b4d686c1d80";

    return (
        <div className="sidebarContainer">
            <h3 className="mb-5">
                <strong>Sweet Home</strong>
            </h3>
            <hr style={{ color: "white" }} />
            {!isAdmin && (
                <Link to={`/dashboard/book/${id}`}>
                    <div className="dashboardList">
                        <FontAwesomeIcon
                            className="sidebarIcon"
                            icon={faShoppingCart}
                        />{" "}
                        <h5>Rent a House</h5>
                    </div>
                </Link>
            )}
            <Link to="/dashboard/bookings">
                {" "}
                <div
                    className="dashboardList"
                    onClick={() => window.location.pathname === "/"}
                >
                    <FontAwesomeIcon
                        className="sidebarIcon"
                        icon={faClipboardList}
                    />
                    <h5>{isAdmin ? "Manage Orders" : "Your Booking list"}</h5>
                </div>
            </Link>
            {isAdmin && (
                <Link to="/dashboard/addAHouse">
                    {" "}
                    <div className="dashboardList">
                        <FontAwesomeIcon
                            className="sidebarIcon"
                            icon={faPlusCircle}
                        />
                        <h5>Add a House</h5>
                    </div>
                </Link>
            )}
            {isAdmin && (
                <Link to="/dashboard/makeAdmin">
                    <div className="dashboardList">
                        <FontAwesomeIcon
                            className="sidebarIcon"
                            icon={faUserShield}
                        />
                        <h5>Make an Admin</h5>
                    </div>
                </Link>
            )}
            {isAdmin && (
                <Link to="/dashboard/manageHouses">
                    <div className="dashboardList">
                        <FontAwesomeIcon
                            className="sidebarIcon"
                            icon={faTasks}
                        />
                        <h5>Manage Houses</h5>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default Sidebar;
