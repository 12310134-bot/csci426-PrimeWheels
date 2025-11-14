import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onLogin }){
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function submit(e){
    e.preventDefault();
    if(user === 'admin' && pass === 'admin') {
      onLogin();
      // Clear the form after successful login
      setUser('');
      setPass('');
    } else {
      alert('Invalid credentials'); // Generic error message - no password hints!
      // Also clear the form on failed attempt
      setUser(''); // Clear both fields for security
      setPass('');
    }
  }

  return (
    <form onSubmit={submit} className="w-100" style={{maxWidth:400}} autoComplete="off">
      <div className="mb-2">
        <label className="form-label">Username</label>
        <input 
          className="form-control" 
          value={user} 
          onChange={e=>setUser(e.target.value)} 
          autoComplete="new-username"
          id="admin-username"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          value={pass} 
          onChange={e=>setPass(e.target.value)} 
          autoComplete="new-password"
          id="admin-password"
        />
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  )
}

export default function Admin({ addCar, cars, updateCar, removeCar }){
  const [isAdmin, setIsAdmin] = useState(false);
  const [form, setForm] = useState({brand:'', model:'', year:'', price:'', color:'', description:''});
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  function submit(e){
    e.preventDefault();
    const payload = { 
      brand: form.brand || 'Unknown', 
      model: form.model || 'Model', 
      year: Number(form.year)||2024, 
      price: Number(form.price)||0, 
      color: form.color||'N/A', 
      description: form.description || '' 
    };

    if(editingId){
      updateCar(editingId, payload);
      setEditingId(null);
      alert('Listing updated successfully');
    } else {
      const next = { id: Date.now(), ...payload };
      addCar(next);
      alert('Listing added successfully');
    }

    setForm({brand:'', model:'', year:'', price:'', color:'', description:''});
  }

  function startEdit(car){
    setEditingId(car.id);
    setForm({
      brand:car.brand, 
      model:car.model, 
      year:car.year, 
      price:car.price, 
      color:car.color, 
      description:car.description || ''
    });
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function cancelEdit(){
    setEditingId(null);
    setForm({brand:'', model:'', year:'', price:'', color:'', description:''});
  }

  function handleDelete(id){
    if(window.confirm('Delete this listing? This cannot be undone.')){
      removeCar(id);
      alert('Listing removed');
    }
  }

  const handleLogin = () => {
    setIsAdmin(true);
  };

  const handleExitAdmin = () => {
    setIsAdmin(false);
    navigate('/');
  };

  if(!isAdmin) return (
    <div>
      <h2>Admin Login</h2>
      <p>Enter your administrator credentials to manage listings.</p>
      <LoginForm onLogin={handleLogin} key={isAdmin ? 'logged-in' : 'logged-out'} />
    </div>
  )

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Admin Dashboard</h2>
          <p className="mb-0">Manage vehicle listings below. New listings will appear in the public catalog.</p>
        </div>
        <button 
          className="btn btn-warning"
          onClick={handleExitAdmin}
          style={{ color: '#1A1A1A' }}
        >
          👤 View as Client
        </button>
      </div>

      <form onSubmit={submit} style={{maxWidth:600}}>
        <div className="row g-2">
          <div className="col-md-4"><input required className="form-control" placeholder="Brand" value={form.brand} onChange={e=>setForm({...form,brand:e.target.value})} /></div>
          <div className="col-md-4"><input required className="form-control" placeholder="Model" value={form.model} onChange={e=>setForm({...form,model:e.target.value})} /></div>
          <div className="col-md-2"><input required className="form-control" placeholder="Year" value={form.year} onChange={e=>setForm({...form,year:e.target.value})} /></div>
          <div className="col-md-2"><input required className="form-control" placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} /></div>
        </div>
        <div className="mt-2"><input className="form-control" placeholder="Color" value={form.color} onChange={e=>setForm({...form,color:e.target.value})} /></div>
        <div className="mt-2"><textarea className="form-control" placeholder="Enter a description for this car" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} rows={3} /></div>
        <div className="mt-2 d-flex gap-2">
          <button className="btn btn-success">{editingId ? 'Save Changes' : 'Add Listing'}</button>
          {editingId && <button type="button" className="btn btn-secondary" onClick={cancelEdit}>Cancel</button>}
        </div>
      </form>

      <h3 className="mt-4">Current listings</h3>
      <div className="row g-3">
        {cars.map(c=> (
          <div key={c.id} className="col-md-4">
            <div className="card p-2">
              <div className="card-body">
                <h5 className="card-title">{c.brand} {c.model}</h5>
                <p className="card-text">Year: {c.year} — ${c.price}</p>
                <div className="d-flex gap-2 mt-2">
                  <button className="btn btn-sm btn-outline-primary" onClick={()=>startEdit(c)}>Edit ️</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={()=>handleDelete(c.id)}>Delete </button>
                </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   )
}