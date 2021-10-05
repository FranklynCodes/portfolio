import React from "react";
import AwsCloudPractitioner from "../image/Certification/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png";

// Cited from https://www.credly.com/org/amazon-web-services/badge/aws-certified-cloud-practitioner

export default function Certification() {
	return (
		<div id="Certification">
			<h1>Certifications</h1>
			<div className="Certification-Container-flex">
				<div>
					<img src={AwsCloudPractitioner} alt="AWS Cloud Practitioner Certification" />
				</div>
				<div>
					<h2 className="align-L Certification-Padding-A">
						AWS Certified Cloud Practitioner
					</h2>

					<div>
						<h4>In-Progress</h4>
						<div className="Certification-Padding-B">
							<h3 className="underline">
								Issued by{" "}
								<a
									href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
									target="_blank"
									rel="noreferrer"
								>
									Amazon Web Services Training and Certification
								</a>
							</h3>
						</div>
						<p className="Certification-Padding-C">
							Earners of this certification have a fundamental understanding of IT
							services and their uses in the AWS Cloud. They demonstrated cloud
							fluency and foundational AWS knowledge. Badge owners are able to
							identify essential AWS services necessary to set up AWS-focused
							projects.
						</p>
					</div>

					<button>Credential</button>
				</div>
			</div>
		</div>
	);
}
