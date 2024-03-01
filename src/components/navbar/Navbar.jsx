import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => (
  <>
    <header className="header" id="header">
      <div className="container">
        <div className="parhead">
          <div className="parhead__brand">
            <Link to="/">HotelBooking</Link>
          </div>
          <div className="parhead__user">
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </header>
    {/* End header */}
    <nav className="nav" id="nav">
      <div className="container">
        <div className="parnav">
          <ul className="parnav__ul">
            <li>
              <a href="#" className="active">
                <FontAwesomeIcon icon={faBed} /> Stays
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faPlane} /> Flights
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCar} /> Car rentals
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faBed} /> Attractions
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTaxi} /> Airport taxis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
