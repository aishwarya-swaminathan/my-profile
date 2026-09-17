// Load analytics only on the public portfolio, never in local previews.
if (window.location.hostname === 'aishwarya-swaminathan.github.io'
    && window.location.pathname.startsWith('/my-profile/')) {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.setAttribute('data-goatcounter', 'https://aishwarya-swaminathan-github-io.goatcounter.com/count');
  document.head.appendChild(script);
}

// Reading public totals does not record a visit, so previews can show them too.
const visitorCount = document.querySelector('#visitor-count');
if (visitorCount) {
  fetch('https://aishwarya-swaminathan-github-io.goatcounter.com/counter/TOTAL.json', {
    credentials: 'omit',
    referrerPolicy: 'no-referrer'
  })
    .then(response => {
      if (!response.ok) throw new Error('Visitor count unavailable');
      return response.json();
    })
    .then(data => {
      if (typeof data.count !== 'string' || !/^[\d,.\s]+$/.test(data.count)) return;
      visitorCount.textContent = `Total visits: ${data.count}`;
      visitorCount.hidden = false;
    })
    .catch(() => {
      // Keep the footer clean if analytics is blocked or temporarily unavailable.
      visitorCount.hidden = true;
    });
}
