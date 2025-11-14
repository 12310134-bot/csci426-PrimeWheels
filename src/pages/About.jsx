export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-5 py-5" style={{
        background: 'linear-gradient(135deg, rgba(0, 116, 224, 0.1) 0%, rgba(30, 42, 56, 0.05) 100%)',
        borderRadius: '20px',
        padding: '60px 20px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          marginBottom: '1.5rem',
          color: 'var(--text-primary)'
        }}>
          About PrimeWheels
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: 'var(--text-secondary)',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Redefining car buying for the modern era with transparency, technology, and trust.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 style={{
            color: 'var(--text-primary)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            fontSize: '2.5rem'
          }}>
            Discover Your Next Vehicle with Confidence
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: '1.7'
          }}>
            PrimeWheels is the modern automotive marketplace designed for today's intelligent buyer. 
            We eliminate the friction and uncertainty traditionally associated with car shopping. 
            Our digitally-native platform offers a curated inventory of premium vehicles, 
            presented with unparalleled transparency.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--accent-dark) 100%)',
            borderRadius: '20px',
            padding: '40px',
            color: 'white'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}></div>
            <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ margin: 0, opacity: '0.9' }}>
              To make car buying simple, transparent, and enjoyable through technology and exceptional service.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose PrimeWheels Cards */}
      <div className="mb-5">
        <h2 className="text-center mb-5" style={{
          color: 'var(--text-primary)',
          fontWeight: '700',
          fontSize: '2.5rem'
        }}>
          Why Choose PrimeWheels?
        </h2>
        
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="brand-card p-4 h-100" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--accent-dark) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '2rem'
              }}>
                ✅
              </div>
              <h4 style={{
                color: 'var(--text-primary)',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Curated Selection
              </h4>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                margin: 0
              }}>
                Browse a vetted collection of cars from trusted brands and verified dealers.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="brand-card p-4 h-100" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--accent-dark) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '2rem'
              }}>
                📊
              </div>
              <h4 style={{
                color: 'var(--text-primary)',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Informed Decisions
              </h4>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                margin: 0
              }}>
                Access comprehensive details, 360° visuals, and transparent pricing all in one place.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="brand-card p-4 h-100" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--accent-dark) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '2rem'
              }}>
                🔗
              </div>
              <h4 style={{
                color: 'var(--text-primary)',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Effortless Connection
              </h4>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                margin: 0
              }}>
                Seamlessly contact dealers to schedule viewings or make inquiries through our platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Value Propositions */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="brand-card p-4 h-100">
            <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '1rem' }}>
               Quality Assured
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              Every vehicle in our inventory undergoes rigorous inspection and verification to ensure 
              you're getting a reliable, high-quality automobile.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="brand-card p-4 h-100">
            <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '1rem' }}>
               Best Value
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              We work with dealers to bring you competitive pricing and exclusive deals you won't find 
              anywhere else in the market.
            </p>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="text-center py-5" style={{
        background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--accent-dark) 100%)',
        borderRadius: '20px',
        color: 'white'
      }}>
        <h3 style={{ fontWeight: '700', marginBottom: '1rem' }}>
          Ready to Experience the Difference?
        </h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>
          Join thousands of satisfied customers who found their perfect vehicle with PrimeWheels.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <button 
            className="btn btn-warning btn-lg"
            style={{
              color: '#1A1A1A',
              fontWeight: '600',
              padding: '12px 32px',
              borderRadius: '50px'
            }}
            onClick={() => window.location.href = '/inventory'}
          >
            Browse Inventory
          </button>
          <button 
            className="btn btn-outline-light btn-lg"
            style={{
              fontWeight: '600',
              padding: '12px 32px',
              borderRadius: '50px'
            }}
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}