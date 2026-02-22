---
layout: default
title: Add Paper to Shelf
---
<div class="add-page">
  <h1>Add Paper to Shelf</h1>

  <div class="form-group">
    <label for="arxiv-url">arXiv URL or ID <span class="label-hint">(optional)</span></label>
    <input type="text" id="arxiv-url" placeholder="https://arxiv.org/abs/2301.12345">
  </div>
  
  <button class="btn btn-primary" onclick="fetchArxiv()">Fetch from arXiv</button>
  <span id="status" class="status"></span>
  
  <hr>
  
  <div class="form-row">
    <div class="form-group">
      <label for="title">Title <span class="label-required">*</span></label>
      <input type="text" id="title" placeholder="Paper title">
    </div>
    <div class="form-group">
      <label for="year">Year</label>
      <input type="text" id="year" placeholder="2024">
    </div>
  </div>
  
  <div class="form-group">
    <label for="authors">Authors <span class="label-hint">(comma-separated)</span></label>
    <input type="text" id="authors" placeholder="Author One, Author Two">
  </div>
  
  <div class="form-row">
    <div class="form-group">
      <label for="arxiv-id">arXiv ID</label>
      <input type="text" id="arxiv-id" placeholder="2301.12345">
    </div>
    <div class="form-group">
      <label for="pdf-link">PDF Link</label>
      <input type="text" id="pdf-link" placeholder="https://arxiv.org/pdf/...">
    </div>
  </div>
  
  <div class="form-group">
    <label for="category">Category</label>
    <div class="category-input-row">
      <select id="category-select" onchange="updateCategoryInput()">
        <option value="">-- Select --</option>
        <option value="machine-learning">Machine Learning</option>
        <option value="nlp">NLP</option>
        <option value="computer-vision">Computer Vision</option>
        <option value="generative-models">Generative Models</option>
        <option value="reinforcement-learning">Reinforcement Learning</option>
        <option value="systems">Systems</option>
        <option value="theory">Theory</option>
        <option value="computational-biology">Computational Biology</option>
        <option value="robotics">Robotics</option>
        <option value="speech-processing">Speech Processing</option>
        <option value="astrophysics">Astrophysics</option>
        <option value="physics">Physics</option>
        <option value="mathematics">Mathematics</option>
        <option value="quantitative-finance">Quantitative Finance</option>
        <option value="economics">Economics</option>
        <option value="other">Other</option>
      </select>
      <input type="text" id="category" placeholder="Or type custom category">
    </div>
    <span class="form-hint">Auto-filled from arXiv. Select or edit if needed.</span>
  </div>
  
  <div class="form-group">
    <label for="tags">Tags <span class="label-hint">(comma-separated)</span></label>
    <input type="text" id="tags" placeholder="transformers, attention, nlp">
    <span class="form-hint">Auto-extracted from arXiv. Edit if needed.</span>
  </div>
  
  <div class="form-group">
    <label for="summary">Summary / Abstract <span class="label-hint">(LaTeX supported: $x^2$, $\frac{a}{b}$)</span></label>
    <textarea id="summary" rows="5" placeholder="Paper summary or abstract..."></textarea>
  </div>
  
  <div class="button-row">
    <button class="btn btn-primary" onclick="downloadPaper()">Add to Shelf</button>
    <button class="btn btn-secondary" onclick="generateFrontmatter()">Preview Markdown</button>
  </div>
  
  <div class="output-box" id="output" style="display: none;"></div>
</div>

<script>
function updateCategoryInput() {
  const select = document.getElementById('category-select');
  const input = document.getElementById('category');
  if (select.value) {
    input.value = select.value;
  }
}
</script>
