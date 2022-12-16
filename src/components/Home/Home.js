import React from "react";
import profile from '../Images/profile.jpeg'
import Home1 from './Home1';
import Home2 from './Home2';
import resume from "../Images/Rohith's Resume.pdf"
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <>
      <div className="container home-content mb-5">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={profile}
              alt="Rohith"
              className="img-fluid w-75 shadow rounded-3"></img>
          </div>
          <div className="col-sm-6 text-center my-5 my-sm-auto">
            <div className="display-5 m-3">Hi, I am Rohith Badrinath</div>
            <a href={resume} download="Rohith's Resume">
              <button type="button" class="btn btn-dark m-3 px-3">Resume</button></a>
            <Link to=".#contactMe"><button type="button" class="btn btn-dark m-3">Contact Me</button></Link>
          </div>
        </div>
      </div>
      <Home1 />
      <Home2 />
    </>
  );
};

export default Home;
