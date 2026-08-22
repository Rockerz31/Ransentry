import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  GitBranch,
} from "lucide-react";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <header className="border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-cyan-400" />

            <div>
              <h1 className="text-lg font-bold">RANSENTRY</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Cyber Resilience
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
          >
            View Dashboard
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-24">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium text-cyan-400">
              SIH1452 · Ransomware Resilience Validation
            </p>

            <h2 className="text-5xl font-bold leading-tight sm:text-6xl">
              Don't just assess
              <span className="block text-cyan-400">
                ransomware readiness.
              </span>
              Prove it.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              RANSENTRY evaluates security evidence, models ransomware
              attack paths, and helps organizations identify what needs to
              improve.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/dashboard")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-[#07111f] hover:bg-cyan-300"
              >
                Run Organization Assessment
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("workflow")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-slate-200"
              >
                Explore Workflow
              </button>
            </div>
          </div>

          <div id="workflow" className="mt-20 grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<ShieldCheck />}
              title="Evidence-based"
              text="Move beyond self-reported security checklists."
            />

            <FeatureCard
              icon={<GitBranch />}
              title="Attack-path aware"
              text="Model where ransomware could move through the organization."
            />

            <FeatureCard
              icon={<Activity />}
              title="Measurable"
              text="Track risk, detection, containment and resilience."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

export default Landing;