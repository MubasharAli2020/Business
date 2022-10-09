import React from "react";
import img12 from "../images/img12.png";
import img13 from "../images/img13.jpg";
import img15 from "../images/img15.png";
import blogging from "../images/blogging.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Photoshop from '../images/photoshop.png';
import "./Home.css";
function Home() {
  return (
    <>
      <div className="home">
        {/* home main */}
        <div className="home_main">
          <div className="container grid">
            <div className="home_main_text">
              <h1>Welcome</h1>
              <p>Your Desire ~ Our Mission</p>
              <Link to="/contact" className="contact-btn btn btn-primary">
                Contact US
              </Link>
            </div>
            <img src="https://blog2opstree.files.wordpress.com/2021/02/hdadrmia.gif" alt="sorry" />
          </div>
        </div>
        {/* intro to Dodo */}
        <div className="home_intro">
          <div className="container grid">
            <div className="home_intro_text">
              <h2>About US </h2>
              <p>
                
               
               <bold>We’re a team of strategists, designers, and Website Developer that unlock creative potential. 
</bold>
                <br />
                You can check our complete services here.
              </p>
              <Link to="/work" className="services-btn btn btn-dark">
                Services
              </Link>
            </div>
            <img src={img13} alt="sorry" />
          </div>
        </div>

        {/* technologies we work */}

        <div className="home_tech">
          <h2
            className="center"
            style={{ fontSize: "50px", fontWeight: "600" }}
          >
            Technologies we Work On
          </h2>
          {/* <h4
            className="center front"
            style={{ fontSize: "30px", fontWeight: "600" }}
          >
            Frontend Technologies
          </h4> */}
          <div className="container flex">
            {/* <div className="card">
              <h4 style={{ textAlign: "center" }}>HTML</h4>
              <i
                class="fab fa-html5 fa-6x html-icon"
                style={{ textAlign: "center" }}
              ></i>
            </div>
            <div className="card">
              <h4 style={{ textAlign: "center" }}>CSS</h4>
              <i class="fab fa-css3-alt fa-6x css-icon"></i>
            </div>
            <div className="card">
              <h4 style={{ textAlign: "center" }}>JavaScript</h4>
              <i class="fab fa-js fa-6x js-icon"></i>
            </div> */}
            {/* <div className="card">
              <h4 style={{ textAlign: "center" }}>React</h4>
              <i class="fab fa-react fa-6x react-icon"></i>
            </div> */}
          </div>
          <h3
            className="center front"
            style={{ fontSize: "30px", fontWeight: "600" }}
          >
            Website Developement Technologies
          </h3>
          <div className="container flex">
            <div className="card">
              <h4 style={{ textAlign: "center" }}>Wordpress</h4>
              <i class="fa-brands fa-wordpress-simple fa-6x"></i>
            </div>
            <div className="card">
              <h4 style={{ textAlign: "center", padding: "5px" }}>Laravel</h4>
              <i class="fab fa-laravel fa-6x laravel-icon"></i>
            </div>
            <div className="card">
              <h4 style={{ textAlign: "center" }}>NodeJS</h4>
              <i class="fab fa-node fa-6x nodejs-icon"></i>
            </div>
            <div className="card">
              <h4 style={{ textAlign: "center" }}>React</h4>
              <i class="fab fa-react fa-6x react-icon"></i>
            </div>
          </div>
          <h3
            className="center front"
            style={{ fontSize: "30px", fontWeight: "600" }}
          >
            Graphic Design
          </h3>
          <div className="container flex">
            <div className="card">
              <h4 style={{ textAlign: "center" }}>Figma</h4>
              <i class="fa-brands fa-figma fa-6x"></i>
            </div>
            <div className="card">
              <h4 style={{ textAlign: "center", padding: "5px" }}>Photoshop</h4>
              <img src={Photoshop} width={120} height={120} />
            </div>
            {/* <div className="card">
              <h4 style={{ textAlign: "center" }}>NodeJS</h4>
              <i class="fab fa-node fa-6x nodejs-icon"></i>
            </div>
            <div className="card">
              <h4 style={{ textAlign: "center" }}>React</h4>
              <i class="fab fa-react fa-6x react-icon"></i>
            </div> */}
          </div>
        </div>
      



        {/* work environment */}
        <div className="work-env">
          <div className="container">
            <img src={blogging} alt="sorry" />
            {/* https://megatasktechnologies.com/assets/images/maintenance4.gif */}
          </div>
        </div>
      </div>
     
    </>
  );
}
export default Home;
