import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
// import "./css2/CardContainer.css";
import cssCheck from "./checkForUndefinedCSSClasses.js";
import WebsiteContainer from "./container/WebsiteContainer";

// cssCheck();

ReactDOM.render(
	<React.StrictMode>
		<WebsiteContainer />
	</React.StrictMode>,
	document.getElementById("root")
);
