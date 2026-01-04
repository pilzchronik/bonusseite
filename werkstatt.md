---
layout: page
title: Aktuelles & Themen
permalink: /werkstatt/
---

<h1 style="color: #333; margin-bottom: 15px;">Werkstatt & Analysen</h1>

<style>
  /* --- FIX: Automatische Überschrift ausblenden --- */
  .post-header { display: none !important; }

  /* --- TYPOGRAFIE & BASIS --- */
  .page-content { 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; 
    color: #333; 
    line-height: 1.5; 
  }

  /* Intro-Bereich: Kompakter */
  .intro-text {
    max-width: 800px;
    margin-bottom: 25px;
    color: #666;
    font-size: 1em;
  }

  /* --- THEMEN-REGISTER (TOC) - Ruhiger gestaltet --- */
  .topic-cloud {
    background-color: #f9f9f9; /* Sehr heller Hintergrund statt harter Box */
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 4px;
    text-align: left; /* Linksbündig wirkt oft ruhiger als zentriert */
  }

  .topic-label {
    display: inline-block;
    font-size: 0.85em;
    font-weight: bold;
    color: #555;
    margin-right: 10px;
  }

  .topic-btn {
    display: inline-block;
    background: #fff;
    border: 1px solid #e0e0e0; /* Zarterer Rahmen */
    color: #444;
    padding: 3px 10px; /* Kleiner */
    margin: 2px;
    border-radius: 3px; /* Eckiger wirkt oft seriöser/ruhiger als rund */
    text-decoration: none;
    font-size: 0.85em;
    transition: all 0.2s ease;
  }
  
  .topic-btn:hover {
    background: #2a5d8f;
    color: white;
    border-color: #2a5d8f;
    text-decoration: none;
  }
  
  .topic-count {
    color: #999;
    font-size: 0.8em;
    margin-left: 4px;
  }
  .topic-btn:hover .topic-count { color: #ddd; }

  /* --- KATEGORIE-SEKTIONEN --- */
  .category-section {
    margin-bottom: 40px; /* Reduzierter Abstand (vorher 60) */
    /* Keine Trennlinie oben, wirkt ruhiger */
  }

  .cat-header {
    font-size: 1.4em;
    color: #2a5d8f; /* Farbe statt Balken */
    margin-bottom: 15px;
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 1px solid #eaeaea; /* Sehr dezente Linie UNTER der Überschrift */
    padding-left: 0; /* Kein Einzug mehr */
    border-left: none; /* Balken entfernt */
  }

  /* --- BEITRAGSLISTE --- */
  .post-list { list-style: none; padding: 0; margin: 0; }

  .post-item {
    margin-bottom: 15px; /* Kompakter (vorher 30) */
    padding-bottom: 15px;
    border-bottom: 1px dotted #eee; /* Dotted ist weniger dominant als solid */
  }
  
  .post-item:last-child { border-bottom: none; }

  .post-meta {
    font-size: 0.8em;
    color: #999;
    margin-right: 8px;
    display: inline-block; /* Datum in einer Zeile mit Titel? Oder darüber. Hier: darüber aber klein. */
  }

  .post-title {
    display: inline-block; /* Damit es nicht zu wuchtig wirkt */
    font-size: 1.15em;     /* Etwas kleiner */
    color: #333;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 2px;
  }
  .post-title:hover { text-decoration: underline; color: #2a5d8f; }
  
  .post-excerpt { 
    color: #666; 
    line-height: 1.4; 
    font-size: 0.9em; 
    margin-top: 3px;
  }

  /* "Nach oben" Link dezenter */
  .top-link {
    font-size: 0.75em;
    color: #bbb;
    text-decoration: none;
  }
  .top-link:hover { color: #2a5d8f; }

</style>

<div class="intro-text">
  Forschungsberichte sortiert nach Themengebieten. 
  Beiträge mit mehreren Schwerpunkten erscheinen in den entsprechenden Kategorien mehrfach.
</div>

<div class="topic-cloud">
  <span class="topic-label">Themen:</span>
  {% assign sorted_categories = site.categories | sort %}
  {% for category in sorted_categories %}
    <a href="#cat-{{ category[0] | slugify }}" class="topic-btn">
      {{ category[0] | capitalize }}<span class="topic-count">{{ category[1].size }}</span>
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
            <div style="margin-bottom: 2px;">
               <span class="post-meta">{{ post.date | date: "%d.%m.%Y" }}</span>
               <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </div>
            
            <div class="post-excerpt">
              {{ post.excerpt | strip_html | truncatewords: 30 }}
            </div>
          </li>
        {% endfor %}
      </ul>
      
      <div style="text-align: right; margin-top: 10px;">
        <a href="#top" class="top-link">▲ nach oben</a>
      </div>
    </div>
    
  {% endfor %}

</div>
