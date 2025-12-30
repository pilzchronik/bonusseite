---
layout: default
title: Startseite
permalink: /
---

<style>
  /* Hero Sektion: Der Willkommensbereich */
.hero-section {
    background-color: #f8f9fa;
    border-bottom: 4px solid #2a5d8f; /* Pilz-Chronik Blau */
    padding: 3rem 2rem;
    text-align: center;
    margin-bottom: 3rem;
    border-radius: 4px;
  }

.hero-title {
    font-family: "Merriweather", Georgia, serif;
    color: #1e2b37;
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

.hero-subtitle {
    font-family: "Lato", sans-serif;
    font-size: 1.1rem;
    color: #555;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Grid System für die Kacheln */
.tile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

.tile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 2.5rem 2rem; /* Mehr Padding für mehr Weißraum */
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    text-decoration: none;
    color: #333;
    position: relative;
    overflow: hidden;
  }

  /* Blauer Akzentbalken oben */
.tile::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px; /* Dickerer Balken für Präsenz */
    background: #2a5d8f;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

.tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    border-color: #2a5d8f;
  }

.tile:hover::before {
    transform: scaleX(1);
  }

  /* Titel jetzt deutlich größer und ohne Icon */
.tile h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: "Merriweather", serif;
    color: #2a5d8f;
    font-size: 1.8rem; /* Vergrößert */
    line-height: 1.3;
  }

.tile p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 1.5rem;
  }

.tile-cta {
    font-weight: bold;
    font-size: 0.9rem;
    color: #2a5d8f;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }
  
.tile-cta::after {
    content: "→";
    margin-left: 5px;
    transition: margin-left 0.2s;
  }
  
.tile:hover.tile-cta::after {
    margin-left: 10px;
  }

  /* Bereich: Neueste Forschung */
.latest-insight {
    margin-top: 4rem;
    border-top: 1px solid #eee;
    padding-top: 2rem;
  }
  
.insight-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.5rem;
  }

.insight-label {
    background: #eef4fa;
    color: #2a5d8f;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>

<div class="hero-section">
  <h1 class="hero-title">Willkommen im digitalen Pilz-Archiv</h1>
  <p class="hero-subtitle">
    Die offizielle Ergänzung zur gedruckten Familienchronik (Band 1 & 2). 
    Erforschen Sie interaktive Karten, tiefgehende DNA-Analysen und die neuesten Funde aus unserer digitalen Werkstatt.
  </p>
</div>

<div class="tile-grid">

  <a href="/karte/" class="tile">
    <h3>Lebensorte & Karte</h3>
    <p>
      Von den Ursprüngen in Sachsen (Dörnthal) über die Heimat in Böhmen (Kallich) bis in die Gegenwart in Tirol.
      Verfolgen Sie die Migration der Familie auf der interaktiven Karte.
    </p>
    <span class="tile-cta">Zur Karte</span>
  </a>

  <a href="/zeitleiste/" class="tile">
    <h3>Die Zeitleiste</h3>
    <p>
      Geschichte im Kontext: Von der ersten Erwähnung 1290 bis zur Vertreibung 1945. 
      Sehen Sie, wie weltgeschichtliche Ereignisse wie der 30-jährige Krieg das Familienschicksal prägten.
    </p>
    <span class="tile-cta">Zum Zeitstrahl</span>
  </a>

  <a href="/dna-herkunft/" class="tile">
    <h3>DNA & Herkunft</h3>
    <p>
      Tiefe Wurzeln: Die Analyse der Haplogruppen J-FT159612 (Väterlich) und H41a9 (Mütterlich) offenbart Herkünfte, 
      die weit vor den Kirchenbüchern liegen.
    </p>
    <span class="tile-cta">Zur Analyse</span>
  </a>

  <a href="/downloads/" class="tile">
    <h3>Quellen & Downloads</h3>
    <p>
      Zugriff auf Register, PDF-Korrekturen und weiterführende Links zu Datenbanken und Archiven.
      Die Basis für Ihre eigene Forschung.
    </p>
    <span class="tile-cta">Zum Archiv</span>
  </a>

</div>

<div class="latest-insight">
  <div class="insight-header">
    <h2 style="margin:0; font-family: 'Merriweather', serif; color:#333;">Neues aus der Forschung</h2>
    <a href="/updates/" style="font-size:0.9rem; color:#666;">Alle Updates ansehen &rarr;</a>
  </div>

  {% assign latest_research = site.categories.ergaenzung | first %}
  {% if latest_research %}
    <div style="background: #fff; border: 1px solid #eee; padding: 1.5rem; display: flex; gap: 1.5rem; align-items: center;">
      <div style="flex: 1;">
        <span class="insight-label">Aktueller Fund</span>
        <h3 style="margin: 0.5rem 0; font-size: 1.2rem;">
          <a href="{{ latest_research.url }}" style="text-decoration:none; color:#2a5d8f;">{{ latest_research.title }}</a>
        </h3>
        <p style="color: #666; margin-bottom: 0;">{{ latest_research.excerpt | strip_html | truncatewords: 25 }}</p>
        <div style="margin-top: 0.5rem; font-size: 0.8rem; color: #999;">Veröffentlicht am {{ latest_research.date | date: "%d.%m.%Y" }}</div>
      </div>
    </div>
  {% endif %}
</div>