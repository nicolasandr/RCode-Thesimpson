import React from "react";
import './Spinner.css'
const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Spinner;
