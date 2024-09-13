import React from 'react';

import solutionData from '@/constant/data/solution';

import { Dialog, DialogContent } from '../Dialog';
import { InfoCircle, XIcon } from '../Icons';

type DialogDisclaimerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DialogDisclaimer: React.FC<DialogDisclaimerProps> = ({
	open,
	setOpen,
}) => {
	const renderDialogDisclaimer = () => {
		return (
			<Dialog
				open={ open }
				modal={ true }
				data-lenis-prevent
				onOpenChange={ setOpen }
			>
				<DialogContent
					position='default'
					className='w-full sm:max-w-[343px] px-4 pt-4 pb-[42px] bg-white max-w-[calc(100vw-32px)] rounded-[20px]'
					showClose={ false }
					overlayClassName='!bg-opacity-50 !backdrop-blur-[3px]'
				>
					<div className='flex flex-col gap-6'>
						<div className='flex justify-between items-center'>
							<div className='flex items-center gap-2'>
								<InfoCircle className='w-6 h-6 text-primary flex-shrink-0' />
								<h6 className='text-lg font-medium -tracking-0.04em text-primary'>
                  Disclaimer
								</h6>
							</div>
							<button
								onClick={ () => setOpen(false) }
								className='focus:ring-0 focus:outline-none rounded-full w-[34px] h-[34px] bg-white border border-grey-100 relative'
							>
								<XIcon className='w-3.5 h-3.5 text-[#292D32] absolute-center' />
							</button>
						</div>
						<p className='text-grey-600 text-lg'>
							{ solutionData.treatmentOptions.disclaimer }
						</p>
					</div>
				</DialogContent>
			</Dialog>
		);
	};

	return renderDialogDisclaimer();
};

export default DialogDisclaimer;
