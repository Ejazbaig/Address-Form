import React from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

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
  });

  return (
    <Container>
      <div className="myLabel">
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
