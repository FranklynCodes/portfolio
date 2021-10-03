import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
// import "./css2/CardContainer.css";
import cssCheck from "./checkForUndefinedCSSClasses.js";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import WebsiteContainer from "./container/WebsiteContainer";

// cssCheck();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<WebsiteContainer />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
