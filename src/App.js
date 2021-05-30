import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import "./App.css";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import Book from "./components/Dashboard/Book/Book/Book";
import Bookings from "./components/Dashboard/Bookings/Bookings";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddAHouse from "./components/Dashboard/AddAHouse/AddAHouse";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ManageHouses from "./components/Dashboard/ManageHouses/ManageHouses";
import "bootstrap/dist/css/bootstrap.min.css";
import ApartmentDetails from "./components/Home/ApartmentDetails/ApartmentDetails";
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
                        <Route path="/apartment/:id">
                            <ApartmentDetails />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </UserContext.Provider>
    );
}

export default App;
