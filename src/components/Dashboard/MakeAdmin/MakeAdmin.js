import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email } = data;
        const admin = { email };

        fetch("https://shrouded-meadow-58285.herokuapp.com/makeAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(admin),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result) {
                    alert("Admin added successfully!!");
                    window.location.reload();
                }
            });
    };

    return (
        <div className="dashboardContainer" style={{ height: "100vh" }}>
            <Sidebar />
            <div className="dashboardFormContainer">
                <h3 className="dashboardTitle">Make an Admin</h3>
                <br />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Enter Email Address: </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="e.g. johndoe@gmail.com"
                            {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && (
                            <span className="error">Email is required</span>
                        )}
                    </Form.Group>
                    <br />
                    <Button className="brandBtn" type="submit">
                        Add Admin
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default MakeAdmin;
