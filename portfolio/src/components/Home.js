import React from "react";
import profile from './Images/profile.jpeg'
import Home1 from './Home1';
import Home2 from './Home2';

const Home = () => {
  return (
    <>
      <div className="container home-content mb-5">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={profile}
              alt="Rohith"
              className="img-fluid w-75 shadow rounded-2"></img>
          </div>
          <div className="col-sm-6 my-auto home-text">
            <figure className="display-2">
              <blockquote className="blockquote">
                <p><b>You miss 100% of the shots you don’t take</b></p>
              </blockquote>
              <figcaption className="blockquote-footer">Wayne Gretzky</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Home1 />
      <Home2 />
    </>
  );
};

export default Home;
