"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import venueImage from "../../images/home/our-story.jpg";
import "./RSVP.css";

const weddingDate = new Date("2027-08-21T16:30:00");

function getCountdown() {
  const difference = Math.max(0, weddingDate.getTime() - Date.now());

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function RSVP() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);

    const responseData = {
      attendance: formData.get("attendance"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      hasGuest: formData.has("hasGuest"),
      guestName: formData.get("guestName"),
      childrenCount: Number(formData.get("childrenCount")),
      childrenDetails: formData.get("childrenDetails"),
      events: formData.getAll("events").map(String),
      dietaryRequirements: formData.get("dietaryRequirements"),
      alcohol: formData.get("alcohol"),
      weddingTransport: formData.get("weddingTransport"),
      brunchTransport: formData.get("brunchTransport"),
      songSuggestion: formData.get("songSuggestion"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to save your RSVP. Please try again."
        );
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="rsvp-page">
      <section className="rsvp-hero">
        <div className="rsvp-hero__content">
          <h1>Yasaman &amp; Medhy</h1>
          <p className="rsvp-hero__countdown">
            {countdown.days} DAYS TO THE EVENT
          </p>
          <a href="#rsvp-form" className="rsvp-button">
            RSVP
          </a>
          <p className="rsvp-hero__deadline">
            Your response is requested by May 22nd 2027 latest
          </p>
        </div>

        <div className="rsvp-hero__image-wrap">
          <Image
            src={venueImage}
            alt="Yasaman and Medhy"
            fill
            priority
            sizes="(max-width: 600px) 100vw, 55vw"
            className="rsvp-hero__image"
          />
        </div>
      </section>

      <section className="rsvp-form-section" id="rsvp-form">
        <header className="rsvp-form-section__header">
          <span className="rsvp-eyebrow">
            Yasaman &amp; Medhy&apos;s wedding
          </span>
          <h2>Add your details</h2>
          <p>
            Please complete the form below using the details on your
            invitation.
          </p>
        </header>

        {submitted ? (
          <div className="rsvp-success" role="status">
            <h3>Thank you!</h3>
            <p>
              Your RSVP has been saved successfully. We look forward to
              celebrating with you!
            </p>
            <button
              type="button"
              className="rsvp-button"
              onClick={() => setSubmitted(false)}
            >
              Return to form
            </button>
          </div>
        ) : (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Mark your attendance *</legend>
              <label className="rsvp-choice">
                <input
                  type="radio"
                  name="attendance"
                  value="accept"
                  required
                />
                Accept with pleasure
              </label>
              <label className="rsvp-choice">
                <input
                  type="radio"
                  name="attendance"
                  value="decline"
                />
                Decline with regret
              </label>
            </fieldset>

            <div className="rsvp-form__row">
              <label>
                First name *
                <input
                  name="firstName"
                  autoComplete="given-name"
                  required
                />
              </label>
              <label>
                Last name *
                <input
                  name="lastName"
                  autoComplete="family-name"
                  required
                />
              </label>
            </div>

            <label>
              Email *
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>

            <label className="rsvp-choice rsvp-form__guest">
              <input type="checkbox" name="hasGuest" />
              Check here if you have a guest as specified in your invitation
            </label>

            <label>
              Guest&apos;s full name, if applicable
              <input name="guestName" />
            </label>

            <label>
              Number of children attending *
              <input
                type="number"
                name="childrenCount"
                min="0"
                step="1"
                defaultValue="0"
                required
              />
            </label>

            <label>
              Children&apos;s ages and first names (at the time of the wedding)
              <textarea
                name="childrenDetails"
                rows={3}
                placeholder="Please include each child's first name and age."
              />
            </label>

            <fieldset>
              <legend>I will be attending for *</legend>
              <label className="rsvp-choice">
                <input
                  type="checkbox"
                  name="events"
                  value="wedding"
                />
                Saturday Wedding
              </label>
              <label className="rsvp-choice">
                <input
                  type="checkbox"
                  name="events"
                  value="brunch"
                />
                Sunday Brunch
              </label>
            </fieldset>

            <label>
              Please specify any food allergies or dietary restrictions,
              including the name of who has the allergy.
              <textarea name="dietaryRequirements" rows={4} />
            </label>

            <fieldset>
              <legend>Will you be drinking alcohol? *</legend>
              <label className="rsvp-choice">
                <input
                  type="radio"
                  name="alcohol"
                  value="yes"
                  required
                />
                Yes, I will be drinking alcohol
              </label>
              <label className="rsvp-choice">
                <input
                  type="radio"
                  name="alcohol"
                  value="no"
                />
                No, I will not be drinking alcohol
              </label>
            </fieldset>

            <fieldset>
              <legend>How do you plan to get to the wedding?</legend>
              <label className="rsvp-choice">
                <input
                  type="radio"
                  name="weddingTransport"
                  value="car"
                />
                With my own car
              </label>
              <label className="rsvp-choice">
                <input
                  type="radio"
                  name="weddingTransport"
                  value="taxi"
                />
                With a taxi / driver
              </label>
            </fieldset>

            <fieldset>
              <legend>How do you plan to get to the brunch?</legend>
              <label className="rsvp-choice">
                <input
                  type="radio"
                  name="brunchTransport"
                  value="car"
                />
                With my own car
              </label>
              <label className="rsvp-choice">
                <input
                  type="radio"
                  name="brunchTransport"
                  value="taxi"
                />
                With a taxi / driver
              </label>
            </fieldset>

            <label>
              Suggestion of music to ignite the dance floor?
              <input name="songSuggestion" />
            </label>

            <label>
              Anything else we should know?
              <textarea name="message" rows={4} />
            </label>

            <p className="rsvp-form__note">
              Fields marked * are required. Please reply by May 22, 2027.
            </p>

            {submitError && (
              <p className="rsvp-form__error" role="alert">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              className="rsvp-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Register now"}
            </button>
          </form>
        )}
      </section>

      <footer className="rsvp-footer">
        <span className="rsvp-eyebrow">With love</span>
        <h2>Yasaman &amp; Medhy</h2>
        <p>21–22 August 2027 · Domaine du Mont Leuze</p>
      </footer>
    </main>
  );
}
