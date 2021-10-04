// NavBarHorinzontalReact renamed to NavBar

import React from "react";
function faBarsClick() {
	var x = document.getElementById("myTopnav");

	console.log(x);
	if (x.className === "topnav") {
		x.className += " responsive";
		console.log(x);
	} else {
		x.className = "topnav";
		console.log(x);
	}
}

export default function NavBarHorizontalReact() {
	return (
		<div id="NavBarHorizontal" className="NavBar-Colors">
			<div id="NavBar-Horizontal-Flex">
				<div id="logo-nav" className="flex-start">
					Franklyn C
				</div>
				<nav id="nav-links" className="flex-center">
					<div className="align-padding">
						<a href="#About">About</a>
					</div>
					<div className="align-padding">
						<a href="https://github.com/franklyn-c" target="_blank">
							GitHub
						</a>
					</div>
					<div className="align-padding">
						<a href="#ProjectSection">Projects</a>
					</div>
					<div className="align-padding">
						<a href="/#" target="_blank">
							Resume
						</a>
					</div>
					<div className="align-padding">
						<a href="#TechStack">TechStack</a>
					</div>
				</nav>
				<div className="flex-end">
					<div id="nav-icon-box">
						{/* <a href="/#" target="">
							<i className="fab fa-twitter-square"></i>
						</a> */}
						<a href="/#" target="">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>

					<a id="nav-contact-btn" href="/#" target="">
						Contact
					</a>

					<div>{/* <a id = "nav_btn--anchor" href="/#" target="">Resume</a> */}</div>
				</div>

				<div id="Hamburger-block">
					<a href="#/" className="icon" onClick={faBarsClick}>
						<i className="fas fa-bars"></i>
					</a>
				</div>
			</div>
		</div>
	);
}
