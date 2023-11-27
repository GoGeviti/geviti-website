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
} from '@react-email/components';
import { DualColumn } from 'responsive-react-email';
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
				<Body className='mx-auto my-auto font-sans'>
					<Container className='max-w-screen-md bg-[#f2f2f2]'>
						<Section className='my-[32px]'>
							<Img
								className='mx-auto'
								src={ 'https://app.gogeviti.com/_next/static/media/logo.5c44fa68.svg' }
							/>
						</Section>
						<Section
							style={ section }
							className='section-background w-11/12 rounded-2xl'
						>
							<Row>
								<Column
									align='center'
									className='py-12'>
									<Heading className='text-xl font-semibold text-white'>
                    Nathan, welcome to the Geviti family.
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
										style={ { margin: '0px', fontSize: '12px' } }
									>
                    You need to create an account to start
									</Text>
									<Section className='mt-4 w-2/3'>
										<Link
											className='block rounded-3xl bg-[#99d4ff] py-2.5 text-sm font-bold text-black'
											href='https://stackoverflow.blog/2019/10/22/'
										>
                      Get Started
										</Link>
									</Section>
									<Section className='mt-2 w-2/3'>
										<Link
											className='font-base block rounded-3xl border-2 border-dotted border-gray-400 bg-[#f2f2f2] py-2.5 text-sm text-black'
											href='https://stackoverflow.blog/2019/10/22/'
										>
											{ subscriptionKey }
										</Link>
									</Section>
									<Text className='mt-1 text-[9px] font-medium uppercase tracking-widest text-gray-400'>
                    your subscription key
									</Text>
								</Column>
							</Row>
						</Section>
						<DualColumn
							pX={ 15 }
							styles={ {
								width: '91.6667%',
								backgroundColor: '#181A1C',
								borderRadius: '16px',
							} }
							columnOneContent={
								<Row>
									<Column className='px-4 py-8 text-left'>
										<Heading className='text-2xl font-medium  text-white'>
                      Use Geviti anytime, anywhere with our mobile app.
										</Heading>
										<Row>
											<Column className='px-1 py-8 pb-0'>
												<Img
													className='rounded-md'
													src='data:image/png;base64,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'
												/>
											</Column>
											<Column className='px-1 py-8 pb-0'>
												<Img
													className='rounded-md'
													src='data:image/png;base64,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'
												/>
											</Column>
										</Row>
									</Column>
								</Row>
							}
							columnTwoContent={
								<Row>
									<Column className='px-4 py-8 text-left'>
										<Heading className='text-2xl font-medium  text-white'>
                      Use Geviti anytime, anywhere with our mobile app.
										</Heading>
										<Row>
											<Column className='px-1 py-8 pb-0'>
												<Img
													className='rounded-md'
													src='data:image/png;base64,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'
												/>
											</Column>
											<Column className='px-1 py-8 pb-0'>
												<Img
													className='rounded-md'
													src='data:image/png;base64,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'
												/>
											</Column>
										</Row>
									</Column>
								</Row>
							}
						/>
						<Section className='mb-[18px] mt-[32px]'>
							<Img
								className='mx-auto'
								src={ 'https://app.gogeviti.com/_next/static/media/logo.5c44fa68.svg' }
							/>
						</Section>
						<Section className='w-11/12 text-center'>
							<Text className='text-[8px] leading-4 text-[#9199a1]'>
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
									href=''
									className='ml-1 font-semibold text-black underline'
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
	backgroundSize: 'cover',
	backgroundImage:
    'url("https://itartificer.com/wp-content/uploads/2023/04/software-house-peshawar.png")',
};
