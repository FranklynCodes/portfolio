import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ScrollDownButton() {
	return (
		<div className="scrolldown" data-aos="fade-up" data-aos-delay="1400">
			<div className="chevrons" data-aos="fade-up" data-aos-delay="1400">
				<div className="chevrondown"></div>
				<div className="chevrondown"></div>
			</div>
		</div>
	);
}

export default ScrollDownButton;
