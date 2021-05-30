import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import "./App.css";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import Bookings from "./components/Dashboard/Bookings/Bookings";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddAHouse from "./components/Dashboard/AddAHouse/AddAHouse";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ManageHouses from "./components/Dashboard/ManageHouses/ManageHouses";
import "bootstrap/dist/css/bootstrap.min.css";
import ApartmentDetails from "./components/Home/ApartmentDetails/ApartmentDetails";
import Book from "./components/Dashboard/Book/Book/Book";

const stripePromise = loadStripe(
    "pk_test_51IeJOnEbOwJYaM8zeiKuT8tF911nK1hHgA9uH77BP8Atf5XymHXR3XIlI8w8QIv5P19rA3Li3bfz15bVuK0aw9dF00MnyVJpef"
);

function App() {
    return (
        <div className="main">
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/book">
                        <Book />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute exact path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard/bookings">
                        <Bookings />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard/AddAHouse">
                        <AddAHouse />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard/makeAdmin">
                        <MakeAdmin />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard/ManageHouses">
                        <ManageHouses />
                    </PrivateRoute>
                    <PrivateRoute path="/apartment/:id">
                        <Elements stripe={stripePromise}>
                            <ApartmentDetails />
                        </Elements>
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
