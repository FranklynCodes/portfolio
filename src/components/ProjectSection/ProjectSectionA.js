import React, { useEffect, useState } from "react";

import GreenHills from "../../image/702-500x500.jpg";

export default function ProjectSectionA() {
	const MobileBreakPointWidthSize = 850;

	// var ProjectCardContainer = document.querySelector(".Project-Section-Inner").clientWidth;
	// console.log("ProjectCardContainer:", ProjectCardContainer);

	// var totalViewWidth = document.documentElement.offsetWidth;
	var totalViewWidth = document.documentElement.offsetWidth;
	// var MobileWidth = console.log("totalViewWidth:", totalViewWidth);
	// console.log("totalViewWidth :", totalViewWidth);

	function checkCurrentWindowSize() {
		totalViewWidth = document.documentElement.offsetWidth;
		console.log("totalViewWidth:", totalViewWidth);
	}

	// window.onresize = checkCurrentWindowSize;
	// console.log("window.onresize:", window.onresize);
	// console.log("checkCurrentWindowSize;:", checkCurrentWindowSize);

	window.addEventListener("DOMContentLoaded", (event) => {
		// DestkopTitle.appendChild(MobileTarget);
		console.log("MobileTitle:", MobileTitle);

		// while (window.onresize) {
		// 	console.log("window.onresize:", window.onresize);
		// 	if (window.onresize > 856) {
		// 		// MobileTitle.after(MobileTarget);
		// 	} else {
		// 		DestkopTitle.after(MobileTarget);
		// 	}
		// }
	});

	function WindowResize(MobileBreakPointWidthSize, MobileTitle, MobileTarget, DestkopTitle) {
		if (window.outerWidth >= MobileBreakPointWidthSize) {
			// console.log("Shift Images");
		} else {
		}
	}

	// window.onresize = WindowResize(MobileBreakPointWidthSize, MobileTitle, MobileTarget);
	// WindowResize(MobileBreakPointWidthSize, MobileTitle, MobileTarget);

	var MobileTitle = document.getElementById("Mobile-Image-Mobile");
	var DestkopTitle = document.getElementById("Mobile-Image-Desktop");
	var MobileTarget = document.getElementById("Mobile-Image-Target");

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
			height: window.innerHeight,
			width: window.innerWidth,
		});
		function DesktopToMobile(DestkopTitle, MobileTitle, MobileTarget) {
			DestkopTitle.style.display = "none";
			MobileTitle.after(MobileTarget);
		}

		function MobileToDesktop(DestkopTitle, MobileTarget) {
			DestkopTitle.style.display = "block";
			DestkopTitle.appendChild(MobileTarget);
		}

		MobileToDesktop(DestkopTitle, MobileTarget);

		useEffect(() => {
			const debouncedHandleResize = debounce(function handleResize() {
				setDimensions({
					height: window.innerHeight,
					width: window.innerWidth,
				});

				console.log("setDimensions:", setDimensions);
			}, 200);

			window.addEventListener("resize", debouncedHandleResize);

			// dimensions.width
			console.log("dimensions.width:", dimensions.width);
			if (dimensions.width <= MobileBreakPointWidthSize) {
				DesktopToMobile(DestkopTitle, MobileTitle, MobileTarget);
			}

			return (_) => {
				window.removeEventListener("resize", debouncedHandleResize);
			};
		});

		return (
			<div>
				Rendered at {dimensions.width} x {dimensions.height}
			</div>
		);
	}
	MyComponent();

	return (
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non unde,
						velit officiis consectetur numquam quos libero dolorum neque nemo culpa ad
						alias amet, ipsam veniam cupiditate inventore doloremque consequuntur?
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
