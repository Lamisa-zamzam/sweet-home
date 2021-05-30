import React, { useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const AddAHouse = () => {
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { detail, price, houseName } = data;
        const house = { detail, price, houseName, imageURL };

        fetch("https://shrouded-meadow-58285.herokuapp.com/addHouse", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(house),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert("Your house has been added successfully!!");
                    window.location.reload();
                }
            });
    };

    // handles imgbb image upload
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set("key", "b238360b7dd6273493645ed46cb79ec6");
        if (event.target.files[0]) {
            imageData.append("image", event.target.files[0]);
            axios
                .post("https://api.imgbb.com/1/upload", imageData)
                .then((res) => {
                    setImageURL(res.data.data.display_url);
                })
                .catch((err) => {
                    setError(err);
                });
        }
    };

    return (
        <div className="dashboardContainer">
            <Sidebar />
            <div className="dashboardFormContainer">
                <h3 className="dashboardTitle">Add A House</h3>
                <br />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>House Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter House Name"
                            {...register("houseName", { required: true })}
                        />
                        {errors.houseName && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Price"
                            {...register("price", { required: true })}
                        />
                        {errors.price && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group>
                        <Form.Label>Upload House Image</Form.Label>
                        <br />
                        <Form.Control
                            type="file"
                            placeholder="Upload Image"
                            onChange={handleImageUpload}
                        />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>House Detail</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            {...register("detail", { required: true })}
                        />
                        {errors.price && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />
                    {imageURL ? (
                        <Button className="brandBtn" type="submit">
                            Add
                        </Button>
                    ) : (
                        <p>
                            You will be able to submit this form as soon as your
                            image is ready to be uploaded.
                        </p>
                    )}
                </Form>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default AddAHouse;
