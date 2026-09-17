// Load analytics only on the public portfolio, never in local previews.
if (window.location.hostname === 'aishwarya-swaminathan.github.io'
    && window.location.pathname.startsWith('/my-profile/')) {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.setAttribute('data-goatcounter', 'https://aishwarya-swaminathan-github-io.goatcounter.com/count');
  document.head.appendChild(script);
}
