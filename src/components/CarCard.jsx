import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CarCard({ car, showActions = true }) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  
  // FIXED: Use the actual image from car data, not hardcoded path
  const imgSrc = car.image && !imgError ? car.image : `https://source.unsplash.com/800x500/?${encodeURIComponent(car.brand + ' ' + car.model + ' car')}`;

  return (
    <div className="car-card">
      <div className="car-image-wrapper">
        <img 
          className="card-img-top card-img" 
          src={imgSrc} 
          onError={() => setImgError(true)}
          alt={`${car.brand} ${car.model}`} />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="mb-1">{car.brand} {car.model}</h5>
            <div className="text-white small">Year {car.year} • {car.color}</div>
          </div>
          <div className="text-end">
            <div className="price-badge">${car.price.toLocaleString()}</div>
          </div>
        </div>
        {/* Car Description */}
        {car.description && (
          <div className="mt-2 text-secondary" style={{fontSize:'0.98rem'}}>{car.description}</div>
        )}
        <div className="mt-3 d-flex gap-2">
          {showActions && (
            <>
              <button className="btn btn-primary btn-sm" onClick={() => navigate(`/car/${car.id}`)}>View 🔍</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}