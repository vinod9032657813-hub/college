import React, { useState } from 'react';
import './Strategy.css';

function Strategy() {
  const [brandColor, setBrandColor] = useState('#667eea');

  return (
    <div className="strategy">
      <div className="strategy-container">
        <h1>Strategy</h1>
        <p className="subtitle">How we plan, execute, and deliver value.</p>

        <div className="strategy-sections">
          <section className="strategy-card">
            <h3>Discovery</h3>
            <p>We understand your goals and define success criteria.</p>
          </section>
          <section className="strategy-card">
            <h3>Roadmap</h3>
            <p>We plan milestones with clear timelines and ownership.</p>
          </section>
          <section className="strategy-card">
            <h3>Execution</h3>
            <p>Iterative delivery with continuous feedback and improvements.</p>
          </section>
          <section className="strategy-card">
            <h3>Measure</h3>
            <p>We track KPIs and optimize for sustainable growth.</p>
          </section>

          <section className="strategy-card">
            <h3>Brand Color</h3>
            <p className="subtitle">Pick a primary brand color for your theme.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <input
                type="color"
                value={brandColor}
                onChange={(e) => setBrandColor(e.target.value)}
                aria-label="Brand color"
                style={{ width: 40, height: 40, border: 'none', padding: 0, background: 'none', cursor: 'pointer' }}
              />
              <div
                style={{
                  width: 100,
                  height: 32,
                  borderRadius: 6,
                  border: '1px solid #e5e7eb',
                  background: brandColor
                }}
              />
              <span style={{ fontFamily: 'monospace', color: '#4b5563' }}>{brandColor}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Strategy;
