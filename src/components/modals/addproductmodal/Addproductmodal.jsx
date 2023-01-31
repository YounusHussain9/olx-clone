import React, { useState } from "react";
import { getProducts } from "../../../reduxstore/Productslice";
import { FetchProducts } from "../../../reduxstore/Fetchslice";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./addproductmodal.css";
import axios from "axios";

const INITIAL_VALUE = {
  title: "",
  desc: "",
  brand: "",
  price: "",
  location: "",
  username: "",
  phone: "",
};

function Addproductmodal() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [addProduct, setAddProduct] = useState({ INITIAL_VALUE });
  const [Image, setImage] = useState(null);
  const [checked, setChecked] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const POST_DATA = async () => {
    const request = await axios.post(`http://localhost:400/products`, {
      featured: checked,
      addTitle: addProduct.title,
      description: addProduct.desc,
      brand: addProduct.brand,
      price: addProduct.price,
      photo: Image,
      location: addProduct.location,
      name: addProduct.username,
      phone: addProduct.phone,
    });
    // const response = await request;
    // dispatch(getProducts(response));
    dispatch(FetchProducts());
  };

  const onHandleChange = (e) => {
    setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
  };

  const onImgHandleChange = (e) => {
    const file = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (e) => {
      setImage(e.target.result);
    };
  };

  const onSubmit = () => {
    // dispatch(getProducts(Image));
    POST_DATA();
    setShow(false);
  };

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
              onChange={onHandleChange}
              placeholder="Product Title"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="desc"
              onChange={onHandleChange}
              placeholder="Product Description"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Brand"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="brand"
              onChange={onHandleChange}
              placeholder="Brand"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Price"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="price"
              onChange={onHandleChange}
              placeholder="Product Price"
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" className="mb-3">
            <Form.Control
              type="file"
              name="image"
              onChange={onImgHandleChange}
              placeholder="Product Image"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="ADD Location"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="location"
              onChange={onHandleChange}
              placeholder="Your Location"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="username"
              onChange={onHandleChange}
              placeholder="Your Name"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Phone"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="phone"
              onChange={onHandleChange}
              placeholder="Phone"
            />
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
          <Button variant="primary" onClick={onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addproductmodal;
