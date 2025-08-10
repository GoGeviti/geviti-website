'use client';

import React from 'react';

import clsxm from '@/helpers/clsxm';

import Button from '../Onboarding/Button';
import Select from '../Onboarding/InputSelect';
import TextField from '../Onboarding/TextField';

import AssessmentProgress from './Progress';
import { calculateResults } from './results';
import type { AssessmentAnswerMap, AssessmentProps } from './types';
import { useAssessment } from './useAssessment';

const OptionCard: React.FC<{
  option: { value: string; label: string; description?: string };
  selected?: boolean;
  onClick?: () => void;
}> = ({ option, selected, onClick }) => {
	return (
		<li>
			<button
				type='button'
				onClick={ onClick }
				className={ clsxm(
					'w-full text-left bg-white px-6 py-5 rounded-[10px] flex items-start justify-between gap-3 border transition-colors',
					selected ? 'border-primary shadow-card' : 'border-[#E6E7E7] hover:border-primary'
				) }
			>
				<div className='flex-1'>
					<p className='text-[15px] 2xl:text-[17px] font-medium leading-normal text-primary'>
						{ option.label }
					</p>
					{ option.description && (
						<p className='mt-1 text-xs text-grey-500'>{ option.description }</p>
					) }
				</div>
				<div className={ clsxm('w-4 h-4 rounded-full border mt-1 flex-shrink-0', selected ? 'bg-primary border-primary' : 'border-grey-300') } />
			</button>
		</li>
	);
};

const SectionHeader: React.FC<{ label?: string; context?: string; step?: number; total?: number }> = ({ label, context, step, total }) => (
	<div>
		{ typeof step === 'number' && typeof total === 'number' && (
			<p className='text-xs text-grey-500 font-BRSonoma mb-2'>Question { step } of { total }</p>
		) }
		{ label && (
			<h2 className='text-2xl leading-normal -tracking-[0.04em] text-primary font-Poppins font-medium'>{ label }</h2>
		) }
		{ context && (
			<div className='mt-3 text-xs text-grey-500 bg-grey-secondary rounded-[10px] border border-grey-100 p-3'>
				{ context }
			</div>
		) }
	</div>
);

const Intro: React.FC<{ onStart: () => void }> = ({ onStart }) => {
	return (
		<div className='text-center'>
			<div className='text-5xl mb-5'>🧬</div>
			<h2 className='h4 font-medium'>Unlock Your Personalized Longevity Blueprint</h2>
			<p className='body-small mt-4'>This advanced 5-minute assessment analyzes key health indicators used to predict biological age and create optimization protocols.</p>

			<div className='mt-6 text-left bg-grey-secondary p-5 rounded-[10px]'>
				<h3 className='text-primary font-Poppins font-medium text-[18px] mb-3'>Your Personalized Report Will Include:</h3>
				<ul className='space-y-3'>
					<li className='flex items-start gap-3'><span className='text-[20px]'>📊</span><span><b>Biological Age Score</b> - See how your cells are aging compared to your chronological age</span></li>
					<li className='flex items-start gap-3'><span className='text-[20px]'>🔬</span><span><b>Critical Biomarker Priorities</b> - The exact tests you need based on your risk profile</span></li>
					<li className='flex items-start gap-3'><span className='text-[20px]'>⚡</span><span><b>Optimization Protocol</b> - Specific interventions for your top 3 health gaps</span></li>
					<li className='flex items-start gap-3'><span className='text-[20px]'>💊</span><span><b>Supplement Recommendations</b> - Evidence-based nutrients for your profile</span></li>
				</ul>
			</div>

			<div className='mt-5 max-w-[430px] mx-auto'>
				<Button onClick={ onStart }>Start My Assessment</Button>
				<p className='body-extra-small mt-3'>Based on peer-reviewed longevity research and validated by our medical team</p>
			</div>
		</div>
	);
};

