import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

//firebase
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faGoogle,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useContext(UserContext);

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // Google sign in
    const handleGoogleLogin = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const googleUser = result.user;
                const { displayName, email, photoURL } = googleUser;
                handleUser(displayName, email, photoURL, true);
                sessionStorage.setItem("userName", displayName);
                sessionStorage.setItem("userEmail", email);
                sessionStorage.setItem("userPhotoURL", photoURL);
            })
            .catch((error) => {
                handleErrorMessage(error);
            });
    };

    // handles user info
    const handleUser = (name, email, photoURL, whetherLoggedIn) => {
        const newUser = { ...user };
        if (name !== undefined) {
            newUser.name = name;
        }
        if (email !== undefined) {
            newUser.email = email;
        }
        if (photoURL !== undefined) {
            newUser.photoURL = photoURL;
        }
        if (whetherLoggedIn !== undefined) {
            newUser.isLoggedIn = true;
        }
        setUser(newUser);
        history.replace(from);
    };

    // handles error in case it occurs
    const handleErrorMessage = (error) => {
        const errorMessage = error.message;
        const newUser = { ...user };
        newUser.error = errorMessage;
        setUser(newUser);
    };

    // Register with email and password
    const handleSignUp = (name, userEmail, userPassword) => {
        const doesPasswordsMatch = checkPasswords();
        if (doesPasswordsMatch) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(userEmail, userPassword)
                .then((userCredential) => {
                    const { email } = userCredential.user;
                    handleUser(name, email, undefined, true);
                })
                .catch((error) => {
                    handleErrorMessage(error);
                });
        } else {
            const newUser = { ...user };
            newUser.error = "Your Passwords don't match";
            setUser(newUser);
        }
    };

    // Sign in with email and password
    const handleLogIn = (userEmail, userPassword) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(userEmail, userPassword)
            .then((userCredential) => {
                const { email } = userCredential.user;
                handleUser(undefined, email, undefined, true);
            })
            .catch((error) => {
                handleErrorMessage(error);
            });
    };

    // React hook form
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        data.name
            ? handleSignUp(data.name, data.email, data.password)
            : handleLogIn(data.email, data.password);
    };

    // Toggling sign up and sign in
    const toggleForm = (e) => {
        e.preventDefault();
        const newUser = { ...user };
        newUser.isNewUser = !newUser.isNewUser;
        newUser.error = "";
        setUser(newUser);
    };

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    // Checking passwords
    const handleBlur = (e) => {
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        if (e.target.name === "confirmPassword") {
            setConfirmPassword(e.target.value);
        }
    };

    const checkPasswords = () => {
        return password === confirmPassword;
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)} className="form-card">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4qERDnuFM9cBrqRQdDv-fVwKcHHIQQ3lDQ&usqp=CAU"
                    alt="Globetrotter"
                    className="logo"
                />
                <h3 style={{ display: "inline", marginLeft: "20px" }}>
                    {user.isNewUser ? "Create an account" : "Log In"}
                </h3>
                <br />
                {user.isNewUser && (
                    <input
                        type="text"
                        name="name"
                        id="name"
                        ref={register({ required: true })}
                        className="form-field"
                        placeholder="Your Name"
                    />
                )}
                <br />
                <input
                    type="email"
                    name="email"
                    id="email"
                    ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                    className="form-field"
                    placeholder="Your Email"
                />
                <br />
                {errors.email && (
                    <span className="error">
                        {errors.email.type === "required"
                            ? "Email is required"
                            : "Your Email pattern is not correct"}
                    </span>
                )}
                <br />
                <input
                    type="password"
                    name="password"
                    ref={register({
                        required: true,
                        minLength: 8,
                        pattern: /\d{1}/,
                    })}
                    placeholder="Your Password"
                    className="form-field"
                    id="password"
                    onBlur={handleBlur}
                />
                <br />
                {errors.password && (
                    <span className="error">
                        {errors.password.type === "required" &&
                            "Password is required"}
                        {errors.password.type === "pattern" &&
                            "Your password must contain one or more numbers"}
                        {errors.password.type === "minLength" &&
                            "Your Password must contain at least 8 characters"}
                    </span>
                )}
                <br />
                {user.isNewUser && (
                    <input
                        type="password"
                        name="confirmPassword"
                        ref={register({
                            required: true,
                            minLength: 8,
                            pattern: /\d{1}/,
                        })}
                        placeholder="Confirm Your Password"
                        className="form-field"
                        id="confirmPassword"
                        onBlur={handleBlur}
                    />
                )}
                <br />
                {errors.confirmPassword && (
                    <span className="error">
                        {errors.confirmPassword.type === "required" &&
                            "Password is required"}
                        {errors.confirmPassword.type === "pattern" &&
                            "Your password must contain one or more numbers"}
                        {errors.confirmPassword.type === "minLength" &&
                            "Your Password must contain at least 8 characters"}
                    </span>
                )}
                <br />
                <br />
                {!user.isNewUser && (
                    <div className="savingPassword">
                        <input
                            type="checkbox"
                            name="save-password"
                            id="save-password"
                        />
                        <label
                            htmlFor="save-password"
                            style={{ marginRight: "50px" }}
                        >
                            &nbsp;Remember Me
                        </label>
                        <Link
                            to="/login"
                            style={{ textDecoration: "underline" }}
                        >
                            Forgot Password
                        </Link>
                    </div>
                )}
                <br />
                <p className="error">{user.error}</p>
                {user.isNewUser ? (
                    <input
                        type="submit"
                        value="Create"
                        className="submit-button"
                    />
                ) : (
                    <input
                        type="submit"
                        value="Log In"
                        className="submit-button"
                    />
                )}
                <br />
                <p>
                    {user.isNewUser ? "Already" : "Don't"} have an account?{" "}
                    <a
                        href="/"
                        style={{ textDecoration: "underline" }}
                        onClick={(e) => toggleForm(e)}
                    >
                        {user.isNewUser ? "Login" : "Create An Account"}
                    </a>
                </p>
            </form>
            <div className="social-login">
                <h4>or</h4>
                <h4>continue with</h4>
                <br />
                <button
                    onClick={handleGoogleLogin}
                    className="social-media-btn"
                >
                    {" "}
                    <FontAwesomeIcon
                        icon={faGoogle}
                        style={{ color: "blue", marginRight: "-3px" }}
                        size="2x"
                    />{" "}
                    oogle
                </button>
                <br />
                <br />
                <button className="social-media-btn">
                    <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className="social-media-icon"
                        style={{ color: "royalBlue" }}
                        size="2x"
                    />{" "}
                    Facebook
                </button>
                <br />
                <br />
                <button className="social-media-btn">
                    <FontAwesomeIcon
                        icon={faTwitterSquare}
                        className="social-media-icon"
                        style={{ color: "deepSkyBlue" }}
                        size="2x"
                    />{" "}
                    Twitter
                </button>
            </div>
        </Container>
    );
};

export default Login;
