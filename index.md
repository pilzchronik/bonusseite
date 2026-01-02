---
layout: default
title: Startseite
---

<style>
  /* Intro-Bereich: Sachlich und einladend */
  .intro-section {
    text-align: center;
    margin-bottom: 50px;
    padding: 40px 20px;
    background-color: #f8f9fa; /* Sehr helles Grau */
    border-bottom: 1px solid #e9ecef;
    border-radius: 4px;
  }
  
  .intro-section h1 {
    margin-top: 0;
    font-size: 2em;
    color: #333;
    margin-bottom: 15px;
  }

  /* Grid für die Navigation */
  .nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
  }
  
  /* Die Kacheln */
  .nav-card {
    display: flex;
    flex-direction: column;
    padding: 25px;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    text-decoration: none !important;
    background: white;
    transition: transform 0.2s, box-shadow 0.2s;
    height: 100%; /* Macht alle Kacheln gleich hoch */
  }
  
  .nav-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    border-color: #2a5d8f;
  }
  
  .nav-card h3 {
    margin-top: 0;
    color: #2a5d8f; /* Pilz-Blau */
    font-size: 1.3em;
    margin-bottom: 10px;
  }
  
  .nav-card p {
    color: #555;
    line-height: 1.5;
    margin-bottom: 0;
    flex-grow: 1; /* Schiebt Inhalt schön zurecht */
  }

  /* Kleines Icon vor dem Text (optional via Emoji) */
  .icon {
    font-size: 1.5em;
    margin-bottom: 15px;
    display: block;
  }
</style>

<div class="intro-section">
  <h1>Willkommen im digitalen Pilz-Archiv</h1>
  <p style="font-size: 1.15em; color: #555; max-width: 700px; margin: 0 auto;">
    Dies ist die offizielle Ergänzung zur gedruckten Familienchronik (Band 1 & 2).<br>
    Diese Seite dient der Dokumentation, der Korrektur und der Veröffentlichung neuer Forschungsergebnisse.
  </p>
</div>

<div class="nav-grid">
  
  <a href="werkstatt/" class="nav-card">
    <span class="icon">🔨</span>
    <h3>Werkstatt</h3>
    <p>Laufende Forschung, neue Funde und Hintergründe. Der aktuelle Arbeitsstand nach Drucklegung.</p>
  </a>

  <a href="orte/" class="nav-card">
    <span class="icon">📍</span>
    <h3>Orte & Herkunft</h3>
    <p>Karte der Lebensorte und DNA-Analyse. Geografische und genetische Wurzeln in der Übersicht.</p>
  </a>

  <a href="zeitleiste/" class="nav-card">
    <span class="icon">⏳</span>
    <h3>Zeitleiste</h3>
    <p>Die Chronologie der Familie – von der Urzeit bis zur Gegenwart im Zeitstrahl.</p>
  </a>

  <a href="ergaenzungen/" class="nav-card">
    <span class="icon">📂</span>
    <h3>Ergänzungen</h3>
    <p>Downloads (Register), Errata und Korrekturen zu den gedruckten Bänden.</p>
  </a>

  <a href="quellen/" class="nav-card">
    <span class="icon">📚</span>
    <h3>Quellen</h3>
    <p>Verzeichnis der Archive, Datenbanken und Online-Ressourcen.</p>
  </a>

</div>