const Summary: React.FC<{ answers: AssessmentAnswerMap; onFinish: () => void; }> = ({ answers, onFinish }) => {
	const res = calculateResults(answers);
	return (
		<div className='text-center'>
			<h3 className='h4 font-medium'>Your Longevity Assessment Results</h3>

			<div className='bg-gradient-to-r from-blue-4 to-blue-primary text-white rounded-[16px] p-6 mt-4'>
				<p className='text-sm opacity-95'>Your Predicted Biological Age:</p>
				<div className='text-[40px] font-bold mt-2'>{ res.biologicalAge ?? '--' }</div>
				<div className='text-sm mt-2'>
					{ res.ageDiff === null ? '--' : res.ageDiff > 0 ? `That's ${res.ageDiff} years older than your chronological age` : res.ageDiff < 0 ? `That's ${Math.abs(res.ageDiff)} years younger than your chronological age!` : 'Exactly matches your chronological age' }
				</div>
				<div className='mt-4 pt-4 border-t border-white/30 flex items-center justify-center gap-3'>
					{ res.grade && <span className='text-[32px] font-bold'>{ res.grade }</span> }
					{ res.riskLevel && (
						<span className={ clsxm('text-xs font-semibold px-3 py-1 rounded-2xl',
							res.riskLevel === 'High Priority' && 'bg-[#fee] text-[#dc2626]',
							res.riskLevel === 'Moderate Priority' && 'bg-[#fef3c7] text-[#d97706]',
							res.riskLevel === 'Optimize Further' && 'bg-[#d1fae5] text-[#059669]'
						) }>{ res.riskLevel }</span>
					) }
				</div>
			</div>

			<div className='text-left mt-6 bg-grey-secondary border border-grey-100 rounded-[12px] p-5'>
				<h4 className='text-primary font-Poppins font-medium flex items-center gap-2 mb-3'>
					<span className='text-xl'>🧪</span> Critical Biomarker Priorities
				</h4>
				<div className='space-y-3'>
					{ res.criticalBiomarkers.slice(0, 4).map((bio, idx) => (
						<div
							key={ idx }
							className='bg-white rounded-[10px] p-4 border border-grey-100'
						>
							<h5 className='text-sm text-blue-primary font-medium mb-1'>{ idx + 1 }. { bio.name }</h5>
							<p className='text-sm'><b>Why:</b> { bio.reason }</p>
							<p className='text-xs text-grey-600 mt-1'><b>Target:</b> { bio.target }</p>
						</div>
					)) }
				</div>
			</div>

			<div className='text-left mt-6 bg-white border border-grey-100 rounded-[12px] p-5'>
				<h4 className='text-primary font-Poppins font-medium flex items-center gap-2 mb-3'>
					<span className='text-xl'>📊</span> Your Health Metrics Dashboard
				</h4>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
					{ res.metrics.map((m, i) => (
						<div
							key={ i }
							className='bg-grey-secondary rounded-[8px] p-3 border border-grey-100'
						>
							<div className='text-[12px] text-grey-600'>{ m.label }</div>
							<div className='text-[18px] font-semibold text-blue-primary mt-1'>{ m.value }</div>
						</div>
					)) }
				</div>
			</div>

			<div className='text-left mt-6 border-2 border-blue-primary rounded-[12px] p-5 bg-white'>
				<h4 className='text-blue-primary font-Poppins font-medium mb-3'>Your Personalized Optimization Protocol</h4>
				<div className='divide-y divide-grey-100'>
					{ res.protocol.slice(0, 4).map((p, i) => (
						<div
							key={ i }
							className='py-3 flex items-start gap-3'
						>
							<span className='text-xl'>{ p.icon }</span>
							<div>
								<h5 className='text-[15px] font-medium'>{ p.title }</h5>
								<p className='text-sm text-grey-600'>{ p.description }</p>
								<p className='text-xs text-grey-500 mt-1'>{ p.timeline }</p>
							</div>
						</div>
					)) }
				</div>
			</div>

			<div className='mt-6 bg-gradient-to-r from-blue-4 to-blue-primary text-white rounded-[12px] p-5 text-left'>
				<h4 className='text-xl font-semibold'>Start Your Transformation with Geviti</h4>
				<p className='opacity-95 mt-1'>Join thousands optimizing their healthspan with data-driven precision medicine.</p>
				<ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-sm opacity-95'>
					<li className='flex items-center gap-2'><span className='text-green-500'>✔</span> Personalized biomarker plan</li>
					<li className='flex items-center gap-2'><span className='text-green-500'>✔</span> Evidence-based protocol</li>
					<li className='flex items-center gap-2'><span className='text-green-500'>✔</span> Ongoing optimization</li>
					<li className='flex items-center gap-2'><span className='text-green-500'>✔</span> Medical team validation</li>
				</ul>
				<div className='mt-4'>
					<Button onClick={ onFinish }>Continue</Button>
					<p className='text-xs mt-2 opacity-90'>We&apos;ll use your answers to prepare your detailed report.</p>
				</div>
			</div>
		</div>
	);
};

