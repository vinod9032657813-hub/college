import './Discounts.css';
import { Link } from 'react-router-dom';

function Discounts() {
  return (
    <div className="discounts">
      <div className="discounts-container">
        <h1>Discounts</h1>
        <p className="subtitle">Latest offers and promotions tailored for you.</p>

        <div className="discounts-grid">
          <div className="discount-card">
            <h3>New User Offer</h3>
            <p className="lead">Get 20% off your first month.</p>
            <button className="discount-btn" type="button">Claim</button>
          </div>
          <div className="discount-card">
            <h3>Seasonal Sale</h3>
            <p className="lead">Save up to 30% on annual plans.</p>
            <Link className="discount-btn" to="/price">View Plans</Link>
          </div>
          <div className="discount-card">
            <h3>Refer & Earn</h3>
            <p className="lead">Invite friends and earn credits.</p>
            <button className="discount-btn" type="button">Invite</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discounts;
