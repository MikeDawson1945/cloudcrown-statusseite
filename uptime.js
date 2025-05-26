async function loadUptime() {
  const url = 'uptime-history.json';
  try {
    const res = await fetch(url);
    const data = await res.json();

    const bar = document.getElementById('uptimeBar');
    const text = document.getElementById('uptimeText');

    let onlineCount = 0;

    // Anzeige aufbauen
    data.forEach(entry => {
      const span = document.createElement('span');
      span.classList.add(entry.status === 'online' ? 'online' : 'offline');
      bar.appendChild(span);
      if (entry.status === 'online') onlineCount++;
    });

    const prozent = ((onlineCount / data.length) * 100).toFixed(1);
    text.textContent = `Letzte ${data.length * 15 / 60} Stunden: ${prozent}% Uptime`;

  } catch (err) {
    console.error('Fehler beim Laden der Uptime:', err);
  }
}

loadUptime();
