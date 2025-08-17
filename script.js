
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
