
document.querySelectorAll('[data-animate]').forEach(el=>{
  el.style.opacity=0;
  const obs=new IntersectionObserver(e=>{
    if(e[0].isIntersecting){
      el.style.transition='all 1s ease';
      el.style.opacity=1;
      el.style.transform='translateY(0)';
      obs.disconnect();
    }
  });
  el.style.transform='translateY(30px)';
  obs.observe(el);
});
