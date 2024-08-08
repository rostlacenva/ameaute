document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  let dragged;

  document.addEventListener('dragstart', (event) => {
    dragged = event.target;
    event.target.style.opacity = 0.5;
  });

  document.addEventListener('dragend', (event) => {
    event.target.style.opacity = "";
  });

  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  document.addEventListener('drop', (event) => {
    event.preventDefault();
    if (event.target.className.includes('panel')) {
      container.insertBefore(dragged, event.target.nextSibling);
    }
  });
});

// Save layout state to localStorage
function saveLayout() {
  const container = document.querySelector('.container');
  const panelOrder = Array.from(container.children).map(panel => panel.id);
  localStorage.setItem('layoutState', JSON.stringify(panelOrder));
}

// Restore layout state from localStorage
function restoreLayout() {
  const savedLayout = JSON.parse(localStorage.getItem('layoutState'));
  if (savedLayout) {
    const container = document.querySelector('.container');
    savedLayout.forEach(panelId => {
      const panel = document.getElementById(panelId);
      if (panel) {
        container.appendChild(panel);
      }
    });
  }
}
