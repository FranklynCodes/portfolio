import React from "react";

// Languages

import CPP from "../image/TechStackImages/languages/Cpp.svg";
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
import ReduxSVG from "../image/TechStackImages/back/Redux.svg";
import MongoDBSVG from "../image/TechStackImages/back/mongodb.svg";

// Source Control

import Git from "../image/TechStackImages/back/GIT.svg";
import GitHub from "../image/TechStackImages/back/GitHub.svg";
import GitLab from "../image/TechStackImages/back/GitLab.svg";

/**
 * | Commented out GitLab
 * | Commented out DotNet
 * | Commented out CPP
 * | 
 * 
 *  
 */

export default function TechStack() {
	return (
		<div id="TechStack">
			<h1 id="h1_TechStack">TechStack</h1>
			{/* <!-- ! TechStack Testing --> */}
			{/* <!-- Languages --> */}
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
				{/* <div className="cards_container_Inner_B">
					<img className="img_logos" src={CPP} alt=" " />
					<h3>C++</h3>
				</div> */}
			</div>

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

			<h2>Back End</h2>
			<div className="wrapper">
				<div className="card_container_Outer_A">
					{/* <div className="cards_container_Inner_B">
						<img className="img_logos" src={DotNet} alt=" " />
						<h3>Dot Net</h3>
					</div> */}
					<div className="cards_container_Inner_B">
						{/* <!-- <h4>Back End</h4> --> */}
						<img className="img_logos" src={NodeJS} alt=" " />
						<h3>Node JS</h3>
					</div>
					<div className="cards_container_Inner_B">
						{/* <!-- <h4>Back End</h4> --> */}
						<img className="img_logos" src={Express} alt=" " />
						<h3>Express</h3>
					</div>
					<div className="cards_container_Inner_B">
						{/* <!-- <h4>Back End</h4> --> */}
						<img className="img_logos" src={ReduxSVG} alt=" " />
						<h3>Redux</h3>
					</div>
					<div className="cards_container_Inner_B">
						{/* <!-- <h4>Back End</h4> --> */}
						<img className="img_logos" src={MongoDBSVG} alt=" " />
						<h3>MongoDB</h3>
					</div>
				</div>

				{/* <!-- TechStack Testing alignment --> */}

				<div className="card_container_Outer_A">
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
			</div>
		</div>
	);
}
