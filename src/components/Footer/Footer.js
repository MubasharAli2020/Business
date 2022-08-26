import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
          <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <p>
                            <li>Graphic Designing</li>
                            <li>Web Development</li>
                            <li>ChatBot Integeration</li>
                        </p>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Pages</h3>
                        <p>

            <li>
              <Link to="/" className="list">Home</Link>
            </li>
            <li>
              <Link to="/services" className="list">Projects</Link>
            </li>
            <li>
              <Link to="contact" className="list">Contact</Link>
            </li>
                        </p>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>MSA</h3>
                        <p>I Provide Website Development, ChatBot Integeration, Graphic Designing Services to my clienst Locally and Gloabbly..</p>
                    </div>
                    <div class="col item social"><a href="https://www.linkedin.com/in/mubashar-ali-150963213/" target='_blank'><i class="fa-brands  fa-linkedin"></i></a><a href="https://github.com/MubasharAli2020" target='_blank'><i class="fa-brands fa-github"></i></a></div>
                </div>
               
            </div>
        </footer>
        <p class="copyright" style={{color:'white'}}>Company Name © 2022</p>
    </div>

</div>
  );
}
export default Footer;
