---
layout: page
title: Werkstatt
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

  /* Intro (Konsistent mit Quellen-Seite) */
  .intro-text {
    max-width: 800px;
    margin-bottom: 40px;
    color: #555;
    font-size: 1.05em;
    border-left: 3px solid #2a5d8f;
    padding-left: 15px;
  }

  /* Disclaimer-Box */
  .update-note {
    background: #f8f9fa;
    color: #666;
    font-size: 0.95em;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 50px;
    border: 1px solid #e9ecef;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* Blog-Liste */
  .post-list { list-style: none; padding: 0; }
  
  .post-item {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
  }
  
  .post-date { 
    color: #888; 
    font-size: 0.85em; 
    text-transform: uppercase; 
    letter-spacing: 1px;
    display: block;
    margin-bottom: 5px;
  }
  
  .post-title {
    display: block;
    font-size: 1.4em;
    color: #2a5d8f; /* Pilz-Blau */
    font-weight: bold;
    text-decoration: none;
    margin: 0 0 10px 0;
  }
  .post-title:hover { text-decoration: underline; }
  
  .post-excerpt { color: #555; line-height: 1.6; }
</style>

<div class="intro-text">
  Laufende Analysen, Hintergrundberichte und neue Erkenntnisse aus der digitalen Werkstatt zur Pilz-Chronik. Hier wird der Forschungsstand nach Drucklegung dokumentiert.
</div>

<div class="update-note">
  <span>ℹ️</span> 
  <em>Neue Beiträge erscheinen unregelmäßig und abhängig vom Fortgang der Forschung.</em>
</div>

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-item">
      <span class="post-date">{{ post.date | date: "%d.%m.%Y" }}</span>
      <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <div class="post-excerpt">{{ post.excerpt }}</div>
    </li>
  {% endfor %}
</ul>
