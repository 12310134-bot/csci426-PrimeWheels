
import '../styles/services.css';

export default function Services(){
  return (
    <div className="pw-services container py-5">
      <header className="mb-4 text-center">
        <h1 className="mb-2">The PrimeWheels Advantage</h1>
        <p className="lead">
          We’ve reimagined car buying for the modern shopper. PrimeWheels brings intelligent discovery, crystal-clear inspection, and effortless dealer connections so you can shop confidently and get on the road faster.
        </p>
      </header>

      <div className="services-grid">
        <article className="service-card" style={{'--delay':'0s'}}>
          <div className="icon-wrapper">
            {/* Funnel / search over car */}
            <svg className="icon" viewBox="0 0 64 64" aria-hidden="true" width="48" height="48">
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12h48" strokeLinecap="round" />
                <path d="M16 28h32" strokeLinecap="round" />
                <path d="M24 44h16" strokeLinecap="round" />
                <circle cx="48" cy="16" r="6" />
                <path d="M45 13l6 6" strokeLinecap="round" />
              </g>
            </svg>
          </div>
          <h3 className="service-title">Curated Discovery</h3>
          <p className="service-desc">Pinpoint your perfect match—smart filters and intelligent curation surface vehicles tailored to your preferences so you can decide faster and with certainty.</p>
        </article>

        <article className="service-card" style={{'--delay':'0.08s'}}>
          <div className="icon-wrapper">
            {/* Screen / 360 */}
            <svg className="icon" viewBox="0 0 64 64" aria-hidden="true" width="48" height="48">
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="12" width="52" height="36" rx="3" />
                <circle cx="32" cy="30" r="8" />
                <path d="M24 30a8 8 0 0 1 16 0" />
                <path d="M10 52h44" strokeLinecap="round" />
              </g>
            </svg>
          </div>
          <h3 className="service-title">Virtual Showroom</h3>
          <p className="service-desc">Inspect every detail from anywhere—high-res galleries, comprehensive specs, and immersive visuals give you the confidence to evaluate a car before you visit.</p>
        </article>

        <article className="service-card" style={{'--delay':'0.16s'}}>
          <div className="icon-wrapper">
            {/* Handshake / connection */}
            <svg className="icon" viewBox="0 0 64 64" aria-hidden="true" width="48" height="48">
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 36l12 8 8-6 20-12" strokeLinecap="round" />
                <path d="M44 28l6-6" strokeLinecap="round" />
                <path d="M20 44l-6 6" strokeLinecap="round" />
                <rect x="6" y="6" width="52" height="52" rx="6" opacity="0"/>
              </g>
            </svg>
          </div>
          <h3 className="service-title">Concierge Dealer Connection</h3>
          <p className="service-desc">Move from browsing to action—message dealers, schedule test drives, and negotiate securely through the platform for a fast, hassle-free experience.</p>
        </article>
      </div>
    </div>
  )
}
