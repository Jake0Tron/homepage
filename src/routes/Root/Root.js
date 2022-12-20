import React from "react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`news`}>News</Link>
            </li>
            <li>
              <Link to={`us`}>Us</Link>
            </li>
            <li>
              <Link to={`gallery`}>Gallery</Link>
            </li>
          </ul>
        </nav>
        <h1>Homepage</h1>
      </div>
      <div id="rootContent">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
