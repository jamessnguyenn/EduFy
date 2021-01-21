import React, { useEffect } from "react";
import "../landing/landing.css"
import planSVG from "./img/plan.svg";
import newIdeasSVG from "./img/newIdeas.svg";
import { Link, useHistory } from "react-router-dom";
import NavBar from '../unloggedNavBar/unloggedNavBar';
import { useState } from "react";


function LandingPage() {
    
    const history = useHistory();
    const [redirect, setRedirect] = useState(false);
    useEffect(() =>{
        if(localStorage.getItem('user_id') && localStorage.getItem('token')){
           setRedirect(true);
        }
    },[])
    
    if(redirect){
        history.push('/profile');
    }

    return (
        <div className="about">
            <NavBar />
            <div className="banner">
                <div className="banner-container">
                    <h1 className="bannerTitle">Education For You</h1>
                    <Link to="/signup">
                        <button className="join-button"> Join now </button>
                    </Link>
                </div>
            </div>
            <div className="hook-section">
                <div className="sloganText">
                    <h1 className="main-title">
                        Motivation for Your Education
            </h1>

                    <div className="blueLine"></div>
                    <div className="prize-image">
                    <p className="edufyDef">
                              Edufy is EDU-cation For You! We're not just any <br/> other productivity application. 
                              Our productivity app was made  <br/>to not only provide motivation but to also allow you <br/>
                               to celebrate your achievements.<br/>
                               <br/> 

                    </p>
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
                                goals, get motivated, and achieve  your dreams.<br/>
                                

                    </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="explanation-container">
            <div className="explanation">
                            <div>
                                <h1 className="about-title"> How Does it Work? </h1>
                                <div className="blueLine"></div>
                                <p className="edufyDef">
                                You first start off with 100 health and 0 gold. Every time you finish a task, you gain 10 coins! <br/>
                                If you don't finish the task, your health will dramatically drop. Coins you have earned can be   <br/>
                                spent at the shop. Your coins show how hard you've hard so make sure you spend it wisely.
                                <br/>  At 0 health, your profile wil fully reset, so make sure to get those tasks going!  <br/>
                                </p>
                            </div>
                           
                    </div>


            </div>

            <div className="directions">
                <div className="dirContainer">
                    <div className="circleDir">1</div>
                    <small className="dirSmall">&nbsp;Build Goals&nbsp;&nbsp; </small>
                </div>
                <div className="dirContainer">
                    <div className="circleDir">2</div>
                    <small className="dirSmall">&nbsp;&nbsp; Get Motivated&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
                </div>
                <div className="dirContainer">
                    <div className="circleDir">3</div>
                    <small className="dirSmall"> &nbsp;&nbsp;Win Rewards </small>
                </div>
                <div className="dirContainer">
                    <div className="circleDir">4</div>
                    <small className="dirSmall">&nbsp;&nbsp; Edufy and Repeat </small>
                </div>
            </div>


            <div className="footer">
                <div className="footer-container">
                    <h1 className="footerTitle"> Edufy your life now </h1>
                    <Link to="/signup">
                        <button className="footer-button"> Join now </button>
                    </Link>
                    <div className="attribution">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </div>
        </div>
    );

}
export default LandingPage;