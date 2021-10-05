// NavBarHorinzontalReact renamed to NavBar

import React from "react";
import styled from "styled-components";

import { Link as Links } from "react-scroll";

// ${md({ fontSize: "24px", padding: "10px 25px" })};
const NavLink = styled(Links)`
	position: relative;
	font-weight: 500;
	font-size: 16px;
	cursor: pointer;
	padding: 10px 6px;

	&:hover:after {
		width: 80%;
		left: calc(50% - 40%);
	}
	&:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: "";
		display: block;
		height: 3px;
		left: 50%;
		position: absolute;
		background: ${(props) => (props.light ? "black" : "white")};
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
`;
const NavHover = styled.span`
	&:hover:after {
		width: 100%;
		left: calc(50% - 40%);
	}
	&:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: "";
		display: block;
		height: 3px;
		left: 50%;
		// position: absolute;
		background: ${(props) => (props.light ? "black" : "white")};
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
`;

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
			<div id="NavBar-Horizontal-Flex" data-aos="fade">
				<div id="logo-nav" className="flex-start">
					Franklyn C
				</div>
				<nav id="nav-links" className="flex-center">
					<div className="align-padding">
						<a href="#About">
							<NavHover>About</NavHover>
						</a>
					</div>
					<div className="align-padding">
						<a href="https://github.com/franklyn-c" target="_blank" rel="noreferrer">
							<NavHover>GitHub</NavHover>
						</a>
					</div>
					<div className="align-padding">
						<a href="#ProjectSection">
							<NavHover>Projects</NavHover>
						</a>
					</div>
					<div className="align-padding">
						<a href="/#" target="_blank">
							<NavHover>Resume</NavHover>
						</a>
					</div>
					<div className="align-padding">
						<a href="#TechStack">
							<NavHover>TechStack</NavHover>
						</a>
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
