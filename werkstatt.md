---
layout: page
title: Aktuelles
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

  /* --- TOC / INHALTSVERZEICHNIS BOX --- */
  .toc-box {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    padding: 20px;
    margin-bottom: 50px;
    border-radius: 4px;
  }
  
  .toc-title {
    font-size: 0.85em;
    text-transform: uppercase;
    font-weight: bold;
    color: #2a5d8f;
    margin-bottom: 10px;
    display: block;
    letter-spacing: 1px;
  }

  .toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
    column-count: 1; /* Einspaltig auf Mobile */
  }
  
  /* Auf Desktop zweispaltig für Kompaktheit */
  @media (min-width: 768px) {
    .toc-list { column-count: 2; column-gap: 40px; }
  }

  .toc-item {
    margin-bottom: 6px;
    font-size: 0.95em;
    break-inside: avoid; /* Verhindert Umbruch innerhalb eines Titels */
  }

  .toc-item a {
    text-decoration: none;
    color: #444;
    border-bottom: 1px solid #eee;
  }
  .toc-item a:hover { color: #2a5d8f; border-color: #2a5d8f; }


  /* --- BEITRAGSLISTE MIT JAHRESTRENNER --- */
  .post-list { list-style: none; padding: 0; }
  
  .year-header {
    font-size: 1.8em;
    color: #ccc;
    border-bottom: 1px solid #eee;
    margin: 60px 0 30px 0;
    padding-bottom: 5px;
    font-weight: bold;
  }

  .post-item {
    margin-bottom: 40px;
    padding-left: 20px;
    border-left: 2px solid #eee;
  }
  
  .post-item:hover {
    border-left-color: #2a5d8f;
  }
  
  .post-meta-row {
    font-size: 0.85em;
    color: #888;
    margin-bottom: 5px;
    text-transform: uppercase;
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
  
  .post-excerpt { color: #555; line-height: 1.6; }
</style>

<div class="intro-text">
  Laufende Analysen, Hintergrundberichte und neue Erkenntnisse aus der digitalen Werkstatt. 
  Hier wird der Forschungsstand nach der Drucklegung dokumentiert.
</div>

<div class="toc-box">
  <span class="toc-title">Themenverzeichnis</span>
  <ul class="toc-list">
    {% for post in site.posts %}
      <li class="toc-item">
        <a href="#post-{{ post.id | slugify }}">
          {{ post.title }}
        </a>
      </li>
    {% endfor %}
  </ul>
</div>

<div class="post-list-container">
  
  {% assign current_year = "" %}
  
  {% for post in site.posts %}
    {% assign post_year = post.date | date: "%Y" %}
    
    {% if post_year != current_year %}
      <h2 class="year-header">{{ post_year }}</h2>
      {% assign current_year = post_year %}
    {% endif %}
    
    <div class="post-item" id="post-{{ post.id | slugify }}">
      <div class="post-meta-row">
        {{ post.date | date: "%d.%m." }} • 
        {% if post.categories.size > 0 %}
          {{ post.categories | join: ", " }}
        {% else %}
          Notiz
        {% endif %}
      </div>
      
      <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <div class="post-excerpt">
        {{ post.excerpt | strip_html | truncatewords: 40 }}
        <br>
        <a href="{{ post.url | relative_url }}" style="font-size: 0.9em; font-weight: bold; color: #2a5d8f; text-decoration: none;">[Weiterlesen]</a>
      </div>
    </div>

  {% endfor %}
</div>
