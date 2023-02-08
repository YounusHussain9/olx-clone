import { useFormik } from "formik";
import { FetchProducts } from "../../../reduxstore/Fetchslice";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import axios from "axios";
import { addProductSchema } from "../../../schemas";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import "./addproductmodal.css";

const INITIAL_VALUE = {
  title: "",
  desc: "",
  brand: "",
  price: "",
  location: "",
  username: "",
  phone: "",
  photo: null,
};

function Addproductmodal() {
  const {
    values,
    errors,
    setFieldValue,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: INITIAL_VALUE,
    validationSchema: addProductSchema,
    onSubmit: (values) => {
      onSubmitHandle();
    },
  });

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [Image, setImage] = useState(null);
  const [checked, setChecked] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  //post data in json
  const POST_DATA = async () => {
    const request = await axios.post(`http://localhost:400/products`, {
      featured: checked,
      addTitle: values.title,
      description: values.desc,
      brand: values.brand,
      price: values.price,
      photo: Image,
      location: values.location,
      name: values.username,
      phone: values.phone,
    });
    dispatch(FetchProducts());
  };

  //handle image file
  if (values.photo) {
    const reader = new FileReader();
    reader.readAsDataURL(values.photo);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
  }

  //submit product form
  const onSubmitHandle = () => {
    POST_DATA();
    setShow(false);
  };

  //open and close modal
  const toggle = (value) => {
    return !value;
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add your Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="ADD Title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="title"
              placeholder="Product Title"
              value={values.title}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.title && touched.title ? <h6>{errors.title}</h6> : null}
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="desc"
              placeholder="Product Description"
              value={values.desc}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.desc && touched.desc ? <h6>{errors.desc}</h6> : null}
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Brand"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="brand"
              placeholder="Brand"
              value={values.brand}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.brand && touched.brand ? <h6>{errors.brand}</h6> : null}
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Price"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="price"
              placeholder="Product Price"
              value={values.price}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.price && touched.price ? <h6>{errors.price}</h6> : null}
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" className="mb-3">
            <Form.Control
              type="file"
              name="photo"
              placeholder="Product Image"
              onChange={(e) => {
                setFieldValue("photo", e.target.files[0]);
              }}
            />
            {errors.photo && touched.photo ? <h6>{errors.photo}</h6> : null}
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="ADD Location"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="location"
              placeholder="Your Location"
              value={values.location}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.location && touched.location ? (
              <h6>{errors.location}</h6>
            ) : null}
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="username"
              placeholder="Your Name"
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.username && touched.username ? (
              <h6>{errors.username}</h6>
            ) : null}
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Phone"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="phone"
              placeholder="Phone"
              value={values.phone}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.phone && touched.phone ? <h6>{errors.phone}</h6> : null}
          </FloatingLabel>
          <label htmlFor="Featured">
            Featured{" "}
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                setChecked(toggle);
              }}
            />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addproductmodal;
