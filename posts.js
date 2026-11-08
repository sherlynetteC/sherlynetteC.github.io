
const researchProjects = [
  {
    year: 2026,
    title: 'Google Scholar Word Cloud | R',
    description: 'Inspired by the original online Google Scholar Word Cloud Generator. Recreated in R using scholar, tidytext, and wordcloud2. Just add your Google Scholar ID!',
    image: 'https://raw.githubusercontent.com/sherlynetteC/google-scholar-wordcloud/main/wordcloud_final.png',
    url: 'https://github.com/sherlynetteC/google-scholar-wordcloud'
  }
];

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
    caption: 'Conceptual structure of the soil carbon model, representing four interconnected organic carbon pools, their fluxes, and microbial regulation of decomposition.'
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

// RESEARCH PROJECTS
const projectHTML = researchProjects.map((p, i) => `
  <article class="post" id="research-project-${i + 1}">
    <div class="meta">
      ${p.year} · R PROGRAMMING · DATA VISUALIZATION
    </div>

    <h3>
      <a href="${p.url}" target="_blank" rel="noopener">
        ${escapeHTML(p.title)}
      </a>
    </h3>

    <figure>
      <a class="figure-link" href="${p.url}"
         target="_blank" rel="noopener">
        <img src="${escapeHTML(p.image)}"
             alt="Google Scholar research word cloud"
             loading="lazy">
      </a>
    </figure>

    <p>${escapeHTML(p.description)}</p>

    <a class="doi" href="${p.url}"
       target="_blank" rel="noopener">
      View R code on GitHub ↗
    </a>
  </article>
`).join('');

// PUBLICATIONS
const publicationHTML = publications.map((p, i) => {
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

      <a class="doi" href="${url}"
         target="_blank" rel="noopener">
        Read paper ↗
      </a>
    </article>
  `;
}).join('');

// RESEARCH LOG: NEWEST FIRST
if (posts) {
  posts.innerHTML = projectHTML + publicationHTML;
}

// RECENT POSTS: NEWEST FIRST
if (recent) {
  const projectRecentHTML = researchProjects.map((p, i) => `
    <a class="recent-item" href="#research-project-${i + 1}">
      <small>${p.year}</small>
      ${escapeHTML(p.title)}
    </a>
  `).join('');

  const publicationRecentHTML = publications.map((p, i) => `
    <a class="recent-item" href="#post-${i + 1}">
      <small>${p.year}</small>
      ${escapeHTML(p.title)}
    </a>
  `).join('');

  recent.innerHTML = projectRecentHTML + publicationRecentHTML;
}
