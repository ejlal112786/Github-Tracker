import { Mail } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Alert } from "@/components/ui/alert";
import { EmptyState } from "@/components/empty-state";

export const metadata = {
  title: "Contact",
  description: "How to reach the GitHub Tracker team.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <PageHeader
          title="Contact"
          description="Questions, feedback, or bug reports are welcome."
        />
        <div className="mt-8 space-y-4">
          <Alert variant="info">
            A contact form and support inbox are wired up in a later phase so
            submissions can actually be received and answered. Until then, use
            the placeholder below as the documented channel.
          </Alert>
          <EmptyState
            icon={Mail}
            title="contact@github-tracker.example"
            description="Placeholder address — replace with the real support inbox before launch (configured via environment, not code). No messages sent to this address are currently received."
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
