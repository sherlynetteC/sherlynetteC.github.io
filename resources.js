
const resources = [
  // DATABASES
  {
    name: 'GTDB',
    category: 'databases',
    description: 'Genome-based microbial taxonomy',
    url: 'https://gtdb.ecogenomic.org/',
    symbol: 'GT'
  },
  {
    name: 'NCBI',
    category: 'databases',
    description: 'Sequence and literature databases',
    url: 'https://www.ncbi.nlm.nih.gov/',
    symbol: 'NC'
  },
  {
    name: 'KEGG',
    category: 'databases',
    description: 'Genes, pathways, and metabolism',
    url: 'https://www.kegg.jp/',
    symbol: 'KG'
  },
  {
    name: 'CAZy',
    category: 'databases',
    description: 'Carbohydrate-active enzyme families',
    url: 'https://www.cazy.org/',
    symbol: 'CZ'
  },
  {
    name: 'MEROPS',
    category: 'databases',
    description: 'Peptidase families and classification',
    url: 'https://www.ebi.ac.uk/merops/cgi-bin/family_index?type=P',
    symbol: 'ME'
  },

  // BIOINFORMATICS
  {
    name: 'EzBioCloud ANI',
    category: 'bioinformatics',
    description: 'Genome similarity and species delineation',
    url: 'https://www.ezbiocloud.net/tools/ani',
    symbol: 'ANI'
  },
  {
    name: 'BV-BRC',
    category: 'bioinformatics',
    description: 'Bacterial and viral genome analysis',
    url: 'https://www.bv-brc.org/',
    symbol: 'BV'
  },
  {
    name: 'KBase',
    category: 'bioinformatics',
    description: 'Reproducible microbial systems biology workflows',
    url: 'https://www.kbase.us/',
    symbol: 'KB'
  },
  {
    name: 'PSORT',
    category: 'bioinformatics',
    description: 'Protein subcellular localization prediction',
    url: 'https://psort.org/documentation/index.html',
    symbol: 'PS'
  },
  {
    name: 'Kraken2 Indexes',
    category: 'bioinformatics',
    description: 'Prebuilt databases for taxonomic classification',
    url: 'https://benlangmead.github.io/aws-indexes/k2',
    symbol: 'K2'
  },

  // STANDARDS & REFERENCES
  {
    name: 'MIMAG / MISAG',
    category: 'references',
    description: 'Genome quality and reporting standards',
    url: 'https://www.nature.com/articles/nbt.3893/tables/1',
    symbol: 'MG'
  },
  {
    name: 'Uncultivated Taxa Standards',
    category: 'references',
    description: 'Criteria for genome-based taxonomic descriptions',
    url: 'https://www.nature.com/articles/ismej2017113/tables/1',
    symbol: 'TX'
  },
  {
    name: 'Schimel in a Sheet',
    category: 'references',
    description: 'Scientific writing reference sheet',
    url: 'https://burginlab.wordpress.com/wp-content/uploads/2016/07/schimel-in-a-sheet-copy.pdf',
    symbol: 'SW'
  },

  // VISUALIZATION
  {
    name: 'R Plot Symbols',
    category: 'visualization',
    description: 'Base R plotting symbols and point types',
    url: 'https://www.datanovia.com/learn/data-visualization/r-base/pch-symbols',
    symbol: 'PC'
  },
  {
    name: 'R Line Types',
    category: 'visualization',
    description: 'Base R line styles and plotting options',
    url: 'https://www.datanovia.com/learn/data-visualization/line-types-in-r',
    symbol: 'LT'
  },
  {
    name: 'Image Color Picker',
    category: 'visualization',
    description: 'Extract color codes from images',
    url: 'https://html-color-codes.info/colors-from-image/',
    symbol: 'CP'
  },
  {
    name: 'R Color Reference',
    category: 'visualization',
    description: 'Color palettes and plotting colors',
    url: 'https://derekogle.com/NCGraphing/resources/colors',
    symbol: 'RC'
  },
  {
    name: 'Venny',
    category: 'visualization',
    description: 'Venn diagrams and set intersections',
    url: 'https://bioinfogp.cnb.csic.es/tools/venny/',
    symbol: 'VN'
  },
  {
    name: 'BioJupies',
    category: 'visualization',
    description: 'RNA-seq analysis and interactive results',
    url: 'https://maayanlab.cloud/biojupies/analyze',
    symbol: 'BJ'
  }
];

const grid = document.querySelector('#resource-grid');
const search = document.querySelector('#resource-search');
let active = 'all';

const categoryLabels = {
  databases: 'Databases',
  bioinformatics: 'Bioinformatics',
  references: 'Standards & References',
  visualization: 'Visualization'
};

const esc = s => String(s).replace(/[&<>"']/g, c => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[c]));

function render() {
  const q = search.value.trim().toLowerCase();

  const matches = resources.filter(r =>
    (active === 'all' || r.category === active) &&
    [
      r.name,
      r.category,
      categoryLabels[r.category],
      r.description
    ]
      .join(' ')
      .toLowerCase()
      .includes(q)
  );

  grid.innerHTML = matches.map(r => `
    <a
      class="resource-card"
      href="${esc(r.url)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="resource-icon">${esc(r.symbol)}</div>

      <div>
        <div class="resource-category">
          ${esc(categoryLabels[r.category] || r.category)}
        </div>
        <strong>${esc(r.name)}</strong>
        <p>${esc(r.description)}</p>
      </div>

      <span class="resource-arrow">↗</span>
    </a>
  `).join('') || '<p>No matching resources.</p>';
}

search.addEventListener('input', render);

document.querySelectorAll('[data-filter]').forEach(b => {
  b.addEventListener('click', () => {
    active = b.dataset.filter;

    document.querySelectorAll('[data-filter]').forEach(x => {
      x.classList.toggle('active', x === b);
    });

    render();
  });
});

render();
