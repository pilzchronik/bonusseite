---
layout: default
title: Startseite
---

<style>
  /* Intro-Bereich */
  .intro-section {
    text-align: center;
    margin-bottom: 50px;
    padding: 40px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
    border-radius: 4px;
  }
  
  .intro-section h1 {
    margin-top: 0;
    font-size: 2em;
    color: #333;
    margin-bottom: 15px;
  }
  
  .intro-links a {
    color: #2a5d8f;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
    font-size: 0.95em;
  }
  .intro-links a:hover { text-decoration: underline; }

  /* Grid für die Navigation (2x2) */
  .nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
  }
  
  /* Die Kacheln */
  .nav-card {
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    text-decoration: none !important;
    background: white;
    height: 100%;
  }

  .nav-card:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.06);
    border-color: #2a5d8f;
  }
  
  .eyebrow {
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #888;
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
  }

  .nav-card h3 {
    margin-top: 0;
    color: #2a5d8f;
    font-size: 1.4em;
    margin-bottom: 15px;
  }
  
  .nav-card p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 0;
  }
</style>

<div class="intro-section">
  <h1>Willkommen im digitalen Pilz-Archiv</h1>
  <p style="font-size: 1.15em; color: #555; max-width: 750px; margin: 0 auto 20px auto; line-height: 1.6;">
    Dies ist die offizielle Ergänzung zur gedruckten Familienchronik (Band 1 & 2).<br>
    Diese Seite dient als digitale Werkstatt für Inhalte, <strong>die im Buch keinen Platz fanden</strong>:
    Karten, Datensätze, Korrekturen und laufende Aktualisierungen.
  </p>
  <div class="intro-links">
    <a href="{{ '/zeitleiste/' | relative_url }}">Zur historischen Zeitleiste</a>
  </div>
</div>

<div class="nav-grid">
  
  <a href="orte/" class="nav-card">
    <span class="eyebrow">GEOGRAFIE</span>
    <h3>Geografie & Wanderung</h3>
    <p>Vom Erzgebirge nach Tirol: Folgen Sie den Spuren der Familie auf der interaktiven Karte der Lebensstationen. Räumliche und genetische Herkunft im Überblick.</p>
  </a>

  <a href="quellen/" class="nav-card">
    <span class="eyebrow">DOKUMENTATION</span>
    <h3>Quellen & Archive</h3>
    <p>Verzeichnis der tschechischen und österreichischen Archive, genealogischen Datenbanken und digitalen Belege zur Pilz-Chronik.</p>
  </a>

  <a href="werkstatt/" class="nav-card">
    <span class="eyebrow">AKTUELLES</span>
    <h3>Aktuelles seit Drucklegung</h3>
    <p>Neue Archivfunde, Ergänzungen und Druckfehler-Korrekturen zu Band 1 & 2. Filtern Sie nach Thema: Korrekturen, Neue Funde, Ergänzungen oder Hintergrund.</p>
  </a>

  <a href="stammbaum/" class="nav-card">
    <span class="eyebrow">GENEALOGIE</span>
    <h3>Stammbaum & Archiv</h3>
    <p>Direkter Zugriff zum interaktiven MacFamilyTree-Archiv mit allen Personenblättern, Ahnentafeln und Querverweisen.</p>
  </a>

</div>