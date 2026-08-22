import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Database,
  Network,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

const scores = [
  { label: "Prevention", value: 78, icon: ShieldCheck },
  { label: "Detection", value: 55, icon: Activity },
  { label: "Response", value: 62, icon: ShieldAlert },
  { label: "Recovery", value: 48, icon: Database },
];

const findings = [
  {
    severity: "Critical",
    title: "Backup infrastructure is not isolated",
    detail: "A compromised environment may be able to reach critical recovery infrastructure.",
  },
  {
    severity: "Critical",
    title: "Privileged accounts lack MFA",
    detail: "Administrative account compromise could increase lateral-movement risk.",
  },
  {
    severity: "High",
    title: "Network segmentation is insufficient",
    detail: "The current model allows movement from an employee endpoint toward a critical server.",
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      {/* Top bar */}
      <header className="border-b border-white/5 bg-[#081321]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
              RANSENTRY
            </p>
            <h1 className="mt-1 text-xl font-semibold">Security Overview</h1>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2">
            <p className="text-xs text-slate-500">Organization</p>
            <p className="text-sm font-medium">ABC Healthcare</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Page intro */}
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm text-slate-500">
              Current ransomware resilience posture
            </p>

            <div className="mt-2 flex items-end gap-3">
              <h2 className="text-5xl font-bold tracking-tight">71</h2>
              <span className="pb-2 text-lg text-slate-500">/100</span>

              <span className="mb-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                HIGH RISK
              </span>
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-[#07111f] transition hover:bg-cyan-300">
            Analyze Attack Path
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Main score */}
        <section className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-200">
                  Overall readiness
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Weighted across four resilience domains
                </p>
              </div>

              <ShieldCheck className="h-5 w-5 text-cyan-400" />
            </div>

            <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[71%] rounded-full bg-cyan-400" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {scores.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <Icon className="h-4 w-4 text-cyan-400" />

                  <p className="mt-3 text-xs text-slate-500">{label}</p>
                  <p className="mt-1 text-xl font-semibold">{value}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risk summary */}
          <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.04] p-6">
            <div className="flex items-center gap-2 text-red-300">
              <AlertTriangle className="h-5 w-5" />
              <p className="font-semibold">Risk summary</p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <RiskCount label="Critical" value="2" />
              <RiskCount label="High" value="4" />
              <RiskCount label="Medium" value="7" />
            </div>

            <div className="mt-6 rounded-xl border border-white/5 bg-black/10 p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                Primary concern
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Recovery readiness is currently the weakest domain, mainly due
                to backup isolation and restore-validation gaps.
              </p>
            </div>
          </div>
        </section>

        {/* Findings */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-400">
                Findings
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Critical weaknesses
              </h3>
            </div>

            <button className="text-sm text-slate-400 transition hover:text-white">
              View all
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {findings.map((finding) => (
              <FindingCard key={finding.title} {...finding} />
            ))}
          </div>
        </section>

        {/* Asset / attack path preview */}
        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-6">
            <div className="flex items-center gap-3">
              <Network className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="font-semibold">Attack-path analysis</p>
                <p className="text-xs text-slate-500">
                  Current modeled path
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <Node label="Employee PC" />
              <ArrowRight className="h-4 w-4 text-slate-600" />
              <Node label="Compromised Account" />
              <ArrowRight className="h-4 w-4 text-slate-600" />
              <Node label="Critical Server" danger />
            </div>

            <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
              Open attack-path model
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-6">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="font-semibold">Recovery readiness</p>
                <p className="text-xs text-slate-500">
                  Backup & restore posture
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold">48%</span>
                <span className="pb-1 text-sm text-red-300">Weak</span>
              </div>

              <div className="mt-4 space-y-3">
                <MiniStatus
                  label="Backup exists"
                  value="Verified"
                  ok
                />
                <MiniStatus
                  label="Backup isolation"
                  value="Critical"
                />
                <MiniStatus
                  label="Restore testing"
                  value="Low confidence"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function RiskCount({ label, value }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}

function FindingCard({ severity, title, detail }) {
  const color =
    severity === "Critical"
      ? "text-red-300 bg-red-400/10 border-red-400/20"
      : "text-amber-300 bg-amber-400/10 border-amber-400/20";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${color}`}
            >
              {severity}
            </span>

            <h4 className="font-semibold">{title}</h4>
          </div>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
            {detail}
          </p>
        </div>

        <button className="text-sm font-medium text-cyan-300">
          Investigate
        </button>
      </div>
    </div>
  );
}

function Node({ label, danger = false }) {
  return (
    <div
      className={`rounded-lg border px-3 py-2 ${
        danger
          ? "border-red-400/20 bg-red-400/10 text-red-200"
          : "border-white/10 bg-white/[0.03] text-slate-300"
      }`}
    >
      {label}
    </div>
  );
}

function MiniStatus({ label, value, ok = false }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
      <span className="text-sm text-slate-400">{label}</span>

      <span
        className={`flex items-center gap-1.5 text-xs font-medium ${
          ok ? "text-emerald-300" : "text-red-300"
        }`}
      >
        {ok && <CheckCircle2 className="h-3.5 w-3.5" />}
        {value}
      </span>
    </div>
  );
}

export default Dashboard;