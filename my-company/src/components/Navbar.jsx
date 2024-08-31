import { Link } from 'react-router-dom';

function Navbar() {
  // Define styles for the Navbar
  const navbarStyle = {
    backgroundColor: '#333', // Example background color
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    color: '#fff',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;

