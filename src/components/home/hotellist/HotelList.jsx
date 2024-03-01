import React, {useState, useEffect} from "react";
import { hotels } from "../../../utils/data";
import "./HotelList.css";
import { Link } from "react-router-dom";

const HotelList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(hotels)
  },[])
  return (
    <>
      <section className="hotellist" id="hotellist">
        <div className="container">
          <h2>Browse Our Hotel List</h2>
          <div className="hotels">
            {data.map((hotel) => (
              <div className="hotel" key={hotel.id}>
                <div className="hotelimg__responsive">
                  <Link to={`/singlehotel/${hotel.id}`}> See details</Link>
                  <img src={hotel.img} className="responsive" alt="hotelimg" />
                </div>
                <h3>{hotel.name}</h3>
                <span>{hotel.place}</span>
                <p>{hotel.price}</p>
                <span>{hotel.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default HotelList;
