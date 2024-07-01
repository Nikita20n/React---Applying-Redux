// src/hooks/useForm.js
import { useState } from 'react';

const useFormValidation = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (validate) {
      setErrors(validate(values));
    }
  };

  return {
    values,
    errors,
    handleChange,
  };
};

export default useFormValidation;
