import React, { createContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import "./Book.css";
import { Link } from "react-router-dom";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export const OrderContext = createContext();

const Book = () => {
    // payment constants
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [paymentId, setPaymentId] = useState(null);
    const [paymentBrand, setPaymentBrand] = useState(null);
    const [cardLastFour, setCardLastFour] = useState(null);
    const [cardExpireMonth, setCardExpireMonth] = useState(null);
    const [cardExpireYear, setCardExpireYear] = useState(null);
    const [payedWith, setPayedWith] = useState(null);

    const { id } = useParams();
    const [chosenHouse, setChosenHouse] = useState({});
    const { houseName, price, _id } = chosenHouse;
    const history = useHistory();
    const email = sessionStorage.getItem("email");

    // react hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const name = sessionStorage.getItem("name");

    useEffect(() => {
        fetch(`https://shrouded-meadow-58285.herokuapp.com/house/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setChosenHouse(data[0]);
                console.log(data);
            });
    }, [id]);

    // handles Payment submit
    const handlePaymentSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            const { id } = paymentMethod;
            const { brand, exp_month, exp_year, last4, funding } =
                paymentMethod.card;
            setPaymentId(id);
            setPaymentBrand(brand);
            setCardExpireMonth(exp_month);
            setCardExpireYear(exp_year);
            setCardLastFour(last4);
            setPayedWith(funding);
        }
    };

    // handles form submit
    const onSubmit = (data) => {
        const { name, email } = data;
        const date = new Date();
        const orderDetail = {
            houseId: _id,
            name,
            email,
            houseName,
            price,
            paymentId,
            paymentBrand,
            cardLastFour,
            cardExpireMonth,
            cardExpireYear,
            date,
            payedWith,
            status: "pending",
        };

        fetch("http://localhost:5000/placeOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderDetail),
        })
            .then((res) => res.json())
            .then((success) => {
                if (success) {
                    alert(
                        "Your house rent placed successfully!! Thank you for depending on us."
                    );
                    history.push("/");
                }
            });
    };

    return (
        <div>
            <h3 className="dashboardTitle">Rent Your Dream House</h3>
            <br />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        {...register("name", { required: true })}
                        defaultValue={name}
                    />
                    {errors.name && (
                        <span className="error">This field is required</span>
                    )}
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="e.g. johndoe@gmail.com"
                        {...register("email", { required: true })}
                        defaultValue={email}
                    />
                    {errors.price && (
                        <span className="error">This field is required</span>
                    )}
                </Form.Group>
                <br />

                <Form.Group>
                    <Form.Label>House you want to rent</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="house name"
                        {...register("houseName")}
                        defaultValue={houseName}
                        disabled
                    />
                    {errors.houseName && (
                        <span className="error">This field is required</span>
                    )}
                </Form.Group>
                <br />
                <br />
                <br />
                {paymentSuccess ? (
                    <Button
                        type="submit"
                        variant="primary"
                        className="formSubmitButton apt-btn"
                    >
                        Rent House
                    </Button>
                ) : (
                    <p>
                        Your will be ready to submit this form once your payment
                        is successful.
                    </p>
                )}
            </Form>
            <h5>
                Your house rent charge will be <strong>{price}</strong>
            </h5>
            <br />
            <form
                onSubmit={handlePaymentSubmit}
                style={{
                    border: "2px solid rgba(210, 215, 211, 1)",
                    padding: "4%",
                    borderRadius: "5px",
                    marginBottom: "15%",
                }}
            >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <br />
                <br />
                <Button className="apt-btn" type="submit" disabled={!stripe}>
                    Confirm Payment
                </Button>
                <br />
                <br />
                {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
                {paymentSuccess && (
                    <p style={{ color: "green" }}>
                        Your payment was successful
                    </p>
                )}
            </form>
            <br />
            <p className="text-center">
                <Link to="/">Want a different house? </Link>
            </p>
        </div>
    );
};

export default Book;
