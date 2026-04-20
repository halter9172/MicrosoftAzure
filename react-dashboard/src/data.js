export const snippetData = [
  {
    id: 1,
    name: 'Beethoven Sonata No. 5 · Mvt 1',
    reference: 'No. 5, Mvt 1, Bar 23-30',
    tags: ['Bowing Dynamics', 'String Crossings'],
    status: 'In Progress',
    notes: '# Watch bow speed;\n# Maintain clear articulated rhythm.',
  },
  {
    id: 2,
    name: 'Kreutzer Étude No. 2',
    reference: 'Bar 2 ↑',
    tags: ['Intonation', 'Shifting'],
    status: 'Backlog',
    notes: '# Focus on 4th finger placement;\n# Avoid tension.',
  },
  {
    id: 3,
    name: 'Rachmaninoff Prelude Op. 3',
    reference: 'Op. 3, No. 2, Bar 12-18',
    tags: ['Double Stops', 'Dynamics'],
    status: 'Mastered',
    notes: '# Keep left hand relaxed;\n# Shape phrase.',
  },
];

export const dashboardData = {
  goals: [
    { value: '18', label: 'hours', meta: 'Weekly', type: 'primary' },
    { value: '10', label: 'hours', meta: 'Target', type: 'secondary' },
    { value: '00', label: 'goals', meta: 'Weekly', type: 'muted' },
  ],
  precision: [
    { value: '70%', label: 'Last session' },
    { value: '90%', label: 'Overall' },
  ],
  tempo: {
    label: 'Target: 98 BPM',
    highlight: '95.2% consistency',
  },
};
