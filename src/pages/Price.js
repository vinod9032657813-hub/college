import './Price.css';

function Price() {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic support',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      features: [
        'Unlimited projects',
        '100GB storage',
        'Priority support',
        '24/7 phone support',
        'Advanced analytics',
        'Custom integrations',
        'Weekly reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      features: [
        'Unlimited everything',
        '1TB storage',
        'Dedicated support',
        'Phone & email support',
        'Advanced security',
        'Custom solutions',
        'Daily reports',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="price">
      <div className="price-container">
        <section className="price-hero">
          <h1>Pricing Plans</h1>
          <p className="price-subtitle">Choose the perfect plan for your needs</p>
        </section>

        <section className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="pricing-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`pricing-button ${plan.popular ? 'popular-button' : ''}`}>
                Get Started
              </button>
            </div>
          ))}
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I change plans later?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a free trial?</h3>
              <p>Yes, all plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer refunds?</h3>
              <p>We offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Price;

