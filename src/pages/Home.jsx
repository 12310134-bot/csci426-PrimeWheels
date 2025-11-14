import { useMemo, useState } from 'react';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';

export default function Home({ cars }) {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const brands = useMemo(() => Array.from(new Set(cars.map(c => c.brand))), [cars]);
  
  // Get featured cars (newest 3 cars)
  const featuredCars = useMemo(() => 
    cars
      .sort((a, b) => b.year - a.year)
      .slice(0, 3)
  , [cars]);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{
        background: 'linear-gradient(135deg, rgba(0, 116, 224, 0.9) 0%, rgba(30, 42, 56, 0.95) 100%), url(/assets/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '120px 0 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #E9F1F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 20px rgba(0, 116, 224, 0.3)'
          }}>
            Find Your Perfect Ride
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '2.5rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}>
            Discover premium vehicles at unbeatable prices with PrimeWheels
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button 
              className="btn btn-warning btn-lg"
              onClick={() => document.getElementById('brands-grid').scrollIntoView({ behavior: 'smooth' })}
              style={{
                color: '#1A1A1A',
                fontWeight: '600',
                padding: '12px 32px',
                borderRadius: '50px',
                border: 'none',
                boxShadow: '0 8px 25px rgba(255, 193, 7, 0.3)'
              }}
            >
              Browse Brands 
            </button>
            <button 
              className="btn btn-outline-light btn-lg"
              onClick={() => document.getElementById('featured-cars').scrollIntoView({ behavior: 'smooth' })}
              style={{
                fontWeight: '600',
                padding: '12px 32px',
                borderRadius: '50px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              View Featured
            </button>
          </div>
        </div>
      </div>

      {/* Brands Grid Section */}
      <div id="brands-grid" className="container py-5">
        <div className="text-center mb-5">
          <h2 style={{
            color: 'var(--text-primary)',
            fontWeight: '700',
            marginBottom: '1rem',
            fontSize: '2.5rem'
          }}>
            Browse by Brand
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Select a brand to view available listings
          </p>
        </div>

        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
          {brands.map(b => (
            <div key={b} className="col">
              <div 
                className="brand-card p-4 text-center" 
                role="button" 
                onClick={() => setSelectedBrand(b)}
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img 
                  src={`/assets/brands/${b.toLowerCase()}.svg`} 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `https://source.unsplash.com/200x200/?${encodeURIComponent(b + ' logo')}`
                  }} 
                  alt={b} 
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto'
                  }} 
                />
                <div className="brand-name mt-3" style={{
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  color: 'var(--text-primary)'
                }}>
                  {b}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Cars Section */}
      <div id="featured-cars" className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{
              color: 'var(--text-primary)',
              fontWeight: '700',
              marginBottom: '1rem',
              fontSize: '2.5rem'
            }}>
              Featured Vehicles
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Hand-picked selection of our finest vehicles
            </p>
          </div>
          
          <div className="row g-4">
            {featuredCars.map(car => (
              <div key={car.id} className="col-md-4">
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-5" style={{
        background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--accent-dark) 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-4">
              <div style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1' }}>
                {cars.length}+
              </div>
              <div style={{ fontSize: '1.1rem', opacity: '0.9' }}>Vehicles</div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1' }}>
                {brands.length}+
              </div>
              <div style={{ fontSize: '1.1rem', opacity: '0.9' }}>Brands</div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1' }}>
                100%
              </div>
              <div style={{ fontSize: '1.1rem', opacity: '0.9' }}>Quality</div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1' }}>
                24/7
              </div>
              <div style={{ fontSize: '1.1rem', opacity: '0.9' }}>Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Modal */}
      <CarModal 
        show={selectedBrand !== null}
        onClose={() => setSelectedBrand(null)}
        brand={selectedBrand}
        cars={cars}
      />
    </div>
  );
}