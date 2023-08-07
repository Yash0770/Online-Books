import React from "react";
import { Link } from "react-router-dom";
import bookLogo from "../../imgs/book-world-logo.jpg";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="">
            <img
              src={bookLogo}
              style={{ width: "100px", height: "60px", objectFit: "cover" }}
              alt="logo-img"
            />
          </div>
          <Link className="navbar-brand" to="/">
            Book World
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="book_store">
                  Book Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="online_books">
                  Online Books
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="_"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  E-Books
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="_">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="_">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="_">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="_">
                  Sell Books
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
