"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Email verification REQUEST form — visual foundation only.
 *
 * In Phase 1 this performs client-side validation and demonstrates the
 * loading / error / success UI states. It does NOT send an email, generate a
 * code, store the address, or authenticate anyone. The Supabase-backed OTP /
 * magic-link flow arrives in Phase 2.
 */
export function EmailSignInForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setStatus("error");
      setMessage("Enter your email address to request a verification link.");
      return;
    }
    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus("error");
      setMessage("That doesn’t look like a valid email address.");
      return;
    }

    // Simulated request state so the UI can be reviewed. Nothing is sent,
    // stored, or verified in this phase.
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
      setMessage(
        "UI preview only: when authentication ships in Phase 2, a verification code or magic link would be sent here. No email has been sent and nothing was stored.",
      );
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="sign-in-email">Email</Label>
        <Input
          id="sign-in-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          disabled={status === "submitting"}
          aria-invalid={status === "error"}
          aria-describedby="email-help"
          required
        />
        <p id="email-help" className="text-xs text-muted-foreground">
          We send a one-time code or magic link — never a password.
        </p>
      </div>

      <Button
        type="submit"
        variant="outline"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Spinner label="Requesting verification" />
            Requesting…
          </>
        ) : (
          <>
            <Mail aria-hidden />
            Continue with email
          </>
        )}
      </Button>

      {status === "error" && message ? (
        <Alert variant="error">{message}</Alert>
      ) : null}
      {status === "success" && message ? (
        <Alert variant="success">{message}</Alert>
      ) : null}
    </form>
  );
}
