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
  
  /* Grid-Container für die Kacheln */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-bottom: 50px;
  }
  
  /* Das Aussehen der einzelnen Kachel */
  .card-box {
    display: block;
    padding: 25px;
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
    border-color: #2a5d8f;
  }
  
  .card-box h3 {
    margin-top: 0;
    color: #2a5d8f; /* Pilz-Chronik-Blau */
    font-size: 1.3em;
    margin-bottom: 10px;
  }

  .card-box p {
    color: #555;
    line-height: 1.5;
    margin-bottom: 0;
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
    <h3>🗺️ Geografie</h3>
    <p>Die Lebensorte der Vorfahren in Böhmen, Tirol und Sachsen auf der Karte.</p>
  </a>

  <a href="zeitleiste/" class="card-box">
    <h3>⏳ Geschichte</h3>
    <p>Chronologische Reise durch die Zeit: Von der Urzeit bis heute.</p>
  </a>

  <a href="https://www.macfamilytree.com/pilzw/Pilz-Chronik/index.html" target="_blank" class="card-box">
    <h3>🌳 Stammbaum</h3>
    <p>Die grafische Ansicht der Verwandtschaftsverhältnisse (MacFamilyTree).</p>
  </a>

  <a href="dna-herkunft/" class="card-box">
    <h3>🧬 DNA-Herkunft</h3>
    <p>Tiefe Wurzeln: Unsere Herkunft vor den Kirchenbüchern.</p>
  </a>

</div>

<hr style="margin: 40px 0;">

<div class="news-section">
  <h2>Neueste Einträge</h2>
  <ul style="list-style: none; padding: 0;">
    {% for post in site.posts limit:3 %}
      <li style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
        <span style="color: gray; font-size: 0.9em;">{{ post.date | date: "%d.%m.%Y" }}</span><br>
        <a href="{{ post.url | relative_url }}" style="font-size: 1.2em; font-weight: bold; text-decoration: none; color: #333;">
          {{ post.title }}
        </a>
        <br>
        <span style="color: #666;">{{ post.description }}</span>
      </li>
    {% endfor %}
  </ul>
</div>
