import React from "react";

import GreenHills from "../../image/702-500x500.jpg";

export default function ProjectSectionH() {
	return (
		<div id="ProjectSection">
			<div className="Project-Section-Inner">
				<div className="Project-AreaA-Section">
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
