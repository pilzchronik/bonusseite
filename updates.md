---
layout: page
title: Chronik-Updates
permalink: /updates/
---

<style>
  /* Layout für die Update-Zentrale */
 .update-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  /* Auf größeren Bildschirmen: Zwei Spalten nebeneinander */
  @media (min-width: 800px) {
   .update-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Linke Spalte: Berichtigungen (Rot) */
 .col-corrections {
    border-top: 4px solid #8f2a2a; /* Signalrot */
    background-color: #fffcfc; /* Sehr helles Rot */
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }

  /* Rechte Spalte: Ergänzungen (Blau) */
 .col-additions {
    border-top: 4px solid #2a5d8f; /* Pilz-Blau */
    background-color: #f4f8fb; /* Sehr helles Blau */
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }

  /* Überschriften Design */
  h2.sec-title {
    font-family: "Merriweather", serif;
    margin-top: 0;
    font-size: 1.4rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: 0.8rem;
    margin-bottom: 1.2rem;
  }

  /* Listen Design */
 .update-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

 .update-item {
    margin-bottom: 1.2rem;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    padding-bottom: 0.8rem;
  }
  
 .update-item:last-child {
    border-bottom: none;
  }

  /* Metadaten (Band/Seite etc.) */
 .meta-tag {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    padding: 2px 6px;
    border-radius: 3px;
    margin-bottom: 4px;
    letter-spacing: 0.5px;
  }

 .tag-vol { background: #333; color: #fff; }
 .tag-date { color: #888; font-size: 0.85rem; display: block; margin-top: 2px; }

  /* Links zu den Posts */
  a.post-link {
    text-decoration: none;
    font-weight: bold;
    color: #222;
    display: block;
    line-height: 1.4;
  }
  a.post-link:hover { text-decoration: underline; color: #2a5d8f; }

 .btn-small {
      display: inline-block;
      font-size: 0.9rem;
      color: #666;
      border: 1px solid #ccc;
      padding: 5px 10px;
      border-radius: 4px;
      text-decoration: none;
  }
 .btn-small:hover {
      background: #eee;
      color: #333;
  }
</style>

<div class="intro-text">
  <p>
    Dieses digitale Register dient als offizielle, lebende Ergänzung zu den gedruckten Bänden 1 & 2. 
    Hier finden Sie Korrekturen von Druckfehlern (links) sowie neue Forschungsergebnisse, die nach Drucklegung entdeckt wurden (rechts).
  </p>
</div>

<div class="update-container">

  <div class="col-corrections">
    <h2 class="sec-title" style="color: #8f2a2a;">⚠ Berichtigungen</h2>
    
    <ul class="update-list">
      {% assign corrections = site.categories.berichtigung %}
      {% if corrections.size > 0 %}
        {% for post in corrections limit:10 %}
        <li class="update-item">
          {% if post.buch_band %}
            <span class="meta-tag tag-vol">Band {{ post.buch_band }} / S. {{ post.buch_seite }}</span>
          {% endif %}
          
          <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
          <span class="tag-date">Aktualisiert am {{ post.date | date: "%d.%m.%Y" }}</span>
        </li>
        {% endfor %}
      {% else %}
        <li class="update-item" style="color:#666; font-style:italic;">Keine offenen Berichtigungen bekannt.</li>
      {% endif %}
    </ul>
    
    <div style="margin-top:1.5rem; text-align: right;">
      <a href="/downloads/" class="btn-small">Alle als PDF &rarr;</a>
    </div>
  </div>

  <div class="col-additions">
    <h2 class="sec-title" style="color: #2a5d8f;">✚ Neue Funde</h2>
    
    <ul class="update-list">
      {% assign additions = site.categories.ergaenzung %}
      {% if additions.size > 0 %}
        {% for post in additions limit:10 %}
        <li class="update-item">
          <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
          <span class="tag-date">{{ post.date | date: "%d.%m.%Y" }}</span>
          <p style="font-size: 0.9rem; margin: 0.4rem 0 0 0; color: #555;">
            {{ post.excerpt | strip_html | truncatewords: 15 }}
          </p>
        </li>
        {% endfor %}
      {% else %}
        <li class="update-item" style="color:#666; font-style:italic;">Derzeit keine neuen Ergänzungen.</li>
      {% endif %}
    </ul>
  </div>

</div>