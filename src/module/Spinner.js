import React from "react";
import loading  from "../img/loading.gif";

export default function Spinner() {
  return (
    <>
      <div className="container">
      <img src={loading} alt="loading"/>
      </div>
    </>
  );
}

