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
  
  /* Das Raster für die Kacheln */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-bottom: 50px;
  }
  
  /* Aussehen der einzelnen Kachel */
  .card-box {
    display: block;
    padding: 25px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-decoration: none !important;
    color: #333 !important;
    background: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    transition: all 0.2s ease;
  }
  
  /* Hover-Effekt (Maus drüberfahren) */
  .card-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    border-color: #2a5d8f;
  }
  
  .card-box h3 {
    margin-top: 0;
    color: #2a5d8f; /* Pilz-Blau */
    font-size: 1.3em;
    margin-bottom: 10px;
  }

  .card-box p {
    color: #666;
    line-height: 1.5;
    margin: 0;
  }

  /* News-Bereich */
  .news-section {
    margin-top: 60px;
  }
  .news-item {
    margin-bottom: 20px; 
    padding-bottom: 20px; 
    border-bottom: 1px solid #eee;
  }
  .news-date {
    color: gray; 
    font-size: 0.85em;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 5px;
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

  <a href="https://www.pilz.fun" target="_blank" class="card-box">
    <h3>🌳 Stammbaum</h3>
    <p>Direktzugriff auf die TNG-Datenbank. Durchsuchen Sie alle Personen, Daten und Verknüpfungen.</p>
  </a>
  
  <a href="karte/" class="card-box">
    <h3>🗺️ Karte der Lebensorte</h3>
    <p>Die Geografie der Familie: Visualisierung der Wanderung von Sachsen über Böhmen nach Tirol.</p>
  </a>

  <a href="zeitleiste/" class="card-box">
    <h3>⏳ Zeitleiste</h3>
    <p>Geschichte im Zeitraffer: Von den prähistorischen DNA-Wurzeln bis zur Gegenwart.</p>
  </a>

  <a href="dna-herkunft/" class="card-box">
    <h3>🧬 DNA-Analyse</h3>
    <p>Tiefe Wurzeln: Unsere Herkunft (Haplogruppen J-M172 & H41a9) vor den Kirchenbüchern.</p>
  </a>

  <a href="downloads/" class="card-box">
    <h3>📂 Downloads & Register</h3>
    <p>PDF-Dokumente, Korrekturlisten und ergänzende Übersichten zum Buch.</p>
  </a>

  <a href="links/" class="card-box">
    <h3>🔗 Quellen & Links</h3>
    <p>Sammlung aller im Buch verwendeten Online-Quellen, Archive und Portale.</p>
  </a>

</div>

<div class="news-section">
  <h2 style="color: #333; border-bottom: 2px solid #2a5d8f; display: inline-block; padding-bottom: 5px; margin-bottom: 20px;">Neueste Einträge</h2>
  <ul style="list-style: none; padding: 0;">
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
