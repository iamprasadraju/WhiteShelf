# ResearchRack

A clean Jekyll theme for organizing research papers.

## Quick Start

**Terminal 1 - API Server:**
```bash
ruby api_server.rb
```

**Terminal 2 - Jekyll:**
```bash
bundle exec jekyll serve
```

Open http://localhost:4000

## Adding Papers

1. Click **"Add Paper"** button on Research Papers page
2. Paste arXiv URL (e.g., `https://arxiv.org/abs/2602.17652`)
3. Click **"Fetch from arXiv"** → auto-fills title, authors, category, tags
4. Edit if needed
5. Click **"Add to Rack"** → saves paper
6. Refresh page to see new paper

## Features

- **Category filters** - Filter by topic (ML, NLP, Computer Vision, etc.)
- **Tag filters** - Secondary filtering by tags
- **arXiv integration** - Auto-fetch metadata
- **Auto-categorization** - Maps arXiv categories to readable names
- **Keyword extraction** - Extracts 60+ topic keywords from title/abstract
- **Works locally and on GitHub Pages**

## Paper Format

```yaml
---
title: "Paper Title"
authors:
  - Author One
year: 2024
arxiv: "2602.17652"
category: astrophysics
tags: [astro-ph.GA, galaxies, astrophysics]
date_added: 2024-02-22
summary: |
  Abstract here...
---
```

## GitHub Pages

Push to GitHub and it will build automatically at `https://yourusername.github.io/REPO_NAME/`

Update `_config.yml` with your baseurl:
```yaml
baseurl: "/REPO_NAME"
url: "https://yourusername.github.io"
```

## Directory Structure

```
_papers/           # Your papers
_layouts/         # Page templates
assets/js/        # Filter + arXiv fetcher
api_server.rb      # Local API server (optional)
```

## License

MIT
