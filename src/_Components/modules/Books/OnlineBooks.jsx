import React from "react";
import { Link } from "react-router-dom";
import read from "../../../imgs/read.png";
import ai from "../../../imgs/ai.jpeg";

function OnlineBooks() {
  return (
    <div className="container-fluid mt-4">
      <div className="container">
        <div className="row px-5 py-2">
        <div
            className="card p-1 col-lg-3 mx-2 my-2"
            style={{
              width: "14rem",
              height: '20rem'
            }}
          >
            <img
              src={read}
              style={{ width: "94%", height: "150px", marginTop: '6px', marginLeft:'6px', 
            }}
              className="card-img-top"
              alt="book-img"
            />
            <div className="card-body p-2">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the
              </p>
              <div style={{textAlign:'center'}}>
              <Link to="/online_books" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div
            className="card p-1 col-lg-3 mx-2 my-2"
            style={{
              width: "14rem",
              height: '20rem'
            }}
          >
            <img
              src={ai}
              style={{ width: "94%", height: "150px", marginTop: '6px', marginLeft:'6px', 
            }}
              className="card-img-top"
              alt="book-img"
            />
            <div className="card-body p-2">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the
              </p>
              <div style={{textAlign:'center'}}>
              <Link to="/online_books" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineBooks;
