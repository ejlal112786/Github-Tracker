import { Database, EyeOff, KeyRound, Scissors } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const points = [
  {
    icon: KeyRound,
    title: "Ownership is verified, never assumed",
    description:
      "Entering a GitHub username or URL never proves account ownership. Only GitHub OAuth can link a GitHub account; email verification (OTP / magic link) confirms control of an inbox.",
  },
  {
    icon: EyeOff,
    title: "No passwords, no third-party trackers",
    description:
      "Sign-in uses GitHub OAuth or email verification only. There are no password fields to leak and no advertising or analytics scripts on marketing pages.",
  },
  {
    icon: Scissors,
    title: "Least-privilege scopes",
    description:
      "When GitHub access arrives in a later phase, it will request read-only public data by default. Anything broader requires explicit, per-feature consent.",
  },
  {
    icon: Database,
    title: "Secrets stay server-side",
    description:
      "API tokens and database keys live in server environment variables (configured in Vercel), are validated centrally, and are never shipped to the browser or committed to Git.",
  },
];

export function PrivacySection() {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-heading"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6"
    >
      <div className="mb-10 max-w-2xl space-y-2">
        <h2
          id="privacy-heading"
          className="text-3xl font-semibold tracking-tight"
        >
          Privacy and security by design
        </h2>
        <p className="text-muted-foreground">
          These commitments shape every phase of the build. The current
          preview does not authenticate users, fetch GitHub data, or store any
          personal information.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {points.map((point) => (
          <Card key={point.title}>
            <CardHeader>
              <span
                aria-hidden
                className="mb-1 grid size-9 place-items-center rounded-lg bg-primary/10 text-primary"
              >
                <point.icon className="size-5" />
              </span>
              <CardTitle className="text-base">{point.title}</CardTitle>
              <CardDescription>{point.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
