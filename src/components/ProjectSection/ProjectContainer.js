import React from "react";
import ProjectSectionA from "./ProjectSectionA";
import ProjectSectionB from "./ProjectSectionB";
import ProjectSectionC from "./ProjectSectionC";
import ProjectSectionD from "./ProjectSectionD";
import ProjectSectionE from "./ProjectSectionE";
import ProjectSectionF from "./ProjectSectionF";
import ProjectSectionG from "./ProjectSectionG";
import ProjectSectionH from "./ProjectSectionH";

export default function ProjectContainer() {
	return (
		<div id="ProjectContainer" className="ProjectContainer">
			<h1 className="ProjectTitle">Projects</h1>

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
