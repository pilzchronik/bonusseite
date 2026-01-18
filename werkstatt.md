---
layout: page
title: Aktuelles & Themen
permalink: /werkstatt/
---

<div id="top"></div>
<h1 style="color: #111; margin-bottom: 15px;">Werkstatt &amp; Analysen</h1>

<style>
  .post-header { display: none !important; }
  
  .page-content { 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; 
    color: #333; 
    line-height: 1.5; 
  }

  .intro-text {
    max-width: 800px;
    margin-bottom: 25px;
    color: #666;
    font-size: 1em;
  }

  .topic-cloud {
    background-color: #f9f9f9; 
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 4px;
  }

  .topic-label {
    display: inline-block;
    font-size: 0.85em;
    font-weight: bold;
    color: #333;
    margin-right: 10px;
  }

  .topic-btn {
    display: inline-block;
    background: #fff;
    border: 1px solid #ccc; 
    color: #2a5d8f;
    padding: 3px 10px; 
    margin: 2px;
    border-radius: 3px; 
    text-decoration: none;
    font-size: 0.85em;
    transition: all 0.2s ease;
  }

  .topic-btn:hover {
    background: #2a5d8f;
    color: white;
    border-color: #2a5d8f;
  }

  .topic-count {
    color: #888;
    font-size: 0.8em;
    margin-left: 4px;
  }

  .category-section { margin-bottom: 40px; }

  .cat-header {
    font-size: 1.4em;
    color: #111;
    margin-bottom: 15px;
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 1px solid #eaeaea;
  }

  .post-list { list-style: none; padding: 0; margin: 0; }

  .post-item {
    margin-bottom: 15px; 
    padding-bottom: 15px;
    border-bottom: 1px dotted #ccc;
  }
  .post-item:last-child { border-bottom: none; }

  .post-meta {
    font-size: 0.8em;
    color: #777;
    margin-right: 8px;
    display: inline-block;
    min-width: 80px;
  }

  .post-title {
    display: inline-block; 
    font-size: 1.15em;     
    color: #2a5d8f !important;
    font-weight: bold;
    text-decoration: none;
  }
  .post-title:hover { text-decoration: underline; }

  .post-excerpt { 
    color: #444;
    line-height: 1.4; 
    font-size: 0.95em; 
    margin-top: 3px;
    display: block;
  }

  .top-link {
    font-size: 0.75em;
    color: #999;
    text-decoration: none;
  }
  .top-link:hover { color: #333; }
</style>

<div class="intro-text">
  Forschungsberichte sortiert nach Themengebieten. 
  Beiträge mit mehreren Schwerpunkten erscheinen in den entsprechenden Kategorien mehrfach.
</div>

<!-- VEREINFACHTE THEMENWOLKE -->
<div class="topic-cloud">
  <span class="topic-label">Themen:</span>
  {% assign all_cats = site.categories | sort %}
  {% for cat in all_cats %}
    <a href="#cat-{{ cat[0] | slugify }}" class="topic-btn">
      {{ cat[0] }}<span class="topic-count">({{ cat[1].size }})</span>
    </a>
  {% endfor %}
</div>

<!-- KATEGORIE-SEKTIONEN -->
{% for cat in all_cats %}
<div class="category-section" id="cat-{{ cat[0] | slugify }}">
  <h2 class="cat-header">{{ cat[0] }}</h2>
  
  <ul class="post-list">
    {% for post in cat[1] %}
      <li class="post-item">
        <span class="post-meta">{{ post.date | date: "%d.%m.%Y" }}</span>
        <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        
        {% if post.excerpt %}
        <span class="post-excerpt">
          {{ post.excerpt | strip_html | truncatewords: 30 }}
        </span>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
  
  <div style="text-align: right; margin-top: 5px;">
    <a href="#top" class="top-link">▲ nach oben</a>
  </div>
</div>
{% endfor %}
