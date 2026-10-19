import { PageHeader } from "@/components/page-header";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Privacy Policy",
  description: "How GitHub Tracker handles data and privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <PageHeader
          title="Privacy Policy"
          description="Plain-language summary of what this product collects — and, in Phase 1, what it deliberately does not."
        />
        <div className="prose-sm mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">What we collect today (Phase 1)</h2>
            <p>Nothing. The current preview is a static interface with fabricated sample data. There is no account system, no tracking scripts, no cookies set for advertising, and no GitHub API access.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">What we will collect later</h2>
            <p>After you sign in (GitHub OAuth or verified email) in a future phase, we will store the minimum profile fields needed to show your dashboard: your GitHub login, avatar URL, and aggregate public statistics you choose to sync. Repository security analysis, when it ships, reads only public metadata unless you explicitly grant more.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Your controls</h2>
            <p>You will be able to revoke the GitHub OAuth grant at any time from GitHub settings, delete your account and all stored snapshots from Settings, and export your data. Secrets never leave the server environment, and tokens are never exposed to the browser.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">This draft</h2>
            <p>This page is a placeholder draft shipped with the UI foundation. It will be reviewed and finalized before public launch.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
