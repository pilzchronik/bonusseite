---
layout: home
title: Startseite
---

<style>
/* LOKALES CSS FÜR DAS KACHEL-LAYOUT */
.intro-section {
  background-color: #f0f4f8;
  padding: 30px;
  border-radius: 5px;
  margin-bottom: 40px;
  text-align: center;
  border-bottom: 4px solid #ccdbe8;
}
.intro-section h1 { color: #2a5d8f; margin-bottom: 10px; }
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}
.card-box {
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  text-decoration: none!important;
  color: #333;
  display: block;
  transition: transform 0.2s;
}
.card-box:hover {
  transform: translateY(-5px);
  border-color: #2a5d8f;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}
.card-box h3 { color: #2a5d8f; margin-top: 0; }
.card-icon { margin-right: 5px; }
</style>

<div class="intro-section">
  <h1>Willkommen im digitalen Pilz-Archiv</h1>
  <p>
    Dies ist die offizielle Ergänzung zur gedruckten Familienchronik (Band 1 & 2).
    Hier finden Sie interaktive Inhalte, die über das Buch hinausgehen: 
    neue Archivfunde, genetische Analysen und laufende Korrekturen.
  </p>
</div>

<div class="grid-container">
  
  <a href="{{ '/karte/' | relative_url }}" class="card-box">
    <h3><span class="card-icon">🗺️</span> Karte</h3>
    <p>
      <strong>Geografie der Familie.</strong><br>
      Visualisierung der Wanderungsbewegungen. Von den Ursprüngen im sächsischen Erzgebirge über die Heimat in Böhmen bis zur Gegenwart in Tirol.
    </p>
  </a>

  <a href="{{ '/zeitleiste/' | relative_url }}" class="card-box">
    <h3><span class="card-icon">⏳</span> Zeitleiste</h3>
    <p>
      <strong>Geschichte im Zeitraffer.</strong><br>
      Eine chronologische Reise von den prähistorischen DNA-Wurzeln (25.000 v. Chr.) über das Mittelalter bis zum Abschluss der Chronik 2025.
    </p>
  </a>

  <a href="{{ '/dna-herkunft/' | relative_url }}" class="card-box">
    <h3><span class="card-icon">🧬</span> DNA-Analyse</h3>
    <p>
      <strong>Tiefe Wurzeln.</strong><br>
      Ergebnisse der Y-DNA und mtDNA-Analysen. Herkunft vor den Kirchenbüchern: Haplogruppen J-FT159612 und H41a9 im Detail.
    </p>
  </a>

  <a href="{{ '/downloads/' | relative_url }}" class="card-box">
    <h3><span class="card-icon">📂</span> Downloads</h3>
    <p>
      <strong>Daten & Fakten.</strong><br>
      Zugriff auf Register, Stammbaum-Übersichten und Korrekturblätter als PDF zum Herunterladen und Ausdrucken.
    </p>
  </a>

</div>

<hr>

<h2>Neueste Einträge</h2>

<ul class="post-list">
  {% for post in site.posts limit:3 %}
    <li>
      <span class="post-meta">{{ post.date | date: "%d.%m.%Y" }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      {% if post.description %}
        <p>{{ post.description }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>
