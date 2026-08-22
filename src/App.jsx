import {
  ArrowRight,
  ShieldCheck,
  Activity,
  GitBranch,
  LockKeyhole,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-100px] top-1/3 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/20">
              <ShieldCheck className="h-5 w-5 text-cyan-400" />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide">RANSENTRY</h1>
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Cyber Resilience
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#how" className="text-sm text-slate-400 transition hover:text-white">
              How it works
            </a>
            <a href="#why" className="text-sm text-slate-400 transition hover:text-white">
              Why RANSENTRY
            </a>
            <a href="#flow" className="text-sm text-slate-400 transition hover:text-white">
              Workflow
            </a>
          </nav>

          <button className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20">
            View Demo
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              SIH1452 · Ransomware Resilience Validation
            </div>

            <h2 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Don&apos;t just assess
              <span className="block text-cyan-400">ransomware readiness.</span>
              Prove it.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              RANSENTRY evaluates security evidence, models how ransomware could
              move through an organization, and lets security teams test which
              improvements can reduce the modeled risk.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-cyan-300">
                Run Organization Assessment
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-slate-200 transition hover:bg-white/[0.07]">
                Explore the workflow
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Hero metrics */}
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <Metric
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Evidence-based"
              text="Move beyond self-reported security checklists."
            />
            <Metric
              icon={<GitBranch className="h-5 w-5" />}
              title="Attack-path aware"
              text="See where ransomware could move and where it can be stopped."
            />
            <Metric
              icon={<Activity className="h-5 w-5" />}
              title="Measurable"
              text="Track detection, containment, recovery and resilience changes."
            />
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="border-y border-white/5 bg-white/[0.02]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading
              eyebrow="HOW IT WORKS"
              title="From assessment to proof."
              text="RANSENTRY turns a static readiness check into a security decision workflow."
            />

            <div
              id="flow"
              className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
              <Step
                number="01"
                title="Assess"
                text="Evaluate prevention, detection, response and recovery controls."
              />

              <Step
                number="02"
                title="Model"
                text="Map a simplified ransomware path through critical assets."
              />

              <Step
                number="03"
                title="Test"
                text="Safely simulate behavior and test a proposed security improvement."
              />

              <Step
                number="04"
                title="Strengthen"
                text="Prioritize remediation and track whether resilience improves."
              />
            </div>
          </div>
        </section>

        {/* Why */}
        <section id="why" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="WHY RANSENTRY"
            title="A score alone isn't enough."
            text="A control can exist without being effective against a real attack path."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <ProblemCard
              title="Traditional assessment"
              points={[
                "Do you have MFA?",
                "Do you have backups?",
                "Do you have EDR?",
                "Readiness score: 74/100",
              ]}
              muted
            />

            <ProblemCard
              title="RANSENTRY"
              points={[
                "What evidence supports the control?",
                "Can ransomware reach the critical server?",
                "Where does the attack get stopped?",
                "What if we add a specific control?",
              ]}
            />
          </div>
        </section>

        {/* Product preview */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1728] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Sample organization
                </p>
                <h3 className="mt-1 font-semibold">ABC Healthcare</h3>
              </div>

              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                High Risk
              </span>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
              <div>
                <p className="text-sm text-slate-500">Ransomware resilience</p>

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-6xl font-bold">71</span>
                  <span className="pb-2 text-slate-500">/100</span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[71%] rounded-full bg-cyan-400" />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <ScoreCard label="Prevention" value="78%" />
                  <ScoreCard label="Detection" value="55%" />
                  <ScoreCard label="Response" value="62%" />
                  <ScoreCard label="Recovery" value="48%" />
                </div>
              </div>

              <div className="rounded-2xl border border-red-400/10 bg-red-400/5 p-5">
                <div className="flex items-center gap-2 text-red-300">
                  <LockKeyhole className="h-4 w-4" />
                  <span className="text-sm font-semibold">Critical findings</span>
                </div>

                <div className="mt-5 space-y-4">
                  <Finding text="Backup infrastructure is not isolated." />
                  <Finding text="Privileged accounts lack MFA." />
                  <Finding text="Network segmentation is insufficient." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-400">
              RANSENTRY
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Know where the attack goes.
              <span className="block text-cyan-400">
                Know what to fix first.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Assess. Simulate. Strengthen. Reassess.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-cyan-300">
              Start with RANSENTRY
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row lg:px-8">
          <span>RANSENTRY · SIH1452</span>
          <span>Ransomware Resilience Validation Platform</span>
        </div>
      </footer>
    </div>
  );
}

function Metric({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
        {text}
      </p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
      <span className="text-xs font-bold tracking-widest text-cyan-400">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

function ProblemCard({ title, points, muted = false }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        muted
          ? "border-white/10 bg-white/[0.02]"
          : "border-cyan-400/15 bg-cyan-400/[0.03]"
      }`}
    >
      <h3 className="font-semibold">{title}</h3>

      <div className="mt-5 space-y-3">
        {points.map((point) => (
          <div key={point} className="flex items-start gap-3">
            <CheckCircle2
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                muted ? "text-slate-600" : "text-cyan-400"
              }`}
            />
            <p className="text-sm leading-6 text-slate-400">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreCard({ label, value }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}

function Finding({ text }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

export default App;