import { useMemo, useState } from 'react';
import CarCard from './CarCard';

export default function CarModal({ show, onClose, brand, cars }) {
  const [selectedCar, setSelectedCar] = useState(null);
  const [q, setQ] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [yearRange, setYearRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [quickFilter, setQuickFilter] = useState('');

  const list = useMemo(() => {
    if (!brand) return [];
    let filtered = cars
      .filter(c => c.brand === brand)
      .filter(c => (q ? (c.model + ' ' + c.color).toLowerCase().includes(q.toLowerCase()) : true))
      .filter(c => (!priceRange.max ? true : c.price <= Number(priceRange.max)))
      .filter(c => (!priceRange.min ? true : c.price >= Number(priceRange.min)))
      .filter(c => (!yearRange.max ? true : c.year <= Number(yearRange.max)))
      .filter(c => (!yearRange.min ? true : c.year >= Number(yearRange.min)));

    // Quick filters
    if (quickFilter === 'newest') {
      filtered = filtered.filter(c => c.year >= 2023);
    } else if (quickFilter === 'affordable') {
      filtered = filtered.filter(c => c.price <= 20000);
    } else if (quickFilter === 'luxury') {
      filtered = filtered.filter(c => c.price >= 35000);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'year-desc') {
      filtered.sort((a, b) => b.year - a.year);
    }

    return filtered;
  }, [cars, brand, q, priceRange, yearRange, sortBy, quickFilter]);

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop show" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1040 }}></div>
      <div className="modal show" style={{ display: 'block', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1050 }} tabIndex="-1">
        <div className="modal-dialog modal-xl" style={{ transform: 'none', maxWidth: '90%' }}>
          <div className="modal-content" style={{ backgroundColor: '#ffffff', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="modal-header" style={{ backgroundColor: '#ffffff', position: 'sticky', top: 0, zIndex: 1 }}>
              <div>
                <h5 className="modal-title">{brand} Cars</h5>
                <div className="text-muted small">{list.length} listings</div>
              </div>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {/* Search and Quick Filters */}
              <div className="row mb-3">
                <div className="col-md-6 mb-2">
                  <input className="form-control" placeholder="search model or color" value={q} onChange={e => setQ(e.target.value)} />
                </div>
                <div className="col-md-6 mb-2">
                  <div className="d-flex gap-2 justify-content-end">
                    {['newest', 'affordable', 'luxury'].map(filter => (
                      <button 
                        key={filter}
                        className={`btn btn-sm ${quickFilter === filter ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setQuickFilter(quickFilter === filter ? '' : filter)}
                      >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)} ✨
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Range and Year Filters */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Price Range</label>
                  <div className="d-flex gap-2">
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="Min $" 
                      value={priceRange.min} 
                      onChange={e => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                    />
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="Max $" 
                      value={priceRange.max} 
                      onChange={e => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Year Range</label>
                  <div className="d-flex gap-2">
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="From Year" 
                      value={yearRange.min} 
                      onChange={e => setYearRange(prev => ({ ...prev, min: e.target.value }))}
                    />
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="To Year" 
                      value={yearRange.max} 
                      onChange={e => setYearRange(prev => ({ ...prev, max: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              {/* View Controls */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex gap-2 align-items-center">
                  <select className="form-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="">Sort by...</option>
                    <option value="price-asc">Price: Low to High 📈</option>
                    <option value="price-desc">Price: High to Low 📉</option>
                    <option value="year-desc">Newest First 🆕</option>
                  </select>
                  <div className="btn-group ms-2">
                    <button 
                      className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setViewMode('grid')}
                    >
                      Grid 📱
                    </button>
                    <button 
                      className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setViewMode('list')}
                    >
                      List 📃
                    </button>
                  </div>
                </div>
                <button 
                  className="btn btn-outline-secondary btn-sm" 
                  onClick={() => {
                    setQ('');
                    setPriceRange({ min: '', max: '' });
                    setYearRange({ min: '', max: '' });
                    setSortBy('');
                    setQuickFilter('');
                  }}
                >
                  Reset All Filters
                </button>
              </div>

              {/* Contact Dealer Button */}
              <div className="mb-3 text-end">
                <button className="btn btn-primary" onClick={() => window.location.href='/contact'}>
                  Contact Dealer
                </button>
              </div>

              {/* Car Listings */}
              <div className={viewMode === 'grid' ? 'row g-3' : 'list-view'}>
                {list.length === 0 && (
                  <div className="col-12 text-center py-4">
                    <div className="text-muted">No cars found matching your filters.</div>
                    <button className="btn btn-link" onClick={() => {
                      setQ('');
                      setPriceRange({ min: '', max: '' });
                      setYearRange({ min: '', max: '' });
                      setSortBy('');
                      setQuickFilter('');
                    }}>Clear all filters</button>
                  </div>
                )}
                {list.map(car => (
                  <div key={car.id} className={viewMode === 'grid' ? 'col-md-4' : 'mb-3'}>
                    <div onClick={() => setSelectedCar(car)} style={{cursor:'pointer'}}>
                      <CarCard car={car} showActions={false} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Car Details Popup */}
            {selectedCar && (
              <div className="modal show" style={{ display: 'block', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2000, background: 'rgba(0,0,0,0.7)' }} tabIndex="-1">
                <div className="modal-dialog" style={{ maxWidth: 500, margin: '4rem auto' }}>
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{selectedCar.brand} {selectedCar.model}</h5>
                      <button type="button" className="btn-close" onClick={() => setSelectedCar(null)}></button>
                    </div>
                    <div className="modal-body">
                      <img 
  src={selectedCar.image} 
  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = `https://source.unsplash.com/800x500/?${encodeURIComponent(selectedCar.brand + ' ' + selectedCar.model + ' car')}`
  }} 
  alt={selectedCar.model} 
  style={{width: '100%', borderRadius: 12, marginBottom: 16}} 
/>
                      <div><strong>Year:</strong> {selectedCar.year}</div>
                      <div><strong>Color:</strong> {selectedCar.color}</div>
                      <div><strong>Price:</strong> ${selectedCar.price.toLocaleString()}</div>
                      {selectedCar.description && (
                        <div className="mt-2"><strong>Description:</strong> {selectedCar.description}</div>
                      )}
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-primary" onClick={() => { setSelectedCar(null); window.location.href='/contact'; }}>Contact Dealer</button>
                      <button className="btn btn-secondary" onClick={() => setSelectedCar(null)}>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="modal-footer border-0">
              <button className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}