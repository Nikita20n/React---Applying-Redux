// src/validation/validateInfo.js
export default function validateInfo(values) {
    let errors = {};
  
    // User Name Validation
    if (!values.username || values.username.length > 4) {
      errors.username = 'Username must be 4 characters or less';
    }
  
    // Email Validation
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    // Password Validation
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    // Retype Password Validation
    if (!values.retypepassword) {
      errors.retypepassword = 'Retype password is required';
    } else if (values.retypepassword !== values.password) {
      errors.retypepassword = 'Passwords do not match';
    }
  
    // First Name Validation
    if (!values.firstname) {
      errors.firstname = 'First Name is required';
    }
  
    // Last Name Validation
    if (!values.lastname) {
      errors.lastname = 'Last Name is required';
    }
  
    // Phone Number Validation
    if (!values.phonenumber) {
      errors.phonenumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(values.phonenumber)) {
      errors.phonenumber = 'Phone Number is invalid';
    }
  
    // Address Validation
    if (!values.address) {
      errors.address = 'Address is required';
    }
  
    // Town Validation
    if (!values.town) {
      errors.town = 'Town is required';
    }
  
    // Region Validation
    if (!values.region) {
      errors.region = 'Region is required';
    }
  
    // Postcode/Zip Validation
    if (!values.postcode) {
      errors.postcode = 'Postcode/Zip is required';
    }
  
    // Country Validation
    if (!values.country) {
      errors.country = 'Country is required';
    }
  
    return errors;
  }
  