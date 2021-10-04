import React from "react";

import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar";
import ProjectSectionA from "../components/ProjectSection/ProjectSectionA";
import ProjectSectionB from "../components/ProjectSection/ProjectSectionB";
import ProjectSectionC from "../components/ProjectSection/ProjectSectionC";
import ProjectSectionD from "../components/ProjectSection/ProjectSectionD";
import ProjectSectionE from "../components/ProjectSection/ProjectSectionE";
import ProjectSectionF from "../components/ProjectSection/ProjectSectionF";
import ProjectSectionG from "../components/ProjectSection/ProjectSectionG";
import ProjectSectionH from "../components/ProjectSection/ProjectSectionH";
import TechStack from "../components/TechStack";
import ContactForm from "../components/ContactForm";
import CardContainer from "../components/CardContainer";

import ParticlesBackground from "../components/Particles/ParticlesBackground.jsx";

import About from "../components/About";

import { tsParticles } from "tsparticles";
import ProjectContainer from "../components/ProjectSection/ProjectContainer";

export default function WebsiteContainer() {
	return (
		<div id="WebsiteContainer">
			<NavBar />
			<About />
			<ProjectContainer />
			<TechStack />
			<ContactForm />
			<ParticlesBackground></ParticlesBackground>
			<LandingPage />
		</div>
	);
}
