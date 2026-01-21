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

  .sustainability-note {
    background: #e8f4f8;
    border-left: 4px solid #2a5d8f;
    padding: 15px 20px;
    margin-bottom: 30px;
    border-radius: 4px;
  }
  .sustainability-note strong {
    color: #2a5d8f;
  }

  details {
    margin: 30px 0;
    background: #f5f5f5;
    padding: 15px;
    border-radius: 4px;
  }
  details summary {
    cursor: pointer;
    font-weight: bold;
    color: #2a5d8f;
    padding: 10px;
    user-select: none;
  }
  details summary:hover {
    background: #e9ecef;
    border-radius: 4px;
  }
  .coordinates-list {
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    line-height: 1.8;
    margin-top: 15px;
  }
  .coordinates-list h4 {
    color: #2a5d8f;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .coordinates-list li {
    margin: 5px 0;
  }

  .places-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 60px;
  }
  .place-card {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #e9ecef;
  }
  .place-card h3 { 
    color: #2a5d8f; 
    margin-top: 0; 
    font-size: 1.2em; 
  }
  .place-card p { 
    font-size: 0.95em; 
    color: #666; 
    margin-bottom: 0;
  }

  .dna-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  .dna-box {
    background: #f8f9fa;
    padding: 25px;
    border: 1px solid #e9ecef;
    border-left: 4px solid #2a5d8f;
    border-radius: 4px;
  }
  .dna-box h3 { 
    margin-top: 0; 
    color: #2a5d8f; 
  }
  .dna-meta { 
    font-weight: bold; 
    display: block; 
    margin-bottom: 10px; 
    color: #333; 
  }
</style>

<h1 style="color: #333; margin-bottom: 20px;">Orte & Herkunft</h1>

<div class="intro-block">
  <p>
    Räumliche und genetische Perspektiven ergänzen die schriftlichen Quellen der Pilz-Chronik.<br>
    Diese Seite verbindet die dokumentierten Lebensorte mit den tiefen genetischen Wurzeln.
  </p>
</div>

<h2 class="section-title">📍 Lebensorte (Karte)</h2>

<div class="sustainability-note">
  <strong>ℹ️ Hinweis zur Nachhaltigkeit:</strong> Diese Karte verwendet OpenStreetMap – 
  eine freie, community-betriebene Kartenlösung, die ohne kommerzielle API-Schlüssel 
  funktioniert und langfristig verfügbar bleiben sollte. Die Karte funktioniert 
  unabhängig von Google-Diensten.
</div>

<div id="map"></div>

<!-- Legende als unabhängiges Element -->
<div style="background: #f8f9fa; padding: 20px; border-radius: 6px; 
            border: 1px solid #e9ecef; margin-top: 20px; margin-bottom: 40px; max-width: 450px;">
  <h4 style="margin-top: 0; color: #2a5d8f; font-size: 1.1em;">Familienlinien</h4>
  
  <div style="margin: 12px 0;">
    <span style="display: inline-block; width: 18px; height: 18px; background-color: #e74c3c; 
                 border-radius: 50%; margin-right: 10px; vertical-align: middle; 
                 border: 2px solid white; box-shadow: 0 0 3px rgba(0,0,0,0.3);"></span>
    <span style="vertical-align: middle; color: #555; font-size: 0.95em;">Pilz-Linie (Sachsen → Böhmen)</span>
  </div>
  
  <div style="margin: 12px 0;">
    <span style="display: inline-block; width: 18px; height: 18px; background-color: #3498db; 
                 border-radius: 50%; margin-right: 10px; vertical-align: middle; 
                 border: 2px solid white; box-shadow: 0 0 3px rgba(0,0,0,0.3);"></span>
    <span style="vertical-align: middle; color: #555; font-size: 0.95em;">Eberstaller-Linie (Oberösterreich)</span>
  </div>
  
  <div style="margin: 12px 0;">
    <span style="display: inline-block; width: 18px; height: 18px; background-color: #2ecc71; 
                 border-radius: 50%; margin-right: 10px; vertical-align: middle; 
                 border: 2px solid white; box-shadow: 0 0 3px rgba(0,0,0,0.3);"></span>
    <span style="vertical-align: middle; color: #555; font-size: 0.95em;">Tiroler Linie (Osttirol)</span>
  </div>
  
  <div style="margin: 12px 0;">
    <span style="display: inline-block; width: 18px; height: 18px; background-color: #f39c12; 
                 border-radius: 50%; margin-right: 10px; vertical-align: middle; 
                 border: 2px solid white; box-shadow: 0 0 3px rgba(0,0,0,0.3);"></span>
    <span style="vertical-align: middle; color: #555; font-size: 0.95em;">Zusammenführung (Innsbruck)</span>
  </div>
