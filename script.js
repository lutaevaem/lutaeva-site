
// Scroll progress
const bar=document.getElementById('scrollbar');
function onScroll(){const h=document.documentElement;const sc=h.scrollTop, max=h.scrollHeight-h.clientHeight;bar.style.width=(sc/max*100)+'%';}
addEventListener('scroll', onScroll, {passive:true}); onScroll();
// Year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
// Counter animation
function animateNumber(el){ const target=+el.dataset.to; let n=0; const step=Math.max(1, Math.round(target/60));
  const tick=()=>{ n+=step; if(n>=target){n=target} el.textContent=n; if(n<target) requestAnimationFrame(tick)}; tick();}
const io=new IntersectionObserver((entries)=>entries.forEach(e=>{ if(e.isIntersecting){ animateNumber(e.target); io.unobserve(e.target);} }), {threshold:.6});
document.querySelectorAll('[data-to]').forEach(el=>io.observe(el));
// Reveal on scroll (for testimonials if needed)
const revealEls = document.querySelectorAll('.reveal');
const rio = new IntersectionObserver((ents)=>{ ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); rio.unobserve(e.target);} });},{threshold:.25});
revealEls.forEach(el=>rio.observe(el));

// Typewriter effect for subheadline
(function(){
  const el = document.getElementById('typed');
  if(!el) return;
  const lines = [
    'Топ-менеджер международного холдинга 8000+',
    '+281% выручки за 2 года',
    'HR‑системы и BI‑аналитика'
  ];
  let i=0, j=0, dir=1, pause=0;
  function tick(){
    if(pause>0){ pause--; return requestAnimationFrame(tick); }
    const full = lines[i];
    el.textContent = full.slice(0,j);
    j += dir;
    if(j===full.length+1){ dir=-1; pause=35; }
    if(j===0){ dir=1; i=(i+1)%lines.length; pause=10; }
    requestAnimationFrame(tick);
  }
  tick();
})();

// Staggered reveal
const r2 = new IntersectionObserver((ents)=>{
  ents.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      // stagger children
      const kids = e.target.querySelectorAll('.card,.feat,.price-card');
      kids.forEach((k,idx)=>k.style.transitionDelay = (0.05*idx)+'s');
      r2.unobserve(e.target);
    }
  });
},{threshold:.25});
document.querySelectorAll('.reveal').forEach(el=>r2.observe(el));
