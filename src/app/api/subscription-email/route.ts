import SubscriptionEmail from "./templates/SubscriptionEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";
interface requestPayload {
  email: string;
  name: string;
}

export interface subscriptionKeyResponse {
  id: number;
  createdAt: string;
  subscriptionKey: string;
  isValid: boolean;
  invalidationDate?: null;
}

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  const requestPayload = (await request.json()) as requestPayload;
  try {
    const { subscriptionKey } = await getSubscriptionKey();
    const { data, error } = await sendSubscriptionEmail(
      requestPayload,
      subscriptionKey
    );
    if (error) {
      return NextResponse.json(error);
    }

    return NextResponse.json({
      status: 200,
      message: "Email sent successfully!",
      emailId: data?.id,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

async function sendSubscriptionEmail(
  requestPayload: requestPayload,
  subscriptionKey: string
) {
  const { name, email } = requestPayload;
  const emailPayload = {
    from: "onboarding@resend.dev",
    to: email,
    subject: "Welcome to Geviti",
    react: SubscriptionEmail({ name, subscriptionKey }),
  };
  return resend.emails.send(emailPayload);
}

async function getSubscriptionKey() {
  const apiUrl = `${process.env.SUBSCRIPTION_API_URL}/subscription-keys`; // Replace with your actual API endpoint

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SUBSCRIPTION_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return (await response.json()) as subscriptionKeyResponse;
}
