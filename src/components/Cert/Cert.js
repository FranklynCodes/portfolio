import AwsCloudPractitioner from "../../image/Certification/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png";

// Cited from https://www.credly.com/org/amazon-web-services/badge/aws-certified-cloud-practitioner

const AwsCertifcationInfromation =
	"https://aws.amazon.com/certification/certified-cloud-practitioner/";
const AwsExamGuide =
	"https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf";

const AwsRampUpGuide =
	"https://d1.awsstatic.com/training-and-certification/ramp-up_guides/Ramp-Up_Guide_CloudPractitioner.pdf";

function AwsCloudPract() {
	return (
		<div className="Certification-Container-flex">
			<div className="Cert-Container-Width">
				<h2 className="align-L Cert-Compnay-Title Certification-Padding-A">Amazon</h2>
				<h2 className="align-L Certification-Padding-A Cert-Title-h2">
					Certified Cloud Practitioner
				</h2>
				<div>
					{/* <img src={AwsCloudPractitioner} alt="AWS Cloud Practitioner Certification" /> */}
					<h3 className="Certification-Padding-B Cert-Completion-Status">In-Progress</h3>
					<div className="Certification-Padding-B">
						<h3>
							<a
								id="Cert-Issuer-Font"
								href="https://aws.amazon.com/training/learn-about/cloud-practitioner/"
								target="_blank"
								rel="noreferrer"
							>
								Issued by Amazon Web Services Training and Certification
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
				<div className="AnchorLinks-Container-Flex">
					<a href={AwsCertifcationInfromation} target={"_blank"} rel="noreferrer">
						Certification Overview
					</a>
					<a href={AwsExamGuide} target={"_blank"} rel="noreferrer">
						Certification Details
					</a>
					<a href={AwsRampUpGuide} target={"_blank"} rel="noreferrer">
						AWS Ramp-Up Guide
					</a>
				</div>
				<h4>Credentail ID: ...</h4>

				<div className="Btn-Container-Horizontal-Flex">
					<a
						className="Certification-Anchor-Btn"
						href={"/#/"}
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
