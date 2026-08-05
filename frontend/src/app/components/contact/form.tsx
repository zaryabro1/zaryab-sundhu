"use client";

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

  if (isSuccess) {
    return (
      <div className="card elev-sm gap-2 p-4 3xl:p-6">
        <div className="card-kicker">Message sent</div>
        <p className="card-body" role="status">
          {message}
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="btn btn-ghost self-start"
        >
          Send another
        </button>
      </div>
    );
  }

  // The success branch has already returned, so any message still standing at
  // this point is a failure — either the action's own text or a network error.
  const hasError = message.length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card elev-sm relative gap-3 overflow-hidden p-4 3xl:gap-4 3xl:p-6"
      style={{
        background:
          "linear-gradient(160deg, var(--t8), transparent 42%), var(--color-surface)",
        boxShadow:
          "inset 0 1px 0 var(--t14), 0 0 0 1px var(--color-divider), 0 18px 44px -22px rgba(0,0,0,0.75)",
      }}
    >
      {/* A lit top edge and a soft corner bloom — the accent as light, not fill. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px opacity-[0.55]"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-accent), transparent)",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] -top-[40%] h-[120%] w-[70%] blur-[6px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(145,132,217,0.14), transparent)",
        }}
      />

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

      <div className="field relative">
        <label htmlFor="contact-name">Name</label>
        <input
          className="input"
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
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
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="field relative">
        <label htmlFor="contact-message">Message</label>
        <textarea
          className="input"
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary btn-block relative hover:shadow-glow"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
