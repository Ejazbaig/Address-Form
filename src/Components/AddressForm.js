import React from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { validate } from "./validation";

const initialValues = {
  name: "",
  phoneNumber: "",
  flatNumber: "",
  street: "",
  city: "",
  state: "",
  pinCode: "",
};

const onSubmit = (values) => {
  console.log(values);
};

function AddressForm(props) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Container>
      <div className="myLabel">
        <div className="navDiv">
          <NavLink to={"/home"}>
            <button className="navButton">Go Home</button>
          </NavLink>
          <NavLink to={"/back"}>
            <button className="navButton">Go back</button>
          </NavLink>
        </div>
        <h4 className="heading">Add Address</h4>
      </div>

      <div className="profileFormDiv">
        <form
          className="myForm"
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="insideDiv">
                <input
                  className="inputField"
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Full name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="form-validation">{formik.errors.name}</div>
                ) : null}
                <hr className="myHrStyle"></hr>
                <input
                  className="inputField"
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  placeholder="Mobile Number"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="form-validation">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
                <hr className="myHrStyle"></hr>
                <input
                  className="inputField"
                  type="text"
                  id="flatNumber"
                  name="flatNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.flatNumber}
                  placeholder="Flat No."
                />
                {formik.touched.flatNumber && formik.errors.flatNumber ? (
                  <div className="form-validation">
                    {formik.errors.flatNumber}
                  </div>
                ) : null}
                <hr className="myHrStyle"></hr>
                <input
                  className="inputField"
                  type="text"
                  id="street"
                  name="street"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.street}
                  placeholder="Street or Colony name"
                />
                {formik.touched.street && formik.errors.street ? (
                  <div className="form-validation">{formik.errors.street}</div>
                ) : null}
                <hr className="myHrStyle"></hr>
                <input
                  className="inputField"
                  type="text"
                  id="city"
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  placeholder="City"
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="form-validation">{formik.errors.city}</div>
                ) : null}
                <hr className="myHrStyle"></hr>
                <input
                  className="inputField"
                  type="text"
                  id="state"
                  name="state"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                  placeholder="State"
                />
                {formik.touched.state && formik.errors.state ? (
                  <div className="form-validation">{formik.errors.state}</div>
                ) : null}
                <hr className="myHrStyle"></hr>
                <input
                  className="inputField"
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pinCode}
                  placeholder="Pincode"
                />
                {formik.touched.pinCode && formik.errors.pinCode ? (
                  <div className="form-validation">{formik.errors.pinCode}</div>
                ) : null}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="buttonsDiv">
                <Button className="myButton" type="reset" variant="danger">
                  Cancel
                </Button>{" "}
                <Button className="myButton" type="submit" variant="success">
                  Save
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
}

export default AddressForm;
