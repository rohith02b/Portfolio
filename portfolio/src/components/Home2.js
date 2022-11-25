import React from "react";
import linkedIn from './Images/linkedIn.png'
import gmail from './Images/gmail.png'

const Contact = () => {
    return (
        <>
        <div className="container-fluid my-5" id="contactMe">
            <div className="row">
                <div className="col-md-6 text-center">
                    <h1 className="text-dark">Contact Me</h1>
                </div>
                <div className="col-md-6 text-center my-4 my-md-0">
                    <div className="d-inline px-5">
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQLtdDFbdrMHfmNXtfZmzmZcBVpvTvwxFtdxDDNFFRRPWVjSvhtFKGXBcLbBTzJQPNfgrN" target="_blank">
                            <img src={gmail} alt="" width={50} height={50} className="shadow rounded-4"/>
                            </a>
                        </div>
                    <div className="d-inline px-5">
                        <a href="https://www.linkedin.com/in/rohith-badrinath-41689a227/" target="_blank">
                            <img src={linkedIn} alt="" width={50} height={50} className="shadow rounded-4" />
                            </a>
                            </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact