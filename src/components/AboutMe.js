import React from "react";
import twitter from './Images/twitter.png'
import gitHub from './Images/gitHub.png'
import Cse from './Images/Image-1.jpg'
import SIH from './Images/aboutPic2.jpg'
import football from './Images/aboutpic3.jpg'

const AboutMe = () => {
    return (
        <>
        
                <div className="card w-50 mx-auto bg-dark aboutMeText text-light mb-5">
                    <img src={Cse} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title mb-3 text-center">Computer Science Engineer</h5>
                        <h6 class="card-text m-2 text-center">I am currently pursuing my engineering at Sai Vidya Institute Of Engineering. I am very passionate about learning new technologies.I am currently looking for opportunities to build full-stack web applications.</h6>
                    </div>
                </div>

                <div class="card mx-auto w-50 bg-dark my-5">
                    <img src={SIH} class="card-img-top" alt=""/>
                    <div class="card-body text-light">
                        <h5 class="card-title text-center mb-3">SMART INDIA HACKATHON 2022</h5>
                        <h6 class="card-text text-center">My team was qualified for the final round of SIH-2022 and we created a virtual excavation game using unity. It was a wonderful experience to work with a team.</h6>
                    </div>
                </div>

                <div class="card mx-auto w-50 bg-dark my-5 ">
                    <img src={football} class="card-img-top h-50" alt=""/>
                    <div class="card-body text-light">
                        <h5 class="card-title text-center">North Zone Runners in football</h5>
                        <p class="card-text text-center">Represented my college in football and came runners up in the northern zone of Bengaluru. My other hobbies include listening to music and playing basketball.</p>
                    </div>
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