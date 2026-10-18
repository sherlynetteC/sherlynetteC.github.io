
const publications = [
  {
    year: 2026,
    journal: 'Communications Earth & Environment',
    title: 'Nutrient stress reduces the extent but increases the intensity of root-driven destabilization of mineral-associated organic matter',
    doi: '10.1038/s43247-026-04008-7',
    image: 'mariela.png',
    figure: 'Fig. 5',
    caption: 'Conceptual model illustrating the contrasting extent and intensity of root-driven mineral-associated organic matter destabilization under nitrogen-replete and nitrogen-limited conditions.'
  },
  {
    year: 2026,
    journal: 'Journal of Geophysical Research: Biogeosciences',
    title: 'Fluxes versus pools: Connecting temperature dependence and sensitivity of soil carbon dynamics across timescales',
    doi: '10.1029/2026JG009818',
    image: 'jgrg70337-fig-0003-m.jpg',
    figure: 'Fig. 3',
    caption: 'Conceptual representation of soil organic carbon pools and the fluxes connecting them.'
  },
  {
    year: 2023,
    journal: 'Applied and Environmental Microbiology',
    title: 'Diversity at single nucleotide to pangenome scales among sulfur cycling bacteria in salt marshes',
    doi: '10.1128/aem.00988-23',
    image: 'aem.00988-23.f003.jpg',
    figure: 'Fig. 3',
    caption: 'Phylogenetic relationships among sulfate-reducing and sulfur-oxidizing bacteria recovered from salt marsh sediments.'
  },
  {
    year: 2021,
    journal: 'The ISME Journal',
    title: 'Degradation of biological macromolecules supports uncultured microbial populations in Guaymas Basin hydrothermal sediments',
    doi: '10.1038/s41396-021-01026-5',
    image: '41396_2021_1026_fig4_html.jpeg',
    figure: 'Fig. 4',
    caption: 'Culture conditions enriching metagenome-assembled genomes from Guaymas Basin hydrothermal sediments.'
  },
  {
    year: 2019,
    journal: 'The ISME Journal',
    title: 'Soil microbial responses to drought and exotic plants shift carbon metabolism',
    doi: '10.1038/s41396-019-0389-9',
    image: '',
    figure: '',
    caption: ''
  }
];

const escapeHTML = s =>
  String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));

const posts = document.querySelector('#posts');
const recent = document.querySelector('#recent');

if (posts) {
  posts.innerHTML = publications.map((p, i) => {
    const url = `https://doi.org/${encodeURIComponent(p.doi)}`;

    return `
      <article class="post" id="post-${i + 1}">
        <div class="meta">
          ${p.year} · ${escapeHTML(p.journal)}
        </div>

        <h3>
          <a href="${url}" target="_blank" rel="noopener">
            ${escapeHTML(p.title)}
          </a>
        </h3>

        ${p.image ? `
          <figure>
            <a class="figure-link" href="${url}"
               target="_blank" rel="noopener"
               aria-label="Read publication: ${escapeHTML(p.title)}">
              <img src="${escapeHTML(p.image)}"
                   alt="${escapeHTML(p.figure)} from ${escapeHTML(p.title)}"
                   loading="lazy">
            </a>

            <figcaption>
              <a href="${url}" target="_blank" rel="noopener">
                <strong>${escapeHTML(p.figure)} of the published paper.</strong>
                ${escapeHTML(p.caption)}
              </a>
            </figcaption>
          </figure>
        ` : ''}

        <a class="doi" href="${url}" target="_blank" rel="noopener">
          Read paper ↗
        </a>
      </article>
    `;
  }).join('');
}

if (recent) {
  recent.innerHTML = publications.map((p, i) => `
    <a class="recent-item" href="#post-${i + 1}">
      <small>${p.year}</small>
      ${escapeHTML(p.title)}
    </a>
  `).join('');
}
