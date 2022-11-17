import React from "react";
import profile from "./profile.jpeg";

const Home = () => {
  return (
    <>
      <div className="container home-content mb-5">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={profile}
              alt="Rohith"
              className="img-fluid w-75 shadow "></img>
          </div>
          <div className="col-sm-6 my-auto home-text">
            <figure className="display-2">
              <blockquote className="blockquote">
                <p>You miss 100% of the shots you don’t take</p>
              </blockquote>
              <figcaption className="blockquote-footer">Wayne Gretzky</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="container text-center about my-5 py-5">
        <h2 className="p-3">
          Hi everyone i'm Rohith Badrinath , pursuing my Engineering in Sai
          Vidya Institute Of Technology.
        </h2>
        <h2 className="p-3">
          I'm currently learning Web Development and i'm very passionate about
          it :)
        </h2>
        <h2 className="p-3">
          My hobbies include playing sports such as ⚽, 🏀 and solving Leetcode
          problems ;)
        </h2>
      </div>
    </>
  );
};

export default Home;
