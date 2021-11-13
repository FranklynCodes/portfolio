import React from "react";

import GreenHills from "../../image/702-500x500.jpg";

export default function ProjectSectionB() {
	return (
		<div id="ProjectSection">
			<div className="Project-Section-Inner">
				<div className="Project-AreaA-Section">
					<img
						className="Project-Image"
						src={"https://picsum.photos/600/400"}
						alt="Green Hills https://picsum.photos/500/500"
					/>
				</div>
				<div className="Project-AreaB-Section">
					<h1>Ecommerce1 Folder </h1>
					<h1>Full Stack E-Commerece Using Commerce.js API </h1>
					<h2>React, Commerce.js</h2>

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
