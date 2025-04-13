import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type LoginModalProps = {
  show: boolean;
  onHide: () => void;
};

function LoginModal({ show, onHide }: LoginModalProps) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      onHide();
      navigate('/dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    onHide();
    setErrorMessage('');
  };

  return (
    <Modal show={show} onHide={handleCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Member Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && (
          <div className="text-danger mb-2" style={{ fontSize: '0.9rem' }}>
            {errorMessage}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function AppWrapper() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <Router>
      <div className="hero-container">
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src="/logo.png" alt="Leader Log" className="logo me-2" />
              <span>Leader Log</span>
            </Link>
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="d-flex">
              <button className="btn btn-outline-light login-btn" onClick={() => setShowLoginModal(true)}>
                Login
              </button>
            </div>
          </div>
        </nav>

        <div className="hero-text text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
      </div>
    </Router>
  );
}

export default AppWrapper;
