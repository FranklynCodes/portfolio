import React from "react";

//TODO: Set up Form Connection

function ContactFormTemp() {
	return (
		<>
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
		</>
	);
}

export default ContactFormTemp;
