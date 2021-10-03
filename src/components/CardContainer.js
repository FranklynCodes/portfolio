import React from "react";

export default function CardContainer() {
	return (
		<div id="CardContainer">
			<h1>Projects A</h1>
			<div className="card_container">
				<div className="cards_vertical_500px">
					<h2>Project Title A1</h2>
					<img src="https://picsum.photos/500/500" alt=" " />
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos unde facilis
						libero maxime vel cum sapiente ut quibusdam harum ipsa? Suscipit qui
						deserunt vel cupiditate, amet asperiores adipisci cumque debitis.
					</p>
					<div className="cards_Horizontal_Buttons">
						<button>Demo</button>
						<button>Code</button>
					</div>
				</div>
				<div className="cards_vertical_500px">
					<h2>Project Title B1</h2>
					<img src="https://picsum.photos/500/500" alt=" " />
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos unde facilis
						libero maxime vel cum sapiente ut quibusdam harum ipsa? Suscipit qui
						deserunt vel cupiditate, amet asperiores adipisci cumque debitis.
					</p>
					<div className="cards_Horizontal_Buttons">
						<button>Demo</button>
						<button>Code</button>
					</div>
				</div>
			</div>

			{/* <!-- Best Two Games--> */}
			<h1>Project B</h1>
			<div className="card_container" id="Projects">
				<div className="cards_vertical">
					<h2>Project Title A2</h2>
					<img src="https://picsum.photos/250/250" alt=" " />
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos unde facilis
						libero maxime vel cum sapiente ut quibusdam harum ipsa? Suscipit qui
						deserunt vel cupiditate, amet asperiores adipisci cumque debitis.
					</p>
					<div className="cards_Horizontal_Buttons">
						<button>Button One</button>
						<button>Button One</button>
					</div>
				</div>
				<div className="cards_vertical">
					<h2>Project Title B2</h2>
					<img src="https://picsum.photos/250/250" alt=" " />
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos unde facilis
						libero maxime vel cum sapiente ut quibusdam harum ipsa? Suscipit qui
						deserunt vel cupiditate, amet asperiores adipisci cumque debitis.
					</p>
					<div className="cards_Horizontal_Buttons">
						<button>Button One</button>
						<button>Button One</button>
					</div>
				</div>
			</div>
		</div>
	);
}
