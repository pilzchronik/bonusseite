---
layout: home
title: Startseite
---

<style>
/* ------------------------------------------------------------------
   LOKALES CSS FÜR DAS DASHBOARD-LAYOUT
   ------------------------------------------------------------------ */

/* Intro-Box: Der Begrüßungsbereich */
.intro-section {
  background-color: #f0f4f8; /* Sehr helles Grau-Blau */
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 50px;
  text-align: center;
  border-bottom: 5px solid #ccdbe8;
}

.intro-section h1 {
  color: #2a5d8f; /* Pilz-Chronik Blau */
  margin-bottom: 15px;
}

.intro-section p {
  font-size: 1.1em;
  color: #4a5568;
  max-width: 800px;
  margin: 0 auto;
}

/* Grid-Container: Das Kachel-Layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

/* Die einzelnen Kacheln (Cards) */
.card-box {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-decoration: none!important; /* Unterstreichung entfernen */
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Hover-Effekt: Kachel hebt sich an */
.card-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(42, 93, 143, 0.15); /* Schatten in Blau-Nuance */
  border-color: #bwcfe0;
}

.card-box h3 {
  margin-top: 0;
  color: #2a5d8f;
  font-size: 1.4em;
  margin-bottom: 12px;
}

.card-box p {
  color: #555;
  line-height: 1.6;
  font-size: 0.95em;
  flex-grow: 1; /* Schiebt Inhalt nach oben */
}

/* Icon-Styling innerhalb der h3 */
.card-icon {
  margin-right: 8px;
}

/* Sektions-Trenner */
h2.section-title {
  margin-top: 40px;
  margin-bottom: 25px;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 10px;
  color: #333;
}

/* News-Liste Styling */
.post-meta-custom {
  font-size: 0.85em;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
}
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
  
  <a href="karte/" class="card-box">
    <h3><span class="card-icon">🗺️</span> Karte</h3>
    <p>
      <strong>Geografie der Familie.</strong><br>
      Visualisierung der Wanderungsbewegungen. Von den Ursprüngen im sächsischen Erzgebirge über die Heimat in Böhmen bis zur Gegenwart in Tirol.
    </p>
  </a>

  <a href="zeitleiste/" class="card-box">
    <h3><span class="card-icon">⏳</span> Zeitleiste</h3>
    <p>
      <strong>Geschichte im Zeitraffer.</strong><br>
      Eine chronologische Reise von den prähistorischen DNA-Wurzeln (25.000 v. Chr.) über das Mittelalter bis zum Abschluss der Chronik 2025.
    </p>
  </a>

  <a href="dna-herkunft/" class="card-box">
    <h3><span class="card-icon">🧬</span> DNA-Analyse</h3>
    <p>
      <strong>Tiefe Wurzeln.</strong><br>
      Ergebnisse der Y-DNA und mtDNA-Analysen. Herkunft vor den Kirchenbüchern: Haplogruppen J-FT159612 und H41a9 im Detail.
    </p>
  </a>

  <a href="downloads/" class="card-box">
    <h3><span class="card-icon">📂</span> Downloads</h3>
    <p>
      <strong>Daten & Fakten.</strong><br>
      Zugriff auf Register, Stammbaum-Übersichten und Korrekturblätter als PDF zum Herunterladen und Ausdrucken.
    </p>
  </a>

</div>

<hr>

<h2 class="section-title">Neueste Einträge aus der Werkstatt</h2>

<ul class="post-list">
  {% for post in site.posts limit:3 %}
    <li>
      <span class="post-meta-custom">{{ post.date | date: "%d.%m.%Y" }}</span>
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
