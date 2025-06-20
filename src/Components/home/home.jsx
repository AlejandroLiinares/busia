import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a BusIA</h1>
      <div className="home-card-container">
        <Link to="/desktop" className="home-card">
          <h2>ESCRITORIO</h2>
          <p>Accede a la información de flota y conductores</p>
        </Link>
        <Link to="/myProfile" className="home-card">
          <h2>MI CUENTA</h2>
          <p>Administra tu perfil y configuración</p>
        </Link>
        <Link to="/fleetVehicles" className="home-card">
          <h2>FLOTA DE VEHÍCULOS</h2>
          <p>Gestiona la información de los vehículos</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;