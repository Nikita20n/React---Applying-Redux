// src/components/RegistrationForm.js
import React from 'react';
import validateInfo from '../validateInfo';
import useFormValidation from './useFormValidation';


const Registration = () => {
  const { values, errors, handleChange } = useFormValidation(validateInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', values);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            value={values.username || ''}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Retype Password:</label>
          <input
            type="password"
            name="retypepassword"
            value={values.retypepassword || ''}
            onChange={handleChange}
          />
          {errors.retypepassword && <p>{errors.retypepassword}</p>}
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={values.firstname || ''}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={values.lastname || ''}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phonenumber"
            value={values.phonenumber || ''}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={values.address || ''}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div>
          <label>Town:</label>
          <input
            type="text"
            name="town"
            value={values.town || ''}
            onChange={handleChange}
          />
          {errors.town && <p>{errors.town}</p>}
        </div>
        <div>
          <label>Region:</label>
          <input
            type="text"
            name="region"
            value={values.region || ''}
            onChange={handleChange}
          />
          {errors.region && <p>{errors.region}</p>}
        </div>
        <div>
          <label>Postcode/Zip:</label>
          <input
            type="text"
            name="postcode"
            value={values.postcode || ''}
            onChange={handleChange}
          />
          {errors.postcode && <p>{errors.postcode}</p>}
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={values.country || ''}
            onChange={handleChange}
          />
          {errors.country && <p>{errors.country}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
