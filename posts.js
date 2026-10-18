// Edit this one file to add summaries and figures. Images go in the figures/ folder.
// Example: image: 'figures/salt-marsh.png', caption: 'Figure 3. ...'
const publications = [
 {year:2026,journal:'Communications Earth & Environment',title:'Nutrient stress reduces the extent but increases the intensity of root-driven destabilization of mineral-associated organic matter',doi:'10.1038/s43247-026-04008-7',summary:'',image:'',caption:'',image:'mariela.png',
caption:'Root-driven destabilization of mineral-associated organic matter under nitrogen-replete and nitrogen-limited conditions.'},
 {year:2026,journal:'Journal of Geophysical Research: Biogeosciences',title:'Fluxes versus pools: Connecting temperature dependence and sensitivity of soil carbon dynamics across timescales',doi:'10.1029/2026JG009818',summary:'',image:'',caption:''},
 {year:2023,journal:'Applied and Environmental Microbiology',title:'Diversity at single nucleotide to pangenome scales among sulfur cycling bacteria in salt marshes',doi:'10.1128/aem.00988-23',summary:'',image:'',caption:''},
 {year:2021,journal:'The ISME Journal',title:'Degradation of biological macromolecules supports uncultured microbial populations in Guaymas Basin hydrothermal sediments',doi:'10.1038/s41396-021-01026-5',summary:'',image:'',caption:'',image:'41396_2021_1026_fig4_html.jpeg',
caption:'Figure 4. Culture conditions enriching metagenome-assembled genomes from Guaymas Basin hydrothermal sediments.'},
 {year:2019,journal:'The ISME Journal',title:'Soil microbial responses to drought and exotic plants shift carbon metabolism',doi:'10.1038/s41396-019-0389-9',summary:'',image:'',caption:''}
];
const escapeHTML = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const posts=document.querySelector('#posts'), recent=document.querySelector('#recent');
if(posts) posts.innerHTML=publications.map((p,i)=>`<article class="post" id="post-${i+1}"><div class="meta">${p.year} · ${escapeHTML(p.journal)}</div><h3><a href="#post-${i+1}">${escapeHTML(p.title)}</a></h3>${p.image?`<figure><img src="${escapeHTML(p.image)}" alt="Scientific figure for ${escapeHTML(p.title)}" loading="lazy">${p.caption?`<figcaption>${escapeHTML(p.caption)}</figcaption>`:''}</figure>`:''}${p.summary?`<p class="summary">${escapeHTML(p.summary)}</p>`:''}<a class="doi" href="https://doi.org/${encodeURIComponent(p.doi)}" target="_blank" rel="noopener">Read paper ↗</a></article>`).join('');
if(recent) recent.innerHTML=publications.map((p,i)=>`<a class="recent-item" href="#post-${i+1}"><small>${p.year}</small>${escapeHTML(p.title)}</a>`).join('');
