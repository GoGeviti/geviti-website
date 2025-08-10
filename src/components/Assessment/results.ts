import type { AssessmentAnswerMap } from './types';

export type CalculatedResults = {
	chronologicalAge: number | null;
	biologicalAge: number | null;
	ageDiff: number | null;
	grade: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D' | null;
	riskLevel: 'High Priority' | 'Moderate Priority' | 'Optimize Further' | null;
	criticalBiomarkers: Array<{ name: string; reason: string; target: string }>
	metrics: Array<{ label: string; value: string }>
	protocol: Array<{ icon: string; title: string; description: string; timeline: string }>
};

export function calculateResults(answers: AssessmentAnswerMap): CalculatedResults {
	const chronologicalAge = toInt(answers['age']);
	let ageModifier = 0;
	let riskScore = 0;

	// Sleep (Q3)
	const sleep = answers['sleep'] as string | undefined;
	const sleepScores: Record<string, number> = { 'poor-short': 4, 'poor-adequate': 2, 'good-short': 1, optimal: -2 };
	ageModifier += sleep ? (sleepScores[sleep] ?? 0) : 0;
	if (sleep && sleep !== 'optimal') riskScore += 1;

	// Metabolic (Q4)
	const metabolic = answers['metabolic'] as string | undefined;
	const metabolicScores: Record<string, number> = { severe: 5, moderate: 3, mild: 1, stable: -3 };
	ageModifier += metabolic ? (metabolicScores[metabolic] ?? 0) : 0;
	if (metabolic === 'severe' || metabolic === 'moderate') riskScore += 2;

	// Exercise (Q5)
	const exercise = answers['exercise'] as string | undefined;
	const exerciseScores: Record<string, number> = { none: 4, 'cardio-only': 1, 'strength-only': 1, combined: -3 };
	ageModifier += exercise ? (exerciseScores[exercise] ?? 0) : 0;
	if (exercise === 'none') riskScore += 2;

	// Stress (Q6)
	const stress = answers['stress'] as string | undefined;
	const stressScores: Record<string, number> = { poor: 5, slow: 3, moderate: 1, excellent: -2 };
	ageModifier += stress ? (stressScores[stress] ?? 0) : 0;
	if (stress === 'poor' || stress === 'slow') riskScore += 1;

	// Body fat (Q7)
	const fat = answers['fat'] as string | undefined;
	const bodyScores: Record<string, number> = { visceral: 4, mixed: 2, peripheral: 0, lean: -2 };
	ageModifier += fat ? (bodyScores[fat] ?? 0) : 0;
	if (fat === 'visceral') riskScore += 2;

	// Inflammation (Q8)
	const inflam = answers['inflammation'] as string | undefined;
	const inflammationScores: Record<string, number> = { daily: 5, frequent: 3, occasional: 1, none: -2 };
	ageModifier += inflam ? (inflammationScores[inflam] ?? 0) : 0;
	if (inflam === 'daily' || inflam === 'frequent') riskScore += 2;

	// Additional factors
	const fam = answers['family-history'] as string | undefined;
	if (fam === 'cardiovascular' || fam === 'metabolic') riskScore += 1;
	const labwork = answers['labwork'] as string | undefined;
	if (labwork === 'never' || labwork === 'years') riskScore += 2;

	const biologicalAge = chronologicalAge !== null ? Math.round(chronologicalAge + ageModifier) : null;
	const ageDiff = chronologicalAge !== null && biologicalAge !== null ? (biologicalAge - chronologicalAge) : null;

	// Grade
	let grade: CalculatedResults['grade'] = null;
	if (ageDiff !== null) {
		if (ageDiff <= -5) grade = 'A+';
		else if (ageDiff <= -2) grade = 'A';
		else if (ageDiff <= 0) grade = 'B+';
		else if (ageDiff <= 2) grade = 'B';
		else if (ageDiff <= 5) grade = 'C';
		else grade = 'D';
	}

	// Risk level
	let riskLevel: CalculatedResults['riskLevel'] = null;
	if (riskScore >= 8) riskLevel = 'High Priority';
	else if (riskScore >= 4) riskLevel = 'Moderate Priority';
	else riskLevel = 'Optimize Further';

	// Critical biomarkers
	const criticalBiomarkers: CalculatedResults['criticalBiomarkers'] = [];
	if (metabolic === 'severe' || metabolic === 'moderate') {
		criticalBiomarkers.push({
			name: 'HbA1c, Fasting Insulin, HOMA-IR',
			reason: 'Your energy crashes indicate blood sugar dysregulation',
			target: 'HbA1c < 5.4%, Fasting insulin < 5 μIU/mL'
		});
	}
	if (stress === 'poor' || stress === 'slow') {
		criticalBiomarkers.push({
			name: 'Cortisol (4-point), DHEA-S, Heart Rate Variability',
			reason: 'Poor stress recovery is aging you rapidly',
			target: 'Optimal cortisol rhythm, DHEA-S in upper quartile'
		});
	}
	if (inflam === 'daily' || inflam === 'frequent') {
		criticalBiomarkers.push({
			name: 'hs-CRP, IL-6, TNF-alpha, Homocysteine',
			reason: 'Chronic inflammation detected - major aging driver',
			target: 'hs-CRP < 1.0 mg/L, Homocysteine < 7 μmol/L'
		});
	}
	const sex = answers['sex'] as string | undefined;
	if (answers['hormones'] && answers['hormones'] !== 'none') {
		const hormones = sex === 'male'
			? 'Total/Free Testosterone, Estradiol, SHBG'
			: 'Estradiol, Progesterone, Testosterone, FSH';
		criticalBiomarkers.push({
			name: hormones,
			reason: 'Hormone optimization is crucial for your symptoms',
			target: 'Age-adjusted optimal ranges, not just "normal"'
		});
	}
	criticalBiomarkers.push({
		name: 'Comprehensive Metabolic Panel + Lipids',
		reason: 'Foundation for all health optimization',
		target: 'All markers in optimal (not just normal) range'
	});

	// Metrics
	const metrics: CalculatedResults['metrics'] = [];
	if (inflam) metrics.push({ label: 'Inflammation Score', value: inflam === 'daily' ? 'High' : inflam === 'frequent' ? 'Moderate' : 'Low' });
	if (metabolic) metrics.push({ label: 'Metabolic Health', value: metabolic === 'stable' ? 'Optimal' : metabolic === 'mild' ? 'Good' : 'Needs Work' });
	const heal = answers['healing'] as string | undefined;
	if (heal) metrics.push({ label: 'Recovery Capacity', value: heal === 'fast' ? 'Excellent' : heal === 'normal' ? 'Average' : 'Poor' });
	if (ageDiff !== null) metrics.push({ label: 'Optimization Potential', value: ageDiff > 5 ? 'Very High' : ageDiff > 0 ? 'High' : 'Moderate' });

	// Protocol
	const protocol: CalculatedResults['protocol'] = [];
	if (sleep && sleep !== 'optimal') {
		protocol.push({
			icon: '😴',
			title: 'Sleep Optimization Protocol',
			description: 'Target 7-9 hours of quality sleep. Consider melatonin, magnesium glycinate, and sleep hygiene improvements.',
			timeline: 'See improvements in 2-3 weeks'
		});
	}
	if (metabolic && metabolic !== 'stable') {
		protocol.push({
			icon: '🍎',
			title: 'Metabolic Restoration Plan',
			description: 'Implement time-restricted eating (16:8), reduce refined carbs, add berberine or metformin (with doctor approval).',
			timeline: 'Energy stabilizes in 4-6 weeks'
		});
	}
	if (exercise === 'none' || exercise === 'cardio-only' || exercise === 'strength-only') {
		protocol.push({
			icon: '💪',
			title: 'Movement Optimization',
			description: 'Add Zone 2 cardio (150 min/week) + strength training (2x/week). Start with 10-minute walks after meals.',
			timeline: 'Feel stronger in 3-4 weeks'
		});
	}
	if (stress === 'poor' || stress === 'slow') {
		protocol.push({
			icon: '🧘',
			title: 'Stress Resilience Training',
			description: 'Daily HRV training, adaptogenic herbs (ashwagandha, rhodiola), 10-minute meditation practice.',
			timeline: 'Better stress response in 2-3 weeks'
		});
	}
	protocol.push({
		icon: '💊',
		title: 'Targeted Supplementation',
		description: 'Based on your profile: Vitamin D3+K2, Omega-3 (EPA/DHA), NAD+ precursors, and personalized stack pending bloodwork.',
		timeline: 'Noticeable changes in 4-8 weeks'
	});

	return { chronologicalAge, biologicalAge, ageDiff, grade, riskLevel, criticalBiomarkers, metrics, protocol };
}

function toInt(v: unknown): number | null {
	if (v === null || v === undefined) return null;
	const n = typeof v === 'number' ? v : parseInt(String(v), 10);
	return Number.isFinite(n) ? n : null;
}
