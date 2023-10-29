import React, { useState } from "react";
import { Link } from "react-router-dom";
import secret from "../../../imgs/secretLibrary.jpg";
import friends from "../../../imgs/friends.jpg";
import secretA from "../../../imgs/secretLibrabyA.jpg";
import ai from "../../../imgs/ai.jpeg";

function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  
const previousPage = ()=>{
  if(currentPage > 1){
    setCurrentPage( currentPage - 1)
  }
}
const nextPage =()=>{
  if(currentPage < 3){
    setCurrentPage( currentPage + 1)
  }
}

  return (
    <div className="container-fluid mt-4">
      <div className="container">
        <div className="row d-flex justify-content-between">
        <div className="col-lg-2 col-md-1 col-sm-1">
          <div className="col">
          {currentPage === 1 ? (
            <button onClick={previousPage}>Prev</button>
          ) : <button onClick={previousPage}>Prev</button>
        }
        </div>
        </div>
          <div className="col-lg-8 col-md-4 col-sm-3">
          {currentPage === 1 &&
          <div className="col">
            <p className="text-center">Body 1</p>
          </div> 
          }
          {currentPage === 2 && 
          <div className="col">
            <p className="text-center">Body 2</p>
          </div> 
          }
          {currentPage === 3 &&
          <div className="col">
            <p className="text-center">Body 3</p>
          </div> 
          }
          </div>

        <div className="col-lg-2 col-md-1 col-sm-1">
        <div className="col">
          {currentPage === 3 ? (
            <button onClick={nextPage}>Next</button>
          ) : <button onClick={nextPage}>Next</button>

        }
        </div>
        </div>
        </div>
        <div className="row px-5 py-2">
          <div
            className="card p-1 col-lg-3 mx-2 my-2"
            style={{
              width: "14rem",
              height: '20rem'
            }}
          >
            <img
              src={secret}
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
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div
            className="card p-1 mx-2 my-2"
            style={{
              width: "14rem",
              height: '20rem'
            }}
          >
            <img
              src={friends}
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
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div
            className="card p-1 mx-2 my-2"
            style={{
              width: "14rem",
              height: '20rem'
            }}
          >
            <img
              src={secretA}
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
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div
            className="card p-1 mx-2 my-2"
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
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