</div>

<details>
  <summary>📍 Vollständige Koordinatenliste (Fallback für eigene Kartenanwendungen)</summary>
  <div class="coordinates-list">
    <p><em>Diese Liste kann für eigene Kartenprojekte oder bei Ausfall der Online-Karte verwendet werden.</em></p>
    
    <h4>Pilz-Linie</h4>
    <ul>
      <li><strong>Dörnthal:</strong> 50.733965° N, 13.333618° E</li>
      <li><strong>Olbernhau:</strong> 50.65886° N, 13.33831° E</li>
      <li><strong>Rothenthal:</strong> 50.63861° N, 13.38139° E</li>
      <li><strong>Kallich (Kalek):</strong> 50.59013° N, 13.33231° E</li>
      <li><strong>Schmiedeberg (Kovářská):</strong> 50.4899° N, 13.0336° E</li>
      <li><strong>Weipert (Vejprty):</strong> 50.49232° N, 13.03213° E</li>
      <li><strong>Stolzenhain:</strong> 50.46583° N, 13.05694° E</li>
      <li><strong>Preßnitz (Přísečnice):</strong> 50.473611° N, 13.131389° E</li>
      <li><strong>Kupferberg (Měděnec):</strong> 50.42541° N, 13.13373° E</li>
      <li><strong>Hlawatschow:</strong> 49.91261° N, 14.7663° E</li>
      <li><strong>Libeschitz:</strong> 50.31232° N, 13.61361° E</li>
      <li><strong>Amschelberg:</strong> 49.65861° N, 14.47139° E</li>
      <li><strong>Helfenberg:</strong> 48.55867° N, 14.14762° E</li>
      <li><strong>Schloss Rothenhaus:</strong> 50.51226° N, 13.45189° E</li>
      <li><strong>Salzburg-Aigen:</strong> 47.78607° N, 13.08811° E</li>
      <li><strong>Kainisch:</strong> 47.57005° N, 13.84073° E</li>
      <li><strong>Bad Aussee:</strong> 47.6114° N, 13.7844° E</li>
      <li><strong>Blumenau (Květnov):</strong> 50.5594° N, 13.3833° E</li>
      <li><strong>Dresden:</strong> 51.0504° N, 13.7372° E</li>
      <li><strong>Eger (Cheb):</strong> 50.0796° N, 12.3739° E</li>
      <li><strong>Erzgebirge (Region):</strong> 50.6° N, 13.2° E</li>
      <li><strong>Freiberg:</strong> 50.9167° N, 13.3333° E</li>
      <li><strong>Gottesgab (Boží Dar):</strong> 50.4111° N, 12.9222° E</li>
      <li><strong>Graz:</strong> 47.0707° N, 15.4395° E</li>
      <li><strong>Karlsbad:</strong> 50.2319° N, 12.872° E</li>
      <li><strong>Komotau (Chomutov):</strong> 50.4605° N, 13.4178° E</li>
      <li><strong>Leipzig:</strong> 51.3397° N, 12.3731° E</li>
      <li><strong>Mantua:</strong> 45.1564° N, 10.7914° E</li>
      <li><strong>Negoslavci:</strong> 45.3° N, 19.0° E</li>
      <li><strong>Ondrejow:</strong> 49.9042° N, 14.7817° E</li>
      <li><strong>Prag:</strong> 50.0755° N, 14.4378° E</li>
      <li><strong>Sayda:</strong> 50.6789° N, 13.4214° E</li>
      <li><strong>Sebastiansberg:</strong> 50.5333° N, 13.25° E</li>
      <li><strong>Sillian:</strong> 46.7486° N, 12.4139° E</li>
    </ul>
    
    <h4>Eberstaller-Linie</h4>
    <ul>
      <li><strong>Krenglbach:</strong> 48.21391° N, 13.93519° E</li>
      <li><strong>Radstadt:</strong> 47.38333° N, 13.46667° E</li>
      <li><strong>Rott bei Salzburg:</strong> 47.7875° N, 12.975° E</li>
      <li><strong>Linz:</strong> 48.3069° N, 14.2858° E</li>
      <li><strong>Rannariedl:</strong> 48.4833° N, 13.7667° E</li>
      <li><strong>Wallern an der Trattnach:</strong> 48.2306° N, 13.9464° E</li>
    </ul>
    
    <h4>Tiroler Linie</h4>
    <ul>
      <li><strong>Kartitsch:</strong> 46.7382° N, 12.4784° E</li>
      <li><strong>Sexten:</strong> 46.6994° N, 12.3522° E</li>
      <li><strong>Rovereto:</strong> 45.8885° N, 11.0413° E</li>
      <li><strong>Mailand:</strong> 45.4642° N, 9.19° E</li>
      <li><strong>Anras:</strong> 46.7725° N, 12.5564° E</li>
      <li><strong>Heinfels:</strong> 46.75° N, 12.4333° E</li>
      <li><strong>Padua:</strong> 45.4064° N, 11.8768° E</li>
      <li><strong>Petererhof (St. Oswald):</strong> 46.7382° N, 12.4784° E</li>
      <li><strong>Triest:</strong> 45.6495° N, 13.7768° E</li>
    </ul>
    
    <h4>Zusammenführung</h4>
    <ul>
      <li><strong>Innsbruck:</strong> 47.2692° N, 11.4041° E</li>
    </ul>
  </div>
