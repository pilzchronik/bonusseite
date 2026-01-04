---
layout: page
title: Aktuelles & Themen
permalink: /werkstatt/
---

<h1 style="color: #333; margin-bottom: 20px;">Werkstatt & Analysen</h1>

<style>
  /* --- FIX: Automatische Überschrift ausblenden --- */
  .post-header { display: none !important; }

  /* --- TYPOGRAFIE & BASIS --- */
  .page-content { 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; 
    color: #333; 
    line-height: 1.6; 
  }

  /* Intro-Bereich */
  .intro-text {
    max-width: 800px;
    margin-bottom: 30px;
    color: #555;
    font-size: 1.05em;
    border-left: 3px solid #2a5d8f;
    padding-left: 15px;
  }

  /* --- THEMEN-REGISTER (TOC) --- */
  .topic-cloud {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    padding: 20px;
    margin-bottom: 50px;
    border-radius: 4px;
    text-align: center;
  }

  .topic-label {
    display: block;
    font-size: 0.8em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: bold;
  }

  .topic-btn {
    display: inline-block;
    background: white;
    border: 1px solid #ddd;
    color: #2a5d8f;
    padding: 6px 12px;
    margin: 4px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 0.9em;
    font-weight: bold;
    transition: all 0.2s ease;
  }
  
  .topic-btn:hover {
    background: #2a5d8f;
    color: white;
    border-color: #2a5d8f;
    text-decoration: none;
  }
  
  .topic-count {
    background: #eee;
    color: #555;
    font-size: 0.8em;
    padding: 1px 6px;
    border-radius: 10px;
    margin-left: 5px;
  }

  /* --- KATEGORIE-SEKTIONEN --- */
  .category-section {
    margin-bottom: 60px;
    border-top: 2px solid #f0f0f0;
    padding-top: 40px;
  }

  .cat-header {
    font-size: 1.6em;
    color: #333;
    margin-bottom: 30px;
    font-weight: bold;
    border-left: 5px solid #2a5d8f;
    padding-left: 15px;
  }

  /* --- BEITRAGSKARTEN --- */
  .post-list { list-style: none; padding: 0; }

  .post-item {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  
  .post-meta {
    font-size: 0.85em;
    color: #888;
    margin-bottom: 4px;
    display: block;
  }

  .post-title {
    display: block;
    font-size: 1.3em;
    color: #2a5d8f;
    font-weight: bold;
    text-decoration: none;
    margin: 0 0 10px 0;
  }
  .post-title:hover { text-decoration: underline; }
  
  .post-excerpt { color: #555; line-height: 1.5; font-size: 0.95em; }

</style>

<div class="intro-text">
  Forschungsberichte sortiert nach Themengebieten. 
  Einige Beiträge sind mehreren Kategorien zugeordnet und erscheinen dementsprechend mehrfach.
</div>

<div class="topic-cloud">
  <span class="topic-label">Themen-Schnellzugriff</span>
  {% assign sorted_categories = site.categories | sort %}
  {% for category in sorted_categories %}
    <a href="#cat-{{ category[0] | slugify }}" class="topic-btn">
      {{ category[0] | capitalize }}
      <span class="topic-count">{{ category[1].size }}</span>
    </a>
  {% endfor %}
</div>

<div class="content-area">
  
  {% for category in sorted_categories %}
    {% assign cat_name = category[0] %}
    {% assign cat_posts = category[1] %}
    
    <div class="category-section" id="cat-{{ cat_name | slugify }}">
      <h2 class="cat-header">{{ cat_name | capitalize }}</h2>
      
      <ul class="post-list">
        {% for post in cat_posts %}
          <li class="post-item">
            <span class="post-meta">{{ post.date | date: "%d.%m.%Y" }}</span>
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <div class="post-excerpt">
              {{ post.excerpt | strip_html | truncatewords: 35 }}
            </div>
          </li>
        {% endfor %}
      </ul>
      
      <div style="text-align: right;">
        <a href="#top" style="font-size: 0.8em; color: #999; text-decoration: none;">▲ nach oben</a>
      </div>
    </div>
    
  {% endfor %}

</div>
