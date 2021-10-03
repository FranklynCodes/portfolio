import React from "react";

export default function About() {
	return (
		<div id="About">
			<div className="AboutContainer">
				{/* <h1>Hello there, I'm Franklyn C</h1> */}
				<h1>Hi, I'm Franklyn C</h1>
				<h2>Full Stack Web Developer based in New York City</h2>
				<p>
					l enjoy building everything from small bussiness sites to rich interactive web
					apps. If you are a bussiness seeking a web presence, are looking to hire or
					anything else that l can help with contact me.
				</p>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<button>Contact</button>
				</div>
				<div id="Social_Container" className="About_Social">
					<div>
						<a href="/#/" target="">
							<i className="fab fa-instagram"></i>
						</a>
					</div>
					<div>
						<a href="/#/" target="">
							<i className="fab fa-twitter-square"></i>
						</a>
					</div>
					<div>
						<a href="/#/" target="">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
					<div>
						<a href="/#/" target="">
							<i className="fab fa-youtube"></i>
						</a>
					</div>
					{/* <div>
						<a href="/#/" target="">
							<i className="fab fa-twitch"></i>
						</a>
					</div> */}
					{/* <div>
						<a href="/#/" target="">
							<i className="fab fa-facebook-square"></i>
						</a>
					</div> */}
				</div>
			</div>
		</div>
	);
}
