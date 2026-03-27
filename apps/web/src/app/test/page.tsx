import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test — Our Process",
  robots: "noindex, nofollow",
};

export default function TestPage() {
  return (
    <main style={{ padding: "60px 24px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Our Process Section */}
      <section
        style={{
          background: "#0e0e13",
          borderRadius: 20,
          padding: "60px 40px 50px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <p
          style={{
            color: "#fff",
            fontSize: 32,
            fontWeight: 600,
            marginBottom: 40,
            marginTop: 0,
          }}
        >
          Our process
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginBottom: 12,
            borderBottom: "1px dashed rgba(255,255,255,0.12)",
            paddingBottom: 16,
          }}
        >
          <span style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
            Diagnose
          </span>
          <span
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Strengthen
          </span>
          <span
            style={{
              color: "#34d399",
              fontSize: 16,
              fontWeight: 600,
              textAlign: "right",
            }}
          >
            Dominate
          </span>
        </div>

        <div style={{ position: "relative", width: "100%", height: 500 }}>
          <svg
            viewBox="0 0 1000 500"
            style={{ width: "100%", height: "100%" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="scaleZone" x1="0.66" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#065f46" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#064e3b" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="30%" stopColor="#3b82f6" />
                <stop offset="60%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>

            <rect x="660" y="0" width="340" height="500" fill="url(#scaleZone)" rx="0" />

            <line x1="333" y1="0" x2="333" y2="500" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4,6" />
            <line x1="666" y1="0" x2="666" y2="500" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4,6" />

            <line x1="60" y1="20" x2="60" y2="460" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="60" y1="460" x2="960" y2="460" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

            <text x="18" y="250" fill="rgba(255,255,255,0.4)" fontSize="11" transform="rotate(-90, 18, 250)" textAnchor="middle">Reputation</text>
            <text x="45" y="455" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="end">Weak</text>
            <text x="45" y="35" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="end">Strong</text>

            <text x="510" y="495" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Timeline</text>
            <text x="80" y="480" fill="rgba(255,255,255,0.3)" fontSize="10">Month 1</text>
            <text x="930" y="480" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="end">Month 6</text>

            <path d="M 270,370 C 310,280 370,270 340,350" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4,4" />
            <text x="340" y="295" fill="rgba(255,255,255,0.4)" fontSize="10">Evaluate</text>
            <text x="255" y="345" fill="rgba(255,255,255,0.4)" fontSize="10">Adjust</text>

            <path d="M 560,265 C 610,170 680,160 640,250" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4,4" />
            <text x="640" y="185" fill="rgba(255,255,255,0.4)" fontSize="10">Evaluate</text>
            <text x="545" y="240" fill="rgba(255,255,255,0.4)" fontSize="10">Adjust</text>

            <path d="M 800,155 C 850,70 920,60 880,140" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,4" />
            <text x="880" y="85" fill="rgba(255,255,255,0.45)" fontSize="10">Evaluate</text>
            <text x="785" y="130" fill="rgba(255,255,255,0.45)" fontSize="10">Refine</text>

            <path d="M 90,430 C 140,425 180,415 240,400 C 300,385 340,370 400,340 C 460,310 500,280 560,245 C 620,210 660,180 720,150 C 780,120 830,95 900,60" fill="none" stroke="url(#curveGrad)" strokeWidth="2.5" strokeLinecap="round" />

            <circle cx="110" cy="428" r="5" fill="#8b5cf6" />
            <text x="110" y="448" fill="#c4b5fd" fontSize="11" fontWeight="500" textAnchor="middle">Audit</text>

            <circle cx="240" cy="400" r="5" fill="#6366f1" />
            <text x="240" y="420" fill="#a5b4fc" fontSize="11" fontWeight="500" textAnchor="middle">Strategy</text>

            <circle cx="370" cy="350" r="5" fill="#3b82f6" />
            <text x="370" y="370" fill="#93c5fd" fontSize="11" fontWeight="500" textAnchor="middle">Clean-Up</text>

            <circle cx="490" cy="285" r="5" fill="#06b6d4" />
            <text x="490" y="305" fill="#67e8f9" fontSize="11" fontWeight="500" textAnchor="middle">Optimise</text>

            <circle cx="600" cy="230" r="5" fill="#14b8a6" />
            <text x="600" y="250" fill="#5eead4" fontSize="11" fontWeight="500" textAnchor="middle">Amplify</text>

            <circle cx="700" cy="170" r="5" fill="#10b981" />
            <text x="700" y="190" fill="#6ee7b7" fontSize="11" fontWeight="500" textAnchor="middle">Review Growth</text>

            <circle cx="810" cy="115" r="5" fill="#34d399" />
            <text x="810" y="135" fill="#6ee7b7" fontSize="11" fontWeight="500" textAnchor="middle">Monitor</text>

            <circle cx="910" cy="65" r="6" fill="#34d399" />
            <circle cx="910" cy="65" r="10" fill="none" stroke="#34d399" strokeWidth="1" strokeOpacity="0.4" />
            <text x="910" y="50" fill="#6ee7b7" fontSize="12" fontWeight="600" textAnchor="middle">Authority</text>
          </svg>
        </div>
      </section>
    </main>
  );
}
