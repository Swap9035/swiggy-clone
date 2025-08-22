import React from "react";
import FAQAccordion from "../Components/FAQAccordion";
import "./../Style/help.css";

const faqList = [
  {
    question: "I want to partner my restaurant with Food",
    answer: "Details on partnering your restaurant with Food."
  },
    {
    question: "What are the mandatory documents needed to list my restaurant on Swiggy?",
    answer: "List of mandatory documents required to partner with Swiggy."
  },
    {
    question:"I want to opt-out from Google reserve",
    answer: "Steps to opt-out from Google Reserve."
    },
    {
    question:"After I submit all documents, how long will it take for my restaurant to go live on Swiggy?",
    answer: "Expected timeframe for your restaurant to go live after document submission."
  },
    {
    question:"What is this one time Onboarding fees? Do I have to pay for it while registering?",
    answer: "Explanation of one-time onboarding fees and payment requirements."
  }
];

const Help = () => {
  return (
    <div className="help-container">
      <header className="help-header">
      <h2> Help & Support</h2>
      <p>Let's take a step ahead and help you better.</p>
    </header>
    <div className="faq-section">
      <h1>Partner Onboarding</h1>
      <FAQAccordion faqs={faqList}></FAQAccordion>
    </div>
    </div>
  );
};

export default Help;
