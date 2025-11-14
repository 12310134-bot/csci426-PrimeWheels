import { useParams } from 'react-router-dom';
import CarCard from '../components/CarCard';

export default function Inventory({ cars }){
  const { brand } = useParams();
  
  // Safe filtering with null checks
  const list = brand 
    ? cars.filter(c => c?.brand?.toLowerCase() === brand.toLowerCase()) 
    : cars;

  return (
    <div>
      <h2>{brand ? `${brand} Listings` : 'Inventory'}</h2>
      <p className="text-muted">{brand ? `Showing available ${brand} vehicles.` : 'Browse our complete inventory of available vehicles.'}</p>

      <div className="row g-3 mt-3">
        {list.length === 0 && <div className="col-12">No listings found.</div>}
        {list.map(car => (
          <div key={car?.id || Math.random()} className="col-sm-6 col-md-4">
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  )
}