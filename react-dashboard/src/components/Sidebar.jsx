export function Sidebar() {
  const navItems = [
    { label: 'Dashboard', icon: '🏠' },
    { label: 'Practice Log', icon: '📅' },
    { label: 'Snippet Library', icon: '📁' },
    { label: 'Analytics', icon: '📊' },
    { label: 'Goals', icon: '🎯' },
    { label: 'Community', icon: '👥' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand-group">
          <div className="brand-logo">BN</div>
          <div>
            <p className="brand-title">Binary Notes</p>
            <p className="brand-subtitle">Practice Dashboard</p>
          </div>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item, index) => (
            <a key={item.label} href="#" className={`nav-item ${index === 0 ? 'active' : ''}`}>
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="sidebar-footer">
        <a href="#" className="nav-item config-item">
          <span className="nav-icon">⚙️</span>
          <span>Configuración</span>
        </a>
        <div className="sidebar-user">
          <div className="avatar avatar-sm">AN</div>
          <div>
            <p className="user-name">User Name</p>
            <p className="user-role">Practice Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
