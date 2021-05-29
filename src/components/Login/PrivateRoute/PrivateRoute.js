import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
    const token = sessionStorage.getItem("token");
    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
