const yearSpan = document.getElementById('year'); if (yearSpan) yearSpan.textContent = new Date().getFullYear();
const toggle = document.querySelector('.nav-toggle'); const links = document.querySelector('.nav-links');
if (toggle && links){ toggle.addEventListener('click', ()=>{ const open = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); }); }