const Assessment: React.FC<AssessmentProps> = ({ className, onComplete, initialAnswers }) => {
	const {
		index,
		questions,
		current,
		answers,
		setAnswer,
		next,
		prev,
		step,
		totalVisible,
		progress,
		canContinue,
		buildPayload,
	} = useAssessment(initialAnswers as AssessmentAnswerMap);

	const complete = () => onComplete?.(buildPayload());

	const renderBody = () => {
		if (current.kind === 'intro') return <Intro onStart={ next } />;
		if (current.kind === 'summary') return <Summary
			answers={ answers }
			onFinish={ complete } />;

		return (
			<div>
				<SectionHeader
					label={ current.label }
					context={ current.context }
					step={ step }
					total={ totalVisible }
				/>

				<div className='mt-5'>
					{ current.kind === 'input' && (
						<div className='max-w-[430px]'>
							<TextField
								id={ current.id }
								label=''
								type={ current.inputType as any }
								placeholder={ current.placeholder }
								min={ current.min as any }
								max={ current.max as any }
								value={ (answers[current.id] as any) ?? '' }
								onChange={ e => setAnswer(current.id, e.target.value) }
							/>
						</div>
					) }

					{ current.kind === 'select' && (
						<div className='max-w-[430px]'>
							<Select
								label=''
								options={ current.options || [] }
								value={ (answers[current.id] as string) || '' }
								onChange={ val => setAnswer(current.id, val) }
								placeholder={ current.placeholder || 'Select' }
								isError={ false }
							/>
						</div>
					) }

					{ current.kind === 'options' && (
						<ul className='flex flex-col gap-3 max-w-[600px]'>
							{ (current.options || []).map(opt => (
								<OptionCard
									key={ opt.value }
									option={ opt }
									selected={ answers[current.id] === opt.value }
									onClick={ () => setAnswer(current.id, opt.value) }
								/>
							)) }
						</ul>
					) }
				</div>

				<div className='flex items-center gap-3 mt-6'>
					<button
						type='button'
						onClick={ prev }
						className='btn btn-secondary min-w-[120px]'
						disabled={ index === 0 }
					>Back</button>
					<div className='flex-1' />
					<Button
						onClick={ () => {
							if (!canContinue) return;
							if (index < questions.length - 1) next();
						} }
						disabled={ !canContinue }
						className='min-w-[140px]'
					>{ index < questions.length - 1 ? 'Continue' : 'Finish' }</Button>
				</div>
			</div>
		);
	};

	return (
		<section className={ clsxm('w-full', className) }>
			<div className='max-w-[700px] mx-auto bg-white rounded-20px shadow-card border border-grey-100 overflow-hidden'>
				<div className='bg-gradient-to-r from-blue-4 to-blue-primary text-white p-5'>
					<h1 className='text-xl font-Poppins font-medium text-white text-center'>Advanced Longevity Prediction Assessment</h1>
					<p className='text-xs opacity-90 text-center mt-1'>Discover your biological age and personalized optimization protocol</p>
					<div className='mt-4'>
						<AssessmentProgress progress={ progress } />
					</div>
				</div>

				<div className='p-5'>
					{ renderBody() }
				</div>
			</div>
		</section>
	);
};

export default Assessment;
