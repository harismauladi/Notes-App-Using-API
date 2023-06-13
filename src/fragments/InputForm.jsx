import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function InputForm({ type, name, id, placeholder, text, onChange }) {
  const [value, handlerChange] = useInput();

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <>
      <label htmlFor={name}> {text} </label> <br />
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handlerChange}
      />
    </>
  );
}

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputForm;
