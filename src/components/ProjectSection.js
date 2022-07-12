import React from "react";

// import Giphy from "./util/Giphy";
// import Imgur from "./util/Imgur";

import WorldConnectGif from "../image/GIF/WorldConnect.gif";
import TechCenterGif from "../image/GIF/TechCenter.gif";
import EarthGemsGif from "../image/GIF/EarthGems.gif";

import Aos from "aos";
import "aos/dist/aos.css";

// const WorldConnectGif =
// 	"https://camo.githubusercontent.com/6365e894837efac83cb4b7f7b45a7be381981f417c060a3e742347535b86118f/68747470733a2f2f692e696d6775722e636f6d2f4d7975335668432e676966";

// const TechCenterGif =
// 	"https://camo.githubusercontent.com/135166b9a044dcf2f2b01e419a0f5d572fa61fb848a7450b9c73bd0602f57344/68747470733a2f2f696d6775722e636f6d2f5275624b6f71622e676966";

// const EarthGemsGif =
// 	"https://camo.githubusercontent.com/dc4c3d45d2c497066086348c5b9804098d66580c23c8cdc9c10cce3926c7a785/68747470733a2f2f692e696d6775722e636f6d2f6b6e55435634572e676966";

export default function ProjectContainer() {
	// const ProjectAOS = { duration: 1000 };

	// Aos.init(ProjectAOS);
	Aos.init({ duration: 1000 });

	// Ecommerce2Old is ref to the old style, can delete
	const WCLive = "https://worldconnection.netlify.app";
	const WCRepo = "https://github.com/FranklynCodes/SocialMedia001";

	const TCLive = "https://techcenter-ecommerce.herokuapp.com";
	const TCRepo = "https://github.com/FranklynCodes/ecommerece2";

	const EGLive = "https://earthgems.netlify.app";
	const EGRepo = "https://github.com/FranklynCodes/ecommerece1";

	function MernMarkDownBlog() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={""}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>MernMarkDownBlog</h1>
						<h1>MERN - MarkDown Blog </h1>
						<h2 id="SubTitle">React, Node.js, Express.js, MongoDB</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
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
							<a
								href={""}
								className="Project-Btn-Hover"
								target={"_blank"}
								rel="noreferrer"
							>
								Website
							</a>

							<a
								href={""}
								className="Hover-Btn-Type-A"
								target={"_blank"}
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function TravelGuideApplication() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={""}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Travel Guide Application</h1>
						<h1>Vacation Tour Application</h1>
						<h2 id="SubTitle">Google Maps Api, GooglePlaces Api, React, GPS</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
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
							<a
								href={""}
								className="Project-Btn-Hover"
								target={"_blank"}
								rel="noreferrer"
							>
								Website
							</a>

							<a
								href={""}
								className="Hover-Btn-Type-A"
								target={"_blank"}
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
	function ReactAuthFirebase() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={""}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>React Authentication Application - Firebase</h1>
						<h2 id="SubTitle">Firebase</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
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
							<a
								href={""}
								className="Project-Btn-Hover"
								target={"_blank"}
								rel="noreferrer"
							>
								Website
							</a>

							<a
								href={""}
								className="Hover-Btn-Type-A"
								target={"_blank"}
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function ToDoList() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={""}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Trello - Javascript 03 Folder</h1>
						<h2>React, React id="SubTitle"-Dropable</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
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
							<a
								href={""}
								className="Project-Btn-Hover"
								target={"_blank"}
								rel="noreferrer"
							>
								Website
							</a>

							<a
								href={""}
								className="Hover-Btn-Type-A"
								target={"_blank"}
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function CurencyConverter() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={""}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Currency Convertor</h1>
						<h2>API Calls To Fetch id="SubTitle" Currency</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
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
							<a
								href={""}
								className="Project-Btn-Hover"
								target={"_blank"}
								rel="noreferrer"
							>
								Website
							</a>

							<a
								href={""}
								className="Hover-Btn-Type-A"
								target={"_blank"}
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function JavascriptClock() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={""}
							alt="Green Hills https://picsum.photos/500/500"
						/>
					</div>
					<div className="Project-AreaB-Section">
						<h1>Search for folder</h1>
						<h1>Javascript Clock</h1>
						<h2>Vanilia Javascript</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
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
							<a
								href={""}
								className="Project-Btn-Hover"
								target={"_blank"}
								rel="noreferrer"
							>
								Website
							</a>

							<a
								href={""}
								className="Hover-Btn-Type-A"
								target={"_blank"}
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
	function SocialMedia001() {
		return (
			<div id="ProjectSection">
				<div
					className="Project-Section-Inner flex-direction-rr "
					data-aos="fade-right"
					// data-aos-offset="300"
					// data-aos-easing="ease-out"
				>
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img
							className="Project-Image"
							src={WorldConnectGif}
							alt="World Connect Gif"
						/>
					</div>

					<div className="Project-AreaB-Section">
						<h1>World Connect</h1>
						{/* <h2>Social Media Applicaion </h2> */}
						{/* <h2 id="SubTitle">React</h2> */}
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								className="Project-Image"
								src={WorldConnectGif}
								alt="World Connect Gif"
							/>
						</div>
						<h3>
							Social Media App, users can create posts while liking, commenting and
							updating in real time.
						</h3>
						<h4>
							Technology: GraphQL, Node, MongoDB, Express, React, Heroku, Netlify,
							Semantic UI
						</h4>

						<ol>
							<li>
								Secured authentication and authorization for login and registration
								to prevent impersonations amongst users.
							</li>
							<li>
								Generated login JWT tokens, to differentiate users to prevent a user
								from liking a post more than once.
							</li>
							<li>
								Connected and created parameters for MongoDB to receive data from
								Apollo schema and mutations.
							</li>
							<li>
								Constructed CRUD resolvers for implementing form posts, referencing
								Apollo schema for specific data writes. Such as getPost, createPost,
								deletePost, likePost, login, register, createComment, deleteComment.
							</li>
							<li>
								Dispatched and received actions types or payload using useReducer to
								run events if specific actions received.
							</li>
							<li>
								Optimized removal of post by using cache to rerender change in only
								UI to avoid constant server fetches.
							</li>
						</ol>

						<div className="Btn-Container-Horizontal-Flex">
							<a
								href={WCLive}
								className="Project-Btn-Hover"
								target={"_blank"}
								rel="noreferrer"
							>
								Website
							</a>

							<a
								href={WCRepo}
								className="Hover-Btn-Type-A"
								target={"_blank"}
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function Ecommerce1Old() {
		// ! Old Data
		return (
			<div id="ProjectSection" className="Project-Section-A">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img className="Project-Image" src={EarthGemsGif} alt="Earth Gems Gif" />
					</div>
					<div className="Project-AreaB-Section">
						<h1>EarthGems</h1>
						<h2>Gems Website</h2>
						<h1>Full Stack E-Commerece Using Commerce.js API </h1>
						{/* <h3 id="SubTitle"> React, Redux, Node, Express, MongoDB</h3> */}
						<h3 id="SubTitle">Stripe - Checkout Website</h3>
						<div id="ImageContainerB" className="Project-AreaA-Section"></div>
						<p>
							Website surrounding Jewlery - High End Fashion Lorem ipsum dolor sit
							amet consectetur, adipisicing elit. Doloribus, quis perferendis autem
							quisquam debitis a aliquam ullam dolore. Labore tempora iure animi
							nesciunt magni beatae maxime earum odio, officiis similique?
						</p>

						<div className="Btn-Container-Horizontal-Flex"></div>
					</div>
				</div>
			</div>
		);
	}
	function Ecommerce2Old() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img className="Project-Image" src={TechCenterGif} alt="Tech Center Gif" />
					</div>
					<div className="Project-AreaB-Section">
						<h1>Tech Center</h1>

						<h2 id="SubTitle">React, Commerce.js</h2>
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								id="Project-Image"
								className="Project-Image"
								src={TechCenterGif}
								alt="Tech Center Gif"
							/>
						</div>
						<p>
							e-Commerce Website from scatch Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Doloribus, quis perferendis autem quisquam debitis a
							aliquam ullam dolore. Labore tempora iure animi nesciunt magni beatae
							maxime earum odio, officiis similique?
						</p>
						<div className="Btn-Container-Horizontal-Flex">
							<a
								href={TCLive}
								className="Project-Btn-Hover"
								target={"_blank"}
								rel="noreferrer"
							>
								Website
							</a>

							<a
								href={TCRepo}
								className="Hover-Btn-Type-A"
								target={"_blank"}
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
	function Ecommerce1() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner" data-aos="fade-left">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img className="Project-Image" src={EarthGemsGif} alt="Earth Gems Gif" />
					</div>

					<div className="Project-AreaB-Section">
						<h1>EarthGems</h1>
						{/* <h2>Social Media Applicaion </h2> */}
						{/* <h2 id="SubTitle">React</h2> */}
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								className="Project-Image"
								src={EarthGemsGif}
								alt="Earth Gems Gif"
							/>
						</div>
						<h3>
							Applied Stripe and Commerce api to bridge payments and merchandise
							functions for e-commerce.
						</h3>
						<h4>
							Technology: Stripe.js, Commerce.js, React, Material UI,
							React-Hook-Forms, Netlify
						</h4>

						<ol>
							<li>
								Finalized order data in object format to be properly received by
								commerce.js in PaymentForm.js then emailing both the distributor and
								customer of the order reference number.
							</li>
							<li>
								Linked react components to receive promises and translate a database
								from commerce.js.
							</li>
							<li>
								Dynamically loaded an UI that can be reinitialized with new data and
								maintain backwards compatibility.
							</li>
						</ol>

						<div className="Btn-Container-Horizontal-Flex">
							<a
								href={EGLive}
								className="Project-Btn-Hover"
								target={"_blank"}
								rel="noreferrer"
							>
								Website
							</a>

							<a
								href={EGRepo}
								className="Hover-Btn-Type-A"
								target={"_blank"}
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function Ecommerce2() {
		return (
			<div id="ProjectSection">
				<div className="Project-Section-Inner flex-direction-rr" data-aos="fade-right">
					<div id="ImageContainer" className="Project-AreaA-Section">
						<img className="Project-Image" src={TechCenterGif} alt="Tech Connect Gif" />
					</div>

					<div className="Project-AreaB-Section">
						<h1>Tech Center</h1>
						{/* <h2>Social Media Applicaion </h2> */}
						{/* <h2 id="SubTitle">React</h2> */}
						<div id="ImageContainerB" className="Project-AreaA-Section">
							<img
								className="Project-Image"
								src={TechCenterGif}
								alt="Tech Connect Gif"
							/>
						</div>
						<h3>
							Redux variation of an e-commerce website instead of using useContext.
						</h3>
						<h4>Technology: Redux, Node.js, MongoDB, Express, React, Axios, Heroku</h4>

						<ol>
							<li>
								Transitions react state management from useContext to redux by
								having a single source of truth, making state read-only, and having
								changes to be made with pure functions. Similar to the
								single-responsibility principle in SOLID design principles; reducing
								the complexity when multiple models start influencing each other.
							</li>
							<li>
								Iterations through state by reducer to check truty of item in
								checkout cart to call the desired function.
							</li>
							<li>
								Saved state of cart via dispatch chaining to local storage
								asynchrony using promises in addToCart and more.
							</li>
							<li>
								Connected middleware to express router to dynamically call functions
								on when user changes web pages.
							</li>
							<li>
								Formatted HTTP requests with Axios to receive product url slug date
								based on id number.
							</li>
						</ol>

						<div className="Btn-Container-Horizontal-Flex">
							<a
								href={TCLive}
								className="Project-Btn-Hover"
								target={"_blank"}
								rel="noreferrer"
							>
								Website
							</a>

							<a
								href={TCRepo}
								className="Hover-Btn-Type-A"
								target={"_blank"}
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div id="ProjectContainer" className="ProjectContainer Project-Color">
			<h1 id="Project" className="Project-Title">
				Projects
			</h1>
			<SocialMedia001 />
			<Ecommerce1 /> {/* Jewlery e-store  */}
			<Ecommerce2 /> {/* Built from scratch, e-store*/}
			{/* <MernMarkDownBlog />  Merge Blog with ReactAuthFirebase project  */}
			{/* <TravelGuideApplication />  Careful Connected to Google API  */}
			{/* <ReactAuthFirebase />  TODO: Finish and impliment to future projects  */}
			{/* <ToDoList />  Similar to trello  */}
			{/* <CurencyConverter />  TODO: Remove to simple*/}
			{/*<JavascriptClock />  TODO: Remove to simple*/}
		</div>
	);
}
