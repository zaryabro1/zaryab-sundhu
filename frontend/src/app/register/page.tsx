"use client";

import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import AuthCard from "../../components/auth/AuthCard";
import FormAlert from "../../components/auth/FormAlert";

const MIN_PASSWORD_LENGTH = 6;

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, isAuthenticated } = useAuth();
  const router = useRouter();

  // Navigating is a side effect, so it belongs in an effect — calling
  // router.push() during render makes React warn about updating the router
  // while this component is still rendering.
  useEffect(() => {
    if (isAuthenticated) router.replace("/dashboard");
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < MIN_PASSWORD_LENGTH) {
      setError(
        `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await register(name, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Create account"
      subtitle="Sign up to get started"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="no-underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-4 3xl:gap-5">
        {error && <FormAlert message={error} />}

        <div className="field">
          <label htmlFor="name">Full name</label>
          <input
            className="input"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            required
            placeholder="Zaryab Sundhu"
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
            placeholder="you@example.com"
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
            minLength={MIN_PASSWORD_LENGTH}
            aria-describedby="password-hint"
            placeholder="••••••••"
          />
          <p id="password-hint" className="type-meta mt-1 text-t-50">
            Must be at least {MIN_PASSWORD_LENGTH} characters
          </p>
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            className="input"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={loading}
            required
            minLength={MIN_PASSWORD_LENGTH}
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary btn-block hover:shadow-glow"
        >
          {loading ? "Creating account…" : "Sign up"}
        </button>
      </form>
    </AuthCard>
  );
}
