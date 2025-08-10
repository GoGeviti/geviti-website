export type AssessmentOption = {
  value: string;
  label: string;
  description?: string;
};

export type AssessmentKind = 'input' | 'select' | 'options' | 'intro' | 'summary';

export type AssessmentQuestion = {
  id: string;
  kind: AssessmentKind;
  title?: string; // e.g., "Question 1 of 20 - Demographics"
  label?: string; // question text
  context?: string; // helper text
  placeholder?: string;
  options?: AssessmentOption[]; // for select/options
  inputType?: React.HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  category?: string;
  required?: boolean;
};

export type AssessmentAnswerMap = Record<string, string | number | null>;

export type AssessmentPayload = {
  answers: AssessmentAnswerMap;
};

export type AssessmentProps = {
  className?: string;
  onComplete?: (payload: AssessmentPayload) => void; // consumer can POST to API later
  initialAnswers?: Partial<AssessmentAnswerMap>;
};
