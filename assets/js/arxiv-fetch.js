const ARXIV_CATEGORIES = {
  // Computer Science
  'cs.AI': 'artificial-intelligence',
  'cs.LG': 'machine-learning',
  'cs.CL': 'nlp',
  'cs.CV': 'computer-vision',
  'cs.RO': 'robotics',
  'cs.NE': 'neural-networks',
  'cs.SE': 'software-engineering',
  'cs.DS': 'algorithms',
  'cs.CR': 'cryptography',
  'cs.DB': 'databases',
  'cs.HC': 'hci',
  'cs.IR': 'information-retrieval',
  'cs.MA': 'multiagent-systems',
  'cs.SY': 'control-systems',
  'cs.CG': 'computational-geometry',
  'cs.GT': 'game-theory',
  'cs.NI': 'networking',
  'cs.PL': 'programming-languages',
  'cs.SC': 'symbolic-computation',
  
  // Statistics
  'stat.ML': 'machine-learning',
  'stat.TH': 'statistics',
  'stat.CO': 'computational-statistics',
  'stat.ME': 'methodology',
  'stat.AP': 'statistics-applications',
  
  // Mathematics
  'math.OC': 'optimization',
  'math.NA': 'numerical-analysis',
  'math.PR': 'probability',
  'math.ST': 'statistics-theory',
  'math.DS': 'dynamical-systems',
  'math.LO': 'logic',
  'math.IT': 'information-theory',
  
  // Physics
  'physics.data-an': 'data-analysis',
  'physics.comp-ph': 'computational-physics',
  'physics.soc-ph': 'sociophysics',
  'physics.chem-ph': 'chemical-physics',
  'physics.bio-ph': 'biophysics',
  
  // Electrical Engineering
  'eess.AS': 'audio-processing',
  'eess.IV': 'image-processing',
  'eess.SP': 'signal-processing',
  
  // Quantitative Biology
  'q-bio.BM': 'biomolecules',
  'q-bio.CB': 'cell-biology',
  'q-bio.GN': 'genomics',
  'q-bio.NC': 'neuroscience',
  'q-bio.QM': 'quantitative-biology',
  'q-bio.TO': 'tissue-organs',
  'q-bio.PE': 'populations-evolution',
  
  // Quantitative Finance
  'q-fin.CP': 'computational-finance',
  'q-fin.MF': 'mathematical-finance',
  'q-fin.PM': 'portfolio-management',
  'q-fin.RM': 'risk-management',
  'q-fin.ST': 'statistical-finance',
  'q-fin.TR': 'trading',
  
  // Economics
  'econ.EM': 'econometrics',
  'econ.GN': 'general-economics',
  'econ.TH': 'theoretical-economics',
  
  // Astrophysics
  'astro-ph.IM': 'astro-instrumentation',
  'astro-ph.GA': 'galaxies',
  'astro-ph.CO': 'cosmology',
  'astro-ph.EP': 'earth-planetary',
  'astro-ph.HE': 'high-energy-astro',
  'astro-ph.SR': 'solar-stellar',
  
  // Condensed Matter
  'cond-mat.dis-nn': 'disordered-systems',
  'cond-mat.mes-hall': 'mesoscopic',
  'cond-mat.mtrl-sci': 'materials-science',
  'cond-mat.other': 'condensed-matter',
  'cond-mat.quant-gas': 'quantum-gases',
  'cond-mat.soft': 'soft-matter',
  'cond-mat.stat-mech': 'statistical-mechanics',
  'cond-mat.str-el': 'strongly-correlated',
  'cond-mat.supr-con': 'superconductivity',
  
  // High Energy Physics
  'hep-th': 'high-energy-theory',
  'hep-ph': 'high-energy-phenomenology',
  'hep-lat': 'lattice-field-theory',
  'hep-ex': 'high-energy-experiment',
  
  // General Relativity and Cosmology
  'gr-qc': 'general-relativity',
  
  // Nonlinear Sciences
  'nlin.AO': 'adaptation-self-organizing',
  'nlin.CG': 'chaotic-dynamics',
  'nlin.CD': 'cellular-automata',
  'nlin.SI': 'pattern-formation',
  
  // Nuclear Physics
  'nucl-th': 'nuclear-theory',
  'nucl-ex': 'nuclear-experiment',
  
  // Other
  'physics.gen-ph': 'general-physics',
  'physics.hist-ph': 'history-physics',
  'physics.pop-ph': 'popular-physics',
  'physics.ed-ph': 'physics-education',
};

