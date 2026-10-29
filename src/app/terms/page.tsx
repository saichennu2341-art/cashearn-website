import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms information | CashEarn",
  description: "The current terms and public launch status for the CashEarn private Android preview.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-16 lg:px-8">
      <Link href="/" className="font-bold text-violet-700 hover:text-violet-900">← Back to CashEarn</Link>
      <p className="mt-12 text-sm font-bold uppercase tracking-[0.16em] text-violet-700">Pre-release status</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">Terms information</h1>
      <p className="mt-6 leading-8 text-slate-600">CashEarn is in private Android testing. This page is a status notice, not final terms for customers.</p>
      <section className="mt-10 rounded-3xl border border-violet-100 bg-[#faf9ff] p-6 leading-8 text-slate-700">
        <h2 className="text-xl font-bold text-slate-900">Before public launch</h2>
        <p className="mt-3">Final terms will describe eligibility, account rules, task requirements, review decisions, rewards, fees, refunds, withdrawals, service limits and dispute/support procedures. Those terms have not been approved for public release yet.</p>
        <p className="mt-4">This website does not accept registrations or payments. The ₹5 checkout belongs to the private app test flow only.</p>
      </section>
    </main>
  );
}
