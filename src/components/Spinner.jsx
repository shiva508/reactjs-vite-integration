import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  const overLoad = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={overLoad}
      size={150}
    />
  );
};

export default Spinner;
