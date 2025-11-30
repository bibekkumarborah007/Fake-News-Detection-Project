import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LightRays from "./LightRays";
import React, { useEffect, useState } from "react";

const PHRASES = [
  "Pattern-based fake news scan",
  "SVM accuracy-driven detection",
  "Real vs Fake instant verdict",
  "Misinformation alert",
  "Pattern-based fake news scan"
];

function Nav() {
  return (
    <nav className="relative z-10 max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-white rounded-sm" />
        <span className="text-sm font-semibold">FND</span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/bibekkumarborah007/Fake-News-Detection-Project"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center p-1 rounded-full border border-white/10 text-sm hover:bg-white/5"
          aria-label="GitHub"
        >
          <a
            href="https://github.com/bibekkumarborah007/Fake-News-Detection-Project"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center p-1 rounded-full border border-white/10 text-sm hover:bg-white/5"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" className="w-5 h-5" />
          </a>


        </a>
      </div>
    </nav>
  );
}

function VerticalRoll({ roll }) {
  return (
    <div className="mt-6 flex justify-center">
      <div className="flex items-center gap-3">
        <div className="text-orange-400">•</div>
        <div className="w-64 h-6 overflow-hidden">
          <div className="transition-transform duration-500" style={{ transform: `translateY(-${roll * 1.5}rem)` }}>
            {PHRASES.map((p, i) => (
              <div key={i} className="h-6 leading-6 text-left font-medium text-slate-200">
                {p}
              </div>
            ))}
          </div>
        </div>
        <div className="text-slate-500">— quick checks & confidence</div>
      </div>
    </div>
  );
}

function InputPill({ text, setText, onDetect, loading }) {
  function onKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onDetect();
    }
  }

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-2xl bg-white/6 border border-white/8 rounded-md px-3 py-2 flex items-center gap-3 shadow-sm">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKey}
          placeholder="Paste a headline or short paragraph and press Enter"
          className="flex-1 bg-transparent text-sm placeholder:text-slate-400 focus:outline-none px-2 py-2 rounded-md"
        />
        <button
          onClick={() => onDetect()}
          disabled={loading}
          className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:brightness-95 disabled:opacity-60"
        >
          {loading ? "Detecting..." : "Detect"}
        </button>
      </div>
    </div>
  );
}

function ResultCard({ result }) {
  if (!result) return <div className="text-center text-sm text-slate-500">No prediction yet — enter text and press Detect.</div>;

  const isFake = result.label && result.label.toLowerCase().includes("fake");

  return (
    <div className="rounded-md p-4 border border-white/8 bg-white/5 flex items-center justify-between">
      <div>
        <div className="text-xs text-slate-300">Prediction</div>
        <div className="mt-1 text-lg font-semibold">
          <span className={isFake ? "text-red-400" : "text-green-300"}>{result.label}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xs text-slate-300">Confidence</div>
        <div className="mt-1 text-lg font-medium">{typeof result.confidence === "number" ? `${(result.confidence * 100).toFixed(1)}%` : "—"}</div>
      </div>
    </div>
  );
}

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null); // { label, confidence }
  const [loading, setLoading] = useState(false);
  const [roll, setRoll] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoll((r) => (r + 1) % PHRASES.length), 2400);
    return () => clearInterval(t);
  }, []);

  async function detect() {
    const payload = text.trim();
    if (!payload) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: payload }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setResult({ label: data?.error ?? `HTTP ${res.status}`, confidence: null });
      } else {
        setResult({ label: data.label ?? data.prediction ?? "Unknown", confidence: data.confidence ?? null });
      }
    } catch {
      setResult({ label: "Backend not connected", confidence: null });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-black text-white antialiased" style={{ fontFamily: "Inter, system-ui" }}>

      {/* LightRays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.7}
          lightSpread={1.4}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <Nav />

      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center pt-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          <span className="block">Detect</span>
          <span className="block text-orange-500 text-lg mt-1">fake news instantly</span>
        </h1>

        <VerticalRoll roll={roll} />

        <InputPill text={text} setText={setText} onDetect={detect} loading={loading} />

        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-2xl">
            <ResultCard result={result} />
          </div>
        </div>

        <div className="text-center text-sm text-blue-500 mt-4">Version 1.0 : Prediction based on dataset</div>

        <footer className="mt-12 text-center text-xs text-slate-400 pb-2">&copy; Dhemaji Engineering College · 7th Semester CSE Project 2025</footer>
      </main>
    </div>
  );
}
