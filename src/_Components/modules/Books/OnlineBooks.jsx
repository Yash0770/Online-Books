import React from "react";
import read from "../../../imgs/read.png";
import ai from "../../../imgs/ai.jpeg";

function OnlineBooks() {
  return (
    <div className="container-fluid mt-4">
      <div className="container">
        <div className="row px-5 py-2">
          <div
            className="card mx-2 my-2"
            style={{
              width: "18rem",
            }}
          >
            <img
              src={read}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
              className="card-img-top"
              alt="book-img"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="_" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div
            className="card mx-2 my-2"
            style={{
              width: "18rem",
            }}
          >
            <img
              src={ai}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
              className="card-img-top"
              alt="book-img"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="_" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineBooks;
