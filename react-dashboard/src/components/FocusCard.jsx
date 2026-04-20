export function FocusCard() {
  return (
    <article className="card focus-card">
      <div className="card-header">
        <div>
          <p className="card-eyebrow">FOCUS TRENDS (WEEKLY)</p>
          <h2>Escalas · Repertorio · Técnica de arco</h2>
        </div>
        <button className="icon-btn">⋯</button>
      </div>
      <div className="chart-legend">
        <span className="legend-item legend-scale">Escalas</span>
        <span className="legend-item legend-rep">Repertorio</span>
        <span className="legend-item legend-bow">Técnica de Arco</span>
      </div>
      <div className="line-chart-card">
        <svg viewBox="0 0 320 180" className="line-chart" aria-hidden="true">
          <g className="grid-lines">
            {[20, 60, 100, 140].map((y) => (
              <line key={y} x1="0" y1={y} x2="320" y2={y} />
            ))}
          </g>
          <polyline points="10,130 65,110 120,95 175,80 230,70 285,50" className="line line-scale" />
          <polyline points="10,140 65,125 120,115 175,105 230,95 285,80" className="line line-rep" />
          <polyline points="10,150 65,130 120,115 175,100 230,90 285,75" className="line line-bow" />
          <g className="axis-labels">
            {['Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5', 'Dec 6'].map((label, index) => (
              <text key={label} x={20 + index * 60} y="172">
                {label}
              </text>
            ))}
          </g>
        </svg>
      </div>
    </article>
  );
}
