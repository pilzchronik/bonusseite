---
layout: default
title: Startseite
---

<style>
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

  .intro-section p {
    font-size: 1.1em;
    color: #555;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  /* Drei Hauptknöpfe oben */
  .primary-actions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 50px;
  }

  .action-card {
    display: flex;
    flex-direction: column;
    padding: 28px 24px;
    border-radius: 6px;
    text-decoration: none !important;
    color: inherit;
    transition: box-shadow 0.15s;
  }

  .action-card:hover {
    box-shadow: 0 4px 14px rgba(0,0,0,0.10);
    text-decoration: none !important;
  }

  .action-card.korrekturen {
    background-color: #fff5f5;
    border: 1px solid #e8b4b4;
  }

  .action-card.neues {
    background-color: #f0f7ff;
    border: 1px solid #a8c8e8;
  }

  .action-card.ergaenzungen {
    background-color: #f4f9f1;
    border: 1px solid #a8cfa0;
  }

  .action-card .label {
    font-size: 0.72em;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-weight: bold;
    color: #888;
    margin-bottom: 8px;
    display: block;
  }

  .action-card h3 {
    margin: 0 0 10px 0;
    font-size: 1.25em;
    color: #222;
  }

  .action-card p {
    margin: 0;
    font-size: 0.9em;
    color: #666;
    line-height: 1.55;
  }

  /* Sekundäre Navigation */
  .nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
    margin-bottom: 50px;
  }

  .nav-card {
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    text-decoration: none !important;
    background: white;
  }

  .nav-card:hover {
    box-shadow: 0 3px 8px rgba(0,0,0,0.07);
    border-color: #2a5d8f;
  }

  .eyebrow {
    font-size: 0.72em;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #999;
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .nav-card h3 {
    margin-top: 0;
    color: #2a5d8f;
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .nav-card p {
    color: #666;
    line-height: 1.55;
    margin-bottom: 0;
    font-size: 0.9em;
  }
</style>

<div class="intro-section">
  <h1>Digitale Ergänzungen zur Pilz-Chronik</h1>
  <p>
    Sie haben Band 1 oder Band 2 der Pilz-Chronik in Händen? Diese Seite ist die offizielle digitale Ergänzung zum Buch.
  </p>
  <p>
    Hier finden Sie Korrekturen zu den gedruckten Bänden, neue Archivfunde seit der Drucklegung – und digitale Materialien, die im Buch keinen Platz hatten: eine interaktive Karte aller Familien-Lebensorte, ein vollständiges genealogisches Archiv, eine Zeitleiste, die von der Urgeschichte bis ins 20. Jahrhundert reicht, und eine DNA-Analyse, die die Familienherkunft genetisch tief verankert.
  </p>
  <p>
    Den Chat-Assistenten unten rechts können Sie jederzeit direkt befragen – er kennt beide Bände und antwortet sofort.
  </p>


<div class="primary-actions">

  <a href="{{ '/korrekturen/' | relative_url }}" class="action-card korrekturen">
    <span class="label">Druckfehler &amp; Berichtigungen</span>
    <h3>Korrekturen</h3>
    <p>Was im gedruckten Buch falsch steht – und wie es richtig lautet.</p>
  </a>

  <a href="{{ '/werkstatt/' | relative_url }}" class="action-card neues">
    <span class="label">Seit Drucklegung</span>
    <h3>Neue Funde</h3>
    <p>Archivfunde und Erkenntnisse, die nach Abschluss des Manuskripts hinzugekommen sind.</p>
  </a>

  <a href="{{ '/orte/' | relative_url }}" class="action-card ergaenzungen">
    <span class="label">Digitales Mehr</span>
    <h3>Karte &amp; Orte</h3>
    <p>Lebensorte auf der interaktiven Karte, Ortsverzeichnis und zweisprachiges Ortsnamenlexikon Böhmen (DE↔CZ).</p>
  </a>

</div>

<div class="nav-grid">

  <a href="{{ '/zeitleiste/' | relative_url }}" class="nav-card">
    <span class="eyebrow">CHRONOLOGIE</span>
    <h3>Historische Zeitleiste</h3>
    <p>500 Jahre Familiengeschichte im Zeitstrahl – von Dörnthal bis Innsbruck.</p>
  </a>

  <a href="{{ '/stammbaum/' | relative_url }}" class="nav-card">
    <span class="eyebrow">ARCHIV</span>
    <h3>Genealogisches Archiv</h3>
    <p>Alle Personenblätter, Familien, Ahnentafeln und Querverweise der Pilz-Chronik – gespeichert im MacFamilyTree-Archiv.</p>
  </a>

  <a href="{{ '/quellen/' | relative_url }}" class="nav-card">
    <span class="eyebrow">DOKUMENTATION</span>
    <h3>Quellen & Archive</h3>
    <p>Verzeichnis der Archive, Datenbanken und digitalen Belege zur Pilz-Chronik.</p>
  </a>

  <a href="{{ '/dna-analyse/' | relative_url }}" class="nav-card">
    <span class="eyebrow">GENETIK</span>
    <h3>DNA-Analyse</h3>
    <p>Haplogruppen, Verwandtschaftskreise und was die Genetik über die Familienherkunft sagt.</p>
  </a>

  <a href="{{ '/inhalt-index/' | relative_url }}" class="nav-card">
    <span class="eyebrow">NACHSCHLAGEN</span>
    <h3>Inhalt & Index</h3>
    <p>Inhaltsverzeichnis und Gesamtindex zu Band 1 und Band 2 — zum schnellen Nachschlagen nach Personen, Orten und Themen.</p>
  </a>

