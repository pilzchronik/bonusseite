---
layout: page
title: Geografie & Herkunft
permalink: /karte/
---

<style>
  .intro-text {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 40px auto;
    color: #555;
    line-height: 1.6;
  }

  /* Karte - Responsive Container (4:3 Format) */
  .map-container {
    position: relative;
    width: 100%;
    padding-bottom: 75%; 
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    background: #f9f9f9;
    margin-bottom: 50px;
  }
  
  /* Damit die Karte den Container voll ausfüllt */
  .map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    border: 0;
  }

  /* Text-Bereiche */
  .regions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 40px;
    border-top: 1px solid #eee;
    padding-top: 40px;
  }

  h3 { color: #2a5d8f; margin-top: 0; }
  
  .dna-box {
    background-color: #f4f6f8;
    padding: 20px;
    border-left: 4px solid #2a5d8f;
    margin-top: 40px;
    border-radius: 4px;
  }
</style>

<div class="intro-text">
  <p>
    Diese Karte visualisiert die Wanderungsbewegungen der Familie über die Jahrhunderte.
    Sie verbindet die drei historischen Schwerpunkte: Sachsen, Böhmen und Tirol.
  </p>
</div>

<div class="map-container">
  <iframe 
    src="https://www.google.com/maps/d/embed?mid=1bYaowjZM7T8_kZI9k-z6_Aebnz7-ilg&z=6"
    width="640" 
    height="480">
  </iframe>
</div>

<div class="regions-grid">
  
  <div class="region">
    <h3>Sachsen (Ursprung)</h3>
    <p>
      Im Erzgebirge (Dörnthal, Rothenthal) liegen die ältesten dokumentierten Wurzeln der direkten Linie im 16. und 17. Jahrhundert. Hier begann die Familiengeschichte in den Kirchenbüchern.
    </p>
  </div>

  <div class="region">
    <h3>Böhmen (Heimat)</h3>
    <p>
      Über fast zwei Jahrhunderte war das böhmische Erzgebirge (Kallich, Schmiedeberg, Görkau) der Lebensmittelpunkt, geprägt durch Forstwesen und Handwerk. Nach dem Siebenjährigen Krieg erfolgte hier die Festigung der Familie.
    </p>
  </div>

  <div class="region">
    <h3>Tirol (Gegenwart)</h3>
    <p>
      Durch berufliche Versetzungen (Zollwache) und die Ereignisse des 20. Jahrhunderts verlagerte sich der Schwerpunkt nach Lienz und Innsbruck.
    </p>
  </div>

</div>

<div class="dna-box">
  <h3>🧬 Tiefe Wurzeln: Die DNA-Herkunft</h3>
  <p>
    Noch vor den schriftlichen Aufzeichnungen zeigen genetische Analysen den Weg der Vorfahren:
  </p>
  <ul>
    <li>
      <strong>Väterliche Linie (J2-M172):</strong> Ursprung im Nahen Osten/Kaukasus vor ca. 25.000 Jahren. Diese Linie kam vermutlich mit frühen Ackerbauern über den Balkan nach Mitteleuropa.
    </li>
    <li>
      <strong>Mütterliche Linie (H41a9):</strong> Ein seltener Zweig, der sich im Alpen-Balkan-Raum herausbildete. Die Vorfahren überlebten die Eiszeit vermutlich in refugialen Gebieten Osteuropas.
    </li>
  </ul>
  <p style="font-size: 0.9em; color: #666; margin-top: 10px;">
    <em>Details zur DNA-Analyse finden Sie in Band 2 der Chronik.</em>
  </p>
</div>

<p style="text-align: center; margin-top: 60px;">
  <a href="/" style="text-decoration: none; color: #555;">← Zurück zur Startseite</a>
</p>
