import React, { useState } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

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
		// background: ${(props) => (props.light ? "black" : "white")};
		background: #eebbc3;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
`;

export default function NavBarHorizontalReact() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	Aos.init({ duration: 1000 });
	return (
		<div id="NavBarHorizontal" className="NavBar-Colors">
			<div
				id="NavBar-Horizontal-Flex"
				className="fade-in-fwdA"
				// className="fade-in-fwdB"
				// data-aos="fade-up"
				// data-aos-anchor-placement="center-center"
			>
				<div id="logo-nav" className="flex-start">
					Franklyn
				</div>

				<nav id="nav-links" className="flex-center">
					<div className="align-padding">
						<a href="#About">
							<NavHover>About</NavHover>
						</a>
					</div>
					<div className="align-padding">
						<a href="https://github.com/franklyncodes" target="_blank" rel="noreferrer">
							<NavHover>GitHub</NavHover>
						</a>
					</div>
					<div className="align-padding">
						<a href="#ProjectSection">
							<NavHover>Projects</NavHover>
						</a>
					</div>
					<div className="align-padding">
						<a href="https://www.google.com/drive/" target="_blank" rel="noreferrer">
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
						<a href="https://www.linkedin.com/in/franklyncodes/" target="">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>

					<a id="nav-contact-btn" href="#ContactForm" target="">
						Contact
					</a>

					<div>{/* <a id = "nav_btn--anchor" href="/#" target="">Resume</a> */}</div>
				</div>
				<a id="Center-Logo" href="https://www.linkedin.com/in/franklyncodes/" target="">
					<i className="fab fa-linkedin"></i>
				</a>

				<div id="Hamburger-block" className="mobile-menu">
					{click ? (
						<a href="#/" className="icon">
							<i className="fas fa-bars"></i>
						</a>
					) : (
						<a href="#/" className="icon">
							<i class="fas fa-times"></i>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