</details>

<div class="places-grid">
  <div class="place-card">
    <h3>Sachsen (Ursprung)</h3>
    <p>Erzgebirge (Dörnthal, Rothenthal): Die ältesten dokumentierten Wurzeln im 16. und 17. Jahrhundert.</p>
  </div>
  <div class="place-card">
    <h3>Böhmen (Heimat)</h3>
    <p>Fast zwei Jahrhunderte Lebensmittelpunkt im böhmischen Erzgebirge (Kallich, Schmiedeberg).</p>
  </div>
  <div class="place-card">
    <h3>Tirol (Gegenwart)</h3>
    <p>Verlagerung nach Lienz und Innsbruck durch berufliche Versetzungen und die Zäsuren des 20. Jahrhunderts.</p>
  </div>
</div>

<h2 class="section-title">🧬 Genetische Herkunft</h2>
<p style="margin-bottom: 30px; color: #555;">
  Noch vor den schriftlichen Quellen liefern genetische Analysen Hinweise auf frühe Herkunftslinien (Stand: FamilyTreeDNA, Kit 330595).
</p>

<div class="dna-grid">
  
  <div class="dna-box">
    <h3>Väterliche Linie (Y-DNA)</h3>
    <span class="dna-meta">Haplogruppe: J-FT159612 (J2b)</span>
    <p>
      <strong>Ursprung:</strong> Nahost-/Kaukasusraum vor rund 25.000 Jahren.<br>
      <strong>Wanderung:</strong> Ausbreitung nach Mitteleuropa vermutlich im Zuge der neolithischen Landwirtschaft.<br>
      <strong>Besonderheit:</strong> Ein sehr seltener Zweig, der sich erst in der späten Eisenzeit spezifizierte.
    </p>
  </div>

  <div class="dna-box">
    <h3>Mütterliche Linie (mtDNA)</h3>
    <span class="dna-meta">Haplogruppe: H41a9</span>
    <p>
      <strong>Ursprung:</strong> Alpen-Balkan-Raum.<br>
      <strong>Hintergrund:</strong> Seltener Zweig, der vermutlich auf das Überleben der Eiszeit in osteuropäischen Refugialgebieten zurückgeht.<br>
      <strong>Entstehung:</strong> Der spezifische Zweig bildete sich erst im Mittelalter heraus.
    </p>
  </div>

</div>

<p style="text-align: center; margin-top: 60px; font-size: 0.9em; color: #888;">
  Detaillierte Analysen finden sich in Band 2 der Pilz-Chronik.
</p>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="{{ '/assets/js/genealogie-karte.js' | relative_url }}"></script>