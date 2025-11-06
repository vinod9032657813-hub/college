import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Rating() {
  const [value, setValue] = useState(0);

  return (
    <div className="rating" aria-label="Rate site" title={`${value} / 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          className={`star ${value >= n ? 'filled' : ''}`}
          onClick={() => setValue(n)}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">Devudu</Link>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/price">Price</Link>
          </li>
          <li>
            <Link to="/discounts">Discounts</Link>
          </li>
          <li>
            <Link to="/strategy">Strategy</Link>
          </li>
        </ul>
        <Rating />
      </div>
    </nav>
  );
}

export default Navigation;

