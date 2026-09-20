const features = [
  {
    icon: "🎯",
    title: "Complete Tasks",
    description:
      "Complete verified tasks and offers and receive rewards when the required conditions are successfully completed.",
  },
  {
    icon: "📋",
    title: "Take Surveys",
    description:
      "Answer available surveys from legitimate survey providers and earn rewards for eligible completed surveys.",
  },
  {
    icon: "📺",
    title: "Watch Ads",
    description:
      "Watch eligible rewarded advertisements and receive rewards when the ad provider confirms completion.",
  },
  {
    icon: "👥",
    title: "Invite Friends",
    description:
      "Invite friends using your referral code and receive referral rewards when the required conditions are met.",
  },
];

const taskTypes = [
  {
    icon: "📱",
    title: "App Install",
    reward: "Up to 1,500 coins",
    time: "2–5 min",
  },
  {
    icon: "🎮",
    title: "Game Offers",
    reward: "Up to 3,000 coins",
    time: "10–30 min",
  },
  {
    icon: "🌐",
    title: "Website Tasks",
    reward: "Up to 300 coins",
    time: "1–3 min",
  },
  {
    icon: "📝",
    title: "Surveys",
    reward: "Up to 2,500 coins",
    time: "2–20 min",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9ff] text-slate-900">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg shadow-violet-200">
              C
            </div>

            <div>
              <div className="text-xl font-black tracking-tight">
                Cash<span className="text-violet-600">Earn</span>
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Earn • Complete • Reward
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a
              href="#how-it-works"
              className="transition hover:text-violet-600"
            >
              How It Works
            </a>

            <a
              href="#tasks"
              className="transition hover:text-violet-600"
            >
              Tasks
            </a>

            <a
              href="#surveys"
              className="transition hover:text-violet-600"
            >
              Surveys
            </a>

            <a
              href="#support"
              className="transition hover:text-violet-600"
            >
              Support
            </a>
          </nav>

          <a
            href="#download"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-violet-700"
          >
            Get CashEarn
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-bold text-violet-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              A smarter way to earn rewards
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Complete tasks.
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Earn rewards.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              CashEarn brings verified tasks, surveys, rewarded ads and
              referral opportunities together in one simple platform.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#download"
                className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 py-4 text-center font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-1"
              >
                Download CashEarn
              </a>

              <a
                href="#how-it-works"
                className="rounded-2xl border border-slate-200 bg-white px-7 py-4 text-center font-bold text-slate-800 shadow-sm transition hover:border-violet-300 hover:text-violet-600"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                Free to join
              </div>

              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                Multiple earning options
              </div>

              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                Reward tracking
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white p-6 shadow-2xl">
              <div className="rounded-[28px] bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white/70">
                    CashEarn Wallet
                  </span>

                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
                    LIVE
                  </span>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-white/70">Available Balance</p>

                  <p className="mt-1 text-5xl font-black">₹0.00</p>

                  <p className="mt-2 text-xs text-white/60">
                    Start completing eligible activities to earn rewards.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-2xl">🎯</div>
                    <div className="mt-2 text-sm font-bold">
                      Tasks
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-2xl">📋</div>
                    <div className="mt-2 text-sm font-bold">
                      Surveys
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-violet-50 p-4 text-center">
                  <div className="text-xl">🎯</div>
                  <p className="mt-1 text-xs font-bold text-violet-700">
                    Tasks
                  </p>
                </div>

                <div className="rounded-2xl bg-fuchsia-50 p-4 text-center">
                  <div className="text-xl">📺</div>
                  <p className="mt-1 text-xs font-bold text-fuchsia-700">
                    Ads
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4 text-center">
                  <div className="text-xl">👥</div>
                  <p className="mt-1 text-xs font-bold text-emerald-700">
                    Referral
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="border-y border-slate-100 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-violet-600">
              How it works
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Simple steps to get started
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Choose an eligible activity, complete its requirements and wait
              for the provider to confirm completion.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: "📱",
                title: "Create your account",
                text: "Register with CashEarn and complete the required verification steps.",
              },
              {
                number: "02",
                icon: "🎯",
                title: "Choose an activity",
                text: "Select available tasks, surveys, ads or other eligible earning opportunities.",
              },
              {
                number: "03",
                icon: "💰",
                title: "Receive rewards",
                text: "After successful verification, eligible rewards are added to your account.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-slate-100 bg-[#faf9ff] p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-violet-600">
                    {item.number}
                  </span>

                  <span className="text-3xl">{item.icon}</span>
                </div>

                <h3 className="mt-8 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-bold uppercase tracking-[0.2em] text-violet-600">
              Earning options
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              More ways to earn
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Available opportunities can vary by country, eligibility,
              provider and account status.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-100"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-3xl transition group-hover:bg-violet-100">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TASKS ================= */}
      <section
        id="tasks"
        className="bg-slate-950 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-violet-400">
                Tasks
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Complete eligible offers
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Task availability and rewards are supplied by participating
                providers. Requirements must be completed exactly as stated.
              </p>
            </div>

            <a
              href="#download"
              className="rounded-2xl bg-white px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-violet-100"
            >
              Open CashEarn
            </a>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {taskTypes.map((task) => (
              <div
                key={task.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-4xl">{task.icon}</div>

                <h3 className="mt-5 text-lg font-black">
                  {task.title}
                </h3>

                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Reward</span>
                  <span className="font-bold text-violet-300">
                    {task.reward}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Estimated time</span>
                  <span className="font-bold">
                    {task.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SURVEYS ================= */}
      <section id="surveys" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-violet-600">
              Surveys
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Share your opinion
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Survey providers may offer opportunities based on your profile
              and eligibility. Complete a survey honestly and follow the
              provider&apos;s requirements.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Profile and lifestyle surveys",
                "Shopping and product feedback",
                "Technology and entertainment surveys",
                "Food and consumer research",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-600">
                    ✓
                  </div>

                  <span className="font-semibold text-slate-700">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] bg-gradient-to-br from-violet-600 to-fuchsia-500 p-1 shadow-2xl shadow-violet-200">
            <div className="rounded-[32px] bg-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-400">
                    Survey Centre
                  </p>
                  <h3 className="mt-1 text-2xl font-black">
                    Available surveys
                  </h3>
                </div>

                <div className="rounded-2xl bg-violet-100 p-3 text-2xl">
                  📋
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  ["Quick Survey", "2–3 min", "500 coins"],
                  ["Normal Survey", "5–10 min", "1,000 coins"],
                  ["Long Survey", "10–20 min", "2,500 coins"],
                ].map(([title, time, reward]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-black">{title}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {time}
                        </p>
                      </div>

                      <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-black text-violet-700">
                        {reward}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-400">
                Example rewards only. Actual survey availability and rewards
                are determined by the survey provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REFERRAL ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 p-8 text-white shadow-2xl shadow-violet-200 sm:p-12 lg:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-white/70">
                  Referral program
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  Invite friends and grow together.
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
                  Referral rewards can be credited only when the referral
                  satisfies the conditions defined by CashEarn, including any
                  required verification and qualifying activities.
                </p>

                <a
                  href="#download"
                  className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 font-bold text-violet-700 transition hover:bg-violet-50"
                >
                  Start Referring
                </a>
              </div>

              <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
                <div className="text-sm font-semibold text-white/70">
                  Your referral journey
                </div>

                <div className="mt-6 space-y-5">
                  {[
                    "Share your referral code",
                    "Friend creates a CashEarn account",
                    "Friend completes required verification",
                    "Friend completes qualifying tasks",
                    "Eligible referral reward is credited",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white font-black text-violet-700">
                        {index + 1}
                      </div>

                      <span className="font-semibold text-white/90">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOWNLOAD ================= */}
      <section
        id="download"
        className="bg-slate-950 py-24 text-white"
      >
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-4xl shadow-2xl shadow-violet-500/30">
            C
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl">
            Ready to try CashEarn?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Download the Android app and access the available CashEarn
            earning features from your phone.
          </p>

          <a
            href="/cashEarn.apk"
            className="mt-9 inline-flex rounded-2xl bg-white px-8 py-4 font-black text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-violet-100"
          >
            Download Android APK
          </a>

          <p className="mt-5 text-xs text-slate-500">
            The APK download link will be connected after you upload your
            production APK.
          </p>
        </div>
      </section>

      {/* ================= SUPPORT ================= */}
      <section id="support" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-100 bg-[#faf9ff] p-7 md:col-span-2">
              <p className="font-bold uppercase tracking-[0.2em] text-violet-600">
                Customer support
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Need help?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Our support section will help customers with account,
                verification, tasks, rewards and withdrawal-related questions.
              </p>

              <a
                href="mailto:support@cashearn.app"
                className="mt-7 inline-flex rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-violet-700"
              >
                Contact Support
              </a>
            </div>

            <div className="rounded-3xl bg-violet-600 p-7 text-white">
              <div className="text-4xl">🛡️</div>

              <h3 className="mt-5 text-xl font-black">
                Safe & transparent
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/80">
                We will clearly display task requirements, eligibility,
                reward conditions and important policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#faf9ff] py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-violet-600">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              [
                "Is CashEarn free to join?",
                "The CashEarn account itself can be free to create. Any specific verification or eligibility requirements will be clearly shown before the relevant process.",
              ],
              [
                "How do users earn?",
                "Users can earn through eligible tasks, surveys, rewarded advertisements and qualifying referral activities.",
              ],
              [
                "Are rewards guaranteed?",
                "No. Rewards depend on successful completion and verification by the relevant provider or CashEarn system.",
              ],
              [
                "Where does the reward money come from?",
                "Task and survey providers, advertising partners and other legitimate revenue sources can fund eligible rewards. CashEarn can retain a portion of platform revenue to operate the service.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none font-black">
                  <div className="flex items-center justify-between gap-5">
                    <span>{question}</span>
                    <span className="text-xl text-violet-600 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="text-2xl font-black">
                Cash<span className="text-violet-600">Earn</span>
              </div>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                Complete eligible activities and earn rewards through the
                CashEarn platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-slate-600">
              <a
                href="#how-it-works"
                className="hover:text-violet-600"
              >
                How It Works
              </a>

              <a
                href="#tasks"
                className="hover:text-violet-600"
              >
                Tasks
              </a>

              <a
                href="#surveys"
                className="hover:text-violet-600"
              >
                Surveys
              </a>

              <a
                href="#support"
                className="hover:text-violet-600"
              >
                Support
              </a>

              <a
                href="/privacy"
                className="hover:text-violet-600"
              >
                Privacy
              </a>

              <a
                href="/terms"
                className="hover:text-violet-600"
              >
                Terms
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-6 text-xs text-slate-400">
            © {new Date().getFullYear()} CashEarn. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
