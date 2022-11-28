import React from "react";
import music from './Images/weelnd2.jpg'
import football from './Images/football2.jpg'
import twitter from './Images/twitter.png'
import gitHub from './Images/gitHub.png'

const AboutMe = () => {
    return (
        <>
        <div className="container my-5 rounded-3">
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade aboutPage text-center" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={football} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-block">
                                <h4>I love playing and watching football!</h4>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption d-block">
                                <h4>I love music and my dream is to go to a weeknd concert!</h4>
                        </div>
                        <img src={music} class="d-block w-100" alt="..."/>
                            
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div className="container aboutMeText text-center my-5 rounded-3">
            <h1 className="my-5 pt-5">
                About me :) 
            </h1>

            <h5 className="my-5">
                Hello I am ROHITH BADRINATH and I am passionate about building FULL-STACK applications.
            </h5>

            <h5 className="my-5">
                I always love to learn new things and I am a quick learner!
            </h5>

            <h5 className="my-5 pb-5">
                I have taken part in SMART INDIA HACKATHON 2022 and worked with my team to build a VIRTUAL EXCAVATION GAME. It was a wonderful experience and I am looking forward to attending more Hackathons of such. 
            </h5>
        </div>

        <div className="container contactAbout mb-5 rounded-3">
            <div className="row">
                <div className="col-md-6 text-center">
                    <h1 className="text-dark">Social Network</h1>
                </div>
                <div className="col-md-6 text-center my-4 my-md-0">
                    <div className="d-inline px-5">
                        <a href="https://github.com/rohith02b" target="_blank" rel="noopener noreferrer">
                            <img src={gitHub} alt="" width={50} height={50} className="shadow rounded-4"/>
                            </a>
                        </div>
                    <div className="d-inline px-5">
                        <a href="https://twitter.com/RohithBadrinath" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="" width={50} height={50} className="shadow rounded-4" />
                            </a>
                            </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default AboutMe