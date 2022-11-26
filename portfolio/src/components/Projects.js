import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <>
            <div className="container aboutPage">
                <div className="row">
                    <div className="col-12 col-sm-6">
                    <Link class="btn btn-primary m-5 p-5 btn-lg" to="/" role="button">Portfolio website created using React and Bootstrap</Link>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="display-2 text-center m-5">More projects coming soon :)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects