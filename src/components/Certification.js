import React from "react";

export default function Certification() {
	function InProgressCert() {
		return (
			<div className="Certification-Container-flex">
				<div class="Cert-Container-Width Cert-Container-Flex-Button">
					<div className="Cert-ImageAndDescription-Flex">
						<div>
							<h2 className="align-L Cert-Compnay-Title Certification-Padding-A">
								In Progress
							</h2>
							<h2 className="Cert-InProgressFont">
								Microsoft -{" "}
								<div className="inline align-L Certification-Padding-A underline">
									AZ-204 - Azure Developer Associate
								</div>
							</h2>
							<h2 className="Cert-InProgressFont">
								Microsoft -{" "}
								<div className="inline align-L Certification-Padding-A underline">
									DP-900 - Azure Data Fundamentals
								</div>
							</h2>
							<h2 className="Cert-InProgressFont">
								Apollo -{" "}
								<div className="inline align-L Certification-Padding-A underline">
									Graph Developer - Associate
								</div>
							</h2>
							<div>
								{/* <h3 className="Cert-Completion-Status">Completed June 2022</h3> */}
								<div className="Certification-Padding-B"></div>
							</div>
							{/* <h4>Credentail ID: {"#"}</h4> */}
						</div>
					</div>
					{/* <div className="Btn-Container-Horizontal-Flex">
						<a
							className="Certification-Anchor-Btn button-PaddingTop"
							href={"#"}
							target="_blank"
							rel="noreferrer"
						>
							See Credentail
						</a>
					</div> */}
				</div>
			</div>
		);
	}

	function MicrosoftDp900() {
		const MicrosoftCredentailId = "I301-9201";
		const MicrosoftCredentailUrl =
			"https://www.credly.com/badges/64d84739-3b5d-464b-b7c2-eed95ac0c358/public_url";
		const MicrosoftCertifcationInformation =
			"https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/";

		return (
			<div className="Certification-Container-flex">
				<div class="Cert-Container-Width Cert-Container-Flex-Button">
					<div className=" Cert-ImageAndDescription-Flex">
						<div>
							<h2 className="align-L Cert-Compnay-Title Certification-Padding-A">
								Microsoft
							</h2>
							<h2 className="align-L Certification-Padding-A Cert-Title-h2">
								AZ-900 - Azure Fundamentals
							</h2>
							<div>
								<h3 className="Cert-Completion-Status">Completed June 2022</h3>
								<div className="Certification-Padding-B"></div>
							</div>
							<div className="AnchorLinks-Container-Flex">
								<a
									id="Cert-Issuer-Font"
									href={MicrosoftCertifcationInformation}
									target={"_blank"}
									rel="noreferrer"
								>
									Certification Overview
								</a>
							</div>
							<h4>Credentail ID: {MicrosoftCredentailId}</h4>
						</div>
						<img
							src="https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png"
							alt="AZ-900 - Azure Fundamentals Badge"
						/>
					</div>
					<div className="Btn-Container-Horizontal-Flex">
						<a
							className="Certification-Anchor-Btn button-PaddingTop"
							href={MicrosoftCredentailUrl}
							target="_blank"
							rel="noreferrer"
						>
							See Credentail
						</a>
					</div>
				</div>
			</div>
		);
	}
	function JPMorganChaseCo() {
		const ChaseCredentailId = "AdR2K4ym4gr8FKvaX";
		const ChaseCredentailUrl =
			"https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_gKEKj6ZRmXvu38s3z_1635381903482_completion_certificate.pdf";
		const ChaseCertifcationInformation =
			"https://www.theforage.com/virtual-internships/prototype/R5iK7HMxJGBgaSbvk/JP-Morgan-Banking-Technology-Virtual-Program";

		return (
			<div className="Certification-Container-flex">
				<div className="Cert-Container-Width">
					<h2 className="align-L Cert-Compnay-Title Certification-Padding-A">
						JPMorgan Chase & Co.
					</h2>
					<h2 className="align-L Certification-Padding-A Cert-Title-h2">
						Software Engineering Virtual Experience
					</h2>

					<div>
						<h3 className="Cert-Completion-Status">Completed October 2021</h3>
						<h3>Issued by Forage</h3>
						<div className="Certification-Padding-B"></div>
					</div>
					<div className="AnchorLinks-Container-Flex">
						<a
							id="Cert-Issuer-Font"
							href={ChaseCertifcationInformation}
							target={"_blank"}
							rel="noreferrer"
						>
							Certification Overview
						</a>
					</div>
					<h4>Credentail ID: {ChaseCredentailId}</h4>
					<div className="Btn-Container-Horizontal-Flex">
						<a
							href={ChaseCredentailUrl}
							className="Certification-Anchor-Btn button-PaddingTop"
							target="_blank"
							rel="noreferrer"
						>
							See Credential
						</a>
					</div>
				</div>
			</div>
		);
	}

	function GoldmanSach() {
		const GoldmanSachCredentailId = "XRuamZnEXhJgzjiGH";
		const GoldmanSachCredentailUrl =
			"https://insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_gKEKj6ZRmXvu38s3z_1635046729271_completion_certificate.pdf";

		const GoldmanSachInformation =
			"https://www.theforage.com/virtual-internships/prototype/NPdeQ43o8P9HJmJzg/Goldman-Sachs-Virtual-Experience-Program";

		return (
			<div className="Certification-Container-flex">
				{/* <div>
					<img src={AwsCloudPractitioner} alt="AWS Cloud Practitioner Certification" />
				</div> */}
				<div className="Cert-Container-Width">
					<h2 className="align-L Cert-Compnay-Title Certification-Padding-A">
						Goldman Sach
					</h2>
					<h2 className="align-L Certification-Padding-A Cert-Title-h2">
						Software Engineering Virtual Experience
					</h2>

					<div>
						{/* <h3 className="Cert-Completion-Status">Completed October 2021</h3> */}
						<h3 className="Cert-Completion-Status">Completed October 2021</h3>
						<h3>Issued by Forage</h3>
						<div className="Certification-Padding-B"></div>
						{/* <p className="Certification-Padding-C">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
							vehicula cursus tellus ac lacinia. Etiam ut est in justo congue iaculis
							quis vel leo. Donec accumsan lorem ante, a consectetur mauris feugiat
							sed. Nunc vitae mauris vulputate, sollicitudin turpis quis, dictum
						</p> */}
					</div>
					<div className="AnchorLinks-Container-Flex">
						<a
							id="Cert-Issuer-Font"
							href={GoldmanSachInformation}
							target={"_blank"}
							rel="noreferrer"
						>
							Certification Overview
						</a>
					</div>
					<h4>Credentail ID: {GoldmanSachCredentailId}</h4>

					<div className="Btn-Container-Horizontal-Flex">
						<a
							href={GoldmanSachCredentailUrl}
							className="Certification-Anchor-Btn button-PaddingTop"
							target="_blank"
							rel="noreferrer"
						>
							See Credential
						</a>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div id="Certification">
			<h1 className="TechStack-Title">Certifications</h1>
			<div className="Cert-Container">
				<MicrosoftDp900 />
				<InProgressCert />
				<JPMorganChaseCo />
				<GoldmanSach />
			</div>
		</div>
	);
}

// | {/* <button className="Cert-Btn" onClick={(e) => e.currentTarget.blur()}> */}
