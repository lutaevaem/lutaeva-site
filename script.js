
// Scroll progress
const bar=document.getElementById('scrollbar');
function onScroll(){const h=document.documentElement;const sc=h.scrollTop, max=h.scrollHeight-h.clientHeight;bar.style.width=(sc/max*100)+'%';}
addEventListener('scroll', onScroll, {passive:true}); onScroll();
// Year
document.getElementById('year').textContent = new Date().getFullYear();
// Counter animation
function animateNumber(el){
  const target=+el.dataset.to; let n=0; const step=Math.max(1, Math.round(target/60));
  const tick=()=>{ n+=step; if(n>=target){n=target} el.textContent=n; if(n<target) requestAnimationFrame(tick)}; tick();
}
const io=new IntersectionObserver((entries)=>entries.forEach(e=>{ if(e.isIntersecting){ animateNumber(e.target); io.unobserve(e.target);} }), {threshold:.6});
document.querySelectorAll('[data-to]').forEach(el=>io.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const answer = document.getElementById(btn.getAttribute('aria-controls'));
    if(answer){ answer.hidden = expanded; }
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const rio = new IntersectionObserver((ents)=>{
  ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); rio.unobserve(e.target);} });
},{threshold:.25});
revealEls.forEach(el=>rio.observe(el));

// Scroll to top
const toTop = document.createElement('button');
toTop.id = 'toTop'; toTop.setAttribute('aria-label','Наверх'); toTop.innerHTML = '↑';
document.body.appendChild(toTop);
window.addEventListener('scroll', ()=>{
  toTop.classList.toggle('show', window.scrollY > 600);
},{passive:true});
toTop.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
