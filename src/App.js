import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login/Login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import ApartmentDetails from "./components/Home/ApartmentDetails/ApartmentDetails";

export const UserContext = createContext();

function App() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        photoURL: "",
        isNewUser: true,
        isLoggedIn: false,
        error: "",
    });

    return (
        <UserContext.Provider value={[user, setUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/apartment/:id">
                        <ApartmentDetails />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
