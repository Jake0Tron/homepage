import React from "react";
import { Parallax, Header } from "../../components/lib";
import "./Home.css";

function Home(props) {
  console.log(props);
  return (
    <div className="Home">
      <Header />
      {/* <div>start</div>
      <Parallax />
      <div>end</div> */}
    </div>
  );
}

export default Home;