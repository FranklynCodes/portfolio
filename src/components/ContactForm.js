import React from "react";
import ContactFormTemp from "./ContactFormTemp";

export default function ContactForm() {
	return (
		<div id="ContactForm">
			<h1 className="TechStack-Title">Contact</h1>
			<div id="FormContainer" data-aos="zoom-out">
				<div className="Social_Container_Contact">
					<div id="Social_Container">
						<a
							href="https://www.linkedin.com/in/franklyncodes/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin Contact-Icons-Fab"></i>
						</a>

						<a href="https://github.com/franklyncodes" target="_blank" rel="noreferrer">
							<i className="fab fa-github Contact-Icons-Fab"></i>
						</a>

						<a
							href="https://twitter.com/FranklynCodes"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-twitter-square Contact-Icons-Fab"></i>
						</a>
					</div>
				</div>

				<form action="" method="get" id="form_container" className="form-example">
					<div id="address-block">
						<a href="mailto:franklynhire@gmail.com" target={"_blank"} rel="noreferrer">
							<address>franklynhire@gmail.com</address>
						</a>
					</div>
					{/* <ContactFormTemp />  */}
				</form>
			</div>
			<br></br>
		</div>
	);
}
