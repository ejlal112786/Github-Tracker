import { PageHeader } from "@/components/page-header";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Terms",
  description: "Terms of service for GitHub Tracker.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <PageHeader
          title="Terms of Service"
          description="Simple terms for using GitHub Tracker."
        />
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">The service</h2>
            <p>GitHub Tracker is provided “as is” while in active development. Features shown in previews may not yet be operational; anything labeled “sample data”, “preview”, or “coming in a later phase” is exactly that.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Your account</h2>
            <p>You are responsible for keeping your sign-in methods secure. We support GitHub OAuth and email verification only — we never ask for passwords.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Independence</h2>
            <p>GitHub Tracker is an independent product. It is not affiliated with, endorsed by, or sponsored by GitHub, Inc. “GitHub” is a trademark of GitHub, Inc. and is used here descriptively.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">This draft</h2>
            <p>These terms are a placeholder draft accompanying the Phase 1 UI and will be finalized before public launch.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
