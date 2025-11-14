import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import initialCars from './data/cars';
import About from './pages/About';
import Admin from './pages/Admin';
import CarDetails from './pages/CarDetails';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Services from './pages/Services';

function App() {
  const [cars, setCars] = useState(() => {
    try {
      const raw = localStorage.getItem('cars_v1');
      return raw ? JSON.parse(raw) : initialCars;
    } catch (e) {
      return initialCars;
    }
  });

  useEffect(() => {
    localStorage.setItem('cars_v1', JSON.stringify(cars));
  }, [cars]);

  function addCar(newCar) {
    // FIXED: Remove SVG hardcoding - just use the image provided
    setCars(prev => [newCar, ...prev]);
  }

  function updateCar(id, changes){
    setCars(prev => prev.map(c => c.id === id ? {...c, ...changes} : c));
  }

  function removeCar(id){
    setCars(prev => prev.filter(c => c.id !== id));
  }

  return (
    <BrowserRouter>
      <div className="app-root">
        <Header />
        <main className="container my-4">
          <Routes>
            <Route path="/" element={<Home cars={cars} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/*" element={<Admin addCar={addCar} cars={cars} updateCar={updateCar} removeCar={removeCar} />} />
            <Route path="/inventory" element={<Inventory cars={cars} />} />
            <Route path="/inventory/:brand" element={<Inventory cars={cars} />} />
            <Route path="/car/:id" element={<CarDetails cars={cars} />} />
          </Routes>
        </main>
        <footer className="text-center py-3">
          <small>PrimeWheels — Trusted vehicle marketplace</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;