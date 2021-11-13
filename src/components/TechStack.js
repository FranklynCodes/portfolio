import React from "react";

// Languages

import CPP from "../image/TechStackImages/languages/Cpp.svg";
import CPPCropped from "../image/TechStackImages/languages/Cpp-cropped.svg";
import Javascript from "../image/TechStackImages/languages/JavaScript.svg";
import CHashTag from "../image/TechStackImages/languages/C-sharp.svg";
import Python from "../image/TechStackImages/languages/Python.svg";
import TypeScript from "../image/TechStackImages/languages/Typescript.svg";

// Front End

import CSS3 from "../image/TechStackImages/front/css-3.svg";

import CSS from "../image/TechStackImages/front/Css.svg";
import Figma from "../image/TechStackImages/front/Figma.svg";
import html_5 from "../image/TechStackImages/front/html-5.svg";

import Html from "../image/TechStackImages/front/Html.svg";
import ReactSVG from "../image/TechStackImages/front/React.svg";
import Sass from "../image/TechStackImages/front/Sass.svg";

// Back End

import DotNet from "../image/TechStackImages/back/DotNET.svg";
import NodeJS from "../image/TechStackImages/back/NodeJS.svg";
import Express from "../image/TechStackImages/back/express.png";
import Stripe from "../image/TechStackImages/back/stripe-4.svg";
import ReduxSVG from "../image/TechStackImages/back/Redux.svg";

// Database
import MongoDBSVG from "../image/TechStackImages/back/mongodb.svg";
import MySQL from "../image/TechStackImages/back/mysql-4.svg";
import PostgreSQL from "../image/TechStackImages/back/postgresql.svg";

// Hosting / Cloud
import FireBase from "../image/TechStackImages/back/Firebase_Logo_Logomark.svg";
import Netlify from "../image/TechStackImages/back/Netlify-logomark-light.svg";
import Aws from "../image/TechStackImages/back/aws-2.svg";
import Heroku from "../image/TechStackImages/back/heroku-1.svg";

// Promised based handling frameworks
import NextJS from "../image/TechStackImages/back/next-js.svg";
import Axios from "../image/TechStackImages/back/axios.svg";

// Query Technologies

import PostMan from "../image/TechStackImages/back/postman.svg";
import Apollo from "../image/TechStackImages/back/apollo-graphql-compact.svg";
import GraphQLSVG from "../image/TechStackImages/back/graphql-logo-2.svg";

// Source Control

import Git from "../image/TechStackImages/back/GIT.svg";
import GitHub from "../image/TechStackImages/back/GitHub.svg";
import GitLab from "../image/TechStackImages/back/GitLab.svg";

// Enviorment / Testing

import Docker from "../image/TechStackImages/back/docker-3.svg";

// Certifications
import Certifications from "./Certification";

/**
 * | Commented out GitLab
 * | Commented out DotNet
 * | Commented out Docker ?
 *
 *
 *
 *
 */

export default function TechStack() {
	function Languages() {
		return (
			<div id="Skill-Container">
				<h2>Languages</h2>

				<div className="card_container_Outer_A">
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={Javascript} alt=" " />
						<h3>JavaScript</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={TypeScript} alt=" " />
						<h3>Typescript</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={Python} alt=" " />
						<h3>Python</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={CHashTag} alt=" " />
						<h3>C#</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={CPPCropped} alt=" " />
						<h3>C++</h3>
					</div>
				</div>
			</div>
		);
	}

	function FrontEnd() {
		return (
			<div id="Skill-Container">
				<h2>Front End</h2>
				<div className="card_container_Outer_A">
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={html_5} alt=" " />
						<h3>HTML</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={CSS3} alt=" " />
						<h3>CSS</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={ReactSVG} alt=" " />
						<h3>React</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={Sass} alt=" " />
						<h3>Sass</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={Figma} alt=" " />
						<h3>Figma</h3>
					</div>
				</div>
			</div>
		);
	}

	function BackEnd() {
		return (
			<div id="Skill-Container">
				<h2>Back End</h2>
				<div className="wrapper">
					<div className="card_container_Outer_A">
						{/* <div className="cards_container_Inner_B">
						<img className="img_logos" src={DotNet} alt=" " />
						<h3>Dot Net</h3>
					</div> */}
						<div className="cards_container_Inner_B">
							<img className="img_logos" src={NodeJS} alt=" " />
							<h3>Node JS</h3>
						</div>
						<div className="cards_container_Inner_B">
							<img className="img_logos" src={Express} alt=" " />
							<h3>Express</h3>
						</div>
						<div className="cards_container_Inner_B">
							<img className="img_logos" src={NextJS} alt=" " />
							<h3>NextJS</h3>
						</div>
						<div className="cards_container_Inner_B">
							<img className="img_logos" src={Axios} alt=" " />
							<h3>Axios</h3>
						</div>
						<div className="cards_container_Inner_B">
							<img className="img_logos" src={Stripe} alt="Stripe" />
							<h3>Stripe</h3>
						</div>

						{/* <div className="cards_container_Inner_B">
						<img className="img_logos" src={Docker} alt="Docker" />
						<h3>Docker</h3>
					</div> */}

						<div className="cards_container_Inner_B">
							<img className="img_logos" src={ReduxSVG} alt=" " />
							<h3>Redux</h3>
						</div>
						<div className="cards_container_Inner_B">
							<img className="img_logos" src={Git} alt=" " />
							<h3>Git</h3>
						</div>
						<div className="cards_container_Inner_B">
							<img className="img_logos" src={GitHub} alt=" " />
							<h3>Git Hub</h3>
						</div>
						{/* <div className="cards_container_Inner_B">
						<img className="img_logos" src={GitLab} alt=" " />
						<h3>Git Lab</h3>
					</div> */}
					</div>

					{/* <div className="card_container_Outer_A"></div> */}
				</div>
			</div>
		);
	}
	function Database() {
		return (
			<div id="Skill-Container">
				<h2>Database</h2>
				<div className="card_container_Outer_A">
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={MongoDBSVG} alt=" " />
						<h3>MongoDB</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={MySQL} alt=" " />
						<h3>MySQL</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={PostgreSQL} alt=" " />
						<h3>PostgreSQL</h3>
					</div>
				</div>
			</div>
		);
	}
	function QueryTech() {
		return (
			<div id="Skill-Container">
				<h2>Query Tech</h2>
				<div className="card_container_Outer_A">
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={PostMan} alt="PostMan" />
						<h3>PostMan</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={Apollo} alt="Apollo" />
						<h3>Apollo</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={GraphQLSVG} alt="GraphQL" />
						<h3>GraphQL</h3>
					</div>
				</div>
			</div>
		);
	}
	function Hosting() {
		return (
			<div id="Skill-Container">
				<h2>Hosting</h2>
				<div className="card_container_Outer_A">
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={FireBase} alt=" " />
						<h3>FireBase</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={Netlify} alt=" " />
						<h3>Netlify</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={Aws} alt=" " />
						<h3>AWS</h3>
					</div>
					<div className="cards_container_Inner_B">
						<img className="img_logos" src={Heroku} alt=" " />
						<h3>Herkou</h3>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div id="TechStack">
			<h1 className="TechStack-Title">TechStack</h1>

			<div className="Skills-Card-Flex Skills-ContainerA">
				<Languages />
				<QueryTech />
				<Database />
			</div>
			<div className="Skills-Card-Flex Skills-ContainerB">
				<Hosting />
				<FrontEnd />
			</div>

			<div className="Skills-Card-Flex">
				<BackEnd />
			</div>
		</div>
	);
}
