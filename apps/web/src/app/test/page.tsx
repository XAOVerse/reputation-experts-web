import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const ACCENT_COLOR = '#FF461E';
const FONT_FAMILY = "'Inter', 'Helvetica Neue', Arial, sans-serif";

export default function DentalClinicPage() {
  return (
    <main style={{ fontFamily: FONT_FAMILY }}>
      {/* Section 1: Hero */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '24px',
              color: '#111',
            }}
          >
            We protect and grow dental clinics' online reputations.
          </h1>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#666',
              maxWidth: '600px',
            }}
          >
            Improving online reputation directly affects clinics by helping them gain more bookings,
            build trust, and increase sales.
          </p>
        </div>
        <div
          style={{
            height: '520px',
            borderRadius: '20px',
            backgroundColor: '#e8e8e8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src="/images/dental-hero.jpg"
            alt="Dental Clinic"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
              filter: 'grayscale(100%)',
            }}
          />
        </div>
      </section>

      {/* Section 2: The reputation challenge */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '60px',
              color: '#111',
            }}
          >
            The reputation challenge for dental practices
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
            }}
          >
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#555' }}>
              In 2026, 89% of patients read online reviews before booking a dentist. A single
              unfair 1-star review on Google can redirect hundreds of potential patients to a
              competitor down the road. Yet most dental practices have no system in place to manage,
              monitor, or dispute their online presence.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#555' }}>
              We work exclusively with dental practices across the UK to build, protect, and
              recover online reputations through proper platform channels. From disputing
              policy-violating reviews to generating authentic feedback from satisfied patients â
              we handle the reputation so you can focus on the dentistry.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Platform Grid */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            marginBottom: '100px',
          }}
        >
          {['Google Maps', 'Trust Pilot', 'Google AI Overview', 'Facebook'].map((platform) => (
            <div
              key={platform}
              style={{
                border: '1px solid #eee',
                borderRadius: '12px',
                padding: '30px',
                height: '230px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            >
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: '300',
                  color: '#333',
                }}
              >
                {platform}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Service Cards */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '60px',
              color: '#111',
            }}
          >
            Reputation Management for Dental Clinics
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
            }}
          >
            {[
              {
                title: 'Review Dispute & Removal',
                description:
                  'We legally remove harmful, fake, malicious, and policy-violating reviews from online platforms like Google Maps that are damaging your reputation, on ongoing bases.',
              },
              {
                title: 'Review Generation',
                description:
                  'We help you turn satisfied patients into 5-star advocates. Through tailored strategies using your existing patient base, follow-up systems, and review prompts timed for maximum response.',
              },
              {
                title: "Google 'AI Overview'",
                description:
                  "Reputation Experts keeps your business visible in AI-driven search by optimising your Google Business Profile, driving consistent clients' reviews, and structuring your online presence so Google surfaces you, not your competitors",
              },
              {
                title: 'Search Result Management',
                description:
                  "If negative articles, forum posts, or outdated content ranks for your practice name, we push it down with positive, authoritative content â building a first page you're proud of.",
              },
              {
                title: 'Digital PR & Authority',
                description:
                  'We get your practice featured in dental publications, health blogs, and local news outlets â building the kind of online authority that patients and Google both trust.',
              },
              {
                title: 'Reputation Protection',
                description:
                  "Real-time alerts whenever your practice is mentioned online. New review? We notify you. Negative article? We flag it. So you're never caught off guard again.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: '#f7f7f7',
                  borderRadius: '16px',
                  padding: '30px',
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#111' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Services (Dark Background) */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: '#111116',
            borderRadius: '20px',
            padding: '60px',
            color: '#fff',
          }}
        >
          <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '40px' }}>Services</h2>

          {/* Tab Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {['All Services', 'Reviews', 'Search & Content', 'PR & Media'].map((tab) => (
              <button
                key={tab}
                style={{
                  padding: '10px 20px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  backgroundColor: tab === 'Reviews' ? ACCENT_COLOR : 'transparent',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  fontFamily: FONT_FAMILY,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Services List & Detail */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            {/* Left: Services List */}
            <div>
              {[
                'Online Reputation Audit',
                'Review Dispute & Removal',
                'Review Generation Strategy',
                'Google Business Optimisation',
                'Ongoing Reputation Protection',
                'Crisis & Issue Response',
                'Digital PR & Authority Building',
                'AI Overview Optimisation',
                'Daily Monitoring and Protection',
              ].map((service, idx) => (
                <div
                  key={service}
                  style={{
                    paddingBottom: '16px',
                    marginBottom: '16px',
                    borderBottom: idx < 8 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontSize: '16px', color: idx === 0 ? ACCENT_COLOR : '#fff' }}>
                    {service}
                  </span>
                  {idx === 0 && <span style={{ fontSize: '18px', color: ACCENT_COLOR }}>âº</span>}
                </div>
              ))}
            </div>

            {/* Right: Detail Panel */}
            <div>
              <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px' }}>
                Online Reputation Audit
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: '30px',
                }}
              >
                Our design discovery process is a collaborative phase that helps define your project
                goals, target audience, and product requirements. Through workshops and research, we
                gain a deep understanding of your vision and create a roadmap for the design
                process. This ensures that every design decision is grounded in a solid foundation
                and aligns with your business objectives.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '20px',
                    padding: '10px 16px',
                    fontSize: '14px',
                  }}
                >
                  Goal setting & user research
                </span>
                <span
                  style={{
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '20px',
                    padding: '10px 16px',
                    fontSize: '14px',
                  }}
                >
                  Clear project roadmap
                </span>
              </div>

              {/* Decorative Circles */}
              <div style={{ position: 'relative', height: '200px', marginTop: '40px' }}>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-50px',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '-30px',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Digital reputation management with diagram */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left Side */}
          <div>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '700',
                marginBottom: '30px',
                color: '#111',
              }}
            >
              Digital reputation management that covers every angle
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#555', marginBottom: '40px' }}>
              Our approach brings together review management, reputation building, Google AI Overview
              optimisation, ChatGPT recommendation positioning, and major online media publications
              â all in one integrated service built specifically for UK dental practices. Every
              strategy is shaped around how patients actually search for and choose their dentist
              online.
            </p>

            {/* Pill Tags */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                ['Harmful Review Removal', 'Google Review Growth', 'Trustpilot Review Growth'],
                ['Authority Content Publishing', 'National Press Features', 'Negative Content Suspension'],
                ['Google Maps Positioning', 'Ongoing Protection: Removal of New Harmful Reviews'],
                ['Google AI Overview Optimisation', 'Chat-GPT Visibility'],
              ].map((row, rowIdx) => (
                <div key={rowIdx} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {row.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        border: '1px solid #ddd',
                        borderRadius: '9999px',
                        padding: '10px 16px',
                        fontSize: '14px',
                        color: '#555',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: SVG Diagram */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1000"
            style={{ fontFamily: FONT_FAMILY, width: '100%', height: 'auto' }}
          >
            <defs>
              <filter id="glow3">
                <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                <feOffset dx="0" dy="3" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.12" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Rings */}
            <circle cx="600" cy="500" r="380" fill="none" stroke="#d5d5d5" strokeWidth="1" strokeDasharray="4,6" />
            <circle cx="600" cy="500" r="260" fill="none" stroke="#d5d5d5" strokeWidth="1" strokeDasharray="4,6" />
            <circle cx="600" cy="500" r="150" fill="none" stroke="#c5c5c5" strokeWidth="0.5" />

            {/* Center */}
            <circle cx="600" cy="500" r="100" fill="none" stroke="#bbb" strokeWidth="1.5" />

            {/* Connection lines */}
            <line x1="700" y1="500" x2="920" y2="500" stroke={ACCENT_COLOR} strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="672" y1="431" x2="855" y2="255" stroke={ACCENT_COLOR} strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="629" y1="404" x2="717" y2="115" stroke="#ccc" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="571" y1="404" x2="483" y2="115" stroke="#ccc" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="528" y1="431" x2="345" y2="255" stroke="#ccc" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="500" y1="500" x2="280" y2="500" stroke="#ccc" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="528" y1="569" x2="345" y2="745" stroke="#ccc" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="571" y1="596" x2="483" y2="885" stroke="#ccc" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="629" y1="596" x2="717" y2="885" stroke="#ccc" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="672" y1="569" x2="855" y2="745" stroke="#ccc" strokeOpacity="0.5" strokeWidth="1.5" />

            {/* Nodes */}
            <g transform="translate(920, 500)" filter="url(#glow3)">
              <rect x="-65" y="-28" width="130" height="56" rx="28" fill={ACCENT_COLOR} stroke={ACCENT_COLOR} strokeWidth="1.5" />
              <text x="0" y="-4" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">Google</text>
              <text x="0" y="12" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">Reviews</text>
            </g>
            <g transform="translate(855, 255)" filter="url(#glow3)">
              <rect x="-65" y="-28" width="130" height="56" rx="28" fill={ACCENT_COLOR} stroke={ACCENT_COLOR} strokeWidth="1.5" />
              <text x="0" y="-4" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">Trustpilot</text>
              <text x="0" y="12" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">Reviews</text>
            </g>
            <g transform="translate(717, 115)" filter="url(#glow3)">
              <rect x="-72" y="-28" width="144" height="56" rx="28" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
              <text x="0" y="-4" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">AI Overview</text>
              <text x="0" y="12" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Optimisation</text>
            </g>
            <g transform="translate(483, 115)" filter="url(#glow3)">
              <rect x="-65" y="-28" width="130" height="56" rx="28" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
              <text x="0" y="-4" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">High Search</text>
              <text x="0" y="12" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Rankings</text>
            </g>
            <g transform="translate(345, 255)" filter="url(#glow3)">
              <rect x="-72" y="-28" width="144" height="56" rx="28" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
              <text x="0" y="-4" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Google Maps</text>
              <text x="0" y="12" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Positioning</text>
            </g>
            <g transform="translate(280, 500)" filter="url(#glow3)">
              <rect x="-78" y="-28" width="156" height="56" rx="28" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
              <text x="0" y="-4" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Reputation-Enhancing</text>
              <text x="0" y="12" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Press Coverage</text>
            </g>
            <g transform="translate(345, 745)" filter="url(#glow3)">
              <rect x="-72" y="-28" width="144" height="56" rx="28" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
              <text x="0" y="-4" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Testimonial</text>
              <text x="0" y="12" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Building</text>
            </g>
            <g transform="translate(483, 885)" filter="url(#glow3)">
              <rect x="-72" y="-28" width="144" height="56" rx="28" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
              <text x="0" y="-4" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Positive Digital</text>
              <text x="0" y="12" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Mentions</text>
            </g>
            <g transform="translate(717, 885)" filter="url(#glow3)">
              <rect x="-72" y="-28" width="144" height="56" rx="28" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
              <text x="0" y="-4" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Daily Reputation</text>
              <text x="0" y="12" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Monitoring</text>
            </g>
            <g transform="translate(855, 745)" filter="url(#glow3)">
              <rect x="-78" y="-28" width="156" height="56" rx="28" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
              <text x="0" y="-4" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Negative Content</text>
              <text x="0" y="12" textAnchor="middle" fontSize="11" fontWeight="600" fill="#555">Suppression</text>
            </g>

            {/* Category labels */}
            <text x="920" y="400" textAnchor="middle" fontSize="10" fontWeight="400" fill="#aaa" letterSpacing="2">
              REVIEWS
            </text>
            <text x="600" y="155" textAnchor="middle" fontSize="10" fontWeight="400" fill="#aaa" letterSpacing="2">
              SEARCH & VISIBILITY
            </text>
            <text x="280" y="640" textAnchor="middle" fontSize="10" fontWeight="400" fill="#aaa" letterSpacing="2">
              CONTENT & PR
            </text>
            <text x="920" y="640" textAnchor="middle" fontSize="10" fontWeight="400" fill="#aaa" letterSpacing="2">
              PROTECTION
            </text>

            <text x="600" y="970" textAnchor="middle" fontSize="11" fill="#bbb" letterSpacing="2">
              REPUTATION-EXPERTS.CO.UK
            </text>
          </svg>
        </div>
      </section>

      {/* Section 7: Industry Authority Brand Chart */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: '#0e0e13',
            borderRadius: '20px',
            padding: '60px',
            color: '#fff',
          }}
        >
          <svg
            viewBox="0 0 800 500"
            style={{ width: '100%', height: 'auto', minHeight: '400px', fontFamily: FONT_FAMILY }}
          >
            {/* Background */}
            <rect width="800" height="500" fill="#0e0e13" />

            {/* Title */}
            <text x="40" y="40" fontSize="28" fontWeight="700" fill="#fff">
              Industry Authority
            </text>
            <text x="40" y="70" fontSize="24" fontWeight="400" fill="#999">
              Brand in 6 Months
            </text>

            {/* Phase Headers */}
            <text x="120" y="110" fontSize="12" fontWeight="600" fill="#888" letterSpacing="1">
              DIAGNOSE & REPAIR
            </text>
            <text x="340" y="110" fontSize="12" fontWeight="600" fill="#888" letterSpacing="1">
              STRENGTHEN & IMPROVE
            </text>
            <text x="580" y="110" fontSize="12" fontWeight="600" fill="#888" letterSpacing="1">
              ESTABLISH INDUSTRY AUTHORITY
            </text>

            {/* Axes Labels */}
            <text x="20" y="330" fontSize="11" fill="#888">
              Reputation
            </text>
            <text x="100" y="450" fontSize="11" fill="#888">
              Month 0
            </text>
            <text x="700" y="450" fontSize="11" fill="#888">
              Month 6
            </text>
            <text x="400" y="480" fontSize="11" fill="#888" textAnchor="middle">
              Timeline
            </text>

            {/* Gradient Curve Path */}
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00c9a7" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>

            {/* Main curve */}
            <path
              d="M 100 350 Q 200 300, 300 250 T 500 150 T 700 100"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="4"
            />

            {/* Main curve points with labels */}
            <g>
              <circle cx="120" cy="330" r="4" fill="#00c9a7" />
              <text x="120" y="360" fontSize="11" fill="#888" textAnchor="middle">
                Audit
              </text>

              <circle cx="160" cy="300" r="4" fill="#00c9a7" />
              <text x="160" y="330" fontSize="11" fill="#888" textAnchor="middle">
                Clean Up
              </text>

              <circle cx="240" cy="260" r="4" fill="#00c9a7" />
              <text x="240" y="290" fontSize="11" fill="#888" textAnchor="middle">
                Improve
              </text>

              <circle cx="340" cy="220" r="4" fill="#00c9a7" />
              <text x="340" y="250" fontSize="11" fill="#888" textAnchor="middle">
                Optimise
              </text>

              <circle cx="460" cy="160" r="4" fill="#00c9a7" />
              <text x="460" y="190" fontSize="11" fill="#888" textAnchor="middle">
                Amplify
              </text>

              <circle cx="560" cy="130" r="4" fill="#00c9a7" />
              <text x="560" y="160" fontSize="11" fill="#888" textAnchor="middle">
                Press Coverage
              </text>

              <circle cx="640" cy="110" r="4" fill="#2dd4bf" />
              <text x="640" y="90" fontSize="11" fill="#2dd4bf" textAnchor="middle" fontWeight="600">
                Multiplatform
              </text>
              <text x="640" y="103" fontSize="11" fill="#2dd4bf" textAnchor="middle" fontWeight="600">
                Growth
              </text>

              <circle cx="720" cy="100" r="4" fill="#2dd4bf" />
              <text x="720" y="80" fontSize="11" fill="#2dd4bf" textAnchor="middle" fontWeight="600">
                Authority
              </text>
              <text x="720" y="93" fontSize="11" fill="#2dd4bf" textAnchor="middle" fontWeight="600">
                Brand
              </text>
            </g>

            {/* Feedback loops (dotted curved lines going up) */}
            <path d="M 160 300 Q 180 280, 200 300" stroke="#666" strokeWidth="1" strokeDasharray="3,3" fill="none" />
            <text x="190" y="270" fontSize="9" fill="#666">
              Adjust
            </text>

            <path d="M 240 260 Q 260 240, 280 260" stroke="#666" strokeWidth="1" strokeDasharray="3,3" fill="none" />
            <text x="270" y="230" fontSize="9" fill="#666">
              Evaluate
            </text>

            <path d="M 340 220 Q 360 200, 380 220" stroke="#666" strokeWidth="1" strokeDasharray="3,3" fill="none" />
            <text x="370" y="190" fontSize="9" fill="#666">
              Adjust
            </text>

            <path d="M 460 160 Q 480 140, 500 160" stroke="#666" strokeWidth="1" strokeDasharray="3,3" fill="none" />
            <text x="490" y="130" fontSize="9" fill="#666">
              Evaluate
            </text>

            <path d="M 560 130 Q 580 110, 600 130" stroke="#666" strokeWidth="1" strokeDasharray="3,3" fill="none" />
            <text x="590" y="100" fontSize="9" fill="#666">
              Adjust
            </text>

            <path d="M 640 110 Q 660 90, 680 110" stroke="#666" strokeWidth="1" strokeDasharray="3,3" fill="none" />
            <text x="670" y="80" fontSize="9" fill="#666">
              Monitor
            </text>

            <path d="M 720 100 Q 740 85, 760 100" stroke="#666" strokeWidth="1" strokeDasharray="3,3" fill="none" />
            <text x="750" y="75" fontSize="9" fill="#666">
              Protect
            </text>
          </svg>
        </div>
      </section>

      {/* Section 8: Google AI Overview */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-start' }}>
            {/* Left */}
            <div>
              <h2
                style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  marginBottom: '30px',
                  color: '#111',
                }}
              >
                Google 'AI Overview'
              </h2>
              <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#555', marginBottom: '40px' }}>
                Google SGE, recently rebranded as "AI Overviews" â synthesizes information from
                multiple sources into a single article, providing users with fast, comprehensive
                answers to queries without having to browse through multiple links.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <button
                  style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    backgroundColor: 'transparent',
                    color: '#333',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  0800 1234 567
                </button>
                <button
                  style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: ACCENT_COLOR,
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Talk To Expert
                </button>
              </div>
            </div>

            {/* Right */}
            <div>
              <div
                style={{
                  backgroundColor: '#e8e8e8',
                  borderRadius: '12px',
                  height: '290px',
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                }}
              >
                AI Overview Screenshot
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#666' }}>
                We optimise your Google Business Profile, ensure consistent positive reviews, and
                structure your online presence so AI systems surface you prominently, keeping your
                practice visible where patients search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Platforms & Media Outlets */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '60px',
            textAlign: 'center',
            color: '#111',
          }}
        >
          Platforms & Media Outlets
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px' }}>
          {/* Left: Media Outlets List */}
          <div>
            {['CBS', 'BBC', 'FOX News', 'Business Insider', 'NBC', 'Digital Journal'].map((outlet) => (
              <div
                key={outlet}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '16px',
                  marginBottom: '16px',
                  borderBottom: '1px solid #e8e8e8',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '16px',
                    color: '#555',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#e8e8e8',
                      borderRadius: '6px',
                    }}
                  />
                  {outlet}
                </span>
                <span style={{ fontSize: '18px', color: '#999' }}>âº</span>
              </div>
            ))}
          </div>

          {/* Right: Media Logo Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#e8e8e8',
                  height: '150px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                  fontSize: '14px',
                }}
              >
                Logo {idx}
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '30px',
              color: '#111',
            }}
          >
            Media Partners
          </h3>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              overflowX: 'auto',
              paddingBottom: '20px',
            }}
          >
            {[1, 2, 3, 4, 5].map((idx) => (
              <div
                key={idx}
                style={{
                  minWidth: '140px',
                  height: '100px',
                  backgroundColor: '#e8e8e8',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                  fontSize: '12px',
                  flexShrink: 0,
                }}
              >
                Partner {idx}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Case Studies */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#111',
              }}
            >
              Case Studies
            </h2>
            <button
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                backgroundColor: ACCENT_COLOR,
                color: '#fff',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                fontFamily: FONT_FAMILY,
              }}
            >
              Talk To Expert
            </button>
          </div>

          {/* Testimonial Carousel */}
          <div style={{ display: 'flex', gap: '30px' }}>
            {/* Main Card */}
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '40px',
                flex: '1',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '20px' }}>â</div>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.7',
                  color: '#333',
                  marginBottom: '30px',
                }}
              >
                Reputation Experts helped us restore our online reputation quickly and professionally.
              </p>
              <div>
                <p style={{ fontSize: '16px', fontWeight: '600', color: '#111', marginBottom: '4px' }}>
                  Pierre Lambert
                </p>
                <p style={{ fontSize: '14px', color: '#999' }}>Founder, Nero Software Group</p>
              </div>
            </div>

            {/* Preview Cards */}
            {[1, 2].map((idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  padding: '30px',
                  width: '200px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  opacity: '0.6',
                }}
              >
                <div style={{ fontSize: '20px', marginBottom: '12px' }}>â</div>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#666', marginBottom: '20px' }}>
                  Great service and professional team.
                </p>
                <p style={{ fontSize: '12px', fontWeight: '600', color: '#111' }}>Client {idx}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: FAQ */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '60px',
            color: '#111',
          }}
        >
          FAQ
        </h2>

        <div>
          {[
            'Can you remove fake or negative reviews about my practice?',
            'How long does it take to see results for my dental practice?',
            "How does Google's AI Overview affect my dental practice?",
            'How does Reputation Experts build a strong online reputation for my practice?',
            'How does Reputation Experts help clinics boost their bookings and increase sales?',
          ].map((question, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '20px',
                marginBottom: '20px',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              <span style={{ fontSize: '16px', color: '#333', fontWeight: '500' }}>
                {question}
              </span>
              <span style={{ fontSize: '24px', color: ACCENT_COLOR, cursor: 'pointer' }}>+</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 12: CTA Section (Dark) */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: '#111116',
            borderRadius: '20px',
            padding: '60px',
            color: '#fff',
          }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            Let's build a reputation your practice deserves.
          </h2>

          <p style={{ fontSize: '16px', textAlign: 'center', marginBottom: '40px', color: '#bbb' }}>
            Write us on
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span
                style={{
                  backgroundColor: ACCENT_COLOR,
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}
              >
                New Business
              </span>
              <span style={{ fontSize: '16px' }}>newbusiness@reputation-experts.co.uk</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}
              >
                Other inquiries
              </span>
              <span style={{ fontSize: '16px' }}>info@reputation-experts.co.uk</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1px solid #fff',
                backgroundColor: 'transparent',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: FONT_FAMILY,
              }}
            >
              0800 1234 567
            </button>
            <button
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                backgroundColor: ACCENT_COLOR,
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: FONT_FAMILY,
              }}
            >
              Talk To Expert
            </button>
          </div>

          <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '30px', color: '#999' }}>
            We're here to help you build, protect, and grow your dental practice's online reputation.
          </p>
        </div>
      </section>

      {/* Section 13: Get in touch (Form) */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          {/* Left: Form */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                Band / company name
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: FONT_FAMILY,
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                Your email
              </label>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: FONT_FAMILY,
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                Google Maps / Trustpilot Link
              </label>
              <input
                type="url"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: FONT_FAMILY,
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                Tell us more about your project
              </label>
              <textarea
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: FONT_FAMILY,
                  minHeight: '120px',
                  resize: 'vertical',
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
              <input type="checkbox" style={{ marginTop: '4px' }} />
              <label style={{ fontSize: '14px', color: '#666' }}>
                I agree to the privacy policy and terms of service
              </label>
            </div>

            <button
              type="submit"
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                backgroundColor: ACCENT_COLOR,
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: FONT_FAMILY,
              }}
            >
              Submit
            </button>
          </form>

          {/* Right: Info Card */}
          <div>
            <div
              style={{
                backgroundColor: '#f9f9f9',
                borderRadius: '16px',
                padding: '40px',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: '#111',
                }}
              >
                What happens after I submit a request?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#666', marginBottom: '30px' }}>
                Our team will review your submission within 24 hours. We'll reach out to discuss
                your reputation management needs, provide an initial audit of your online presence,
                and create a customized strategy to build and protect your dental practice's
                reputation.
              </p>

              <div
                style={{
                  backgroundColor: '#e8e8e8',
                  height: '200px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                  fontSize: '14px',
                }}
              >
                Video Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
