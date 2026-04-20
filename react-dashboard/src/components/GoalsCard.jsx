export function GoalsCard({ goals }) {
  return (
    <article className="card goals-card">
      <div className="card-header">
        <div>
          <p className="card-eyebrow">GOALS PROGRESS</p>
          <h2>Weekly practice hours</h2>
        </div>
        <button className="icon-btn">⋯</button>
      </div>
      <div className="goals-grid">
        {goals.map((goal) => (
          <div key={goal.label} className="goal-ring">
            <div
              className={`goal-circle ${
                goal.type === 'secondary' ? 'goal-circle-secondary' : goal.type === 'muted' ? 'goal-circle-muted' : ''
              }`}
            >
              <span>{goal.value}</span>
            </div>
            <p>{goal.label}</p>
            <p className="goal-meta">{goal.meta}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
