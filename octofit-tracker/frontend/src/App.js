

// Logo agora vem do public
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" />
          Octofit Tracker
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/activities">Atividades</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Placar</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/teams">Equipes</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/users">Usuários</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/workouts">Treinos</NavLink></li>
          </ul>
        </div>
      </nav>
      <div className="main-title">Octofit Tracker</div>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title">Bem-vindo ao Octofit Tracker!</h2>
              <p className="card-text">Acompanhe suas atividades, equipes, treinos e muito mais.</p>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
