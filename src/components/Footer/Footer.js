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
                            <li>Social Media Management</li>
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
              <Link to="/work" className="list">Services</Link>
            </li>
            <li>
              <Link to="contact" className="list">Contact</Link>
            </li>
                        </p>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>NETDESIGNTODAY</h3>
                        <p>We Provide Website Development, ChatBot Integeration, Graphic Designing Services to our clienst Locally and Gloabbly.</p>
                    </div>
                    <div class="col item social">
                      <a href="https://www.facebook.com/profile.php?id=100087206791688" target='_blank'><i class="fa-brands fa-facebook"></i></a>
                      <a href="https://www.instagram.com/netdesigntoday/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                      <a href="https://twitter.com/NetDesignToday?t=9ie3dowJ7eiNcVPg72csrw&s=09" target='_blank'><i class="fa-brands fa-twitter"></i></a>
                      <a href="https://www.linkedin.com/in/net-designtoday-261271254" target='_blank'><i class="fa-brands fa-linkedin"></i></a>

                      </div>
                </div>
               
            </div>
        </footer>
        <p class="copyright" style={{color:'white'}}>NETDESIGNTODAY©2022</p>
    </div>

</div>
  );
}
export default Footer;
