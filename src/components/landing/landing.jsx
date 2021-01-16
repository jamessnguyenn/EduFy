import React from "react";
import "../landing/landing.css"
import planSVG from "./img/plan.svg";
import newIdeasSVG from "./img/newIdeas.svg";
import { Link } from "react-router-dom";
import NavBar from '../navbar/navbar';


function landingPage() {
    return (
        <div className="about">
            <NavBar />
            <div className="hook-section">
                <div className="flexCenterCol sloganText">
                    <h1 className="main-title">
                        Plan Your Tasks.
              <br />
              Accomplish Goals. <br /> Earn Prizes.
            </h1>

                    <div className="blueLine"></div>
                    <div className="prize-image">
                        <img
                            src={newIdeasSVG}
                            className="newIdeasSVG"
                            alt="New Ideas Graphic" />
                    </div>
                </div>
                <div className="second-column">
                    <img src={planSVG} className="mapSVG" alt="Edufy" />
                    <div className="about-Container">

                        <div className="about-Eduft">
                            <div>
                                <h1 className="about-title"> Everyone Deserves a Prize </h1>
                                <div className="blueLine"></div>
                            </div>
                            <p className="edufyDef">
                                At Edufy, we believe students and teachers <br/>  
                                deserve  to be celebrated for their accomplishments.<br/>
                                That's why we created this platform for you to build <br/>
                                goals get motivated, achieve  your goals<br/>
                                

                    </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="directions">
                <div className="dirContainer">
                    <div className="circleDir">1</div>
                    <small className="dirSmall"> Apply </small>
                </div>
                <div className="dirContainer">
                    <div className="circleDir">2</div>
                    <small className="dirSmall"> Match </small>
                </div>
                <div className="dirContainer">
                    <div className="circleDir">3</div>
                    <small className="dirSmall"> Build </small>
                </div>
                <div className="dirContainer">
                    <div className="circleDir">4</div>
                    <small className="dirSmall"> Demo </small>
                </div>
            </div>


            <div className="footer">
                <div className="footer-container">
                    <h1 className="footerTitle"> Edufy your life now </h1>
                    <Link to="/signup">
                        <button className="BTNsignUp footerBTN"> Join now </button>
                    </Link>
                </div>
            </div>
        </div>
    );

}
export default landingPage;