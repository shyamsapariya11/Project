import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" color="Red" href="#">
        Netflix
        </a>

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
             <Link className="nav-link" to="/netflixhome">
                NEtflix Home
              </Link>
            </li>

            <li className="nav-item">
               <Link className="nav-link" to="/netflixmovies">
                NEtflix Movies
              </Link>
            </li>

            <li className="nav-item">
               <Link className="nav-link" to="/netflixshows">
                NEtflix Shows
              </Link>
            </li>

              <li className="nav-item">
               <Link className="nav-link" to="/netflixnews">
                NEtflix News
              </Link>
            </li>

            <li className="nav-item">
               <Link className="nav-link" to="/Iplteam">
                Ipl Team
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};


