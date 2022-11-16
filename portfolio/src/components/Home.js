import React from "react";
import profile from "./profile.jpeg";

const Home = () => {
  return (
    <>
      <div class="container home-content mb-5">
        <div class="row">
          <div class="col-sm-6">
            <img
              src={profile}
              alt="Rohith"
              className="img-fluid w-75 shadow "></img>
          </div>
          <div class="col-sm-6 my-auto home-text">
            <figure className="display-2">
              <blockquote class="blockquote">
                <p>You miss 100% of the shots you don’t take</p>
              </blockquote>
              <figcaption class="blockquote-footer">Wayne Gretzky</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="container text-center about my-5 py-5">
        <h3 className="p-3">
          Hi everyone i'm Rohith Badrinath , pursuing my Engineering in Sai
          Vidya Institute Of Technology.
        </h3>
        <h3 className="p-3">
          I'm currently learning Web Development and i'm very passionate about
          it :)
        </h3>
        <h3 className="p-3">
          My hobbies include playing sports such as ⚽, 🏀 and solving Leetcode
          problems ;)
        </h3>
      </div>
    </>
  );
};

export default Home;