const KEYWORD_PATTERNS = [
  { patterns: ['transformer', 'attention mechanism', 'self-attention', 'multi-head attention'], tag: 'transformers' },
  { patterns: ['attention', 'attention is'], tag: 'attention' },
  { patterns: ['diffusion model', 'diffusion probabilistic', 'denoising diffusion', 'score-based generative'], tag: 'diffusion-models' },
  { patterns: ['language model', 'large language model', 'llm', 'gpt-', 'gpt ', 'language modeling'], tag: 'language-models' },
  { patterns: ['bert', 'pre-trained', 'pretrain', 'pre-training', 'self-supervised'], tag: 'pretraining' },
  { patterns: ['reinforcement learning', 'deep reinforcement', 'rl agent', 'policy gradient', 'q-learning', 'actor-critic'], tag: 'reinforcement-learning' },
  { patterns: ['graph neural network', 'graph convolution', 'gnn', 'message passing neural', 'graph attention'], tag: 'graph-neural-networks' },
  { patterns: ['generative adversarial', 'gan ', 'stylegan', 'variational autoencoder', ' vae ', 'generative model'], tag: 'generative-models' },
  { patterns: ['computer vision', 'image classification', 'object detection', 'image segmentation', 'visual recognition'], tag: 'computer-vision' },
  { patterns: ['natural language processing', ' nlp', 'text classification', 'sentiment analysis', 'named entity', 'machine translation', 'text generation'], tag: 'nlp' },
  { patterns: ['robot', 'robotic', 'manipulation', 'grasping', 'locomotion'], tag: 'robotics' },
  { patterns: ['quantum', 'qubit', 'quantum circuit', 'quantum neural'], tag: 'quantum-computing' },
  { patterns: ['protein', 'protein folding', 'molecule', 'molecular', 'drug discovery', 'drug design'], tag: 'computational-biology' },
  { patterns: ['recommendation system', 'recommender', 'collaborative filtering'], tag: 'recommender-systems' },
  { patterns: ['contrastive learning', 'contrastive loss', 'simclr', 'moco', 'clip'], tag: 'contrastive-learning' },
  { patterns: ['multimodal', 'vision-language', 'image-text', 'audio-visual'], tag: 'multimodal' },
  { patterns: ['federated learning', 'federated'], tag: 'federated-learning' },
  { patterns: ['adversarial attack', 'adversarial example', 'adversarial robust'], tag: 'adversarial' },
  { patterns: ['few-shot', 'zero-shot', 'meta-learning', 'one-shot'], tag: 'few-shot-learning' },
  { patterns: ['knowledge distill', 'teacher-student', 'model compression'], tag: 'knowledge-distillation' },
  { patterns: ['neural architecture search', ' nas ', 'auto ml', 'automl'], tag: 'neural-architecture-search' },
  { patterns: ['optimization', 'optimizer', 'stochastic gradient', ' adam ', ' sgd ', 'momentum'], tag: 'optimization' },
  { patterns: ['convolutional neural', 'cnn', 'convolutional network', 'resnet', 'vgg'], tag: 'cnn' },
  { patterns: ['recurrent neural', 'lstm', 'gru', 'rnn', 'recurrent network'], tag: 'rnn' },
  { patterns: ['speech recognition', 'speech synthesis', 'audio processing', 'voice conversion'], tag: 'speech-processing' },
  { patterns: ['time series', 'temporal', 'forecasting', 'sequence prediction'], tag: 'time-series' },
  { patterns: ['causal', 'causality', 'causal inference'], tag: 'causal-inference' },
  { patterns: ['bayesian', 'bayes', 'bayesian inference', 'variational inference'], tag: 'bayesian' },
  { patterns: ['gaussian process', 'gp ', 'kernel method'], tag: 'gaussian-process' },
  { patterns: ['autoencoder', 'auto-encoder', 'latent variable'], tag: 'autoencoder' },
  { patterns: ['normalizing flow', 'flow-based', 'invertible neural'], tag: 'normalizing-flows' },
  { patterns: ['energy-based', 'ebm', 'energy based model'], tag: 'energy-based-models' },
  { patterns: ['uncertainty', 'uncertainty quantification', 'uncertainty estimation'], tag: 'uncertainty' },
  { patterns: ['interpretability', 'explainable', 'xai', 'model interpretation'], tag: 'interpretability' },
  { patterns: ['fairness', 'bias', 'algorithmic fairness'], tag: 'fairness' },
  { patterns: ['privacy', 'differential privacy', 'privacy-preserving'], tag: 'privacy' },
  { patterns: ['domain adaptation', 'transfer learning', 'domain shift'], tag: 'transfer-learning' },
  { patterns: ['semi-supervised', 'semi-supervise', 'pseudo-label'], tag: 'semi-supervised-learning' },
  { patterns: ['active learning', 'query strategy'], tag: 'active-learning' },
  { patterns: ['weakly supervised', 'weak supervision', 'label noise'], tag: 'weakly-supervised' },
  { patterns: ['object detection', 'yolo', 'faster r-cnn', 'detector'], tag: 'object-detection' },
  { patterns: ['semantic segmentation', 'instance segmentation', 'segmentation network'], tag: 'segmentation' },
  { patterns: ['image generation', 'image synthesis', 'text-to-image', 'image-to-image'], tag: 'image-generation' },
  { patterns: ['video', 'video understanding', 'action recognition', 'video prediction'], tag: 'video' },
  { patterns: ['3d', 'point cloud', 'mesh', '3d reconstruction', 'depth estimation'], tag: '3d-vision' },
  { patterns: ['pose estimation', 'human pose', 'keypoint detection'], tag: 'pose-estimation' },
  { patterns: ['face recognition', 'face detection', 'facial'], tag: 'face-recognition' },
  { patterns: ['ocr', 'text recognition', 'scene text', 'document understanding'], tag: 'ocr' },
  { patterns: ['neural network', 'deep learning', 'deep neural', 'dnn'], tag: 'deep-learning' },
  { patterns: ['machine learning', 'ml ', 'learning algorithm'], tag: 'machine-learning' },
  { patterns: ['artificial intelligence', ' ai '], tag: 'artificial-intelligence' },
  { patterns: ['embedding', 'representation learning', 'feature learning'], tag: 'embeddings' },
  { patterns: ['classification', 'classifier'], tag: 'classification' },
  { patterns: ['regression', 'regression model'], tag: 'regression' },
  { patterns: ['clustering', 'cluster analysis'], tag: 'clustering' },
  { patterns: ['dimensionality reduction', 'manifold learning', 'pca', 'tsne'], tag: 'dimensionality-reduction' },
];

