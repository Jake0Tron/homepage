import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="news">News</Link>
      {/* <Link to="/weather">Weather</Link> */}
      {/* <Link to="/forecast">Forecast</Link> */}
    </>
  );
};

export default Header;
