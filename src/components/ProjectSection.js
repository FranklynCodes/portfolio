import React from "react";

import GreenHills from "../image/702-500x500.jpg";

// import ProjectSectionA from "./ProjectSectionA";

const MobileBreakPointWidthSize = 850;

export default function ProjectContainer() {
	// #ImageContainer
	// #SubTitle

	function ProjectSectionA() {
		return (
			<div>
				<div id="ProjectSection" className="Project-Section-A">
					<div className="Project-Section-Inner">
						<div id="ImageContainer" className="Project-AreaA-Section">
							<img
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>
						<div className="Project-AreaB-Section">
							<h1>Ecommerece2 Folder</h1>
							<h2>Full Stack Ecommerece Website</h2>
							<h3 id="SubTitle"> React, Redux, Node, Express, MongoDB</h3>
							<div id="ImageContainerB" className="Project-AreaA-Section">
								<img
									id="Project-Image"
									className="Project-Image"
									src={"https://picsum.photos/600/400"}
									alt="Green Hills https://picsum.photos/500/500"
								/>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non
								unde, velit officiis consectetur numquam quos libero dolorum neque
								nemo culpa ad alias amet, ipsam veniam cupiditate inventore
								doloremque consequuntur?
							</p>
							<div className="Btn-Container-Horizontal-Flex">
								<button>Live Demo</button>
								<button>Source Code</button>
							</div>
						</div>
					</div>
				</div>
				<div id="ProjectSection">
					<div className="Project-Section-Inner">
						<div id="ImageContainer" className="Project-AreaA-Section">
							<img
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>
						<div className="Project-AreaB-Section">
							<h1>Ecommerce1 Folder </h1>
							<h1>Full Stack E-Commerece Using Commerce.js API </h1>
							<h2 id="SubTitle">React, Commerce.js</h2>
							<div id="ImageContainerB" className="Project-AreaA-Section">
								<img
									id="Project-Image"
									className="Project-Image"
									src={"https://picsum.photos/600/400"}
									alt="Green Hills https://picsum.photos/500/500"
								/>
							</div>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non
								unde, velit officiis consectetur numquam quos libero dolorum neque
								nemo culpa ad alias amet, ipsam veniam cupiditate inventore
								doloremque consequuntur?
							</p>
							<div className="Btn-Container-Horizontal-Flex">
								<button>Live Demo</button>
								<button>Source Code</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function ProjectSectionB() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={"https://picsum.photos/600/400"}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Ecommerce1 Folder </h1>
						<h1>Full Stack E-Commerece Using Commerce.js API </h1>
						<h2 id="SubTitle">React, Commerce.js</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								id="Project-Image"
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non unde,
							velit officiis consectetur numquam quos libero dolorum neque nemo culpa
							ad alias amet, ipsam veniam cupiditate inventore doloremque
							consequuntur?
						</p>
						<div className="Btn-Container-Horizontal-Flex">
							<button>Live Demo</button>
							<button>Source Code</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function ProjectSectionC() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>004_markdown_blog Folder</h1>
						<h1>MERN - MarkDown Blog </h1>
						<h2 id="SubTitle">React, Node.js, Express.js, MongoDB</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								id="Project-Image"
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non unde,
							velit officiis consectetur numquam quos libero dolorum neque nemo culpa
							ad alias amet, ipsam veniam cupiditate inventore doloremque
							consequuntur?
						</p>
						<div className="Btn-Container-Horizontal-Flex">
							<button>Live Demo</button>
							<button>Source Code</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function ProjectSectionD() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>maps1 Folder</h1>
						<h1>Vacation Tour Application</h1>
						<h2 id="SubTitle">Google Maps Api, GooglePlaces Api, React, GPS</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								id="Project-Image"
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non unde,
							velit officiis consectetur numquam quos libero dolorum neque nemo culpa
							ad alias amet, ipsam veniam cupiditate inventore doloremque
							consequuntur?
						</p>
						<div className="Btn-Container-Horizontal-Flex">
							<button>Live Demo</button>
							<button>Source Code</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
	function ProjectSectionE() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>React Authentication Application - Firebase</h1>
						<h2 id="SubTitle">Firebase</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								id="Project-Image"
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non unde,
							velit officiis consectetur numquam quos libero dolorum neque nemo culpa
							ad alias amet, ipsam veniam cupiditate inventore doloremque
							consequuntur?
						</p>
						<div className="Btn-Container-Horizontal-Flex">
							<button>Live Demo</button>
							<button>Source Code</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function ProjectSectionF() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Trello - Javascript 03 Folder</h1>
						<h2>React, React id="SubTitle"-Dropable</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								id="Project-Image"
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non unde,
							velit officiis consectetur numquam quos libero dolorum neque nemo culpa
							ad alias amet, ipsam veniam cupiditate inventore doloremque
							consequuntur?
						</p>
						<div className="Btn-Container-Horizontal-Flex">
							<button>Live Demo</button>
							<button>Source Code</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function ProjectSectionG() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Currency Convertor</h1>
						<h2>API Calls To Fetch id="SubTitle" Currency</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								id="Project-Image"
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non unde,
							velit officiis consectetur numquam quos libero dolorum neque nemo culpa
							ad alias amet, ipsam veniam cupiditate inventore doloremque
							consequuntur?
						</p>
						<div className="Btn-Container-Horizontal-Flex">
							<button>Live Demo</button>
							<button>Source Code</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function ProjectSectionH() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Search for folder</h1>
						<h1>Javascript Clock</h1>
						<h2>Vanilia Javascript</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								id="Project-Image"
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non unde,
							velit officiis consectetur numquam quos libero dolorum neque nemo culpa
							ad alias amet, ipsam veniam cupiditate inventore doloremque
							consequuntur?
						</p>
						<div className="Btn-Container-Horizontal-Flex">
							<button>Live Demo</button>
							<button>Source Code</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div id="ProjectContainer" className="ProjectContainer Project-Color">
			<h1 className="Project-Title ">Projects</h1>
			<ProjectSectionA />
			<ProjectSectionB />
			<ProjectSectionC />
			<ProjectSectionD />
			<ProjectSectionE />
			<ProjectSectionF />
			<ProjectSectionG />
			<ProjectSectionH />
		</div>
	);
}
