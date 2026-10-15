"use client";

import "./QnA.css";

const questions = [
  {
    number: "01",
    question: "Passport/visa",
    answer: (
      <>
        <p><strong>From USA</strong></p>
        <p>
          You don&apos;t need a visa to travel to France from the United States
          for a stay of less than 90 days. However, your passport must be valid
          for at least three months beyond your scheduled departure date from
          the Schengen Area. 12-page U.S. emergency passports are not accepted
          for visa-free travel.
        </p>

        <p><strong>From Iran</strong></p>
        <p>
          Iranian citizens holding a mainland passport need a short-stay
          Schengen visa to visit France for a holiday or private stay of less
          than 90 days. You must apply in advance through the official
          France-Visas portal or an authorised visa application centre.
        </p>
        <p>
          <strong>Timeframes to observe:</strong> Apply no earlier than
          6 months and no later than 15 days before departure.
        </p>

        <p><strong>From Algeria</strong></p>
        <p>
          Algerian citizens holding a mainland passport need a short-stay
          Schengen visa to visit France for a holiday or private stay of less
          than 90 days. You must apply in advance through the official
          France-Visas portal or an authorised visa application centre.
        </p>
        <p>
          <strong>Timeframes to observe:</strong> Submit the application at
          least 1 to 2 months before departure.
        </p>
      </>
    ),
  },
  {
    number: "02",
    question: "Weather & dress code",
    answer: (
      <>
        <p>The weather at the end of August on the French Riviera:</p>
        <ul>
          <li>Average maximum temperature: approximately 26°C</li>
          <li>Average minimum temperature: approximately 21°C</li>
        </ul>

        <p><strong>Wedding attire: Black tie</strong></p>
        <p>For men: To be confirmed.</p>
        <p>For women: To be confirmed.</p>
        <p>We recommend ladies bring an additional layer for the evening.</p>

        <p><strong>Brunch attire: Summer outfit</strong></p>
        <p>For men: To be confirmed.</p>
        <p>For women: To be confirmed.</p>

        <p>
          A hat, sun cream, sunglasses and mosquito repellent are useful
          accessories to bring for the wedding events on Saturday and Sunday.
        </p>
      </>
    ),
  },
  {
    number: "03",
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
    number: "04",
    question: "What is the deadline to RSVP?",
    answer: (
      <p>
        Please confirm your presence at our wedding by May 22nd, 2027 at the
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