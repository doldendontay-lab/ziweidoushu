const LINKS={"free-question":"https://example.com/private-reading","telegram":"https://t.me/your-community","facebook":"https://facebook.com/your-group","booking":"https://example.com/booking","payment":"https://example.com/payment","email":"mailto:hello@example.com"};
document.querySelectorAll('[data-link]').forEach(el=>{const key=el.dataset.link;if(LINKS[key])el.href=LINKS[key]});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const menuButton=document.querySelector('.menu-button'),mobileMenu=document.querySelector('.mobile-menu');
function setMenu(open){mobileMenu?.classList.toggle('open',open);menuButton?.setAttribute('aria-expanded',String(open));mobileMenu?.setAttribute('aria-hidden',String(!open));document.body.style.overflow=open?'hidden':''}
menuButton?.addEventListener('click',()=>setMenu(!mobileMenu.classList.contains('open')));document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});

const consoleData={
 ziwei:{label:'ZI WEI DOU SHU',title:'12 PALACES',subtitle:'LIFE AREAS · RELATIONSHIPS · TIMING',text:'A chart is read through relationships between symbols, life domains and timing — not through one isolated sign.'},
 wuxing:{label:'FIVE ELEMENTS',title:'5 MOVEMENTS',subtitle:'GENERATION · RESTRAINT · TRANSFORMATION',text:'Wood, Fire, Earth, Metal and Water are presented as dynamic relationships rather than five fixed substances.'},
 bagua:{label:'BAGUA',title:'8 DIRECTIONS',subtitle:'SPACE · ORIENTATION · CHANGE',text:'Bagua gives the interface a spatial language: direction, position and relationship become part of the symbolic field.'},
 timing:{label:'TIMING & CYCLES',title:'CHANGE OVER TIME',subtitle:'MOMENT · CYCLE · TRANSITION',text:'Traditional systems often place interpretation inside time: what matters is not only what a symbol suggests, but when and in relation to what.'}
};
document.querySelectorAll('.console-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.console-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const d=consoleData[btn.dataset.system];if(!d)return;document.getElementById('consoleSystem').textContent=d.label;document.getElementById('consoleTitle').textContent=d.title;document.getElementById('consoleSubtitle').textContent=d.subtitle;document.getElementById('consoleText').textContent=d.text;}));

// V5 Personal Chart Lab — deterministic visual prototype, not a metaphysical calculation.
const palaces=[
 ['Self','SELF / IDENTITY','How you meet the world and experience yourself.'],['Siblings','SIBLINGS / ALLIES','Networks, peers and the people beside you.'],['Relationship','RELATIONSHIP','Partnership, intimacy and relational patterns.'],['Creation','CREATION / LEGACY','Creative expression, care and what you bring forward.'],['Resources','RESOURCES','Material relationship, value and resource habits.'],['Wellbeing','WELLBEING','Body awareness, rhythms and ways of restoring balance.'],['Movement','MOVEMENT','Change of environment, travel and outward experience.'],['Community','COMMUNITY','Friends, collaborators and social exchange.'],['Career','CAREER / ROLE','Work, contribution and public direction.'],['Home','HOME / ROOTS','Home, foundations and relationship to place.'],['Inner Life','INNER LIFE','Pleasure, meaning, rest and inward resources.'],['Origins','ORIGINS / GUIDANCE','Origins, authority and inherited frameworks.']
];
const stars=['Zi Wei','Tian Fu','Tian Ji','Tai Yang','Wu Qu','Tian Tong','Lian Zhen','Tian Xiang','Qi Sha','Po Jun','Tai Yin','Tan Lang'];
const elements=[['WOOD','WOOD'],['FIRE','FIRE'],['EARTH','EARTH'],['METAL','METAL'],['WATER','WATER']];
const ring=document.getElementById('palaceRing'),track=document.getElementById('starTrack');
if(ring&&track){
 palaces.forEach((p,i)=>{const b=document.createElement('button');b.className='palace-node'+(i===0?' active':'');b.dataset.index=i;b.innerHTML=`<span>${String(i+1).padStart(2,'0')}</span><b>${p[0]}</b><small>${p[1]}</small>`;ring.appendChild(b);const s=document.createElement('i');s.textContent=stars[i];s.style.setProperty('--i',i);track.appendChild(s)});
 const nodes=[...ring.children];
 function selectPalace(i){nodes.forEach(n=>n.classList.toggle('active',+n.dataset.index===i));const p=palaces[i];document.getElementById('palaceIndex').textContent=String(i+1).padStart(2,'0');document.getElementById('palaceName').textContent=p[0];document.getElementById('palaceEnglish').textContent=p[1];document.getElementById('palaceDescription').textContent=p[2];document.getElementById('primaryStar').textContent=stars[i];document.getElementById('palaceElement').textContent=elements[i%5][1];document.getElementById('palacePosition').textContent=['CENTER FIELD','UPPER FIELD','EASTERN FIELD','SOUTHEAST FIELD','RESOURCE FIELD','LOWER FIELD','WESTERN FIELD','SOCIAL FIELD','PUBLIC FIELD','ROOT FIELD','INNER FIELD','ORIGIN FIELD'][i];}
 nodes.forEach(n=>n.addEventListener('click',()=>selectPalace(+n.dataset.index)));
}
function hashInput(date,time,place){let s=(date||'')+'|'+(time||'')+'|'+(place||'');let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return h;}
function renderField(seed){
 const code=seed%360;document.getElementById('fieldCode').textContent='FIELD '+String(code).padStart(3,'0')+'°';
 const yin=35+(seed%31);document.getElementById('yinValue').textContent=yin+' / '+(100-yin);document.getElementById('yinCaption').textContent=yin>55?'YANG-LEANING FIELD':yin<45?'YIN-LEANING FIELD':'BALANCED FIELD';document.getElementById('yinMeter').style.width=yin+'%';
 const bars=document.getElementById('elementBars');if(bars){bars.innerHTML='';elements.forEach((e,i)=>{const v=28+((seed>>((i*5)%20))%58);const d=document.createElement('div');d.innerHTML=`<span>${e[0]}</span><i style="width:${v}%"></i><small>${e[1]}</small>`;bars.appendChild(d)})}
 const cycle=((seed%9)+1);document.getElementById('cycleValue').textContent='CYCLE '+String(cycle).padStart(2,'0');document.getElementById('cycleText').textContent=['OPENING / GROWTH','ACCELERATION / FIRE','CONSOLIDATION / EARTH','REFINEMENT / METAL','WITHDRAWAL / WATER','REORIENTATION / CHANGE','RELATION / EXCHANGE','RELEASE / TRANSITION','RETURN / RENEWAL'][cycle-1];
 document.querySelectorAll('.star-track i').forEach((el,i)=>{const angle=((i*30)+(seed%360));el.style.setProperty('--angle',angle+'deg')});
 const stage=document.getElementById('labStage');stage?.classList.remove('flash');requestAnimationFrame(()=>stage?.classList.add('flash'));selectFirstBySeed(seed);
}
function selectFirstBySeed(seed){const i=seed%12;const n=document.querySelector(`.palace-node[data-index="${i}"]`);n?.click()}
const dateInput=document.getElementById('birthDate'),timeInput=document.getElementById('birthTime'),placeInput=document.getElementById('birthPlace');
document.getElementById('visualizeBtn')?.addEventListener('click',()=>{const d=dateInput?.value,t=timeInput?.value,p=placeInput?.value.trim();if(!d&&!t&&!p){document.getElementById('consoleText').textContent='Add a date, time or place to activate the visual field.';document.getElementById('chartLab')?.scrollIntoView({behavior:'smooth',block:'start'});return}const seed=hashInput(d,t,p);renderField(seed);document.getElementById('chartLab')?.scrollIntoView({behavior:'smooth',block:'center'});});
// Touch / drag interaction: rotate the symbolic field on mobile and desktop.
const stage=document.getElementById('labStage');let down=false,lastX=0,rotation=0;
stage?.addEventListener('pointerdown',e=>{down=true;lastX=e.clientX;stage.setPointerCapture?.(e.pointerId)});stage?.addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-lastX;lastX=e.clientX;rotation+=dx*.22;stage.style.setProperty('--user-rotation',rotation+'deg')});stage?.addEventListener('pointerup',()=>down=false);stage?.addEventListener('pointercancel',()=>down=false);

const heroDiagram=document.querySelector('.hero-diagram');
if(heroDiagram && window.matchMedia('(pointer:fine)').matches){
  heroDiagram.addEventListener('pointermove',e=>{
    const r=heroDiagram.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width-.5)*18;
    const y=((e.clientY-r.top)/r.height-.5)*18;
    heroDiagram.style.setProperty('--mx',`${x*.45}px`);
    heroDiagram.style.setProperty('--my',`${y*.45}px`);
  });
  heroDiagram.addEventListener('pointerleave',()=>{heroDiagram.style.setProperty('--mx','0px');heroDiagram.style.setProperty('--my','0px')});
}
