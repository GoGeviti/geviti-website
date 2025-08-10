'use client';
/* eslint-disable */

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import clsxm from "@/helpers/clsxm";

import { assessmentQuestions } from "../Assessment/questions";
import { calculateResults } from "../Assessment/results";
import type { AssessmentAnswerMap } from "../Assessment/types";
import Button from "../Onboarding/Button";
import Navbar from "../Onboarding/Navbar";
import Questionnaire from "../Onboarding/Questionnaire";
import TextField from "../Onboarding/TextField";
import Tip from "../Onboarding/Tip";
import { slideInVariants } from "../Onboarding/transitions";

const AssessmentFlowMain: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswerMap>(
    {} as AssessmentAnswerMap
  );
  const [ageValue, setAgeValue] = useState<string>("");
  const [ageError, setAgeError] = useState<string | null>(null);
  const [emailValue, setEmailValue] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [introPhase, setIntroPhase] = useState<0 | 1>(0);

  const steps = assessmentQuestions; // includes intro and summary
  const current = steps[index];

  const progress = useMemo(() => {
    const totalCore = steps.filter(
      (s) => !["intro", "summary"].includes(s.kind)
    ).length;
    const curCoreIdx = steps
      .filter((s) => !["intro", "summary"].includes(s.kind))
      .findIndex((s) => s.id === current.id);
    const completed = Math.max(0, curCoreIdx);
    return Math.round((completed / totalCore) * 100);
  }, [steps, current]);

  const next = () => setIndex((i) => Math.min(i + 1, steps.length - 1));
  const prev = () => {
    setIndex((i) => {
      const nextIdx = Math.max(i - 1, 0);
      if (nextIdx === 0) setIntroPhase(0);
      return nextIdx;
    });
  };

  const onSelectOption = (val: string) => {
    setAnswers((prevState) => ({ ...prevState, [current.id]: val }));
    next();
  };

  const onInputSubmit = (val: string) => {
    setAnswers((prevState) => ({ ...prevState, [current.id]: val }));
    next();
  };

  const renderContent = () => {
    if (current.kind === "intro") {
      if (introPhase === 0) {
        return (
          <Tip
            key="ASSESSMENT_INTRO_TIP"
            title="Advanced Longevity Prediction Assessment"
            desc="Discover your biological age and personalized optimization protocol based on 90+ biomarkers"
            onContinue={() => setIntroPhase(1)}
          />
        );
      }

      return (
        <motion.div
          key="intro-phase-1"
          variants={slideInVariants}
          initial="initial"
          animate="visible"
          exit="exit"
          className="w-full h-full lg:rounded-[20px] relative"
        >
          <div className="h-full w-full flex items-center justify-center px-4 xs2:px-6 lg:px-0 py-8">
            <div className="w-full max-w-3xl">
              <div className="bg-white rounded-[16px] lg:rounded-[20px] shadow-sm border border-black/5 p-6 sm:p-8 lg:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 text-[11px] font-medium px-3 py-1 mb-3">
                    5‑minute assessment
                  </div>
                  <h1 className="text-[28px] lg:text-[36px] font-semibold -tracking-[0.02em] leading-tight text-primary">
                    Unlock Your Personalized Longevity Blueprint
                  </h1>
                  <p className="mt-3 font-BRSonoma text-grey-primary max-w-2xl mx-auto">
                    This advanced 5-minute assessment analyzes key health
                    indicators that our medical team uses to predict biological
                    age and create optimization protocols for our members.
                  </p>
                </div>
                <div className="mt-6 text-left bg-blue-1/15 rounded-[12px] p-5 sm:p-6">
                  <p className="text-sm font-medium mb-3">
                    Your Personalized Report Will Include:
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>
                      <b>📊 Biological Age Score -</b> See how your cells are
                      aging compared to your chronological age
                    </li>
                    <li>
                      <b>🔬 Critical Biomarker Priorities -</b> The exact tests
                      you need based on your risk profile
                    </li>
                    <li>
                      <b>⚡ Optimization Protocol -</b> Specific interventions
                      for your top 3 health gaps
                    </li>
                    <li>
                      <b>💊 Supplement Recommendations -</b> Evidence-based
                      nutrients for your profile
                    </li>
                  </ul>
                </div>
                <div className="mt-8 flex flex-col items-center">
                  <Button className="w-full max-w-[320px]" onClick={next}>
                    Start my assessment
                  </Button>
                  <p className="text-xs text-grey-600 mt-3">
                    Based on peer-reviewed longevity research and validated by
                    our medical team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    if (current.kind === "summary") {
      const res = calculateResults(answers);
      const ageDelta =
        typeof res.ageDiff === "number"
          ? `${res.ageDiff > 0 ? "+" : ""}${res.ageDiff} yrs`
          : "--";
      const biomarkerCount = (res.criticalBiomarkers || []).length;
      const protocolCount = (res.protocol || []).length;
      return (
        <motion.div
          key="summary"
          variants={slideInVariants}
          initial="initial"
          animate="visible"
          exit="exit"
          className="w-full h-full lg:rounded-[20px] relative overflow-y-auto"
          data-lenis-prevent
        >
          <div
            className="w-full min-h-full px-4 xs2:px-6 lg:px-0"
            data-lenis-prevent
          >
            <div className="h-full w-full flex items-start justify-center py-8">
              <div className="w-full max-w-5xl">
                <div
                  className="space-y-6 sm:space-y-8 text-primary text-left lg:bg-white lg:rounded-2xl lg:p-6"
                  style={{
                    boxShadow:
                      "0px 518px 145px 0px rgba(210, 229, 244, 0.00), 0px 332px 133px 0px rgba(210, 229, 244, 0.03), 0px 187px 112px 0px rgba(210, 229, 244, 0.09), 0px 83px 83px 0px rgba(210, 229, 244, 0.16), 0px 21px 46px 0px rgba(210, 229, 244, 0.18)",
                  }}
                >
                  <h2 className="text-[22px] lg:text-[30px] text-center font-semibold -tracking-[0.02em] leading-snug">
                    Your Longevity Assessment Results
                  </h2>

                  {/* Longevity score block (mirrors Assessment.html) */}
                  <div className="rounded-[16px] p-6 sm:p-8 text-primary bg-blue-alice lg:w-1/2 mx-auto text-center">
                    <p className="text-base opacity-95">
                      Your Predicted Biological Age:
                    </p>
                    <div className="text-[40px] lg:text-[48px] font-bold mt-2">
                      {res.biologicalAge ?? "--"}
                    </div>
                    {typeof res.ageDiff === "number" && (
                      <p className="text-base mt-2">
                        {res.ageDiff > 0
                          ? `That's ${res.ageDiff} years older than your chronological age`
                          : res.ageDiff < 0
                          ? `That's ${Math.abs(
                              res.ageDiff
                            )} years younger than your chronological age!`
                          : "Exactly matches your chronological age"}
                      </p>
                    )}
                    <div className="mt-5 pt-5 border-t border-grey-primary">
                      <p className="text-base opacity-95 mb-1">
                        Longevity Grade:
                      </p>
                      <div className="text-[56px] lg:text-[64px] font-bold leading-none">
                        {res.grade ?? "--"}
                      </div>
                    </div>
                  </div>

                  {/* Info bar like savings row */}
                  {/* <div className='mt-2 rounded-2xl w-full flex max-lg:flex-col gap-2.5 lg:items-center lg:justify-around p-3.5 lg:p-6 border border-grey-50 bg-grey-primary-light'>
											<span className='text-sm lg:text-lg font-medium text-grey-primary max-lg:inline-flex max-lg:justify-between max-lg:items-center'>
												<span>Age delta:</span> <span className='text-green-alert'>{ ageDelta }</span>
											</span>
											<span className='text-sm lg:text-lg font-medium text-grey-primary max-lg:inline-flex max-lg:justify-between max-lg:items-center'>
												<span>Biomarkers flagged:</span> <span className='text-green-alert'>{ biomarkerCount }</span>
											</span>
											<span className='text-sm lg:text-lg font-medium text-grey-primary max-lg:inline-flex max-lg:justify-between max-lg:items-center'>
												<span>Protocol items:</span> <span className='text-green-alert'>{ protocolCount }</span>
											</span>
									</div> */}

                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white rounded-[12px] lg:rounded-[16px] shadow-sm border border-black/5 p-6 sm:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl font-semibold text-primary">
                          🎯 Your Critical Biomarker Priorities
                        </h3>
                        {res.riskLevel && (
                          <span
                            className={
                              res.riskLevel === "High Priority"
                                ? "px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold"
                                : res.riskLevel === "Moderate Priority"
                                ? "px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold"
                                : "px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold"
                            }
                          >
                            {res.riskLevel}
                          </span>
                        )}
                      </div>
                      <p className="mb-4 text-sm text-grey-primary">
                        Based on your assessment, these biomarkers need
                        immediate attention:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(res.criticalBiomarkers || [])
                          .slice(0, 4)
                          .map((b, i) => (
                            <div
                              key={i}
                              className="biomarker-card rounded-[12px] bg-white p-4 shadow-sm border border-black/5"
                            >
                              <h4 className="text-primary font-semibold mb-2">
                                {i + 1}. {b.name}
                              </h4>
                              <p className="text-sm mb-1">
                                <b>Why:</b> {b.reason}
                              </p>
                              <p className="text-xs">
                                <b>Target:</b> {b.target}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>

                    {res.metrics && res.metrics.length > 0 && (
                      <div className="bg-white rounded-[12px] lg:rounded-[16px] shadow-sm border border-black/5 p-6 sm:p-8">
                        <h3 className="text-xl font-semibold text-primary mb-3">
                          📊 Your Health Metrics Dashboard
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {res.metrics.map((m, i) => (
                            <div
                              key={i}
                              className="bg-white rounded-[10px] p-3 shadow-sm border border-black/5"
                            >
                              <div className="text-xs text-grey-primary mb-1">
                                {m.label}
                              </div>
                              <div className="text-lg font-semibold text-primary">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-white rounded-[12px] lg:rounded-[16px] shadow-sm border border-black/5 p-6 sm:p-8">
                      <h3 className="text-xl font-semibold text-primary mb-3">
                        Your Personalized Optimization Protocol
                      </h3>
                      <div>
                        {(res.protocol || []).slice(0, 4).map((p, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 py-3 border-b last:border-b-0"
                          >
                            <div className="text-xl">{p.icon}</div>
                            <div>
                              <h4 className="text-base font-semibold">
                                {p.title}
                              </h4>
                              <p className="text-sm">{p.description}</p>
                              <p className="text-xs mt-1">
                                <b>{p.timeline}</b>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-most-value text-white rounded-[12px] text-center p-6 shadow-md">
                      <h3 className="text-2xl font-semibold">
                        Start Your Transformation with Geviti
                      </h3>
                      <p className="mt-2 opacity-95">
                        Join thousands optimizing their healthspan with
                        data-driven precision medicine.
                      </p>
                      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-300 text-lg">✓</span>
                          <span>90+ biomarkers tested at home</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-300 text-lg">✓</span>
                          <span>Dedicated health coach + doctor</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-300 text-lg">✓</span>
                          <span>Custom supplements delivered monthly</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-300 text-lg">✓</span>
                          <span>$129/month (competitors $149+)</span>
                        </div>
                      </div>
                      <div className="mt-5 w-full flex flex-col items-center">
                        <Link
                          href="/pricing"
                          className="inline-block bg-white text-primary px-8 py-4 rounded-[8px] font-semibold shadow hover:shadow-md transition hover:-translate-y-0.5 w-fit"
                        >
                          Claim Your $50 Off First Test + Free Consultation
                        </Link>
                        <p className="mt-4 text-sm opacity-90">
                          Limited time offer • No commitment required • Cancel
                          anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    if (current.kind === "options" || current.kind === "select") {
      // const totalCore = steps.filter(s => !['intro', 'summary'].includes(s.kind)).length;
      // const coreIndex = steps.filter(s => !['intro', 'summary'].includes(s.kind)).findIndex(s => s.id === current.id);
      // const number = coreIndex >= 0 ? coreIndex + 1 : undefined;
      // const meta = number ? `Question ${number} of ${totalCore}${current.category ? ` - ${current.category}` : ''}` : undefined;
      return (
        <Questionnaire
          key="options-screen"
          contentKey={current.id}
          title={current.label}
          context={current.context}
          // meta={ meta }
          options={
            (current.options || []).map((o) => ({
              label: o.label,
              description: (o as any).description,
              nextStep: {},
            })) as any
          }
          onSelect={(opt) =>
            onSelectOption(
              (current.options || []).find((o) => o.label === opt.label)
                ?.value || ""
            )
          }
        />
      );
    }

    if (current.kind === "input") {
      if (current.id === "age") {
        const min = typeof current.min === "number" ? current.min : 18;
        const max = typeof current.max === "number" ? current.max : 100;
        const onSubmitAge = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const n = parseInt(ageValue, 10);
          if (!Number.isFinite(n)) {
            setAgeError("Please enter a valid age");
            return;
          }
          if (n < min || n > max) {
            setAgeError(`Age must be between ${min} and ${max}`);
            return;
          }
          setAgeError(null);
          onInputSubmit(String(n));
        };

        return (
          <motion.div
            variants={slideInVariants}
            initial="initial"
            animate="visible"
            exit="exit"
            className="w-full h-full lg:rounded-[20px] relative"
          >
            <div className="h-full w-full flex items-center justify-center px-4 xs2:px-6 lg:px-0 py-8">
              <div className="w-full max-w-2xl">
                <div className="bg-white rounded-[16px] lg:rounded-[20px] shadow-sm border border-black/5 p-6 sm:p-8 lg:p-10">
                  {/* Meta line: Question 1 of 20 - Demographics */}
                  {/* { (() => {
									const totalCore = steps.filter(s => !['intro', 'summary'].includes(s.kind)).length;
									const coreIndex = steps.filter(s => !['intro', 'summary'].includes(s.kind)).findIndex(s => s.id === current.id);
									const number = coreIndex >= 0 ? coreIndex + 1 : undefined;
									const meta = number ? `Question ${number} of ${totalCore}${current.category ? ` - ${current.category}` : ''}` : undefined;
										return meta ? (<div className='text-xs text-blue-primary font-medium text-left mb-2'>{ meta }</div>) : null;
									})() } */}
                  <h1 className="text-[22px] lg:text-[30px] font-semibold -tracking-[0.02em] leading-snug text-primary text-left">
                    {current.title || "Question"}
                  </h1>
                  <p className="mt-3 mb-6 font-BRSonoma text-sm leading-normal text-grey-primary text-left">
                    {current.context || ""}
                  </p>
                  <form
                    onSubmit={onSubmitAge}
                    className="flex flex-col text-left"
                  >
                    <TextField
                      label={current.label || "Your age"}
                      id="assessment_age"
                      name="assessment_age"
                      type="number"
                      min={min}
                      max={max}
                      className="border focus:border-primary border-grey-primary"
                      placeholder={current.placeholder || "Enter your age"}
                      value={ageValue}
                      onChange={(e) => setAgeValue(e.target.value)}
                      isError={!!ageError}
                      errorMessage={ageError || undefined}
                    />
                    <Button type="submit" className="mt-6">
                      Continue
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        );
      }

      // Default: email-only capture form at the end
      const onSubmitEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = emailValue.trim();
        if (!email) {
          setEmailError("Please enter your email address");
          return;
        }
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError("Please enter a valid email address");
          return;
        }
        setEmailError(null);
        onInputSubmit(email);
      };

      return (
        <motion.div
          key={`input-${current.id}`}
          variants={slideInVariants}
          initial="initial"
          animate="visible"
          exit="exit"
          className="w-full h-full lg:rounded-[20px] relative"
        >
          <div className="h-full w-full flex items-center justify-center px-4 xs2:px-6 lg:px-0 py-8">
            <div className="w-full max-w-2xl">
              <div className="bg-white rounded-[16px] lg:rounded-[20px] shadow-sm border border-black/5 p-6 sm:p-8 lg:p-10">
                <h1 className="text-[22px] lg:text-[30px] font-semibold -tracking-[0.02em] leading-snug text-primary text-left">
                  Enter your email to receive your complete longevity report:
                </h1>
                <p className="mt-3 mb-6 font-BRSonoma text-sm leading-normal text-grey-primary text-left">
                  📧 We&#39;ll send your detailed PDF report with personalized
                  biomarker priorities and optimization protocol.
                </p>
                <form
                  onSubmit={onSubmitEmail}
                  className="flex flex-col text-left"
                >
                  <TextField
                    label="Email Address"
                    id="assessment_email"
                    name="assessment_email"
                    type="email"
                    className="border focus:border-primary border-grey-primary"
                    placeholder="you@example.com"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    isError={!!emailError}
                    errorMessage={emailError || undefined}
                  />
                  <Button type="submit" className="mt-6">
                    Get my results
                  </Button>
                </form>
                <div className="mt-6 text-left bg-blue-1/15 rounded-[12px] p-4 sm:p-5">
                  <p className="text-sm font-medium mb-2">
                    Your Personalized Report Will Include:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>
                      <b>📊 Biological Age Score -</b> See how your cells are
                      aging compared to your chronological age
                    </li>
                    <li>
                      <b>🔬 Critical Biomarker Priorities -</b> The exact tests
                      you need based on your risk profile
                    </li>
                    <li>
                      <b>⚡ Optimization Protocol -</b> Specific interventions
                      for your top 3 health gaps
                    </li>
                    <li>
                      <b>💊 Supplement Recommendations -</b> Evidence-based
                      nutrients for your profile
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div
      className={clsxm(
        "flex flex-col w-full font-Poppins relative h-[calc(100svh)] overflow-hidden bg-grey-background lg:bg-white"
      )}
    >
      <motion.div
        className="w-full h-full flex flex-col"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: [0.15, 1.14, 0.88, 0.98] }}
        layout
      >
        <Navbar theme="light" onStepBack={prev} progress={progress} />
        <div className="lg:px-5 lg:pb-[1.5vh] lg:pt-[1.9vh] flex flex-col h-full w-full overflow-hidden">
          <div className="w-full lg:rounded-[20px] text-center relative bg-grey-background flex-1 overflow-hidden">
            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AssessmentFlowMain;
