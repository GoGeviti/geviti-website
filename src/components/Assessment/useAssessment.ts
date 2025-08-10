import { useCallback, useMemo, useState } from 'react';

import { assessmentQuestions, countCoreQuestions } from './questions';
import type { AssessmentAnswerMap, AssessmentPayload, AssessmentQuestion } from './types';

export const useAssessment = (initial?: Partial<AssessmentAnswerMap>) => {
	const [index, setIndex] = useState(0);
	const [answers, setAnswers] = useState<AssessmentAnswerMap>({ ...(initial || {}) } as AssessmentAnswerMap);
	const questions = assessmentQuestions;

	const totalVisible = useMemo(() => countCoreQuestions, []);
	const current: AssessmentQuestion = questions[index];

	const getStepIndex = useCallback((qs: AssessmentQuestion[], idx: number) => {
		const visible = qs.filter(q => !['intro', 'summary'].includes(q.kind));
		const cur = qs[idx];
		const visibleIndex = visible.findIndex(q => q.id === cur.id);
		return visibleIndex >= 0 ? visibleIndex + 1 : 0;
	}, []);

	const step = getStepIndex(questions, index);

	const progress = useMemo(() => {
		const completed = Math.max(0, step - 1);
		return Math.round((completed / totalVisible) * 100);
	}, [step, totalVisible]);

	const next = useCallback(() => setIndex(i => Math.min(i + 1, questions.length - 1)), [questions.length]);
	const prev = useCallback(() => setIndex(i => Math.max(i - 1, 0)), []);
	const setAnswer = useCallback((id: string, value: string | number | null) => setAnswers(prevState => ({ ...prevState, [id]: value })), []);

	const canContinue = useMemo(() => {
		if (!current) return false;
		if (current.kind === 'intro') return true;
		if (current.kind === 'summary') return true;
		if (!current.required) return true;
		const val = answers[current.id];
		return val !== undefined && val !== null && val !== '';
	}, [answers, current]);

	const buildPayload = useCallback((): AssessmentPayload => ({ answers }), [answers]);

	return {
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
	};
};

export type UseAssessmentReturn = ReturnType<typeof useAssessment>;
