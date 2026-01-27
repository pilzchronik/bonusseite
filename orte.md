---
layout: page
title: Orte
permalink: /orte/
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<style>
  .post-header { display: none !important; }

  .intro-block {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 50px auto;
    color: #555;
    line-height: 1.6;
  }

  h2.section-title {
    color: #333;
    font-size: 1.8em;
    margin-top: 60px;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #2a5d8f;
  }

  #map {
    width: 100%;
    height: 600px;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  /* Suchfeld Design */
  #ort-suche {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  /* Dynamische Tabelle Styles */
  .orte-liste-container {
    max-height: 600px;
    overflow-y: auto;
    border: 1px solid #e9ecef;
    border-radius: 4px;
  }

  .orte-tabelle {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
  }
  
  .orte-tabelle th {
    background: #2a5d8f;
    color: white;
    padding: 12px 10px;
    text-align: left;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .orte-tabelle td {
    padding: 10px;
    border-bottom: 1px solid #e9ecef;
    vertical-align: top;
    cursor: pointer; /* Zeigt an, dass man klicken kann */
    transition: background-color 0.2s;
  }

  .orte-tabelle tr:hover {
    background-color: #f1f3f5;
  }

  .orte-tabelle .ort-name {
    font-weight: 600;
    color: #333;
  }
  
  .orte-tabelle .ort-meta {
    font-size: 0.85em;
    color: #888;
    display: block;
    margin-top: 2px;
  }

  /* Farbliche Markierung der Linien in der Tabelle */
  tr.row-pilz { border-left: 4px solid #e74c3c; }
  tr.row-eberstaller { border-left: 4px solid #3498db; }
  tr.row-tirol { border-left: 4px solid #2ecc71; }
  tr.row-zusammen { border-left: 4px solid #f39c12; }
  tr.row-sonstige { border-left: 4px solid #95a5a6; }

  /* Tooltip & Legend Styles (aus Original übernommen) */
  .ort-tooltip {
    background: #2a5d8f;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 4px 8px;
    font-size: 0.85em;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  .ort-tooltip::before { border-top-color: #2a5d8f !important; }

  .legende-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .legende-item { display: flex; align-items: center; font-size: 0.9em; }
  .legende-marker {
    width: 12px; height: 12px; border-radius: 50%; margin-right: 8px;
    border: 1px solid rgba(0,0,0,0.1);
  }
</style>

<h1 style="color: #333; margin-bottom: 20px;">Orte & Herkunft</h1>

<div class="intro-block">
  <p>
    Räumliche und genetische Perspektiven ergänzen die schriftlichen Quellen der Pilz-Chronik.<br>
    Diese Seite verbindet die dokumentierten Lebensorte mit den tiefen genetischen Wurzeln.
  </p>
</div>

<h2 class="section-title">Lebensorte (Karte)</h2>

<div id="map"></div>

<div class="legende-grid">
  <div class="legende-item"><span class="legende-marker" style="background-color: #e74c3c;"></span>Pilz-Linie (Sachsen/Böhmen)</div>
  <div class="legende-item"><span class="legende-marker" style="background-color: #3498db;"></span>Eberstaller-Linie (Oberösterreich)</div>
  <div class="legende-item"><span class="legende-marker" style="background-color: #2ecc71;"></span>Tiroler Linie</div>
  <div class="legende-item"><span class="legende-marker" style="background-color: #f39c12;"></span>Zusammenführung</div>
  <div class="legende-item"><span class="legende-marker" style="background-color: #95a5a6;"></span>Weitere Orte</div>
</div>

<h3 style="margin-top: 40px;">Ortsverzeichnis</h3>
<p style="font-size: 0.9em; color: #666; margin-bottom: 10px;">
  Klicken Sie auf einen Ort in der Liste, um ihn auf der Karte anzuzeigen.
</p>

<input type="text" id="ort-suche" placeholder="Ort, Region oder Beschreibung suchen..." onkeyup="filterTable()">

<div class="orte-liste-container">
  <table class="orte-tabelle" id="orte-tabelle">
    <thead>
      <tr>
        <th>Ort</th>
        <th>Region</th>
        <th>Beschreibung / Bedeutung</th>
      </tr>
    </thead>
    <tbody id="orte-tbody">
      </tbody>
  </table>
</div>

<h2 class="section-title" style="margin-top: 60px;">Genetische Herkunft</h2>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
  <div style="background: #f8f9fa; padding: 25px; border-left: 4px solid #2a5d8f; border-radius: 4px;">
    <h3 style="margin-top: 0; color: #2a5d8f;">Väterliche Linie (Y-DNA)</h3>
    <span style="font-weight: bold; display: block; margin-bottom: 10px;">Haplogruppe: J-FT159612 (J2b)</span>
    <p style="font-size: 0.95em; color: #555;">
      Ursprung Nahost/Kaukasus vor ca. 25.000 Jahren. Ein sehr seltener Zweig, spezifiziert in der späten Eisenzeit.
    </p>
  </div>
  <div style="background: #f8f9fa; padding: 25px; border-left: 4px solid #2a5d8f; border-radius: 4px;">
    <h3 style="margin-top: 0; color: #2a5d8f;">Mütterliche Linie (mtDNA)</h3>
    <span style="font-weight: bold; display: block; margin-bottom: 10px;">Haplogruppe: H41a9</span>
    <p style="font-size: 0.95em; color: #555;">
      Ursprung Alpen-Balkan-Raum. Vermutlich Überleben der Eiszeit in osteuropäischen Refugien.
    </p>
  </div>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="{{ '/assets/js/karte-neu.js' | relative_url }}"></script>