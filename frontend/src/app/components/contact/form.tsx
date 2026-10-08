"use client";

import React, { useRef, useState } from "react";
import TiltCard from "../../../components/ui/TiltCard";
import { contactIntents, type ContactIntent } from "../../../data/site";
import { useContactForm } from "./useContactForm";

/**
 * The contact form, restyled for Nocturne.
 *
 * Presentation only. Every piece of behaviour — validation, submission, the
 * server action that reaches Brevo — stays in `useContactForm`, which this
 * component consumes through its existing contract and does not modify.
 *
 * Two states the reference mockup did not cover are handled here: the failure
 * path, which surfaces `errors` from server-side validation, and the pending
 * path, which disables the control while `isSubmitting`.
 *
 * The intent chips above the message field exist because a bare textarea asks
 * a stranger to compose a cold email from nothing. Picking one drops in an
 * opening line, so the visitor arrives at an edit rather than a blank page.
 */
export default function ContactForm() {
  const {
    formData,
    isSubmitting,
    isSuccess,
    errors,
    message,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  const [intentId, setIntentId] = useState<string | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  /**
   * The last template this component wrote into the message field.
   *
   * Compared against the live value to tell an untouched template apart from
   * one the visitor has started editing — switching chips may replace the
   * former and must never discard the latter.
   */
  const appliedTemplate = useRef("");

  const selectIntent = (intent: ContactIntent) => {
    // Second click on the active chip clears the selection, which also lets
    // the pop animation re-run the next time one is chosen.
    if (intentId === intent.id) {
      setIntentId(null);
      return;
    }

    setIntentId(intent.id);

    const untouched =
      formData.message.trim().length === 0 ||
      formData.message === appliedTemplate.current;

    // Someone who has already written something gets their chip marked and
    // their words left alone; the template is only ever a starting point.
    if (!untouched) return;

    appliedTemplate.current = intent.template;

    // `handleChange` reads nothing but `name` and `value` off the event, so a
    // minimal object drives it correctly. Going through the hook's own handler
    // keeps form state owned in one place instead of mirrored here.
    handleChange({
      target: { name: "message", value: intent.template },
    } as React.ChangeEvent<HTMLTextAreaElement>);

    // Land the caret at the end of the template, ready to continue the
    // sentence. Deferred a frame so React has committed the new value first.
    requestAnimationFrame(() => {
      const el = messageRef.current;
      if (!el) return;
      el.focus();
      el.setSelectionRange(intent.template.length, intent.template.length);
    });
  };

  const handleReset = () => {
    setIntentId(null);
    appliedTemplate.current = "";
    resetForm();
  };

  if (isSuccess) {
    return (
      <TiltCard
        className="card card-contact card-shine gap-2 p-4 3xl:p-6"
        hoverShadow="var(--contact-shadow-hover)"
      >
        <div className="card-kicker">Message sent</div>
        <p className="card-body" role="status">
          {message}
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="btn btn-ghost self-start"
        >
          Send another
        </button>
      </TiltCard>
    );
  }

  // The success branch has already returned, so any message still standing at
  // this point is a failure — either the action's own text or a network error.
  const hasError = message.length > 0;

  return (
    /*
      Tilts toward the cursor like the project cards, but holds still the
      moment a field takes focus — nobody should have to type on a moving,
      skewed surface.

      The card's old flat accent rule along its top edge is gone: `card-shine`
      now lights the whole border, and the two sat on exactly the same pixels.
    */
    <TiltCard
      className="card card-contact card-shine gap-3 p-4 3xl:gap-4 3xl:p-6"
      hoverShadow="var(--contact-shadow-hover)"
      suspendWhenFocusWithin
    >
      {/* A soft corner bloom — the accent as light, not fill. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] -top-[40%] h-[120%] w-[70%] blur-[6px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(145,132,217,0.14), transparent)",
        }}
      />

      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative flex flex-col gap-3 3xl:gap-4"
      >
        {hasError && (
          <div
            role="alert"
            className="type-ui relative rounded-md border border-accent-700 bg-accent-900 px-3 py-2.5 text-accent-200"
          >
            <p className="m-0 font-medium">{message}</p>
            {errors.length > 0 && (
              <ul className="m-0 mt-1.5 list-disc space-y-1 pl-4">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/*
          Asked before the fields, because the answer changes what the message
          should say. Grouped and labelled so it reaches assistive tech as one
          question rather than three loose toggles.
        */}
        <div
          role="group"
          aria-labelledby="intent-label"
          className="relative flex flex-col gap-2"
        >
          <span id="intent-label" className="type-ui block text-t-72">
            What brings you here?
          </span>
          <div className="flex flex-wrap gap-1.5">
            {contactIntents.map((intent, index) => {
              const isSelected = intentId === intent.id;
              return (
                <button
                  key={intent.id}
                  type="button"
                  onClick={() => selectIntent(intent)}
                  disabled={isSubmitting}
                  aria-pressed={isSelected}
                  className={`chip animate-chip-in ${
                    isSelected ? "animate-chip-pop" : ""
                  }`}
                  /* Staggered so the row resolves as a cascade, matching the
                     reveal timing the rest of the page uses. */
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {intent.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="field relative">
          <label htmlFor="contact-name">Name</label>
          <input
            className="input"
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Gavin Belson"
            maxLength={100}
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="field relative">
          <label htmlFor="contact-email">Email</label>
          <input
            className="input"
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="gavin@hooli.com"
            maxLength={254}
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="field relative">
          <label htmlFor="contact-message">Message</label>
          <textarea
            ref={messageRef}
            className="input"
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Pick one above, or just start typing…"
            maxLength={5000}
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>

        {/*
          The strongest thing this section can offer the reader, so it sits where
          the decision is made rather than buried in the paragraph beside it. The
          dot is the hero's availability motif, repeated deliberately.
        */}
        <div className="type-meta relative flex items-center gap-[9px] text-t-72">
          <span
            aria-hidden="true"
            className="animate-pulse-dot h-1.5 w-1.5 flex-none rounded-full bg-accent"
          />
          Replies within 24 hours
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-block btn-sheen animate-breathe relative"
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
      </form>
    </TiltCard>
  );
}
