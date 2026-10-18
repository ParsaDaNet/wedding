"use client";

import "./QnA.css";

const questions = [
  {
    number: "01",
    question: "Weather & dress code",
    answer: (
      <>
        <p>The weather at the end of August on the French Riviera:</p>
        <ul>
          <li>Average maximum temperature: approximately 26°C</li>
          <li>Average minimum temperature: approximately 21°C</li>
        </ul>

        <p><strong>Wedding attire: Black tie</strong></p>

      </>
    ),
  },
  {
    number: "02",
    question: "What is the best way to RSVP?",
    answer: (
      <p>
        Please RSVP through our website. To help us plan the wedding properly,
        we need all the important information requested on the RSVP page.
        That&apos;s why it&apos;s important to complete the form.
      </p>
    ),
  },
  {
    number: "03",
    question: "What is the deadline to RSVP?",
    answer: (
      <p>
        Please confirm your presence at our wedding by January 22nd, 2027 at the
        latest.
      </p>
    ),
  },
];

export default function QA() {
  return (
    <main className="qa-page">
      
        <section className="qa-header">
        <span className="qa-eyebrow">Yasaman &amp; Medhy</span>
        <h1>Questions &amp; Answers</h1>
        <span className="qa-header__divider" aria-hidden="true">
            <span />
            <span className="qa-header__ornament">✳</span>
            <span />
        </span>
        <p>
            We’ve gathered a few helpful details to make your
            time with us on the French Riviera as special
            and effortless as possible.
        </p>
        </section>

      <section className="qa-list">
        {questions.map(({ number, question, answer }) => (
          <details className="qa-item" key={number}>
            <summary className="qa-question">
              <span className="qa-number">{number}</span>
              <h2>{question}</h2>
              <span className="qa-toggle" aria-hidden="true" />
            </summary>

            <div className="qa-answer">{answer}</div>
          </details>
        ))}
      </section>

      <footer className="qa-footer">
        <span className="qa-eyebrow">With love</span>
        <p>Yasaman &amp; Medhy</p>
        <span>21–22 August 2027 · Domaine du Mont Leuze</span>
      </footer>
    </main>
  );
}