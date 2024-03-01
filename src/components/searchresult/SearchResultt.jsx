import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { hotels } from "../../utils/data";
import "./SearchResultt.css";

const SearchResultt = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const updated = hotels.filter(
      (item) => item.place === location.state.place
    );
    setSearchResult(updated);
  }, []);

  return (
    <>
      {searchResult.map((item) => (
        <div>{item.price}</div>
      ))}
      <div>{location.state.place}</div>
        <div>{location.state.adult}</div>
        <div>{location.state.child}</div>
        <div>{location.state.room}</div>
    </>
  );
};

export default SearchResultt;
