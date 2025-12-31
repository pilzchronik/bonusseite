---
layout: default
title: Startseite
---

<style>
  /* Intro-Box oben */
  .intro-section {
    text-align: center;
    margin-bottom: 40px;
    padding: 30px;
    background-color: #f0f4f8;
    border-radius: 8px;
    border-bottom: 4px solid #ccdbe8;
  }
  
  /* Kacheln nebeneinander */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-bottom: 50px;
  }
  
  /* Aussehen der einzelnen Kachel */
  .card-box {
    display: block;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-decoration: none !important;
    color: #333 !important;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    transition: all 0.2s ease;
  }
  
  /* Hover-Effekt */
  .card-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    border-color: #aaa;
  }
  
  .card-box h3 {
    margin-top: 0;
    color: #2a5d8f;
    font-size: 1.2em;
  }

  /* News-Bereich */
  .news-item {
    margin-bottom: 20px; 
    padding-bottom: 20px; 
    border-bottom: 1px solid #eee;
  }
  .news-date {
    color: gray; 
    font-size: 0.9em;
    display: block;
    margin-bottom: 4px;
  }
  .news-link {
    font-size: 1.2em; 
    font-weight: bold; 
    text-decoration: none;
    color: #2a5d8f;
  }
  .news-link:hover {
    text-decoration: underline;
  }
  .news-desc {
    color: #555;
    margin-top: 5px;
    display: block;
  }
</style>

<div class="intro-section">
  <h1>Willkommen im digitalen Pilz-Archiv</h1>
  <p style="font-size: 1.1em; color: #555;">
    Dies ist die offizielle Ergänzung zur gedruckten Familienchronik (Band 1 & 2).<br>
    Hier finden Sie interaktive Inhalte, neue Funde und Korrekturen.
  </p>
</div>

<div class="grid-container">
  
  <a href="karte/" class="card-box">
    <h3>🗺️ Karte</h3>
    <p>Die Lebensorte der Vorfahren in Böhmen, Tirol und Sachsen.</p>
  </a>

  <a href="zeitleiste/" class="card-box">
    <h3>⏳ Zeitleiste</h3>
    <p>Von der Urzeit bis heute: Geschichte im Zeitstrahl.</p>
  </a>

  <a href="dna-herkunft/" class="card-box">
    <h3>🧬 DNA-Analyse</h3>
    <p>Tiefe Wurzeln: Unsere Herkunft vor den Kirchenbüchern.</p>
  </a>

  <a href="downloads/" class="card-box">
    <h3>📂 Downloads</h3>
    <p>Register, Übersichten und Korrekturen als PDF.</p>
  </a>

</div>

<hr style="margin: 40px 0;">

<div class="news-section">
  <h2 style="color: #333; border-bottom: 2px solid #2a5d8f; display: inline-block; padding-bottom: 5px;">Neueste Einträge</h2>
  <ul style="list-style: none; padding: 0; margin-top: 20px;">
    {% for post in site.posts limit:3 %}
      <li class="news-item">
        <span class="news-date">{{ post.date | date: "%d.%m.%Y" }}</span>
        <a href="{{ post.url | relative_url }}" class="news-link">
          {{ post.title }}
        </a>
        <span class="news-desc">{{ post.description }}</span>
      </li>
    {% endfor %}
  </ul>
</div>