function parseArxivUrl(input) {
  if (!input) return null;
  input = input.trim();
  
  const patterns = [
    /arxiv\.org\/abs\/(\d+\.\d+)/i,
    /arxiv\.org\/pdf\/(\d+\.\d+)/i,
    /(\d{4}\.\d+)/
  ];
  
  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function extractKeywords(title, abstract) {
  const text = (title + ' ' + abstract).toLowerCase();
  const keywords = new Set();
  
  for (const rule of KEYWORD_PATTERNS) {
    for (const pattern of rule.patterns) {
      if (text.includes(pattern.toLowerCase())) {
        keywords.add(rule.tag);
        break;
      }
    }
  }
  
  return Array.from(keywords);
}

async function fetchArxiv() {
  const input = document.getElementById('arxiv-url').value;
  const arxivId = parseArxivUrl(input);
  const status = document.getElementById('status');
  
  if (!arxivId) {
    status.className = 'status error';
    status.textContent = 'Invalid arXiv URL or ID';
    return;
  }
  
  status.className = 'status loading';
  status.textContent = 'Fetching...';
  
  const arxivUrl = `https://export.arxiv.org/api/query?id_list=${arxivId}`;
  
  // Try multiple CORS proxies
  const corsProxies = [
    (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    (url) => url
  ];
  
  let lastError = null;
  
  for (const getProxyUrl of corsProxies) {
    try {
      const fetchUrl = getProxyUrl(arxivUrl);
      const response = await fetch(fetchUrl, {
        headers: {
          'Accept': 'application/xml'
        }
      });
      
      if (!response.ok) continue;
      
      const text = await response.text();
      
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, 'text/xml');
      
      // Check for parse errors
      const parseError = xml.querySelector('parsererror');
      if (parseError) continue;
      
      const entry = xml.querySelector('entry');
      
      if (!entry) {
        lastError = 'Paper not found';
        continue;
      }
      
      const title = entry.querySelector('title')?.textContent?.trim().replace(/\s+/g, ' ') || '';
      const authors = Array.from(entry.querySelectorAll('author name')).map(a => a.textContent.trim());
      const summary = entry.querySelector('summary')?.textContent?.trim() || '';
      const categories = Array.from(entry.querySelectorAll('category')).map(c => c.getAttribute('term'));
      const published = entry.querySelector('published')?.textContent || '';
      const year = published ? published.substring(0, 4) : '';
      
      document.getElementById('title').value = title;
      document.getElementById('authors').value = authors.join(', ');
      document.getElementById('year').value = year;
      document.getElementById('arxiv-id').value = arxivId;
      document.getElementById('pdf-link').value = `https://arxiv.org/pdf/${arxivId}.pdf`;
      document.getElementById('summary').value = summary;
      
      // Category: primary arXiv category mapped
      const primaryCategory = categories[0];
      let mappedCategory = ARXIV_CATEGORIES[primaryCategory];
      if (!mappedCategory) {
        const prefix = primaryCategory.split('.')[0];
        mappedCategory = prefix;
      }
      
      // Set category input and try to match dropdown
      const categoryInput = document.getElementById('category');
      const categorySelect = document.getElementById('category-select');
      categoryInput.value = mappedCategory;
      
      if (categorySelect) {
        let found = false;
        for (let option of categorySelect.options) {
          if (option.value === mappedCategory) {
            categorySelect.value = mappedCategory;
            found = true;
            break;
          }
        }
        if (!found) {
          categorySelect.value = '';
        }
      }
      
      // Tags: arXiv raw + arXiv mapped + extracted keywords
      const arxivRawTags = categories;
      const arxivMappedTags = categories
        .map(c => ARXIV_CATEGORIES[c])
        .filter(v => v);
      const keywordTags = extractKeywords(title, summary);
      
      const allTags = [...arxivRawTags, ...arxivMappedTags, ...keywordTags];
      const uniqueTags = [...new Set(allTags)];
      
      document.getElementById('tags').value = uniqueTags.join(', ');
      
      status.className = 'status success';
      status.textContent = 'Fetched!';
      setTimeout(() => { status.textContent = ''; }, 2000);
      
      return; // Success, exit function
      
    } catch (error) {
      lastError = error.message;
      continue; // Try next proxy
    }
  }
  
  // All proxies failed
  status.className = 'status error';
  status.textContent = 'Error: ' + (lastError || 'Failed to fetch');
}

function generateFrontmatter() {
  const result = getPaperContent();
  const output = document.getElementById('output');
  output.textContent = result.content;
  output.style.display = 'block';
}

function getPaperContent() {
  const title = document.getElementById('title').value;
  const authors = document.getElementById('authors').value.split(',').map(a => a.trim()).filter(a => a);
  const year = document.getElementById('year').value;
  const arxivId = document.getElementById('arxiv-id').value;
  const pdfLink = document.getElementById('pdf-link').value;
  const category = document.getElementById('category').value;
  const tags = document.getElementById('tags').value.split(',').map(t => t.trim().toLowerCase().replace(/\s+/g, '-')).filter(t => t);
  const summary = document.getElementById('summary').value;
  
  const slug = arxivId || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').substring(0, 50);
  
  let content = '---\n';
  content += `title: "${title.replace(/"/g, '\\"')}"\n`;
  if (authors.length > 0) {
    content += 'authors:\n' + authors.map(a => `  - ${a}`).join('\n') + '\n';
  }
  if (year) content += `year: ${year}\n`;
  if (arxivId) content += `arxiv: "${arxivId}"\n`;
  if (pdfLink) content += `pdf: "${pdfLink}"\n`;
  if (category) content += `category: ${category}\n`;
  if (tags.length > 0) content += `tags: [${tags.join(', ')}]\n`;
  content += `date_added: ${new Date().toISOString().split('T')[0]}\n`;
  if (summary) {
    content += 'summary: |\n' + summary.split('\n').map(line => '  ' + line).join('\n') + '\n';
  }
  content += '---\n';
  
  return { content, filename: slug + '.md' };
}

function downloadPaper() {
  const title = document.getElementById('title').value;
  
  if (!title) {
    alert('Please enter a title');
    return;
  }
  
  const result = getPaperContent();
  const status = document.getElementById('status');
  const output = document.getElementById('output');
  
  // Check if running locally (API server available)
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  if (isLocal) {
    // Try local API server first
    fetch('http://localhost:4567/add-paper', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: result.filename, content: result.content })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        status.className = 'status success';
        status.textContent = 'Added to shelf!';
        output.innerHTML = `<strong>Added: ${data.filename}</strong><br><br><a href="/">Refresh page</a> to see the new paper.`;
        output.style.display = 'block';
        clearForm();
        setTimeout(() => { status.textContent = ''; }, 3000);
        return;
      }
      throw new Error(data.error);
    })
    .catch(() => {
      // Fallback to clipboard/download
      copyToClipboard(result);
    });
  } else {
    // GitHub Pages - use clipboard/download
    copyToClipboard(result);
  }
}

