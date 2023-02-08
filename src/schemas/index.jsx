import * as Yup from "yup";

export const addProductSchema = Yup.object({
  title: Yup.string().min(5).max(15).required("Enter Product Title"),
  desc: Yup.string().min(10).required("Enter Product Description"),
  brand: Yup.string().min(3).max(10).required("Enter Product Brand"),
  price: Yup.number().min(500).max(50000).required("Enter Product Price "),
  location: Yup.string().min(5).required("Enter Your Location"),
  username: Yup.string().min(5).required("Enter Your Name"),
  phone: Yup.string().required("Enter Your Phone # "),
  photo: Yup.mixed().required("Select Product Image"),
});
