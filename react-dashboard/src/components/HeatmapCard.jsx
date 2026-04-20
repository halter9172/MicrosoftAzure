export function HeatmapCard() {
  const heatmapRows = [
    { label: 'Sep', values: [1, 1, 2, 3, 3, 2, 4, 3] },
    { label: 'Jul', values: [2, 3, 3, 4, 4, 3, 3, 2] },
    { label: 'May', values: [1, 2, 2, 3, 3, 2, 2, 1] },
    { label: 'Mar', values: [2, 3, 4, 4, 3, 3, 2, 3] },
    { label: 'Jan', values: [1, 2, 1, 2, 3, 2, 2, 1] },
  ];

  return (
    <article className="card heatmap-card">
      <div className="card-header">
        <div>
          <p className="card-eyebrow">SESSION HEATMAP</p>
          <h2>Practice consistency</h2>
        </div>
        <button className="icon-btn">⋯</button>
      </div>
      <div className="heatmap-meta">
        <div className="heatmap-axis-top">Jan Feb Mar Apr May Jun Jul Aug Sep</div>
        <div className="heatmap-grid-wrapper">
          {heatmapRows.map((row) => (
            <div key={row.label} className="heatmap-row">
              <span className="heat-label">{row.label}</span>
              <div className="heatmap-line">
                {row.values.map((level, index) => (
                  <span key={index} className={`heat-cell level-${level}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="heatmap-footer">
        <span>Practice consistency</span>
        <div className="heatmap-legend">
          <span>Low</span>
          {[1, 2, 3, 4].map((level) => (
            <span key={level} className={`heat-legend-box level-${level}`} />
          ))}
          <span>High</span>
        </div>
      </div>
    </article>
  );
}
