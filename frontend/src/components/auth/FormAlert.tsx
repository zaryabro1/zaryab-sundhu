interface FormAlertProps {
  message: string;
}

/**
 * The error banner shared by the auth forms.
 *
 * Nocturne is a mono palette with no red role, so failure is carried by the
 * accent ramp — a deep tinted fill with a light step for the text, which the
 * system's guidance calls for on this ground. It is announced as an alert so
 * the failure reaches screen readers, which otherwise get no signal that the
 * submit did nothing.
 */
export default function FormAlert({ message }: FormAlertProps) {
  return (
    <div
      role="alert"
      className="type-ui relative rounded-md border border-accent-700 bg-accent-900 px-3 py-2.5 text-accent-200"
    >
      {message}
    </div>
  );
}
