const searchInput = document.querySelector('#table-search');
const tableRows = document.querySelectorAll('.snippet-table tbody tr');

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase().trim();

    tableRows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(value) ? '' : 'none';
    });
  });
}
