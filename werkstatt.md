---
layout: page
title: Aktuelles & Themen
permalink: /werkstatt/
---

<style>
  .post-header { display: none !important; }
  
  .intro-text {
    max-width: 800px;
    margin-bottom: 25px;
    color: #666;
  }

  .topic-cloud {
    background-color: #f9f9f9; 
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 4px;
  }

  .topic-btn {
    display: inline-block;
    background: #fff;
    border: 1px solid #ccc; 
    color: #2a5d8f;
    padding: 5px 12px; 
    margin: 4px;
    border-radius: 3px; 
    text-decoration: none;
    font-size: 0.9em;
  }

  .topic-btn:hover {
    background: #2a5d8f;
    color: white;
  }

  .category-section { 
    margin-bottom: 40px; 
  }

  .cat-header {
    font-size: 1.5em;
    color: #111;
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 2px solid #2a5d8f;
  }

  .post-list { 
    list-style: none; 
    padding: 0; 
  }

  .post-item {
    margin-bottom: 20px; 
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }

  .post-meta {
    color: #777;
    margin-right: 10px;
    font-size: 0.9em;
  }

  .post-title {
    color: #2a5d8f;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1em;
  }
  
  .post-title:hover { 
    text-decoration: underline; 
  }

  .post-excerpt { 
    color: #555;
    margin-top: 8px;
    display: block;
  }
</style>

<h1 style="color: #111; margin-bottom: 15px;">Werkstatt &amp; Analysen</h1>

<div class="intro-text">
  Forschungsberichte sortiert nach Themengebieten. 
  Beiträge mit mehreren Schwerpunkten erscheinen in den entsprechenden Kategorien mehrfach.
</div>

<div class="topic-cloud">
  <strong>Themen:</strong>
  {% assign alle_kategorien = site.categories | sort %}
  {% for kat in alle_kategorien %}
    <a href="#{{ kat[0] | slugify }}" class="topic-btn">
      {{ kat[0] }} ({{ kat[1].size }})
    </a>
  {% endfor %}
</div>

{% for kat in alle_kategorien %}
<div class="category-section" id="{{ kat[0] | slugify }}">
  <h2 class="cat-header">{{ kat[0] }}</h2>
  
  <ul class="post-list">
    {% for post in kat[1] %}
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
</div>
{% endfor %}
