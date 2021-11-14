import React from "react";

import NavBar from "../components/NavBar";

import TechStack from "../components/TechStack";
import ContactForm from "../components/ContactForm";
import CardContainer from "../components/CardContainer";

import ParticlesBackground from "../components/Particles/ParticlesBackground.jsx";

import About from "../components/About";

import { tsParticles } from "tsparticles";
import ProjectContainer from "../components/ProjectSection/ProjectContainer";
import ContactFormNetlify from "../components/ContactFormNetlify";

// Certifications
import Certifications from "../components/Certification";

export default function WebsiteContainer() {
	return (
		<div id="WebsiteContainer">
			<NavBar />
			<About />
			<ProjectContainer />
			<TechStack />
			<Certifications></Certifications>
			<ContactForm />
			{/* <ContactFormNetlify /> */}
			{/* <ParticlesBackground></ParticlesBackground> */}
		</div>
	);
}
