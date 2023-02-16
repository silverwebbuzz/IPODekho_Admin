import React from "react";
import { ClipLoader } from "react-spinners";

const SpinnerLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClipLoader size={40} color="#009270" />
    </div>
  );
};

export default SpinnerLoader;
