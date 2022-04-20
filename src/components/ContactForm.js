import React from "react";

export default function ContactForm() {
	return (
		<div id="ContactForm">
			<h1 className="TechStack-Title">Contact</h1>
			<div id="FormContainer">
				<div className="Social_Container_Contact">
					<div id="Social_Container">
						<div>
							<a
								href="https://www.linkedin.com/in/franklyncodes/"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-linkedin Hover-fab-Type-B"></i>
							</a>
						</div>
						<div>
							<a
								href="https://github.com/franklyncodes"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-github Hover-fab-Type-B"></i>
							</a>
						</div>
						<div>
							<a
								href="https://twitter.com/FranklynCodes"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-twitter-square Hover-fab-Type-B"></i>
							</a>
						</div>
					</div>
				</div>

				<form action="" method="get" id="form_container" className="form-example">
					<div id="address-block">
						<a href="mailto:franklynhire@gmail.com" target={"_blank"} rel="noreferrer">
							<address>franklynhire@gmail.com</address>
						</a>
					</div>

					<div className="Form-Input-Container">
						<label htmlFor="name">Name:</label>
						<input type="text" name="name" id="name" required />
					</div>

					<div className="Form-Input-Container">
						<label htmlFor="email">Email:</label>
						<input type="email" name="email" id="email" required />
					</div>

					<div className="Form-Input-Container">
						<label htmlFor="message">Message:</label>
						<textarea type="text" id="message" name="message" required></textarea>
					</div>

					<div id="button">
						<input type="submit" value="Send" id="sendButton" />
					</div>
				</form>
			</div>
		</div>
	);
}
