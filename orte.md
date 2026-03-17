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

<div class="intro-block">
  <p>
    Die dokumentierten Lebensorte der Pilz-Chronik – auf einer interaktiven Karte, als durchsuchbares Verzeichnis und mit einem zweisprachigen Ortsnamenlexikon für Böhmen.
  </p>
</div>

<h3 class="section-title" style="margin-top: 30px;">
  Lebensorte (Karte)
</h3>

<div id="section-karte">

<div id="map"></div>

<div class="legende-grid">
  <div class="legende-item"><span class="legende-marker" style="background-color: #e74c3c;"></span>Pilz-Linie (Sachsen/Böhmen)</div>
  <div class="legende-item"><span class="legende-marker" style="background-color: #3498db;"></span>Eberstaller-Linie (Oberösterreich)</div>
  <div class="legende-item"><span class="legende-marker" style="background-color: #2ecc71;"></span>Tiroler Linie</div>
  <div class="legende-item"><span class="legende-marker" style="background-color: #f39c12;"></span>Zusammenführung</div>
  <div class="legende-item"><span class="legende-marker" style="background-color: #95a5a6;"></span>Weitere Orte</div>
</div>

</div><!-- /section-karte -->

<h3 class="section-title" style="margin-top: 40px;">
  Ortsverzeichnis
</h3>

<div id="section-ortsverzeichnis">
<p style="font-size: 0.9em; color: #666; margin-bottom: 10px;">
  Klick auf einen Ort in der Liste, um ihn auf der Karte anzuzeigen.
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
</div><!-- /section-ortsverzeichnis -->

<h3 class="section-title" id="ortsnamen" style="margin-top: 40px;">
  Zweisprachiges Ortsnamenlexikon Böhmen
</h3>

<div id="section-ortsnamen">

<p style="color: #555; margin-bottom: 15px; line-height: 1.6;">
  Zweisprachiges Nachschlagewerk für deutsche und tschechische Ortsnamen – 
  zwei Sprachformen, die oft seit dem Mittelalter parallel existieren.
  Die Suche funktioniert in <strong>beide Richtungen</strong> – gib die deutsche <em>oder</em> tschechische Namensform ein.
  <span class="chronik-badge" style="font-size: 0.9em;">📖</span> markiert Orte, die in der Pilz-Chronik vorkommen.
</p>

<input type="text" id="ortsnamen-suche" placeholder="Ortsname eingeben (deutsch oder tschechisch) …" 
  style="width: 100%; padding: 12px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px;">

<div style="font-size: 0.85em; color: #888; margin-bottom: 15px;">
  <span id="ortsnamen-count">0</span> Ortsnamen in der Datenbank · 
  <em>Quelle: <a href="https://de.wikipedia.org/wiki/Liste_deutscher_Namen_tschechischer_Orte" target="_blank" style="color:#2a5d8f;">Wikipedia</a></em>
</div>

<div id="ortsnamen-hint" style="text-align: center; padding: 25px 15px; color: #999; font-style: italic; background: #f8f9fa; border-radius: 4px; margin-bottom: 15px;">
  Mindestens 2 Buchstaben eingeben, um die Suche zu starten.
</div>

<div id="ortsnamen-no-results" style="display: none; text-align: center; padding: 25px 15px; color: #999; font-style: italic; background: #f8f9fa; border-radius: 4px; margin-bottom: 15px;">
  Kein Ortsname gefunden. Versuch eine andere Schreibweise.
</div>

<div class="orte-liste-container" style="max-height: 400px; margin-bottom: 30px;">
  <table class="orte-tabelle" id="ortsnamen-tabelle">
    <thead>
      <tr>
        <th style="width: 50%;">Deutsch</th>
        <th style="width: 50%;">Tschechisch</th>
      </tr>
    </thead>
    <tbody id="ortsnamen-tbody">
    </tbody>
  </table>
</div>

<style>
  /* Aufklappbare Sektionen */
  .collapsible {
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    transition: background-color 0.2s;
    position: relative;
    padding-right: 40px;
  }
  .collapsible:hover {
    background-color: #f0f4f8;
  }
  .collapse-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.7em;
    color: #999;
    transition: transform 0.3s;
  }
  .collapsible-content {
    overflow: hidden;
    transition: max-height 0.4s ease;
  }

  /* Karten-Button in Ortsnamen-Ergebnissen */
  .ortsnamen-map-btn {
    background: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.85em;
    padding: 2px 6px;
    margin-left: 6px;
    color: #2a5d8f;
    transition: all 0.2s;
    vertical-align: middle;
  }
  .ortsnamen-map-btn:hover {
    background-color: #2a5d8f;
    color: white;
    border-color: #2a5d8f;
  }
  .ortsnamen-map-btn.loading {
    opacity: 0.5;
    cursor: wait;
  }

  /* Chronik-Orte Hervorhebung */
  .ortsnamen-chronik {
    border-left: 4px solid #e74c3c !important;
    background-color: #fef9f8;
  }
  .ortsnamen-chronik:hover {
    background-color: #fdf0ee !important;
  }
  .chronik-badge {
    font-size: 0.8em;
    cursor: help;
  }
  #ortsnamen-tabelle mark {
    background-color: #fff3cd;
    padding: 1px 2px;
    border-radius: 2px;
  }
  #ortsnamen-suche:focus {
    outline: none;
    border-color: #2a5d8f;
    box-shadow: 0 0 0 2px rgba(42, 93, 143, 0.15);
  }
