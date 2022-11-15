import React from "react"
import profile from "./profile.jpeg"

const Home = () => {
    return (
        <>
        <div class="container home-content">
            <div class="row">
                <div class="col-sm-6">
                    <img src={profile} alt="Rohith" className="img-fluid w-75 shadow "></img>
                </div>
                <div class="col-sm-6 my-auto home-text">
                    <figure className="display-1">
                        <blockquote class="blockquote">
                            <p>You miss 100% of the shots you don’t take</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Wayne Gretzky
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home