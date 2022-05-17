/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

export default function Greet({ name, message='default message', children }) {
  return (
    <div>
      Hello {name} , {message}!!!! - {children}
    </div>
  );
}
Greet.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string,
  children: PropTypes.element,
};