</style>

<script src="{{ '/assets/js/ortsnamen-tool.js' | relative_url }}"></script>
<script>
  // Daten aus Jekyll _data/ortsnamen.json laden
  var ortsnamenDaten = {{ site.data.ortsnamen | jsonify }};
  if (typeof window.initOrtsnamenTool === 'function') {
    window.initOrtsnamenTool(ortsnamenDaten);
  }
</script>

</div><!-- /section-ortsnamen -->

<div style="margin-top: 50px; padding: 20px; background: #f8f9fa; border-radius: 4px; text-align: center;">
  <p style="margin: 0 0 8px 0; color: #555;">
    Die genetische Herkunft der Familie – Haplogruppen, Migrationsrouten und DNA-Analyse – findest du auf einer eigenen Seite:
  </p>
  <a href="{{ '/dna-analyse/' | relative_url }}" style="color: #2a5d8f; font-weight: 600; font-size: 1.05em;">→ Zur DNA-Analyse</a>
</div>

<div style="text-align: right; margin-top: 2rem;">
  <a href="#top">▲ nach oben</a>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="{{ '/assets/js/karte-neu.js' | relative_url }}"></script>

<script>
// === Aufklappbare Sektionen ===
document.querySelectorAll('.collapsible').forEach(function(header) {
  header.addEventListener('click', function() {
    var targetId = this.getAttribute('data-target');
    var content = document.getElementById(targetId);
    var icon = this.querySelector('.collapse-icon');
    if (!content) return;

    var isOpen = content.style.display !== 'none';
    content.style.display = isOpen ? 'none' : 'block';
    icon.textContent = isOpen ? '▶' : '▼';
    this.classList.toggle('active', !isOpen);

    // Karte neu rendern wenn Karten-Sektion geöffnet wird
    if (targetId === 'section-karte' && !isOpen && window.karteMap) {
      setTimeout(function() { window.karteMap.invalidateSize(); }, 100);
    }
  });
});

