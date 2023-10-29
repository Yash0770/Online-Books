import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="container-fluid mt-4">
      <div className="container background-color mt-4">
        <div className="row d-flex justify-content-around p-2">
          <div className="col-lg-2 col-md-6 text-light my-3">
            <div className="row heading-color">
              <h6 className="fw-500">Our Services</h6>
            </div>
            <div className="row">
              <a href="_blank" className="hover-link">
                Text1
              </a>
            </div>
            <div className="row">
              <a href="_blank" className="hover-link">
                Text2
              </a>
            </div>
            <div className="row">
              <a href="_blank" className="hover-link">
                Text3
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 text-light my-3">
            <div className="row heading-color">
              <h6 className="fw-500">Featured Categories</h6>
            </div>
            <div className="row">
              <a href="_blank" className="hover-link">
                Text1
              </a>
            </div>
            <div className="row">
              <a href="_blank" className="hover-link">
                Text2
              </a>
            </div>
            <div className="row">
              <a href="_blank" className="hover-link">
                Text3
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 text-light my-3">
            <div className="row heading-color">
              <h6 className="fw-500">Socials</h6>
            </div>
            <div className="row">
              <a href="_blank" className="hover-link">
                Text1
              </a>
            </div>
            <div className="row">
              <a href="_blank" className="hover-link">
                Text2
              </a>
            </div>
            <div className="row">
              <a href="_blank" className="hover-link">
                Text3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
