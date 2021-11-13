import React from "react";

export default function ContactForm() {
	return (
		<div id="ContactForm">
			<h1 className="TechStack-Title">Contact</h1>
			<div id="FormContainer">
				<div className="Social_Container_Contact">
					{/* <div>
						<a href="mailto:franklynhire@gmail.com" target={"_blank"} rel="noreferrer">
							<i class="far fab fa-envelope"></i>
						</a>
					</div> */}

					<div id="Social_Container">
						{/* <div>
							{" "}
							<a href="/#/" target="">
								<i className="fab fa-instagram"></i>
							</a>
						</div> */}
						<div>
							<a href="/#/" target="">
								<i className="fab fa-linkedin"></i>
							</a>
						</div>
						<div>
							<a
								href="https://github.com/franklyncodes"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-github"></i>
							</a>
						</div>
						<div>
							<a
								href="https://twitter.com/FranklynCodes"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-twitter-square"></i>
							</a>
						</div>
						{/* <div>
							{" "}
							<a href="/#/" target="">
								<i className="fab fa-youtube"></i>
							</a>
						</div> */}
						{/* <div>
							{" "}
							<a href="/#/" target="">
								<i className="fab fa-twitch"></i>
							</a>
						</div> */}
						{/* <!-- <a href="/#/" target=""><i className="fab fa-facebook-square"></i></a> --> */}
					</div>
				</div>

				<form action="" method="get" id="form_container" className="form-example">
					<div id="address-block">
						<a href="mailto:franklynhire@gmail.com" target={"_blank"} rel="noreferrer">
							<address>franklynhire@gmail.com</address>
						</a>
					</div>
					<div>
						<label htmlFor="name">Name:</label>
						<input type="text" name="name" id="name" required />
					</div>

					<div>
						<label htmlFor="email">Email:</label>
						<input type="email" name="email" id="email" required />
					</div>

					{/* <!-- <div className="form-example">
						<label htmlFor="message">Message:</label>
						<input type="text" id="message" name="message" required>

					</div> --> */}

					<div>
						<label htmlFor="message">Message:</label>
						<textarea type="text" id="message" name="message" required></textarea>
					</div>

					<div id="button">
						<input type="submit" value="Send" id="sendButton" />
					</div>

					{/* <!-- 					
					<div className="form-example">
						<button>Send</button>
					</div> --> */}
				</form>
			</div>
		</div>
	);
}