// === Geocoding: Ort auf Karte zeigen ===
(function() {
  var tempMarker = null;

  // Koordinaten der Chronik-Orte aus karte-neu.js (fest hinterlegt)
  var chronikKoords = {
    'dörnthal': [50.7339, 13.3486],
    'olbernhau': [50.6661, 13.3381],
    'rothenthal': [50.6342, 13.3733],
    'kallich': [50.5775, 13.3219], 'kalek': [50.5775, 13.3219],
    'schmiedeberg': [50.4381, 13.0536], 'kovářská': [50.4381, 13.0536],
    'weipert': [50.4922, 13.0319], 'vejprty': [50.4922, 13.0319],
    'stolzenhain': [50.4128, 12.9789], 'háj u loučné': [50.4128, 12.9789],
    'preßnitz': [50.4667, 13.1333], 'přísečnice': [50.4667, 13.1333],
    'kupferberg': [50.4214, 13.1153], 'měděnec': [50.4214, 13.1153],
    'hlawatschow': [49.9120, 14.7660], 'hlavačov': [49.9120, 14.7660],
    'helfenberg': [48.5442, 14.1419],
    'libeschitz': [50.2939, 13.6233], 'liběšice u žatce': [50.2939, 13.6233],
    'amschelberg': [49.6558, 14.4744], 'kosova hora': [49.6558, 14.4744],
    'schloss rothenhaus': [50.5123, 13.4519], 'červený hrádek': [50.5123, 13.4519],
    'gottesgab': [50.4097, 12.9244], 'boží dar': [50.4097, 12.9244],
    'b. wiesenthal': [50.4394, 13.0156], 'böhmisch wiesenthal': [50.4394, 13.0156], 'loučná pod klínovcem': [50.4394, 13.0156],
    'sebastiansberg': [50.5100, 13.2511], 'hora svatého šebestiána': [50.5100, 13.2511],
    'eger': [50.0796, 12.3739], 'cheb': [50.0796, 12.3739],
    'bechyně': [49.2972, 14.4708], 'bechinie': [49.2972, 14.4708],
    'joachimsthal': [50.3583, 12.9344], 'jáchymov': [50.3583, 12.9344],
    'komotau': [50.4605, 13.4178], 'chomutov': [50.4605, 13.4178],
    'saaz': [50.3269, 13.5456], 'žatec': [50.3269, 13.5456],
    'prag': [50.0875, 14.4214], 'praha': [50.0875, 14.4214],
    'teplitz-schönau': [50.6403, 13.8244], 'teplitz': [50.6403, 13.8244], 'teplice': [50.6403, 13.8244],
    'salzburg-aigen': [47.7833, 13.0831],
    'münchen': [48.1372, 11.5755],
    'pechau': [52.0919, 11.7303],
    'wallern/trattnach': [48.2336, 13.9450],
    'radstadt': [47.3833, 13.4500],
    'rott bei salzburg': [47.8333, 12.9833],
    'bad aussee': [47.6097, 13.7822],
    'linz': [48.3064, 14.2861],
    'rannariedl': [48.4831, 13.7833],
    'steyr': [48.0425, 14.4211],
    'wels': [48.1656, 14.0353],
    'kartitsch': [46.7231, 12.5008],
    'sexten': [46.7019, 12.3586],
    'rovereto': [45.8885, 11.0413],
    'mailand': [45.4642, 9.1900],
    'anras': [46.7739, 12.5608],
    'lienz': [46.8289, 12.7686],
    'padua': [45.4064, 11.8768],
    'triest': [45.6495, 13.7768],
    'innsbruck': [47.2692, 11.3933],
    'sillian': [46.7528, 12.4211],
    'badljevina': [45.5135, 17.1924],
    'ivanovo polje': [45.5900, 17.1500],
    'negoslavci': [45.2783, 18.9975],
    'wien': [48.2092, 16.3728],
    'budapest': [47.4979, 19.0402],
    'schwarzkosteletz': [49.9944, 14.8597], 'kostelec nad černými lesy': [49.9944, 14.8597],
    'samechow': [49.7500, 15.0167], 'samechov': [49.7500, 15.0167],
    'ondrejow': [49.9058, 14.7803], 'ondřejov': [49.9058, 14.7803],
    'schwarz wodierad': [49.9500, 14.8000], 'černé voděrady': [49.9500, 14.8000]
  };

  function showOnMap(deName, czName) {
    // Karten-Sektion öffnen falls geschlossen
    var karteSection = document.getElementById('section-karte');
    var karteHeader = document.querySelector('[data-target="section-karte"]');
    if (karteSection && karteSection.style.display === 'none') {
      karteSection.style.display = 'block';
      var icon = karteHeader.querySelector('.collapse-icon');
      if (icon) icon.textContent = '▼';
      karteHeader.classList.add('active');
    }

    // Zu Karte scrollen
    var mapEl = document.getElementById('map');
    if (mapEl) {
      mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setTimeout(function() {
      var map = window.karteMap;
      if (!map) { alert('Karte nicht verfügbar'); return; }
      map.invalidateSize();

      // Alten temporären Marker entfernen
      if (tempMarker) {
        map.removeLayer(tempMarker);
        tempMarker = null;
      }

      var label = deName + (czName ? ' / ' + czName : '');

      // 1. Versuch: Feste Koordinaten
      var key = deName.toLowerCase();
      var keyCz = czName ? czName.toLowerCase() : '';
      var coords = chronikKoords[key] || chronikKoords[keyCz];

      if (coords) {
        placeMarker(map, coords[0], coords[1], label);
        return;
      }

      // 2. Versuch: Nominatim-Geocoding mit tschechischem Namen
      var searchName = czName || deName;
      var url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' +
                encodeURIComponent(searchName);

      fetch(url)
        .then(function(r) { return r.json(); })
        .then(function(results) {
          if (results && results.length > 0) {
            placeMarker(map, parseFloat(results[0].lat), parseFloat(results[0].lon), label);
          } else if (deName && deName !== searchName) {
            // Fallback: Deutschen Namen versuchen
            var url2 = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' +
                        encodeURIComponent(deName);
            return fetch(url2).then(function(r) { return r.json(); }).then(function(r2) {
              if (r2 && r2.length > 0) {
                placeMarker(map, parseFloat(r2[0].lat), parseFloat(r2[0].lon), label);
              } else {
                alert('Ort „' + label + '" konnte nicht auf der Karte gefunden werden.');
              }
            });
          } else {
            alert('Ort „' + label + '" konnte nicht auf der Karte gefunden werden.');
          }
        })
        .catch(function() {
          alert('Geocoding fehlgeschlagen. Bitte versuch es später erneut.');
        });
    }, 300);
  }

  function placeMarker(map, lat, lon, label) {
    tempMarker = L.marker([lat, lon], {
      icon: L.divIcon({
        className: 'custom-div-icon',
        html: '<div style="background-color: #e74c3c; width: 18px; height: 18px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 8px rgba(231,76,60,0.6);"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      })
    }).addTo(map);
    tempMarker.bindPopup('<strong>' + label + '</strong><br><small style="color:#999;">Ortsnamen-Suche</small>').openPopup();
    map.setView([lat, lon], 12);
  }

  // Global verfügbar machen
  window.showOrtOnMap = showOnMap;
})();
</script>
