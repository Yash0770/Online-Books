import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="container-fluid mt-4">
      <div className="container background-color">
        <div className="row d-flex justify-content-around">
          <div className="col-lg-2 col-md-6 text-light">About</div>
          <div className="col-lg-2 col-md-6 text-light">Blog</div>
          <div className="col-lg-2 col-md-6 text-light">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
