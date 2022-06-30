import React, { useState } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link as Links } from "react-scroll";

// const NavLink = styled(Links)``;

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
					<div>Franklyn</div>
				</div>

				<nav id="nav-links" className={click ? "flex-center active" : "flex-center"}>
					<div className="align-padding option" onClick={closeMobileMenu}>
						<a href="#About">
							<div className="NavHover">About</div>
						</a>
					</div>
					<div className="align-padding option" onClick={closeMobileMenu}>
						<a href="https://github.com/franklyncodes" target="_blank" rel="noreferrer">
							<div className="NavHover">GitHub</div>
						</a>
					</div>
					<div className="align-padding option" onClick={closeMobileMenu}>
						<a href="#Certification">
							<div className="NavHover">Certification</div>
						</a>
					</div>
					<div className="align-padding option" onClick={closeMobileMenu}>
						<a href="#ProjectContainer">
							<div className="NavHover">Projects</div>
						</a>
					</div>
					<div className="align-padding option" onClick={closeMobileMenu}>
						<a
							href="https://drive.google.com/file/d/1yFsJij7xV2ar8H8EnfcyXTK6z3nzdpsw/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							<div className="NavHover">Resume</div>
						</a>
					</div>
					<div className="align-padding option" onClick={closeMobileMenu}>
						<a href="#TechStack">
							<div className="NavHover">TechStack</div>
						</a>
					</div>
				</nav>

				<div className="flex-end">
					<div id="nav-icon-box">
						<a
							href="https://www.linkedin.com/in/franklyncodes/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin Contact-Icons-Fab"></i>
						</a>
					</div>

					<a id="nav-contact-btn" href="#ContactForm" target="">
						Contact
					</a>
				</div>
				<a
					id="Center-Logo"
					href="https://www.linkedin.com/in/franklyncodes/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-linkedin Contact-Icons-Fab"></i>
				</a>

				<div id="Hamburger-block" className="mobile-menu">
					{click ? (
						<a href="#/" className="icon" onClick={handleClick}>
							<i className="fas fa-times Hover-fab-Type-A"></i>
						</a>
					) : (
						<a href="#/" className="icon" onClick={handleClick}>
							<i className="fas fa-bars Hover-fab-Type-A"></i>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
