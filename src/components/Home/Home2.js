import React from "react";
import linkedIn from '../Images/linkedIn.png'
import gmail from '../Images/gmail.png'

const Contact = () => {
    return (
        <>
        <div className="container contact bg-dark mb-5 rounded-3">
            <div className="row">
                <div className="col-md-6 text-center">
                    <h1 className="text-light">Contact Me</h1>
                </div>
                <div className="col-md-6 text-center my-4 my-md-0">
                    <div className="d-inline px-5">
                        <a href="mailto:rohith20b@gmail.com">
                            <img src={gmail} alt="" width={50} height={50} className="shadow rounded-4"/>
                            </a>
                        </div>
                    <div className="d-inline px-5">
                        <a href="https://www.linkedin.com/in/rohith-badrinath-41689a227/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedIn} alt="LinkedIn" width={50} height={50} className="shadow rounded-4" />
                            </a>
                            </div>
                </div>
            </div>
        </div>
        <div id="contactMe"></div>
        </>
    )
}

export default Contact