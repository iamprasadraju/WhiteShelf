const PapersFilter = {
  activeCategory: 'all',
  activeTag: 'all',
  
  init() {
    this.bindCategoryFilters();
    this.bindTagFilters();
    this.bindKeyboardShortcuts();
  },
  
  bindCategoryFilters() {
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeCategory = btn.dataset.category;
        this.filter();
      });
    });
  },
  
  bindTagFilters() {
    document.querySelectorAll('.tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeTag = btn.dataset.tag;
        this.filter();
      });
    });
  },
  
  bindKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
          searchInput.focus();
        }
      }
      
      if (e.key === 'Escape') {
        this.activeCategory = 'all';
        this.activeTag = 'all';
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.category-btn[data-category="all"]')?.classList.add('active');
        document.querySelector('.tag-btn[data-tag="all"]')?.classList.add('active');
        this.filter();
      }
    });
  },
  
  filter() {
    const papers = document.querySelectorAll('.paper-item');
    let visibleCount = 0;
    
    papers.forEach(paper => {
      const category = paper.dataset.category;
      const tags = paper.dataset.tags?.split(',') || [];
      
      const categoryMatch = this.activeCategory === 'all' || category === this.activeCategory;
      const tagMatch = this.activeTag === 'all' || tags.includes(this.activeTag);
      
      if (categoryMatch && tagMatch) {
        paper.classList.add('visible');
        visibleCount++;
      } else {
        paper.classList.remove('visible');
      }
    });
    
    const countEl = document.getElementById('visible-count');
    if (countEl) {
      countEl.textContent = visibleCount;
    }
    
    const noResults = document.getElementById('no-results');
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  PapersFilter.init();
});
