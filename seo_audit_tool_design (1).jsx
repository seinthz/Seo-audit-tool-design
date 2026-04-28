import React, { useMemo, useState } from "react";

function IconBase({ children, className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </IconBase>
  );
}

function GaugeIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 14a8 8 0 1 1 16 0" />
      <path d="M12 14l4-5" />
      <path d="M8 18h8" />
      <path d="M7 14h.01" />
      <path d="M17 14h.01" />
    </IconBase>
  );
}

function ImageOffIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M3 3l18 18" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M10.5 10.5A2 2 0 0 0 8 8" />
      <path d="M21 15l-3.5-3.5a2 2 0 0 0-2.8 0L13 13" />
      <path d="M3 15l4-4a2 2 0 0 1 2.8 0L17 18" />
    </IconBase>
  );
}

function LinkIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.9 5" />
      <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13.1 19" />
    </IconBase>
  );
}

function HeadingIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 5v14" />
      <path d="M14 5v14" />
      <path d="M4 12h10" />
      <path d="M18 19v-6l-2 1" />
    </IconBase>
  );
}

function FileTextIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </IconBase>
  );
}

function CheckIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.2 2.2 4.8-5.2" />
    </IconBase>
  );
}

function AlertIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M10.3 3.9 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </IconBase>
  );
}

function XIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </IconBase>
  );
}

function CopyIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </IconBase>
  );
}

function ExternalIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </IconBase>
  );
}

const auditItems = [
  {
    label: "Meta description",
    status: "warning",
    value: "Missing",
    note: "Add a clear 140–160 character description for better SERP previews.",
    icon: FileTextIcon,
  },
  {
    label: "Images without alt text",
    status: "danger",
    value: "7 found",
    note: "Alt text improves accessibility and helps search engines understand image context.",
    icon: ImageOffIcon,
  },
  {
    label: "H1 tag count",
    status: "success",
    value: "1 H1",
    note: "Perfect. Keep one clear H1 that reflects the page’s primary topic.",
    icon: HeadingIcon,
  },
  {
    label: "Page title length",
    status: "success",
    value: "56 chars",
    note: "Good range. Your title is readable and unlikely to be truncated.",
    icon: SearchIcon,
  },
  {
    label: "Internal links",
    status: "warning",
    value: "4 links",
    note: "Add more relevant internal links to strengthen page discovery and topical authority.",
    icon: LinkIcon,
  },
];

const statusStyles = {
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  danger: "bg-rose-50 text-rose-700 border-rose-200",
};

const statusIcons = {
  success: CheckIcon,
  warning: AlertIcon,
  danger: XIcon,
};

function calculateScore(items) {
  if (!Array.isArray(items) || items.length === 0) return 0;
  const passed = items.filter((item) => item.status === "success").length;
  return Math.round((passed / items.length) * 100);
}

function runRuntimeTests() {
  const tests = [
    {
      name: "returns 0 for an empty audit list",
      actual: calculateScore([]),
      expected: 0,
    },
    {
      name: "calculates 40 when 2 of 5 checks pass",
      actual: calculateScore(auditItems),
      expected: 40,
    },
    {
      name: "calculates 100 when all checks pass",
      actual: calculateScore([
        { status: "success" },
        { status: "success" },
        { status: "success" },
      ]),
      expected: 100,
    },
    {
      name: "calculates 33 when 1 of 3 checks pass",
      actual: calculateScore([
        { status: "success" },
        { status: "warning" },
        { status: "danger" },
      ]),
      expected: 33,
    },
  ];

  tests.forEach((test) => {
    console.assert(
      test.actual === test.expected,
      `Test failed: ${test.name}. Expected ${test.expected}, got ${test.actual}`
    );
  });
}

runRuntimeTests();

function Button({ children, variant = "primary", className = "", ...props }) {
  const variantClass =
    variant === "secondary"
      ? "bg-white text-slate-950 hover:bg-slate-200"
      : variant === "outline"
        ? "border border-white/20 bg-transparent text-white hover:bg-white/10"
        : "bg-cyan-300 text-slate-950 hover:bg-cyan-200";

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-2xl px-5 text-sm font-semibold transition ${variantClass} ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}

export default function SeoAuditToolDesign() {
  const [url, setUrl] = useState("https://example.com/blog/sample-page");

  const score = useMemo(() => calculateScore(auditItems), []);

  return (
    <div className="min-h-screen bg-slate-950 p-4 text-slate-100 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur">
          <div className="grid gap-8 p-6 md:grid-cols-[1.05fr_0.95fr] md:p-10">
            <section className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <GaugeIcon className="h-4 w-4" />
                5-minute browser SEO audit
              </div>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                  Diagnose basic SEO leaks before they become ranking problems.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                  A lightweight audit tool for technical writers, SEO managers, and dev teams. No subscriptions. No login. Just enter a URL and inspect the page structure.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-slate-100 md:p-5">
                <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="audit-url">
                  Page URL
                </label>
                <div className="flex flex-col gap-3 md:flex-row">
                  <input
                    id="audit-url"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-slate-950 px-4 text-sm text-slate-100 outline-none ring-cyan-300/30 placeholder:text-slate-500 focus:ring-4"
                    placeholder="https://yourwebsite.com/page"
                  />
                  <Button className="min-h-12 px-6">Run Audit</Button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <StatCard label="Dependencies" value="0" />
                <StatCard label="Build time" value="45 min" />
                <StatCard label="Audit rules" value="5" />
              </div>
            </section>

            <section className="rounded-[1.7rem] border border-white/10 bg-slate-100 p-4 text-slate-950 shadow-xl md:p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Audit result</p>
                  <h2 className="text-2xl font-semibold">Technical SEO snapshot</h2>
                </div>
                <div className="grid h-20 w-20 place-items-center rounded-full bg-slate-950 text-center text-white">
                  <div>
                    <p className="text-2xl font-bold">{score}</p>
                    <p className="text-xs text-slate-300">score</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {auditItems.map((item) => {
                  const Icon = item.icon;
                  const StatusIcon = statusIcons[item.status];

                  return (
                    <article key={item.label} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-100">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-semibold">{item.label}</h3>
                            <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[item.status]}`}>
                              <StatusIcon className="h-3.5 w-3.5" />
                              {item.value}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="border-t border-white/10 bg-slate-900/70 p-5 md:p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">For technical writers</p>
                <p className="mt-2 max-w-3xl text-slate-300">
                  The best documentation does more than explain features. It helps teams diagnose structure, usability, and discoverability problems before users feel them.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">
                  <CopyIcon className="mr-2 h-4 w-4" /> Copy report
                </Button>
                <Button variant="outline">
                  <ExternalIcon className="mr-2 h-4 w-4" /> View code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
