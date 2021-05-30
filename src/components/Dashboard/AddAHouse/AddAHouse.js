import React, { useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const AddAHouse = () => {
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const {
            description,
            price,
            title,
            img,
            address,
            shortDesc,
            serviceCharge,
            securityDeposit,
            flatSize,
            floor,
            roomCategory,
            facilities,
            addFacilities,
        } = data;
        const house = {
            description,
            price,
            title,
            img,
            address,
            shortDesc,
            serviceCharge,
            securityDeposit,
            flatSize,
            floor,
            roomCategory,
            facilities,
            addFacilities,
        };

        fetch("http://shrouded-meadow-58285.herokuapp.com/addHouse", {
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
                            {...register("title", { required: true })}
                        />
                        {errors.title && (
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
                        <Form.Label>House Image URL</Form.Label>
                        <Form.Control
                            type="url"
                            placeholder="https://i.ibb.co/XS1t9zd/properties-1.jpg"
                            {...register("img", { required: true })}
                        />
                        {errors.img && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>House Detail</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            {...register("description", { required: true })}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur."
                        />
                        {errors.description && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="123 Kathal St. Tampa City"
                            {...register("address", { required: true })}
                        />
                        {errors.address && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group>
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="4800 sq ft, 3 Beds, TV, 2 Baths, 1 Garage, 3 Balcony"
                            {...register("shortDesc", { required: true })}
                        />
                        {errors.shortDesc && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group>
                        <Form.Label>Service Charge</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="$50.00"
                            {...register("serviceCharge", { required: true })}
                        />
                        {errors.serviceCharge && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group>
                        <Form.Label>Security Deposit</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="$50.00"
                            {...register("securityDeposit", {
                                required: true,
                            })}
                        />
                        {errors.securityDeposit && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group>
                        <Form.Label>Flat Size</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="3000 Sq Feet"
                            {...register("flatSize", {
                                required: true,
                            })}
                        />
                        {errors.flatSize && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group>
                        <Form.Label>Floor</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="A5(5th Floor), 6th storied building, South Facing Building"
                            {...register("floor", {
                                required: true,
                            })}
                        />
                        {errors.floor && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group>
                        <Form.Label>Room Category</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining S. Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet."
                            {...register("roomCategory", {
                                required: true,
                            })}
                        />
                        {errors.roomCategory && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group>
                        <Form.Label>Facilities</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="1 Modern Lift, All Modern Amenities 8. Semi-Furnished."
                            {...register("facilities", {
                                required: true,
                            })}
                        />
                        {errors.facilities && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Additional Facilities</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver's Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera."
                            {...register("addFacilities", { required: true })}
                        />
                        {errors.addFacilities && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Button className="brandBtn" type="submit">
                        Add
                    </Button>
                </Form>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default AddAHouse;
