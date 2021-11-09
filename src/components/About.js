import React from "react";
// import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
	Aos.init({ duration: 1000 });
	return (
		<div id="About" className="About-Color">
			<div className="About-Container">
				{/* <h1>Hello there, I'm Franklyn C</h1> */}
				<h1 data-aos="fade-up" data-aos-delay="500">
					Hi, I'm Franklyn C
				</h1>
				<h2 data-aos="fade-up" data-aos-delay="750">
					Full Stack Web Developer based in New York City
				</h2>
				<p data-aos="fade-up" data-aos-delay="900">
					l enjoy building everything from small bussiness sites to rich interactive web
					apps. If you are a bussiness seeking a web presence, are looking to hire or
					anything else that l can help with contact me.
				</p>
				<div
					data-aos="zoom-out"
					data-aos-delay="1150"
					style={{ display: "flex", justifyContent: "center" }}
				>
					{/* <button>Contact</button> */}
				</div>
				<div id="Social_Container" className="About_Social">
					<div data-aos="fade-up" data-aos-delay="1250">
						<a href="mailto:franklynhire@gmail.com" target={"_blank"} rel="noreferrer">
							<i class="far fab fa-envelope"></i>
						</a>
					</div>
					<div data-aos="fade-up" data-aos-delay="1250">
						<a href="https://github.com/franklyncodes" target="_blank" rel="noreferrer">
							<i className="fab fa-github"></i>
						</a>
					</div>
					{/* <div data-aos="fade-up" data-aos-delay="1250">
						<a href="/#/" target="">
							<i className="fab fa-instagram"></i>
						</a>
					</div> */}
					<div data-aos="fade-up" data-aos-delay="1300">
						<a
							href="https://twitter.com/FranklynCodes"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-twitter-square"></i>
						</a>
					</div>
					{/* <div data-aos="fade-up" data-aos-delay="1350">
						<a href="/#/" target="">
							<i className="fab fa-linkedin"></i>
						</a>
					</div> */}
					{/* <div data-aos="fade-up" data-aos-delay="1400">
						<a href="/#/" target="">
							<i className="fab fa-youtube"></i>
						</a>
					</div> */}
					{/* <div>
						<a href="/#/" target="">
							<i className="fab fa-twitch"></i>
						</a>
					</div> */}
					{/* <div>
						<a href="/#/" target="">
							<i className="fab fa-facebook-square"></i>
						</a>
					</div> */}
				</div>
			</div>
		</div>
	);
}
