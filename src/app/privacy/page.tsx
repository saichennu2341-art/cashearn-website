import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy information | CashEarn",
  description: "The current privacy policy status for the CashEarn private Android preview.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-16 lg:px-8">
      <Link href="/" className="font-bold text-violet-700 hover:text-violet-900">← Back to CashEarn</Link>
      <p className="mt-12 text-sm font-bold uppercase tracking-[0.16em] text-violet-700">Pre-release status</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">Privacy information</h1>
      <p className="mt-6 leading-8 text-slate-600">CashEarn is in private Android testing. This page is a status notice, not the final customer privacy policy.</p>
      <section className="mt-10 rounded-3xl border border-violet-100 bg-[#faf9ff] p-6 leading-8 text-slate-700">
        <h2 className="text-xl font-bold text-slate-900">Before public launch</h2>
        <p className="mt-3">A complete policy will identify the data collected, the reasons for processing, retention periods, service providers, user rights, deletion process and verified support contact. Those details have not been approved for public release yet.</p>
        <p className="mt-4">The private test build uses Supabase for account and app data. Production provider configuration and customer-facing policies must be completed before public registration.</p>
      </section>
    </main>
  );
}
