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
    transition: transform 0.2s, box-shadow 0.2s;
    height: 100%;
  }
  
  .nav-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    border-color: #2a5d8f;
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

  .icon { font-size: 2em; margin-bottom: 20px; display: block; }
</style>

<div class="intro-section">
  <h1>Willkommen im digitalen Pilz-Archiv</h1>
  <p style="font-size: 1.15em; color: #555; max-width: 750px; margin: 0 auto 20px auto; line-height: 1.6;">
    Dies ist die offizielle Ergänzung zur gedruckten Familienchronik (Band 1 & 2).<br>
    Diese Seite dient als digitale Werkstatt für Inhalte, <strong>die im Buch keinen Platz fanden</strong>: interaktive Karten, umfangreiche Datensätze, Korrekturen und laufende Forschungsergebnisse.
  </p>
  <div class="intro-links">
    <a href="{{ '/zeitleiste/' | relative_url }}">⏳ Zur historischen Zeitleiste</a>
  </div>
</div>

<div class="nav-grid">
  
  <a href="stammbaum/" class="nav-card">
    <span class="icon">🌳</span>
    <h3>Stammbaum & Dossiers</h3>
    <p>Interaktive Grafiken, Spezialforschungen (Slawonien, Bechinie) und die Datenbank.</p>
  </a>

  <a href="werkstatt/" class="nav-card">
    <span class="icon">🔨</span>
    <h3>Werkstatt</h3>
    <p>Laufende Analysen, neue Funde und Hintergründe. Der aktuelle Arbeitsstand nach der Drucklegung.</p>
  </a>

  <a href="orte/" class="nav-card">
    <span class="icon">📍</span>
    <h3>Orte & Herkunft</h3>
    <p>Karte der Lebensorte und DNA-Analyse. Geografische und genetische Wurzeln in der Übersicht.</p>
  </a>

  <a href="quellen/" class="nav-card">
    <span class="icon">📚</span>
    <h3>Quellen & Material</h3>
    <p>Register-Downloads, Errata-Listen sowie das Verzeichnis aller Archive und Belege.</p>
  </a>

</div>
