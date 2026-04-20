export function BottomWidgets({ precision, tempo }) {
  return (
    <section className="bottom-widgets">
      <article className="card tuning-card">
        <div className="card-header">
          <div>
            <p className="card-eyebrow">TUNING VISUALIZER</p>
            <h2>Deviation · Last Session Average</h2>
          </div>
          <button className="icon-btn">⋯</button>
        </div>
        <div className="wave-visualizer">
          <div className="wave wave-1" />
          <div className="wave wave-2" />
          <div className="wave wave-3" />
          <div className="wave-axis" />
        </div>
        <div className="visualizer-meta">
          <span>Stable tuning</span>
          <span className="meta-highlight">+4¢ deviation</span>
        </div>
      </article>

      <article className="card precision-card">
        <div className="card-header">
          <div>
            <p className="card-eyebrow">RHYTHMIC PRECISION</p>
            <h2>Beat accuracy</h2>
          </div>
          <button className="icon-btn">⋯</button>
        </div>
        <div className="precision-grid">
          {precision.map((item) => (
            <div key={item.label} className="precision-ring">
              <div className={`precision-circle ${item.value === '90%' ? 'precision-strong' : ''}`}>
                <span>{item.value}</span>
              </div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="card tempo-card">
        <div className="card-header">
          <div>
            <p className="card-eyebrow">TEMPO CONSISTENCY</p>
            <h2>Speed stability</h2>
          </div>
          <button className="icon-btn">⋯</button>
        </div>
        <div className="tempo-chart">
          <svg viewBox="0 0 320 140" className="tempo-line" aria-hidden="true">
            <polyline points="10,110 60,92 110,88 160,72 210,78 260,65 310,70" className="tempo-line-path" />
          </svg>
        </div>
        <div className="tempo-meta">
          <span>{tempo.label}</span>
          <span className="meta-highlight">{tempo.highlight}</span>
        </div>
      </article>
    </section>
  );
}
