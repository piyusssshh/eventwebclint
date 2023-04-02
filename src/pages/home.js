import React from "react";
import NavMenu from "../components/navMenu";
import CardsSec from "../components/cardsSec";
const Home = () => {
  return (
    <>
      <div>
        <NavMenu />
        <div className="section crausal-cont">
          <img src="../img/crausal.jpg" alt="href" className="crausal"></img>
        </div>
        <div className="container py-5" id="eventsec">
          <a href="#eventsec">
            <h2 className="c-s-1 c-head">Events</h2>
          </a>
          <p className="c-s-3 c-body w-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            facilisis lorem quis nisi commodo, ut blandit erat tristique. Proin
            eleifend, mi in malesuada pulvinar, em vel risus pellentesque
            posuere.
          </p>
          <CardsSec />
        </div>
      </div>
    </>
  );
};
export default Home;
