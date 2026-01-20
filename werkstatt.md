---
layout: page
title: Aktuelles & Themen
permalink: /werkstatt/
---

<h1 style="color: #111; margin-bottom: 15px;">Werkstatt & Analysen</h1>

<style>
  .post-header { display: none !important; }
  
  .page-content { 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; 
    color: #333; 
    line-height: 1.5; 
  }

  .intro-text {
    max-width: 800px;
    margin-bottom: 20px;
    color: #666;
    font-size: 1em;
  }

  /* Suchfeld */
  .search-container {
    margin-bottom: 30px;
    max-width: 600px;
  }
  
  .search-box {
    width: 100%;
    padding: 12px 15px;
    font-size: 1em;
    border: 2px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.2s;
  }
  
  .search-box:focus {
    outline: none;
    border-color: #2a5d8f;
  }
  
  .search-info {
    font-size: 0.85em;
    color: #888;
    margin-top: 8px;
  }

  /* Beitragsliste */
  .post-list { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
  }

  .post-item {
    margin-bottom: 20px; 
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    transition: opacity 0.2s;
  }
  
  .post-item.hidden {
    display: none;
  }
  
  .post-item:last-child { 
    border-bottom: none; 
  }

  .post-meta {
    font-size: 0.85em;
    color: #777;
    margin-bottom: 5px;
    display: block;
  }

  .post-title {
    font-size: 1.2em;     
    color: #2a5d8f;
    font-weight: 600;
    text-decoration: none;
    display: block;
    margin-bottom: 8px;
  }
  
  .post-title:visited { 
    color: #2a5d8f; 
  }
  
  .post-title:hover { 
    text-decoration: underline; 
    color: #1a3d5c;
  }
  
  .post-excerpt { 
    color: #555;
    line-height: 1.5; 
    font-size: 0.95em;
  }

  .no-results {
    text-align: center;
    padding: 40px 20px;
    color: #999;
    font-style: italic;
  }
</style>

<div class="intro-text">
  Forschungsberichte und Analysen in chronologischer Reihenfolge.
  Nutzen Sie das Suchfeld, um gezielt nach Themen oder Begriffen zu suchen.
</div>

<div class="search-container">
  <input type="text" 
         id="searchBox" 
         class="search-box" 
         placeholder="Suche nach Themen, Namen, Orten..."
         autocomplete="off">
  <div class="search-info" id="searchInfo">
    <span id="resultCount">{{ site.posts | size }}</span> Beiträge
  </div>
</div>

<ul class="post-list" id="postList">
  {% assign posts_by_date = site.posts | sort: 'date' | reverse %}
  {% for post in posts_by_date %}
    <li class="post-item" data-searchable="{{ post.title | downcase }} {{ post.excerpt | strip_html | downcase }}">
      <span class="post-meta">{{ post.date | date: "%d.%m.%Y" }}</span>
      <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <div class="post-excerpt">
        {{ post.excerpt | strip_html | truncatewords: 30 }}
      </div>
    </li>
  {% endfor %}
</ul>

<div class="no-results" id="noResults" style="display: none;">
  Keine Beiträge gefunden. Versuchen Sie andere Suchbegriffe.
</div>

<script>
  const searchBox = document.getElementById('searchBox');
  const postList = document.getElementById('postList');
  const posts = postList.getElementsByClassName('post-item');
  const resultCount = document.getElementById('resultCount');
  const noResults = document.getElementById('noResults');
  const totalPosts = posts.length;

  searchBox.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    let visibleCount = 0;

    for (let post of posts) {
      const searchableText = post.getAttribute('data-searchable');
      
      if (searchTerm === '' || searchableText.includes(searchTerm)) {
        post.classList.remove('hidden');
        visibleCount++;
      } else {
        post.classList.add('hidden');
      }
    }

    // Ergebnis-Anzeige aktualisieren
    if (searchTerm === '') {
      resultCount.textContent = totalPosts;
      noResults.style.display = 'none';
    } else {
      resultCount.textContent = visibleCount;
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
</script>
