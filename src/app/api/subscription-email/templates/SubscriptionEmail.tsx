import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";
import { DualColumn } from "responsive-react-email";

import logo from "../../../../assets/email/logo.png";
import playStore from "../../../../assets/email/play-store.png";
import appStore from "../../../../assets/email/app-store.png";
import heroImage from "../../../../assets/email/hero-bg.png";

interface SubscriptionEmailTemplateProps {
	name: string;
	subscriptionKey: string;
}
export default function SubscriptionEmail(
	props: SubscriptionEmailTemplateProps
) {
	const { subscriptionKey } = props;
	return (
		<Tailwind>
			<Html>
				<Head />
				<Preview>Stack overflow tips for searching</Preview>
				<Body className="mx-auto my-auto font-sans">
					<Container className="max-w-screen-md bg-[#f2f2f2]">
						<Section className="my-[32px]">
							<Img className="mx-auto" src={logo.src} />
						</Section>
						<Section
							style={section}
							className="section-background w-11/12 rounded-2xl"
						>
							<Row>
								<Column align="center" className="py-12">
									<Heading className="text-xl font-semibold text-white">
										Nathan, welcome to the Geviti family.
									</Heading>
									<Text className="my-1  text-xs text-white">
										we&apos;re glad to have you, let&apos;s started
									</Text>
								</Column>
							</Row>
						</Section>
						<Section className="my-6 w-11/12 rounded-2xl bg-white text-center">
							<Row>
								<Column className="py-8">
									<Heading className="text-2xl font-semibold text-black">
										Let&apos;s get you started.
									</Heading>
									<Text
										className=" text-gray-400"
										style={{ margin: "0px", fontSize: "12px" }}
									>
										You need to create an account to start
									</Text>
									<Section className="mt-4 w-2/3">
										<Link
											className="block rounded-3xl bg-[#99d4ff] py-2.5 text-sm font-bold text-black"
											href="https://stackoverflow.blog/2019/10/22/"
										>
											Get Started
										</Link>
									</Section>
									<Section className="mt-2 w-2/3">
										<Link
											className="font-base block rounded-3xl border-2 border-dotted border-gray-400 bg-[#f2f2f2] py-2.5 text-sm text-black"
											href="https://stackoverflow.blog/2019/10/22/"
										>
											{subscriptionKey}
										</Link>
									</Section>
									<Text className="mt-1 text-[9px] font-medium uppercase tracking-widest text-gray-400">
										your subscription key
									</Text>
								</Column>
							</Row>
						</Section>
						<DualColumn
							styles={{
								width: "91.6667%",
								backgroundColor: "#181A1C",
								borderRadius: "16px",
							}}
							columnOneContent={
								<Row>
									<Column className="py-8 text-left"></Column>
								</Row>
							}
							columnTwoContent={
								<Row>
									<Column className="py-8 text-left">
										<Heading className="text-2xl font-medium  text-white">
											Use Geviti anytime, anywhere with our mobile app.
										</Heading>
										<Row>
											<Column className="px-0.5 py-8 pb-0">
												<Img
													className="h-10 w-48 rounded-md"
													src={appStore.src}
												/>
											</Column>
											<Column className="px-0.5 py-8 pb-0">
												<Img
													className="h-12 w-48 rounded-md"
													src={playStore.src}
												/>
											</Column>
										</Row>
									</Column>
								</Row>
							}
						/>
						<Section className="mb-[18px] mt-[32px]">
							<Img className="mx-auto" src={logo.src} />
						</Section>
						<Section className="w-11/12 text-center">
							<Text className="text-[8px] leading-4 text-[#9199a1]">
								This email may contain confidential information that is
								privileged and legally protected from disclosure by federal law
								including the Health Insurance Portability and Accountability
								Act (HIPAA). This information is intended for only the use of
								the individual or entity named above. If you are not the
								intended recipient, you are hereby notified that reading,
								disseminating, disclosing, distributing, copying, acting upon,
								or otherwise using the information contained in this
								correspondence is strictly prohibited. If you have received this
								email in error, please notify
								<Link
									href=""
									className="ml-1 font-semibold text-black underline"
								>
									hello@gogeviti.com
								</Link>
								immediately.
							</Text>
						</Section>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
}

const section = {
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundImage: `url(${heroImage.src})`,
};
