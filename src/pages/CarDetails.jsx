import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CarDetails({ cars }){
  const { id } = useParams();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  const car = cars.find(c => String(c.id) === String(id));

  if(!car) return (
    <div>
      <h2>Car not found</h2>
      <p>The requested car does not exist.</p>
      <button className="btn btn-secondary" onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )

  // FIXED: Use the actual image path from car data
  const imgSrc = !imgError ? car.image : `https://source.unsplash.com/1200x700/?${encodeURIComponent(car.brand + ' ' + car.model + ' car')}`;

  return (
    <div>
      <div className="row g-4">
        <div className="col-md-7">
          <img 
            src={imgSrc} 
            alt={`${car.brand} ${car.model}`} 
            className="img-fluid rounded" 
            onError={() => setImgError(true)}
          />
        </div>
        <div className="col-md-5">
          <h2>{car.brand} {car.model} </h2>
          <div className="text-muted mb-2">Year {car.year} • {car.color}</div>
          <div className="mb-3"><strong>Price: </strong><span className="price-badge"> ${car.price.toLocaleString()}</span></div>

          <p>Experience premium quality and outstanding performance. Contact our sales team to arrange a test drive or to request more information about this vehicle.</p>

          <div className="d-flex gap-2 mt-3">
            <a className="btn btn-primary" href={`mailto:sales@primewheels.example?subject=Inquiry about ${encodeURIComponent(car.brand + ' ' + car.model)}`}>Contact Dealer</a>
            <button className="btn btn-outline-secondary" onClick={()=>navigate(-1)}>Back to results</button>
          </div>
        </div>
      </div>
    </div>
  );
}