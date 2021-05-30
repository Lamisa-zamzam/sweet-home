import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import "./App.css";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import Book from "./Components/Dashboard/Book/Book/Book";
import Bookings from "./Components/Dashboard/Bookings/Bookings";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddAHouse from "./Components/Dashboard/AddAHouse/AddAHouse";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ManageHouses from "./Components/Dashboard/ManageHouses/ManageHouses";
import "bootstrap/dist/css/bootstrap.min.css";
// 01716
const stripePromise = loadStripe(
    "pk_test_51IeJOnEbOwJYaM8zeiKuT8tF911nK1hHgA9uH77BP8Atf5XymHXR3XIlI8w8QIv5P19rA3Li3bfz15bVuK0aw9dF00MnyVJpef"
);
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
            <div className="main">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/makeAdmin">
                            <MakeAdmin />
                        </Route>
                        <Route path="/makeAdmin">
                            <MakeAdmin />
                        </Route>
                        <Route exact path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/dashboard/bookings">
                            <Bookings />
                        </Route>
                        <Route path="/dashboard/AddAHouse">
                            <AddAHouse />
                        </Route>
                        <Route path="/dashboard/makeAdmin">
                            <MakeAdmin />
                        </Route>
                        <Route path="/dashboard/ManageHouses">
                            <ManageHouses />
                        </Route>
                        <Route path="/dashboard/book/:id">
                            <Elements stripe={stripePromise}>
                                <Book />
                            </Elements>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </UserContext.Provider>
    );
}

export default App;
