(function(){
var d=document,h=d.documentElement;
function lang(l){h.setAttribute('data-lang',l);h.lang=l;
 d.querySelectorAll('.jezyk button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l?'true':'false')});
 d.querySelectorAll('option[data-pl]').forEach(function(o){o.textContent=o.dataset[l]});
 d.title=l==='en'?'SEANTEX™ - antibacterial additive for plastics, paints, resins and fabrics':'SEANTEX™ - antybakteryjny dodatek do tworzyw, farb, żywic i tkanin';
 try{var hs=location.hash==='#en'?'':location.hash;history.replaceState(null,'',location.pathname+(l==='en'?'?lang=en':'')+hs)}catch(e){}}
d.querySelectorAll('.jezyk button').forEach(function(b){b.addEventListener('click',function(){lang(b.dataset.l)})});
if(h.getAttribute('data-lang')==='en')lang('en');
var top=d.getElementById('top'),bu=top.querySelector('.burger');
bu.addEventListener('click',function(){var o=top.classList.toggle('otw');bu.setAttribute('aria-expanded',o)});
d.querySelectorAll('.menu a').forEach(function(a){a.addEventListener('click',function(){top.classList.remove('otw');bu.setAttribute('aria-expanded','false')})});
/* aktywna pozycja menu */
var links={};d.querySelectorAll('.menu a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){for(var k in links)links[k].classList.toggle('on',k===e.target.id)}})},{rootMargin:'-45% 0px -50% 0px'});
 ['preparat','zastosowania','wdrozenie','nanometale','badania','materialy','kontakt'].forEach(function(id){var el=d.getElementById(id);el&&io.observe(el)})}
/* karuzela: kropki + przeciaganie mysza */
var pas=d.getElementById('pas'),kr=d.getElementById('kropki'),karty=pas.children;
for(var i=0;i<karty.length;i++){(function(i){var b=d.createElement('button');b.type='button';b.tabIndex=-1;b.addEventListener('click',function(){pas.scrollTo({left:karty[i].offsetLeft-pas.offsetLeft,behavior:'smooth'})});kr.appendChild(b)})(i)}
function kropki(){var x=pas.scrollLeft,n=0,best=1e9;for(var i=0;i<karty.length;i++){var dd=Math.abs(karty[i].offsetLeft-pas.offsetLeft-x);if(dd<best){best=dd;n=i}}
 if(pas.scrollLeft+pas.clientWidth>=pas.scrollWidth-4)n=karty.length-1;
 [].forEach.call(kr.children,function(b,j){b.classList.toggle('on',j===n)})}
pas.addEventListener('scroll',function(){requestAnimationFrame(kropki)},{passive:true});window.addEventListener('load',function(){setTimeout(kropki,300)});
var dn=false,sx=0,sl=0,mv=false;
pas.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'||pas.scrollWidth<=pas.clientWidth)return;dn=true;mv=false;sx=e.clientX;sl=pas.scrollLeft;pas.style.scrollSnapType='none';pas.style.cursor='grabbing'});
window.addEventListener('pointermove',function(e){if(!dn)return;var dx=e.clientX-sx;if(Math.abs(dx)>4)mv=true;pas.scrollLeft=sl-dx});
window.addEventListener('pointerup',function(){if(!dn)return;dn=false;pas.style.cursor='';pas.style.scrollSnapType='';kropki()});
pas.addEventListener('click',function(e){if(mv){e.preventDefault();e.stopPropagation();mv=false}},true);
pas.addEventListener('dragstart',function(e){e.preventDefault()});
/* film jako fasada */
var w=d.getElementById('wideo');
w.addEventListener('click',function(){if(w.querySelector('video'))return;var B='https://cdn.prod.website-files.com/5a9d8e7dda615c00014b1ce5/5aaadc529368cc606ce40985_Seantex_02_british-transcode.';
 var v=d.createElement('video');v.controls=true;v.autoplay=true;v.playsInline=true;v.poster='img/wideo-1280.webp';
 v.innerHTML='<source src="'+B+'mp4" type="video/mp4"><source src="'+B+'webm" type="video/webm">';
 w.innerHTML='';w.appendChild(v);w.style.cursor='default';var p=v.play();p&&p.catch&&p.catch(function(){})});
/* formularz pokazowy */
var f=d.getElementById('form');f.addEventListener('submit',function(e){e.preventDefault();f.classList.add('wyslane')});
d.getElementById('rok').textContent=new Date().getFullYear();
})();
