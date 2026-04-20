import { useMemo, useState } from 'react';
import { dashboardData, snippetData } from './data.js';
import {
  Sidebar,
  Header,
  HeatmapCard,
  FocusCard,
  GoalsCard,
  SnippetTable,
  BottomWidgets,
} from './components/index.js';

function App() {
  const [search, setSearch] = useState('');

  const filteredSnippets = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return snippetData;
    return snippetData.filter((snippet) =>
      [snippet.name, snippet.reference, snippet.tags.join(' '), snippet.status, snippet.notes]
        .join(' ')
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="dashboard">
        <Header />
        <section className="top-widgets">
          <HeatmapCard />
          <FocusCard />
          <GoalsCard goals={dashboardData.goals} />
        </section>
        <SnippetTable snippets={filteredSnippets} search={search} onSearchChange={setSearch} />
        <BottomWidgets precision={dashboardData.precision} tempo={dashboardData.tempo} />
      </main>
    </div>
  );
}

export default App;
