// Add cards here. Replace # with your preferred links when ready.
const resources = [
 {name:'GTDB',category:'genomics',description:'Genome taxonomy database',url:'https://gtdb.ecogenomic.org/',symbol:'GT'},
 {name:'NCBI',category:'genomics',description:'Sequence and literature databases',url:'https://www.ncbi.nlm.nih.gov/',symbol:'NC'},
 {name:'KEGG',category:'genomics',description:'Genes, pathways, and metabolism',url:'https://www.kegg.jp/',symbol:'KG'},
 {name:'iTOL',category:'visualization',description:'Interactive phylogenetic trees',url:'https://itol.embl.de/',symbol:'IT'},
 {name:'ggplot2',category:'visualization',description:'Data visualization with R',url:'https://ggplot2.tidyverse.org/',symbol:'R'},
 {name:'Inkscape',category:'visualization',description:'Vector figure editing',url:'https://inkscape.org/',symbol:'IN'},
 {name:'Writing resources',category:'writing',description:'Guides and references to add',url:'#',symbol:'WR'}
];
const grid=document.querySelector('#resource-grid'),search=document.querySelector('#resource-search');let active='all';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){const q=search.value.trim().toLowerCase();const matches=resources.filter(r=>(active==='all'||r.category===active)&&[r.name,r.category,r.description].join(' ').toLowerCase().includes(q));grid.innerHTML=matches.map(r=>`<a class="resource-card" href="${esc(r.url)}" ${r.url==='#'?'':'target="_blank" rel="noopener noreferrer"'}><div class="resource-icon">${esc(r.symbol)}</div><div><div class="resource-category">${esc(r.category)}</div><strong>${esc(r.name)}</strong><p>${esc(r.description)}</p></div><span class="resource-arrow">↗</span></a>`).join('')||'<p>No matching resources.</p>';}
search.addEventListener('input',render);document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));render()}));render();
