import React from "react";
import AwsCloudPractitioner from "../image/Certification/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png";

// Cited from https://www.credly.com/org/amazon-web-services/badge/aws-certified-cloud-practitioner

export default function Certification() {
	const AwsCertifcationInfromation =
		"https://aws.amazon.com/certification/certified-cloud-practitioner/";
	const AwsExamGuide =
		"https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf";

	const AwsRampUpGuide =
		"https://d1.awsstatic.com/training-and-certification/ramp-up_guides/Ramp-Up_Guide_CloudPractitioner.pdf";

	function AwsCloudPract() {
		return (
			<div className="Certification-Container-flex Cert-Btm-Margin">
				<div className="Cert-Container-Width">
					<h2 className="align-L Certification-Padding-A">Amazon</h2>
					<h2 className="align-L Certification-Padding-A">
						Certified Cloud Practitioner
					</h2>
					<div>
						{/* <img src={AwsCloudPractitioner} alt="AWS Cloud Practitioner Certification" /> */}
						<h4>In-Progress</h4>
						<div className="Certification-Padding-B">
							<h3 className="underline">
								Issued by{" "}
								<a
									// href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
									href="https://aws.amazon.com/training/learn-about/cloud-practitioner/"
									target="_blank"
									rel="noreferrer"
								>
									Amazon Web Services Training and Certification
								</a>
							</h3>
						</div>
						{/* <p className="Certification-Padding-C">
								Earners of this certification have a fundamental understanding of IT
								services and their uses in the AWS Cloud. They demonstrated cloud
								fluency and foundational AWS knowledge. Badge owners are able to
								identify essential AWS services necessary to set up AWS-focused
								projects.
							</p> */}
					</div>
					<h4>Credentail ID: ...</h4>

					<a href={AwsCertifcationInfromation} target={"_blank"} rel="noreferrer">
						Certification Overview
					</a>
					<br />
					<a href={AwsExamGuide} target={"_blank"} rel="noreferrer">
						Certification Details
					</a>
					<br />
					<a href={AwsRampUpGuide} target={"_blank"} rel="noreferrer">
						AWS Ramp-Up Guide
					</a>

					<div className="Btn-Container-Horizontal-Flex">
						<a href={"/#/"} target="_blank">
							<button>See Credential</button>
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
			<div className="Certification-Container-flex Cert-Btm-Margin">
				{/* <div>
					<img src={AwsCloudPractitioner} alt="AWS Cloud Practitioner Certification" />
				</div> */}
				<div className="Cert-Container-Width">
					<h2 className="align-L Certification-Padding-A">JPMorgan Chase & Co.</h2>
					<h2 className="align-L Certification-Padding-A">
						Software Engineering Virtual Experience
					</h2>

					<div>
						<h4>Completed October 2021</h4>
						<div className="Certification-Padding-B">
							<h3 className="underline">
								Issued by Forage
								{/* <a
									href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
									target="_blank"
									rel="noreferrer"
								>
									Amazon Web Services Training and Certification
								</a> */}
							</h3>
						</div>
						{/* <p className="Certification-Padding-C">
							Earners of this certification have a fundamental understanding of IT
							services and their uses in the AWS Cloud. They demonstrated cloud
							fluency and foundational AWS knowledge. Badge owners are able to
							identify essential AWS services necessary to set up AWS-focused
							projects.
						</p> */}
					</div>
					<a href={ChaseCertifcationInformation} target="_blank" rel="noreferrer">
						Certifcation Overview
					</a>
					<h4>Credentail ID: {ChaseCredentailId}</h4>
					<div className="Btn-Container-Horizontal-Flex">
						<a href={ChaseCredentailUrl} target="_blank" rel="noreferrer">
							<button>See Credential</button>
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
			<div className="Certification-Container-flex Cert-Btm-Margin">
				{/* <div>
					<img src={AwsCloudPractitioner} alt="AWS Cloud Practitioner Certification" />
				</div> */}
				<div className="Cert-Container-Width">
					<h2 className="align-L Certification-Padding-A">Goldman Sach</h2>
					<h2 className="align-L Certification-Padding-A">
						Software Engineering Virtual Experience
					</h2>

					<div>
						<h4>Completed October 2021</h4>
						<div className="Certification-Padding-B">
							<h3 className="underline">
								Issued by Forage
								{/* <a
									href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
									target="_blank"
									rel="noreferrer"
								>
									Amazon Web Services Training and Certification
								</a> */}
							</h3>
						</div>
						{/* <p className="Certification-Padding-C">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
							vehicula cursus tellus ac lacinia. Etiam ut est in justo congue iaculis
							quis vel leo. Donec accumsan lorem ante, a consectetur mauris feugiat
							sed. Nunc vitae mauris vulputate, sollicitudin turpis quis, dictum
						</p> */}
					</div>
					<a href={GoldmanSachInformation} target="_blank" rel="noreferrer">
						Certifcation Overview
					</a>
					<h4>Credentail ID: {GoldmanSachCredentailId}</h4>
					<div className="Btn-Container-Horizontal-Flex">
						<a href={GoldmanSachCredentailUrl} target="_blank" rel="noreferrer">
							<button>See Credential</button>
						</a>
					</div>
				</div>
			</div>
		);
	}
	function Test() {
		return <div></div>;
	}
	return (
		<div id="Certification">
			<h1>Certifications</h1>
			<div className="Cert-Container-">
				<AwsCloudPract />
				<JPMorganChaseCo />
				<GoldmanSach />
			</div>
		</div>
	);
}
