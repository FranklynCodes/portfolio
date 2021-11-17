import React, { useEffect, useState } from "react";

import GreenHills from "../image/702-500x500.jpg";

// import ProjectSectionA from "./ProjectSectionA";

export default function ProjectContainer() {
	const DisplayNoneStyle = {
		display: "none",
	};

	const DisplayBlockStyle = {
		display: "block",
	};

	const MobileBreakPointWidthSize = 850;

	function debounce(fn, ms) {
		let timer;
		return (_) => {
			clearTimeout(timer);
			timer = setTimeout((_) => {
				timer = null;
				fn.apply(this, arguments);
			}, ms);
		};
	}

	function MyComponent() {
		const [dimensions, setDimensions] = useState({
			width: window.innerWidth,
		});

		useEffect(() => {
			var AllMobileTitleElements, AllDesktopTitleElements, AllImageElements;

			AllMobileTitleElements = document.querySelectorAll("#Mobile-Image-Mobile");

			AllDesktopTitleElements = document.querySelectorAll("#Mobile-Image-Desktop"); // This under top All AllDesktopTitleElements[index].after(AllImageElements[index])

			AllImageElements = document.querySelectorAll("#Mobile-Image-Target");

			// AllImageElements[0].after(AllMobileTitleElements[0]);
			// AllDesktopTitleElements[0].after(AllImageElements[0]);
			// AllImageElements[0].after(AllMobileTitleElements[0]);
			// AllMobileTitleElements[0].after(AllImageElements[0]);

			// TODO: Refactor this to usecomponents, MUST get var elements before dom load
			var MobileTitle = document.getElementById("Mobile-Image-Mobile");
			var DestkopTitle = document.getElementById("Mobile-Image-Desktop");
			var MobileTarget = document.getElementById("Mobile-Image-Target");
			// console.log("MobileTitle:", MobileTitle);
			// console.log("DestkopTitle:", DestkopTitle);
			// console.log("MobileTarget:", MobileTarget);

			// console.log("Use-Effect-MobileTarget:", MobileTarget);
			const debouncedHandleResize = debounce(function handleResize() {
				setDimensions({
					width: window.innerWidth,
				});
			}, 200);

			window.addEventListener("resize", debouncedHandleResize);
			console.log("dimensions.width:", dimensions.width);

			MobileTarget = document.getElementById("Mobile-Image-Target");
			console.log("MobileTarget:", MobileTarget);

			function DesktopToMobile(AllMobileTitleElements, AllDesktopTitleElements) {
				console.log("DesktopToMobile Fired");
				for (let index = 0; index < AllMobileTitleElements.length; index++) {
					// AllDesktopTitleElements[index].style.display = "block";
					// AllMobileTitleElements[index].after(AllImageElements[index]);
					// AllDesktopTitleElements[index].after(AllImageElements[index]);
					// AllDesktopTitleElements[index].appendChild(AllImageElements[index])
					// AllDesktopTitleElements[index].style.display = "none"
					AllMobileTitleElements[index].after(AllImageElements[index]);
				}
			}

			function MobileToDesktop(AllDesktopTitleElements, AllImageElements) {
				console.log("MobileToDesktop Fired");
				for (let index = 0; index < AllMobileTitleElements.length; index++) {
					// AllDesktopTitleElements[index].style.display = "block";
					// AllDesktopTitleElements[index].appendChild(AllImageElements[index]);
				}
			}

			if (dimensions.width <= MobileBreakPointWidthSize) {
				DesktopToMobile(AllMobileTitleElements, AllDesktopTitleElements);
			} else {
				MobileToDesktop(AllDesktopTitleElements, AllImageElements);
			}

			return (_) => {
				window.removeEventListener("resize", debouncedHandleResize);
			};
		});
		return <div>Rendered at {dimensions.width}</div>;
	}
	MyComponent();

	function ProjectSectionA() {
		return (
			<div>
				<div id="ProjectSection" className="Project-Section-A">
					<div className="Project-Section-Inner">
						<div id="Mobile-Image-Desktop" className="Project-AreaA-Section">
							<img
								id="Mobile-Image-Target"
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>
						<div className="Project-AreaB-Section">
							<MyComponent></MyComponent>
							<h1>Ecommerece2 Folder</h1>
							<h2>Full Stack Ecommerece Website</h2>
							<h3 id="Mobile-Image-Mobile"> React, Redux, Node, Express, MongoDB</h3>
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
						<div id="Mobile-Image-Desktop" className="Project-AreaA-Section">
							<img
								id="Mobile-Image-Target"
								className="Project-Image"
								src={"https://picsum.photos/600/400"}
								alt="Green Hills https://picsum.photos/500/500"
							/>
						</div>
						<div className="Project-AreaB-Section">
							<MyComponent></MyComponent>
							<h1>Ecommerce1 Folder </h1>
							<h1>Full Stack E-Commerece Using Commerce.js API </h1>
							<h2 id="Mobile-Image-Mobile">React, Commerce.js</h2>

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
					<div id="Mobile-Image-Desktop" className="Project-AreaA-Section">
						<img
							id="Mobile-Image-Target"
							className="Project-Image"
							src={"https://picsum.photos/600/400"}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<MyComponent></MyComponent>
						<h1>Ecommerce1 Folder </h1>
						<h1>Full Stack E-Commerece Using Commerce.js API </h1>
						<h2 id="Mobile-Image-Mobile">React, Commerce.js</h2>

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
					<div id="Mobile-Image-Desktop" className="Project-AreaA-Section">
						<img
							id="Mobile-Image-Target"
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>004_markdown_blog Folder</h1>
						<h1>MERN - MarkDown Blog </h1>
						<h2 id="Mobile-Image-Mobile">React, Node.js, Express.js, MongoDB</h2>
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
					<div id="Mobile-Image-Desktop" className="Project-AreaA-Section">
						<img
							id="Mobile-Image-Target"
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>maps1 Folder</h1>
						<h1>Vacation Tour Application</h1>
						<h2 id="Mobile-Image-Mobile">
							Google Maps Api, GooglePlaces Api, React, GPS
						</h2>
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
					<div id="Mobile-Image-Desktop" className="Project-AreaA-Section">
						<img
							id="Mobile-Image-Target"
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>React Authentication Application - Firebase</h1>
						<h2 id="Mobile-Image-Mobile">Firebase</h2>
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
					<div id="Mobile-Image-Desktop" className="Project-AreaA-Section">
						<img
							id="Mobile-Image-Target"
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Trello - Javascript 03 Folder</h1>
						<h2>React, React id="Mobile-Image-Mobile"-Dropable</h2>
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
					<div id="Mobile-Image-Desktop" className="Project-AreaA-Section">
						<img
							id="Mobile-Image-Target"
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Currency Convertor</h1>
						<h2>API Calls To Fetch id="Mobile-Image-Mobile" Currency</h2>
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
					<div id="Mobile-Image-Desktop" className="Project-AreaA-Section">
						<img
							id="Mobile-Image-Target"
							className="Project-Image"
							src={GreenHills}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Search for folder</h1>
						<h1>Javascript Clock</h1>
						id="Mobile-Image-Mobile"<h2>Vanilia Javascript</h2>
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
