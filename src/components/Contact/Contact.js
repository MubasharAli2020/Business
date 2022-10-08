import React, { Component } from "react";
import Footer from "../Footer/Footer";
import "./Contact.css";
import ThankYou from './ThankYou';
import { withRouter } from 'react-router-dom';
class Contact extends Component {

 submitForm (e){
    console.log('Form-Submitted');
    
    this.props.history.push('/thankyou'); // <--- The page you want to redirect your user to.
  }
  render(){
  return (
    <>
      <div className="Contact">
      <div class="container">
	<div class="row align-items-center justify-content-center">
		<div class="form" >
      <div className="col-md-6">
        <img src="https://img.freepik.com/free-vector/get-touch-concept-illustration_114360-6504.jpg?t=st=1652596362~exp=1652596962~hmac=0c6201e00b4a55fe2c646478714129589af971ef329b43db810d7ece52d2d4db&w=740" />
		{/* https://i.pinimg.com/originals/ec/c3/88/ecc3882e29654a291f8824494979145b.gif */}
      </div>
			<div class="col-md-6 right-col">
				<h2>Have Something to Discuss</h2>
			<form name="contact-form" method="POST" data-netlify="true" action='/thankyou'>
            <input type="hidden" name="form-name" value="contact-form" />

								<div class="result"></div>
				<div class="form-group">
					<input   name="name"  id="formName" type="text" placeholder="Name" />
				</div>
				
				<div class="form-group">
					<input   id="formEmail"   name="email"  type="email" placeholder="Email" />
				</div>
				
				<div class="form-group">
					<textarea  rows="4"  id="formMessage" name="message" type="input" placeholder="Message" />
				</div>
				<button id="submit" type="submit">Send</button>
			</form>
			</div>
		</div>
	</div>
</div>
      </div>
     
    </>
  
  );
  }
}
export default withRouter(Contact);
