export function SnippetTable({ snippets, search, onSearchChange }) {
  const statusStyles = {
    'In Progress': 'status in-progress',
    Mastered: 'status mastered',
    Backlog: 'status backlog',
  };

  return (
    <section className="snippet-section" id="snippet-library">
      <div className="section-header">
        <div>
          <p className="card-eyebrow">The Snippet Library</p>
          <h2>Repositorio de fragmentos</h2>
        </div>
        <div className="table-controls">
          <div className="search-wrapper">
            <input
              id="table-search"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </div>
          <button className="secondary-btn">Filter</button>
          <button className="secondary-btn">YAML/Code</button>
        </div>
      </div>
      <div className="table-card card">
        <table className="snippet-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" aria-label="Seleccionar todo" />
              </th>
              <th>Snippet Name</th>
              <th>Reference (Piece/Measure)</th>
              <th>Technique Tags</th>
              <th>Progress</th>
              <th>Notes (YAML/Code)</th>
            </tr>
          </thead>
          <tbody>
            {snippets.map((snippet) => (
              <tr key={snippet.id}>
                <td>
                  <input type="checkbox" aria-label="Seleccionar" />
                </td>
                <td>{snippet.name}</td>
                <td>{snippet.reference}</td>
                <td>
                  {snippet.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </td>
                <td>
                  <span className={statusStyles[snippet.status] || 'badge status'}>{snippet.status}</span>
                </td>
                <td>
                  <code>{snippet.notes}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
