---
layout: page
title: Karte der Lebensorte
permalink: /karte/
---

<style>
  /* Container für Text */
  .intro-text {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 40px auto;
    color: #555;
    line-height: 1.6;
  }

  /* Der Rahmen für die Karte (Responsive, 4:3 passend zur Karte) */
  .map-container {
    position: relative;
    width: 100%;
    padding-bottom: 75%; /* 4:3 */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    background: #f9f9f9;
    margin-bottom: 40px;
  }

  /* Die Karte selbst */
  .map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    border: 0;
  }

  /* Die Legende unter der Karte */
  .regions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 50px;
    border-top: 1px solid #eee;
    padding-top: 30px;
  }

  .region h3 {
    margin-top: 0;
    color: #2a5d8f; /* Pilz-Blau */
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .region p {
    color: #666;
    font-size: 0.95em;
    line-height: 1.5;
  }
</style>

<h1 style="text-align: center; margin-bottom: 20px;">Geografie der Familie</h1>

<div class="intro-text">
  <p>
    Diese Karte visualisiert die Wanderungsbewegungen über die Jahrhunderte.
    Sie verbindet die historischen Schwerpunkte der Familiengeschichte
    (Sachsen/Böhmen) mit den späteren Lebensorten in Österreich und Norditalien.
  </p>
</div>

<div class="map-container">
  <iframe
    src="https://www.google.com/maps/d/u/0/embed?mid=1bYaowjZM7T8_kZl9k-z6_Aebnz7-iIg&ehbc=2E312F&ll=47.9630,12.0030&z=7"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    allowfullscreen>
  </iframe>
</div>

<div class="regions-grid">

  <div class="region">
    <h3>Sachsen (Ursprung)</h3>
    <p>
      Im Raum Freiberg/Erzgebirge liegen wichtige frühe Bezugspunkte der Familiengeschichte.
    </p>
  </div>

  <div class="region">
    <h3>Österreich (Wels, Innsbruck)</h3>
    <p>
      Spätere Lebensstationen und Verlagerungen der Familie führten nach Oberösterreich und Tirol.
    </p>
  </div>

  <div class="region">
    <h3>Norditalien (Rovereto)</h3>
    <p>
      Rovereto steht exemplarisch für Verbindungen und Wege über den Alpenraum.
    </p>
  </div>

</div>

<p style="text-align: center; margin-top: 60px;">
  <a href="/" style="text-decoration: none; color: #555; border-bottom: 1px solid #ccc;">← Zurück zur Startseite</a>
</p>