function copyToClipboard(result) {
  const status = document.getElementById('status');
  const output = document.getElementById('output');
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(result.content).then(() => {
      status.className = 'status success';
      status.textContent = 'Copied to clipboard!';
      output.innerHTML = `<strong>Markdown copied!</strong><br><br>Create file <code>${result.filename}</code> in <code>_papers/</code> folder and paste.<br><br><a href="https://github.com/new" target="_blank" style="color:#0066cc;">Create file on GitHub →</a><br><br><pre style="background:#f5f5f5;padding:10px;overflow-x:auto;font-size:12px;">${result.content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
      output.style.display = 'block';
      setTimeout(() => { status.textContent = ''; }, 3000);
    }).catch(() => {
      downloadAsFile(result);
    });
  } else {
    downloadAsFile(result);
  }
}

function downloadAsFile(result) {
  const status = document.getElementById('status');
  const output = document.getElementById('output');
  
  const blob = new Blob([result.content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = result.filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  status.className = 'status success';
  status.textContent = 'Downloaded!';
  output.innerHTML = `<strong>File: ${result.filename}</strong><br><br>Save to <code>_papers/</code> and commit to GitHub.<br><br><pre style="background:#f5f5f5;padding:10px;overflow-x:auto;font-size:12px;">${result.content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
  output.style.display = 'block';
  setTimeout(() => { status.textContent = ''; }, 3000);
}

function clearForm() {
  document.getElementById('arxiv-url').value = '';
  document.getElementById('title').value = '';
  document.getElementById('authors').value = '';
  document.getElementById('year').value = '';
  document.getElementById('arxiv-id').value = '';
  document.getElementById('pdf-link').value = '';
  document.getElementById('category').value = '';
  document.getElementById('category-select').value = '';
  document.getElementById('tags').value = '';
  document.getElementById('summary').value = '';
}

document.getElementById('arxiv-url')?.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') fetchArxiv();
});
