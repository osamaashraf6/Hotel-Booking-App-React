import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState("");
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [room, setRoom] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const toggle = (type) => {
    if (type === "date") {
      setOpen((prevState) => !prevState);
    }
    if (type === "member") {
      setOpen2((prevState) => !prevState);
    }
  };
  const increase = (type) => {
    if (type === "adult") {
      setAdult((prevState) => prevState + 1);
    }
    if (type === "child") {
      setChild((prevState) => prevState + 1);
    }
    if (type === "room") {
      setRoom((prevState) => prevState + 1);
    }
  };
  const decrease = (type) => {
    if (type === "adult" && adult > 0) {
      setAdult((prevState) => prevState - 1);
    }
    if (type === "child" && child > 0) {
      setChild((prevState) => prevState - 1);
    }
    if (type === "room" && room > 0) {
      setRoom((prevState) => prevState - 1);
    }
  };
  const handleClick = () => {
    navigate("/searchresult", { state: { place, adult, child,room } });
  };

  return (
    <>
      <div className="searchinputs">
        <div className="container">
          <div className="parsearch">
            <div className="firstsearch">
              <span>
                <FontAwesomeIcon icon={faBed} />
              </span>
              <input
                type="text"
                placeholder="Where are you going?"
                onChange={(e) => {
                  const newValue = e.target.value.trim().toLowerCase();
                  const capitalizedValue =
                    newValue.charAt(0).toUpperCase() + newValue.slice(1);
                  setPlace(capitalizedValue);
                }}
              />
            </div>

            <div className=" secondsearch pardrpdowndate">
              <span className="cursor" onClick={() => toggle("date")}>
                <FontAwesomeIcon icon={faCalendarDays} /> 04/02/2022 to
                03/04/2022
              </span>
              <div
                className="pardrpdowndate__dropdowndate"
                style={{ display: open ? "block" : "none" }}
              >
                <input type="text" placeholder="From" />
                <input type="text" placeholder="To" />
              </div>
            </div>

            <div className="thirdsearch pardrpdownmember">
              <span className="cursor" onClick={() => toggle("member")}>
                <FontAwesomeIcon icon={faPerson} /> 1 adult- 0 child- 1 room
              </span>
              <div
                className="pardrpdownmember__drpdownmember"
                style={{ display: open2 ? "block" : "none" }}
              >
                <div className="adult">
                  <span>Adult</span>
                  <button id="inc1" onClick={() => increase("adult")}>
                    +
                  </button>
                  <span className="adultvalue">{adult}</span>
                  <button id="dec1" onClick={() => decrease("adult")}>
                    -
                  </button>
                </div>
                <div className="child">
                  <span>Child</span>
                  <button id="inc2" onClick={() => increase("child")}>
                    +
                  </button>
                  <span className="childvalue">{child}</span>
                  <button id="dec2" onClick={() => decrease("child")}>
                    -
                  </button>
                </div>
                <div className="room">
                  <span>Room</span>
                  <button id="inc3" onClick={() => increase("room")}>
                    +
                  </button>
                  <span className="roomvalue">{room}</span>
                  <button id="dec3" onClick={() => decrease("room")}>
                    -
                  </button>
                </div>
              </div>
            </div>
            <button className="searchclick" onClick={() => handleClick()}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
