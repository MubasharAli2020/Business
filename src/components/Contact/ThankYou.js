import React from "react";
import Footer from "../Footer/Footer";
import "./ThankYou.css";
import thankyou from "../images/thankyou.jpg";
import { Link } from "react-router-dom";
function ThankYou() {
  return (
    <>
      <div className="thankyou">
          <div className="thank-flex">
              <img src={thankyou} alt="sorry" />
              <div className="thankyou-txt">
                  <h5>Thank You For Contacting ME!</h5>
                  <h6>I Will Contact You Soon</h6>
                  <Link to="/" alt="Image not Loaded" className="btn btn-dark">
                     Go Back to Home
              </Link>
              </div>
          </div>
      </div>
     
    </>
  );
}
export default ThankYou;
