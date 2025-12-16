
document.querySelectorAll('[data-animate]').forEach(el=>{
  el.style.opacity=0;el.style.transform='translateY(30px)';
  const o=new IntersectionObserver(e=>{
    if(e[0].isIntersecting){
      el.style.transition='all .8s ease';
      el.style.opacity=1;el.style.transform='translateY(0)';
      o.disconnect();
    }
  });
  o.observe(el);
});
