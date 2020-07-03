export const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (!/^[a-zA-Z-, ]+(\s{0,1}[a-zA-Z-, ])*$/.test(values.name)) {
    errors.name = "Only text Allowed";
  } else if (values.name.length > 30) {
    errors.name = "Character limit exceeded";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (!/^\d{10}$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Provide correct format";
  } else if (values.phoneNumber.length > 10) {
    errors.phoneNumber = "Number length exceeded";
  }
  if (!values.flatNumber) {
    errors.flatNumber = "Required";
  } else if (values.flatNumber.length > 30) {
    errors.flatNumber = "Character limit exceeded";
  }
  if (!values.street) {
    errors.street = "Required";
  } else if (values.street.length > 100) {
    errors.street = "Character limit exceeded";
  }
  if (!values.city) {
    errors.city = "Required";
  } else if (!/^[a-zA-Z-, ]+(\s{0,1}[a-zA-Z-, ])*$/.test(values.city)) {
    errors.city = "Only text Allowed";
  } else if (values.city.length > 30) {
    errors.city = "Character limit exceeded";
  }
  if (!values.state) {
    errors.state = "Required";
  } else if (!/^[a-zA-Z-, ]+(\s{0,1}[a-zA-Z-, ])*$/.test(values.state)) {
    errors.state = "Only text Allowed";
  } else if (values.state.length > 30) {
    errors.state = "Character limit exceeded";
  }
  if (!values.pinCode) {
    errors.pinCode = "Required";
  } else if (!/^\d{10}$/.test(values.pinCode)) {
    errors.pinCode = "Provide correct format";
  } else if (values.pinCode.length > 10) {
    errors.pinCode = "Number length exceeded";
  }
  return errors;
};
