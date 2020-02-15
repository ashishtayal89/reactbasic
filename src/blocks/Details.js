import React from "react";
import PropTypes from "prop-types";

export default function Details({ firstName, lastName, mobile }) {
  return (
    <div>
      <div>{firstName}</div> <div>{lastName}</div> <div>{mobile}</div>
    </div>
  );
}

Details.prototype = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    mobile: PropTypes.string
  })
};
