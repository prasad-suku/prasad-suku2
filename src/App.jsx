import React, { useState } from "react";
import "./App.css";
// import { questions } from "./faxquestion";
// faq item component

//  faq question and answer

const FaqItem = ({ question, answer }) => {
  const [togle, setTogle] = useState(false);

  //  toggle functinality
  let togglelist = () => {
    setTogle(!togle);
  };

  return (
    <div className={`faq-item  ${togle ? "active" : ""} `}>
      <div onClick={togglelist} className="faq-heading">
        {question} ?
      </div>
      <div className="faq-content-body">
        <p className="faq-content">{answer}</p>
      </div>
    </div>
  );
};

// Faq items comp

const Faqcontainer = ({ data }) => {
  return (
    <>
      <h2>FAQ Section </h2>

      <div className="faq-container">
        {data.map((item) => (
          <FaqItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </>
  );
};

function App() {
  const questions = [
    {
      id: 1,
      question: "what is React",
      answer: "React is javasript library for ui",
    },
    {
      id: 2,
      question: "what is javascript",
      answer: " javasript is scripting language for Frontend",
    },
    {
      id: 3,
      question: "what is CSS",
      answer: "Css is styles for desiging layout",
    },
    {
      id: 4,
      question: "what is HTML",
      answer: "HTML is structure of the web page",
    },
  ];
  return (
    <div>
      <Faqcontainer data={questions} />
    </div>
  );
}

export default App;
