import Link from "next/link";

const features = [
  { number: "01", title: "Tasks, with clear progress", description: "View a task’s requirements, submit completion proof and follow its review status in the app.", detail: "Task submission preview" },
  { number: "02", title: "Your referral history", description: "Share your referral code and keep track of referrals. Reward eligibility will depend on the published campaign rules.", detail: "Referral sharing and tracking" },
  { number: "03", title: "A wallet you can follow", description: "See approved rewards and withdrawal requests together. Live rewards and payouts are not available during this preview.", detail: "Balance and activity history" },
  { number: "04", title: "Your member details", description: "Find your CashEarn member card, account status and logout option together in Settings.", detail: "Member card and account settings" },
];

const questions = [
  { question: "Can I download CashEarn now?", answer: "The Android app is being tested privately. There is no public APK or Play Store release linked here yet." },
  { question: "Can I earn or withdraw money during the preview?", answer: "No live earning opportunities or payouts are available through this preview. The wallet shown on this page is an illustration, not a customer account." },
  { question: "Is there a registration fee?", answer: "The current app test flow includes a ₹5 test checkout. Public registration is not open. Final pricing and refund terms have not been published." },
  { question: "Are surveys and rewarded ads available?", answer: "They are not connected to live providers yet. Available campaigns and their requirements will need to be confirmed before they are offered to customers." },
  { question: "Where can I find policies and support?", answer: "The privacy and terms pages below explain their current pre-release status. Final customer policies and a verified support contact are still required before public launch." },
];

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="sticky top-0 z-50 border-b border-violet-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link href="/" aria-label="CashEarn home" className="flex items-center gap-3">
            <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-xl font-black text-white shadow-lg shadow-violet-100">C</span>
            <span className="text-xl font-black tracking-tight">Cash<span className="text-violet-700">Earn</span></span>
          </Link>
          <a href="#availability" className="rounded-full bg-violet-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-800 md:order-3">App status</a>
          <nav aria-label="Main navigation" className="flex w-full items-center justify-between gap-4 text-sm font-semibold text-slate-600 md:w-auto md:gap-8">
            <a href="#features" className="hover:text-violet-700">App features</a>
            <a href="#how-it-works" className="hover:text-violet-700">How it works</a>
            <a href="#questions" className="hover:text-violet-700">Questions</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-12 h-96 w-96 rounded-full bg-violet-200/50 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-fuchsia-100 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-800">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-violet-600" />Android preview · In testing
              </p>
              <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Your tasks.<br />Your progress.<br /><span className="text-violet-700">One place.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">A first look at CashEarn: an Android app for task submissions, referrals, reward tracking and your member profile.</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">Public registration, live earning opportunities and payouts are not open yet.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#features" className="rounded-2xl bg-violet-700 px-7 py-4 text-center font-bold text-white shadow-xl shadow-violet-200/70 transition hover:bg-violet-800">Explore the preview</a>
                <a href="#availability" className="rounded-2xl border border-violet-200 bg-white px-7 py-4 text-center font-bold text-violet-800 transition hover:bg-violet-50">Check release status</a>
              </div>
            </div>
            <figure className="relative mx-auto w-full max-w-md" aria-label="Illustration of the CashEarn wallet preview with a zero example balance">
              <div className="rounded-[36px] border border-violet-100 bg-white p-5 shadow-2xl shadow-violet-200/60 sm:p-6">
                <div className="mb-5 flex items-center justify-between px-1"><p className="font-bold">CashEarn</p><span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-800">APP PREVIEW</span></div>
                <div className="rounded-[28px] bg-gradient-to-br from-violet-700 to-violet-500 p-6 text-white">
                  <p className="text-sm font-medium text-violet-100">Example wallet balance</p>
                  <p className="mt-3 text-5xl font-black tracking-tight">₹0.00</p>
                  <p className="mt-3 text-sm leading-6 text-violet-100">Your approved rewards, in one view.</p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-4"><p className="text-xs text-violet-100">Approved rewards</p><p className="mt-2 text-lg font-bold">₹0.00</p></div>
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-4"><p className="text-xs text-violet-100">Withdrawals</p><p className="mt-2 text-lg font-bold">0 requests</p></div>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl bg-violet-50 p-5"><div className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-violet-700">C</span>
                  <div><p className="text-sm font-bold">Your member card</p><p className="mt-1 text-xs text-slate-600">Account details, right in Settings</p></div>
                </div></div>
                <div aria-hidden="true" className="mt-6 grid grid-cols-5 gap-1 text-center text-[10px] font-semibold text-slate-600 sm:text-xs">
                  {["Home", "Tasks", "Referrals", "Wallet", "Settings"].map((label) => <span key={label} className={label === "Wallet" ? "rounded-xl bg-violet-100 py-3 text-violet-800" : "py-3"}>{label}</span>)}
                </div>
              </div>
              <figcaption className="mt-4 text-center text-xs leading-6 text-slate-600">Illustrative preview. No real account or earnings are shown.</figcaption>
            </figure>
          </div>
        </section>

        <section id="features" className="border-y border-violet-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="section-kicker">Inside the app</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">A clear view of every step.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">The current build brings the essentials together in five simple pages.</p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => <article key={feature.number} className="flex flex-col rounded-3xl border border-violet-100 bg-[#faf9ff] p-6">
                <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-sm font-bold text-violet-800">{feature.number}</span>
                <h3 className="mt-7 text-xl font-bold leading-7">{feature.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{feature.description}</p>
                <p className="mt-6 border-t border-violet-100 pt-4 text-xs font-semibold text-violet-800">{feature.detail}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div><p className="section-kicker">The member journey</p><h2 className="mt-3 max-w-md text-3xl font-black tracking-tight sm:text-4xl">From your account to your activity.</h2><p className="mt-5 max-w-md leading-8 text-slate-600">This is the flow being tested. Provider connections, campaign availability and customer policies still need to be completed before launch.</p></div>
            <ol className="space-y-4">
              {[
                ["Verify your account", "The app guides members through phone and email verification and the registration checks."],
                ["Review an available task", "Read the requirements and reward conditions before deciding to participate in a published campaign."],
                ["Follow your progress", "Submit proof and see review outcomes and approved reward activity in the app."],
              ].map(([title, description], index) => <li key={title} className="flex gap-5 rounded-3xl border border-violet-100 bg-white p-6">
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-700 font-bold text-white">{index + 1}</span>
                <div><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{description}</p></div>
              </li>)}
            </ol>
          </div>
        </section>

        <section id="availability" className="bg-[#211440] py-16 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-200">Release status</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Taking time to get the details right.</h2>
              <p className="mt-6 max-w-xl leading-8 text-violet-100">CashEarn is in private Android testing. A public release date has not been announced.</p>
              <p className="mt-7 inline-flex rounded-2xl border border-violet-300/40 bg-white/5 px-5 py-4 text-sm font-bold">Public download not yet available</p>
            </div>
            <div id="release-status" className="rounded-3xl border border-white/15 bg-white/5 p-7 sm:p-8">
              <h3 className="text-xl font-bold">Before public launch</h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-violet-100">
                <li>Phone and email verification and test checkout need to pass complete service tests.</li>
                <li>Live task sources, reward rules and the payout process need to be confirmed.</li>
                <li>Final privacy, terms, pricing, refund details and a verified support contact need to be published.</li>
              </ul>
              <p className="mt-6 border-t border-white/15 pt-5 text-sm leading-7 text-violet-100">The current app test flow includes a ₹5 test checkout. This website does not accept registrations or payments.</p>
            </div>
          </div>
        </section>

        <section id="questions" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <p className="section-kicker">Good to know</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Your questions, answered.</h2>
            <div className="mt-10 space-y-4">
              {questions.map(({ question, answer }) => <details key={question} className="group rounded-2xl border border-violet-100 bg-[#faf9ff] p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">{question}<span aria-hidden="true" className="text-2xl font-normal text-violet-700 transition-transform group-open:rotate-45">+</span></summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{answer}</p>
              </details>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-violet-100 bg-[#faf9ff]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-10 sm:flex-row lg:px-8">
          <div><p className="text-xl font-black">Cash<span className="text-violet-700">Earn</span></p><p className="mt-2 text-sm text-slate-600">An Android app in progress.</p></div>
          <nav aria-label="Footer navigation" className="flex flex-wrap items-start gap-x-6 gap-y-4 text-sm font-semibold text-slate-600">
            <Link href="/privacy" className="hover:text-violet-700">Privacy status</Link>
            <Link href="/terms" className="hover:text-violet-700">Terms status</Link>
            <a href="#availability" className="hover:text-violet-700">App availability</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
