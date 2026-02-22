# WhiteShelf

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
5. Click **"Add to Shelf"** → saves directly to `_papers/`
6. Refresh page to see new paper

## API Server

The API server runs on http://localhost:4567

**Endpoints:**
- `POST /add-paper` - Save paper to `_papers/`
- `POST /rebuild` - Rebuild Jekyll site
- `GET /list-papers` - List all papers

## Features

- **Category filters** - Filter by topic (ML, NLP, Computer Vision, etc.)
- **Tag filters** - Secondary filtering by tags
- **arXiv integration** - Auto-fetch metadata
- **Auto-categorization** - Maps arXiv categories to readable names
- **Keyword extraction** - Extracts 60+ topic keywords from title/abstract
- **Direct save** - Papers save directly to `_papers/` via API

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

## Without API Server

If the API server isn't running, clicking "Add to Shelf" will show the markdown content. You can copy it and create the file manually in `_papers/`.

## Directory Structure

```
_papers/           # Your papers
_layouts/          # Page templates
assets/js/         # Filter + arXiv fetcher
api_server.rb      # Local API server
```
