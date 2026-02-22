require 'net/http'
require 'json'
require 'uri'

module Jekyll
  class PaperMetadataGenerator < Generator
    safe true
    priority :low

    def generate(site)
      @site = site
      papers = site.collections['papers']&.docs || []
      
      papers.each do |paper|
        enrich_paper(paper) if needs_enrichment?(paper)
      end
    end

    private

    def needs_enrichment?(paper)
      paper.data['arxiv'] || paper.data['doi']
    end

    def enrich_paper(paper)
      if paper.data['arxiv'] && !paper.data['title']
        fetch_from_arxiv(paper)
      elsif paper.data['doi'] && !paper.data['title']
        fetch_from_crossref(paper)
      end
    end

    def fetch_from_arxiv(paper)
      arxiv_id = paper.data['arxiv']
      url = "http://export.arxiv.org/api/query?id_list=#{arxiv_id}"
      
      uri = URI(url)
      response = Net::HTTP.get(uri)
      
      if response.include?('<entry>')
        title = response.match(/<title>([^<]+)<\/title>/m)
        summary = response.match(/<summary>([^<]+)<\/summary>/m)
        authors = response.scan(/<author>\s*<name>([^<]+)<\/name>/m).flatten
        
        paper.data['title'] ||= title[1].strip if title
        paper.data['abstract'] ||= summary[1].strip if summary
        paper.data['authors'] ||= authors
      end
    rescue => e
      Jekyll.logger.warn "PaperMetadata:", "Failed to fetch arXiv #{arxiv_id}: #{e.message}"
    end

    def fetch_from_crossref(paper)
      doi = paper.data['doi']
      url = "https://api.crossref.org/works/#{doi}"
      
      uri = URI(url)
      req = Net::HTTP::Get.new(uri)
      req['User-Agent'] = 'WhiteShelf Jekyll Theme (mailto:example@example.com)'
      
      response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
        http.request(req)
      end

      if response.code == '200'
        data = JSON.parse(response.body)['message']
        
        paper.data['title'] ||= Array(data['title'])&.first
        paper.data['authors'] ||= data['author']&.map { |a| "#{a['given']} #{a['family']}" }
        paper.data['year'] ||= data['published']&.dig('date-parts')&.first&.first
        paper.data['abstract'] ||= data['abstract']
      end
    rescue => e
      Jekyll.logger.warn "PaperMetadata:", "Failed to fetch DOI #{doi}: #{e.message}"
    end
  end

  class BibtexToCollectionGenerator < Generator
    safe true
    priority :normal

    def generate(site)
      return unless site.config.dig('scholar', 'auto_generate_collections')
      
      bib_file = site.config.dig('scholar', 'bibliography') || 'papers.bib'
      bib_path = File.join(site.source, '_bibliography', bib_file)
      
      return unless File.exist?(bib_path)
      
      papers_dir = File.join(site.source, '_papers')
      Dir.mkdir(papers_dir) unless Dir.exist?(papers_dir)
      
      content = File.read(bib_path)
      entries = content.scan(/@(\w+)\{([^,]+),\s*([^@]*?)\n\}/m)
      
      entries.each do |type, key, fields|
        next if File.exist?(File.join(papers_dir, "#{key}.md"))
        
        front_matter = parse_bibtex_fields(fields)
        front_matter['key'] = key
        front_matter['layout'] = 'paper'
        front_matter['date_added'] = Date.today.to_s
        
        File.write(
          File.join(papers_dir, "#{key}.md"),
          "---\n#{front_matter.to_yaml}---\n"
        )
      end
    end

    private

    def parse_bibtex_fields(fields)
      data = {}
      fields.scan(/(\w+)\s*=\s*[{\"]([^}\"]*)[}\"]/).each do |key, value|
        case key.downcase
        when 'title' then data['title'] = value.strip
        when 'author' then data['authors'] = value.split(' and ').map(&:strip)
        when 'year' then data['year'] = value.to_i
        when 'abstract' then data['abstract'] = value.strip
        when 'doi' then data['doi'] = value.strip
        when 'keywords' then data['tags'] = value.split(',').map(&:strip)
        end
      end
      data
    end
  end
end
