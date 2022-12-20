import React from "react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div id="sidebar">
        <h1>Homepage</h1>
        <nav>
          <ul>
            <li>
              <Link to={`news`}>News</Link>
            </li>
            <li>
              <Link to={`us`}>Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
