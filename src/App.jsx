import React from "react";
import PropTypes from "prop-types";

export default function App({ title = "Hello!" }) {
  return <div>Hello!</div>;
}

App.propTypes = {
  name: PropTypes.string,
};
