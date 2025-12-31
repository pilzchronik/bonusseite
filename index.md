---
layout: default
title: Startseite
---

<style>
  /* Intro-Box: Sachlich und informativ */
  .intro-section {
    text-align: center;
    margin-bottom: 50px;
    padding: 30px;
    background-color: #f8f9fa;
    border-bottom: 4px solid #2a5d8f;
    border-radius: 4px;
  }
  
  /* Grid für genau 4 Bereiche (2x2 Raster) */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
  }
  
  /* Das Design der Kacheln */
  .card-box {
    display: flex;
    flex-direction: column;
    padding: 25px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    text-decoration: none !important;
    background: white;
    transition: all 0.2s ease;
    height: 100%;
  }
  
  .card-box:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
    border-color: #2a5d8f;
  }
  
  .card-box h3 {
    margin-top: 0;
    color: #2a5d8f;
    font-size: 1.3em;
    margin-bottom: 12px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  .card-box p {
    color: #555;
    line-height: 1.5;
    font-size: 0.95em;
    flex-grow: 1; 
    margin-bottom: 0;
  }

  /* Kleiner visueller Hinweis für externe Links */
  .ext-icon {
    font-size: 0.8em;
    color: #999;
    margin-left: 5px;
  }
</style>

<div class="intro-section">
  <h1 style="margin-top: 0;">Willkommen auf der Bonusseite</h1>
  <p style="font-size: 1.15em; color: #444; max-width: 700px; margin: 0 auto;">
    Dies ist die offizielle Ergänzung zur gedruckten Familienchronik (Band 1 & 2).<br>
    Diese Seite dient als <strong>„lebendes Dokument“</strong> für Korrekturen, neue Forschungsdaten und interaktive Inhalte.
  </p>
</div>

<div class="grid-container">
  
  <a href="karte/" class="card-box">
    <h3>🗺️ Geografie & Herkunft</h3>
    <p>
      Die Lebensorte und Wanderungsbewegungen in Sachsen, Böhmen und Tirol – von den genetischen Ursprüngen bis heute.
    </p>
  </a>

  <a href="https://www.macfamilytree.com/pilzw/Pilz-Chronik/index.html" target="_blank" class="card-box">
    <h3>🌳 Interaktiver Stammbaum <span class="ext-icon">↗</span></h3>
    <p>
      Die grafische Datenbank (MacFamilyTree). Navigieren Sie interaktiv durch die Generationen und Verwandtschaftsverhältnisse.
    </p>
  </a>

  <a href="archiv/" class="card-box">
    <h3>🏛️ Archiv & Fundstücke</h3>
    <p>
      Hintergrundberichte, Transkriptionen und Geschichten, die im gedruckten Buch keinen Platz fanden („Die Werkstatt“).
    </p>
  </a>

  <a href="ergaenzungen/" class="card-box">
    <h3>📝 Ergänzungen & Korrekturen</h3>
    <p>
      Das „lebende Dokument“: Aktualisierungen, Errata-Listen und Register-Downloads für Besitzer der Chronik.
    </p>
  </a>

</div>

<hr style="margin: 50px 0; border: 0; border-top: 1px solid #eee;">

<div class="news-section">
  <h2 style="font-size: 1.4em; border-left: 4px solid #2a5d8f; padding-left: 15px; margin-bottom: 25px;">
    Neueste Einträge im Archiv
  </h2>
  <ul style="list-style: none; padding: 0;">
    {% for post in site.posts limit:3 %}
      <li style="margin-bottom: 25px;">
        <div style="font-size: 0.85em; color: #777; margin-bottom: 4px;">{{ post.date | date: "%d.%m.%Y" }}</div>
        <a href="{{ post.url | relative_url }}" style="font-size: 1.1em; font-weight: bold; text-decoration: none; color: #2a5d8f;">
          {{ post.title }}
        </a>
        <div style="color: #555; margin-top: 5px;">{{ post.excerpt | strip_html | truncatewords: 30 }}</div>
      </li>
    {% endfor %}
  </ul>
</div>
