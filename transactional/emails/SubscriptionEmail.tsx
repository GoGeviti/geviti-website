import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Row,
	Section,
	Tailwind,
	Text
} from '@react-email/components';
import { DualColumn } from 'responsive-react-email';

interface SubscriptionEmailTemplateProps {
	firstName: string;
	lastName: string;
	subscriptionKey: string;
	baseUrl?: string;
	dashboardUrl?: string;
}

export default function SubscriptionEmail(
	props: SubscriptionEmailTemplateProps
) {
	const { subscriptionKey } = props;
	const baseUrl = !(props.baseUrl || '').startsWith('http') ? `https://${ props.baseUrl }` : props.baseUrl;
	const dashboardUrl = props.dashboardUrl || '';
	return (
		<Tailwind>
			<Html>
				<Head />

				<Body className='mx-auto my-auto font-sans'>
					<Container className='max-w-screen-md bg-[#f2f2f2]'>
						<Section className='my-[32px]'>
							<Img
								className='mx-auto'
								src={ `${baseUrl}/images/email/logo.png` } />
						</Section>
						<Section
							style={ {
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundImage: `url(${baseUrl}/images/email/header.png)`
							} }
							className='section-background w-11/12  content-center rounded-2xl'
						>
							<Row>
								<Column
									align='center'
									className='py-12'>
									<Heading className='text-xl font-semibold text-white'>
										{ props.firstName }, welcome to the Geviti family.
									</Heading>
									<Text className='my-1  text-xs text-white'>
										we&apos;re glad to have you, let&apos;s started
									</Text>
								</Column>
							</Row>
						</Section>
						<Section className='my-6 w-11/12 rounded-2xl bg-white text-center'>
							<Row>
								<Column className='py-8'>
									<Heading className='text-2xl font-semibold text-black'>
										Let&apos;s get you started.
									</Heading>
									<Text
										className=' text-gray-400'
										style={ { margin: '0px', fontSize: '12px' } }>
										You need to create an account to start
									</Text>
									<Section className='mt-4 w-2/3'>
										<Link
											className='block rounded-3xl bg-[#99d4ff] py-2.5 text-sm font-bold text-black'
											href={ `${dashboardUrl}/signup?key=${subscriptionKey}` }
										>
											Get Started
										</Link>
									</Section>
									<Section className='mt-2 w-2/3'>
										<Button
											className='font-base block rounded-3xl border-2 border-dotted border-gray-400 bg-[#f2f2f2] py-2.5 text-sm text-black'
										>
											{ subscriptionKey }
										</Button>
									</Section>
									<Text className='mt-1 text-[9px] font-medium uppercase tracking-widest text-gray-400'>
										your subscription key
									</Text>
								</Column>
							</Row>
						</Section>
						<DualColumn
							styles={ { width: '91.6667%', backgroundColor: '#181A1C', borderRadius: '16px' } }
							columnOneContent={
								<Row>
									<Column className='pt-8 text-left'>
										<Img src={ `${baseUrl}/images/email/Phones.png` } />
									</Column>
								</Row>
							}
							columnOneStyles={ { width: '20%' } }
							columnTwoStyles={ { width: '80%' } }
							columnTwoContent={
								<Row>
									<Column className='py-10 pl-6 text-left'>
										<Heading className='text-2xl font-medium  text-white'>
											Use Geviti anytime, anywhere with our mobile app.
										</Heading>
										<Row>
											<Column className='px-0.5 py-8 pb-0'>
												<Img
													className='h-10 w-48 rounded-md'
													src={ `${baseUrl}/images/email/app-store.png` } />
											</Column>
											<Column className='px-0.5 py-8 pb-0'>
												<Img
													className='h-10 w-48 rounded-md'
													src={ `${baseUrl}/images/email/play-store.png` } />
											</Column>
										</Row>
									</Column>
								</Row>
							}
						/>
						<Section className='w-1/5  my-3'>
							<Row>
								<Column
									className='py-4'
									align='center'>
									<Img
										className='mx-auto'
										src={ `${baseUrl}/images/email/_Facebook.png` } />
								</Column>
								<Column className='py-4'>
									<Img
										className='mx-auto'
										src={ `${baseUrl}/images/email/_Instagram.png` } />
								</Column>
								<Column className='py-4'>
									<Img
										className='mx-auto'
										src={ `${baseUrl}/images/email/_Linkedin.png` } />
								</Column>
								<Column className='py-4'>
									<Img
										className='mx-auto'
										src={ `${baseUrl}/images/email/_Twitter.png` } />
								</Column>
							</Row>

						</Section>
						<Section className='w-11/12 text-center'>
							<Text className='text-[8px] leading-4 text-[#9199a1]'>
								This email may contain confidential information that is privileged and legally
								protected from disclosure by federal law including the Health Insurance Portability
								and Accountability Act (HIPAA). This information is intended for only the use of the
								individual or entity named above. If you are not the intended recipient, you are
								hereby notified that reading, disseminating, disclosing, distributing, copying, acting
								upon, or otherwise using the information contained in this correspondence is strictly
								prohibited. If you have received this email in error, please notify
								<Link
									href='mailto:hello@gogeviti.com'
									className='ml-1 font-semibold text-black underline'>
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
