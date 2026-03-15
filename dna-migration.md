---
layout: page
title: DNA-Migrationsroute – Väterliche Linie
permalink: /dna-migration/
status: vorläufig
stand_vom: 2026-03-15
---
<p style="margin-bottom: 1.5rem;"><a href="{{ '/dna-analyse/' | relative_url }}" style="color: #1a5f9e;">← Zurück zur DNA-Analyse</a></p>
<p>Diese Karte zeigt die Wanderung der väterlichen Vorfahrenlinie (Y-DNA) über rund 300.000 Jahre – von den Ursprüngen in Zentralafrika bis zu <strong>Abraham Pilz, geboren ca. 1590</strong> im Erzgebirge. Jede Station entspricht einer genetischen Verzweigung (Haplogruppe). Quelle: FamilyTreeDNA, Haplogruppe J-FT159612.</p>
<div id="dna-controls" style="margin: 1rem 0 0.75rem 0;">
  <button id="btn-play" onclick="startAnimation()">▶ Abspielen</button>
  <button id="btn-reset" onclick="resetAnimation()" style="margin-left:0.5rem;">↺ Zurücksetzen</button>
</div>
<div id="station-panel" style="display: none; background: #f0f4f8; border-left: 4px solid #1a5f9e; border-radius: 4px; padding: 14px 18px; margin-bottom: 10px; transition: opacity 0.3s;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
    <span id="panel-group" style="font-size: 1.35em; font-weight: 700; color: #1a5f9e;"></span>
    <span id="panel-step" style="font-size: 0.82em; color: #999;"></span>
  </div>
  <div id="panel-year" style="font-size: 1.05em; font-weight: 600; color: #555; margin-bottom: 4px;"></div>
  <div id="panel-info" style="font-size: 0.92em; color: #444; line-height: 1.5;"></div>
</div>
<span id="info-label" style="display:none;"></span>
<div id="map" style="height: 580px; border: 1px solid #ccc; border-radius: 4px;"></div>
<p style="margin-top: 0.6rem; font-size: 0.82rem; color: #888;">Haplogruppen-Bezeichnungen nach FamilyTreeDNA. Zeitangaben sind wissenschaftliche Schätzwerte. Die blaue Fläche markiert die maximale Eisausdehnung während der letzten Eiszeit (ca. 20.000 v. Chr.).</p>

<details style="margin-top: 2rem; background: #f0f4f8; border-left: 4px solid #1a5f9e; border-radius: 4px; padding: 0;">
  <summary style="padding: 14px 18px; cursor: pointer; font-weight: 600; color: #1a5f9e; font-size: 1.05em; user-select: none;">Was bedeuten die Haplogruppen-Namen?</summary>
  <div style="padding: 4px 18px 18px 18px; font-size: 0.92em; line-height: 1.7; color: #444;">
    <p>Haplogruppen bezeichnen Äste im Stammbaum der Menschheit. Jeder Name steht für eine bestimmte <strong>Mutation</strong> (eine dauerhafte Veränderung im Erbgut), die sich einmal ereignet hat und seitdem an alle Nachkommen weitergegeben wird.</p>
    <p style="margin-top: 8px;">Das Namensystem funktioniert wie eine Adresse – vom groben zum feinen:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9em;">
      <tr style="border-bottom: 1px solid #d0d8e0;">
        <td style="padding: 6px 10px; font-weight: 600; white-space: nowrap; color: #1a5f9e;">J</td>
        <td style="padding: 6px 10px;">Hauptgruppe – entstand vor ca. 40.000 Jahren im Nahen Osten. Der Großbuchstabe bezeichnet den ältesten Ast.</td>
      </tr>
      <tr style="border-bottom: 1px solid #d0d8e0;">
        <td style="padding: 6px 10px; font-weight: 600; white-space: nowrap; color: #1a5f9e;">J2</td>
        <td style="padding: 6px 10px;">Untergruppe – die Ziffer zeigt eine weitere Verzweigung. J2 bildete sich in Anatolien während der Eiszeit.</td>
      </tr>
      <tr style="border-bottom: 1px solid #d0d8e0;">
        <td style="padding: 6px 10px; font-weight: 600; white-space: nowrap; color: #1a5f9e;">J-M102</td>
        <td style="padding: 6px 10px;">Die Buchstaben-Zahlen-Kombination nach dem Bindestrich (M102, L283, Z600 …) benennt die spezifische Mutation, die diesen Zweig definiert.</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; font-weight: 600; white-space: nowrap; color: #1a5f9e;">J-FT159612</td>
        <td style="padding: 6px 10px;">Unsere spezifische Endposition – ein sehr seltener, eng eingegrenzter Zweig. Je länger der Name, desto jünger und seltener die Mutation.</td>
      </tr>
    </table>
    <p style="margin-top: 8px; font-size: 0.88em; color: #888;">Die frühen Bezeichnungen (Y-Adam, A0-T, BT, CT …) verwenden ein älteres Buchstabensystem für die tiefsten Verzweigungen des menschlichen Stammbaums.</p>
  </div>
</details>

<h3 style="color: #333; margin-top: 2.5rem; margin-bottom: 0.5rem; font-size: 1.15em;">Stationen der Wanderung</h3>
<p style="font-size: 0.88em; color: #888; margin-bottom: 12px;">24 genetische Verzweigungen über 300.000 Jahre. Die aktive Station wird während der Animation hervorgehoben.</p>
<div style="max-height: 420px; overflow-y: auto; border: 1px solid #e0e4e8; border-radius: 4px;">
  <table id="stations-table" style="width: 100%; border-collapse: collapse; font-size: 0.88em;">
    <thead>
      <tr style="background: #1a5f9e; color: white; position: sticky; top: 0; z-index: 2;">
        <th style="padding: 10px 12px; text-align: left; width: 4%;">#</th>
        <th style="padding: 10px 12px; text-align: left; width: 22%;">Haplogruppe</th>
        <th style="padding: 10px 12px; text-align: left; width: 22%;">Zeit</th>
        <th style="padding: 10px 12px; text-align: left;">Ort / Bedeutung</th>
      </tr>
    </thead>
    <tbody id="stations-tbody"></tbody>
  </table>
</div>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<style>
#btn-play, #btn-reset {
  padding: 0.4rem 1rem;
  background: #2d6aa0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.92rem;
}
#btn-play:hover, #btn-reset:hover { background: #1f4f7a; }
#btn-play:disabled { background: #aaa; cursor: default; }
</style>
<script>
var waypoints = [
  { group: "Y-Adam",       year: "ca. 300.000 v. Chr.", lat:  5.0, lng: 12.0, info: "Gemeinsamer Urahn aller heute lebenden Männer. Kamerun/Zentralafrika." },
  { group: "A0-T",         year: "ca. 200.000 v. Chr.", lat:  6.5, lng: 14.0, info: "Frühe Aufspaltung in Westafrika/Kamerun." },
  { group: "A1b",          year: "ca. 160.000 v. Chr.", lat: 10.0, lng: 25.0, info: "Wanderung ostwärts nach Zentralafrika." },
  { group: "BT",           year: "ca. 130.000 v. Chr.", lat: 12.0, lng: 34.0, info: "Ostafrika/Sudan – Vorfahren fast aller Nicht-Afrikaner." },
  { group: "CT",           year: "ca. 80.000 v. Chr.",  lat: 10.0, lng: 38.0, info: "Äthiopien – Ausgangspunkt der Wanderung aus Afrika." },
  { group: "CF",           year: "ca. 70.000 v. Chr.",  lat: 11.5, lng: 43.0, info: "Horn von Afrika – letzter Halt vor dem Auszug." },
  { group: "F",            year: "ca. 60.000 v. Chr.",  lat: 22.0, lng: 58.0, info: "Arabische Halbinsel/Oman – erster Halt nach dem Auszug aus Afrika." },
  { group: "GHIJK",        year: "ca. 55.000 v. Chr.",  lat: 27.0, lng: 55.0, info: "Persischer Golf – weitere Aufspaltung der Linien." },
  { group: "HIJK",         year: "ca. 50.000 v. Chr.",  lat: 28.5, lng: 56.0, info: "Iran/Zagros-Vorgebirge." },
  { group: "IJ",           year: "ca. 45.000 v. Chr.",  lat: 32.0, lng: 50.0, info: "Iran – gemeinsamer Vorfahre der späteren J- und I-Linien." },
  { group: "J",            year: "ca. 40.000 v. Chr.",  lat: 35.0, lng: 43.0, info: "Naher Osten – Beginn der J-Haplogruppe." },
  { group: "J2",           year: "ca. 25.000 v. Chr.",  lat: 37.5, lng: 38.0, info: "Anatolien/Türkei – Rückzug ins Eiszeit-Refugium." },
  { group: "J-M102",       year: "ca. 20.000 v. Chr.",  lat: 38.5, lng: 35.0, info: "Anatolien – letztes glaziales Maximum. Nordeuropa unter Eis." },
  { group: "J-Z1827",      year: "ca. 15.000 v. Chr.",  lat: 39.0, lng: 33.0, info: "Westanatolien – der Eisrückzug beginnt." },
  { group: "J-L283",       year: "ca. 10.000 v. Chr.",  lat: 39.5, lng: 22.0, info: "Griechenland – Vorstoß nach Westen mit dem Rückzug des Eises." },
  { group: "J-Z600",       year: "ca. 8.000 v. Chr.",   lat: 43.0, lng: 17.0, info: "Westbalkan/Adriaküste." },
  { group: "J-Z2509",      year: "ca. 6.000 v. Chr.",   lat: 44.5, lng: 13.0, info: "Norditalien/Adriaraum." },
  { group: "J-Z622",       year: "ca. 5.000 v. Chr.",   lat: 45.5, lng:  8.0, info: "Norditalien/Südfrankreich." },
  { group: "J-Z1296",      year: "ca. 3.000 v. Chr.",   lat: 47.0, lng: 10.5, info: "Alpenraum." },
  { group: "J-Z8418",      year: "ca. 1.500 v. Chr.",   lat: 48.0, lng: 13.0, info: "Mitteleuropa/Bayern." },
  { group: "J-Z8421",      year: "ca. 1.000 v. Chr.",   lat: 48.5, lng: 13.5, info: "Böhmen/Erzgebirge-Vorland." },
  { group: "J-Z615",       year: "ca. 500 v. Chr.",     lat: 49.5, lng: 13.5, info: "Böhmen." },
  { group: "J-Z585",       year: "ca. 200 v. Chr.",     lat: 50.2, lng: 13.5, info: "Nordböhmen/Erzgebirge." },
  { group: "J-FT159612",   year: "1590 n. Chr.",         lat: 50.65, lng: 13.3, info: "<strong>Abraham Pilz, geb. ca. 1590 im Erzgebirge</strong> – erster dokumentierter Vorfahre der väterlichen Linie in der Pilz-Chronik.", highlight: true }
];
var iceCoords = [
  [72,-25],[76,0],[73,15],[70,25],[66,30],[61,30],
  [57,25],[54,20],[52,15],[51,10],[50,5],[50,0],
  [51,-5],[53,-10],[56,-15],[59,-20],[63,-25],[68,-25],[72,-25]
];
var dnaMap, routeGroup, iceLayer, markers = [], animTimer;
var currentStep = 0, isAnimating = false;
function initDnaMap() {
  dnaMap = L.map('map').setView([20, 30], 3);
  L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap-Mitwirkende',
    maxZoom: 10
  }).addTo(dnaMap);
  routeGroup = L.layerGroup().addTo(dnaMap);
  iceLayer = L.polygon(iceCoords, {
    color: '#5599cc',
    fillColor: '#aaccee',
    fillOpacity: 0.4,
    weight: 1.5,
    dashArray: '5 5'
  });
}
function startAnimation() {
  if (isAnimating) return;
  isAnimating = true;
  document.getElementById('btn-play').disabled = true;
  animateStep(currentStep);
}
function updatePanel(i) {
  var panel = document.getElementById('station-panel');
  if (i < 0 || i >= waypoints.length) return;
  var wp = waypoints[i];
  panel.style.display = 'block';
  panel.style.borderLeftColor = wp.highlight ? '#cc2222' : '#1a5f9e';
  panel.style.background = wp.highlight ? '#fef5f5' : '#f0f4f8';
  document.getElementById('panel-group').textContent = 'Haplogruppe ' + wp.group;
  document.getElementById('panel-group').style.color = wp.highlight ? '#cc2222' : '#1a5f9e';
  document.getElementById('panel-step').textContent = 'Station ' + (i + 1) + ' von ' + waypoints.length;
  document.getElementById('panel-year').textContent = wp.year;
  document.getElementById('panel-info').innerHTML = wp.info;
}
function animateStep(i) {
  if (i >= waypoints.length) {
    isAnimating = false;
    var lastWp = waypoints[waypoints.length - 1];
    document.getElementById('panel-step').textContent = '✓ Route vollständig';
    return;
  }
  var wp = waypoints[i];
  // Eisschild anzeigen beim glazialen Maximum (Schritte 11–13)
  if (i >= 11 && i <= 13) {
    if (!dnaMap.hasLayer(iceLayer)) iceLayer.addTo(dnaMap);
  } else {
    if (dnaMap.hasLayer(iceLayer)) dnaMap.removeLayer(iceLayer);
  }
  updatePanel(i);
  highlightStation(i);
  // Linie zum vorherigen Punkt
  if (i > 0) {
    var prev = waypoints[i - 1];
    L.polyline([[prev.lat, prev.lng],[wp.lat, wp.lng]], {
      color: '#1a5f9e', weight: 2.5, opacity: 0.85
    }).addTo(routeGroup);
  }
  // Marker
  var dotColor = wp.highlight ? '#cc2222' : '#1a5f9e';
  var dotSize  = wp.highlight ? 13 : 8;
  var icon = L.divIcon({
    className: '',
    html: '<div style="background:' + dotColor + ';width:' + dotSize + 'px;height:' + dotSize + 'px;border-radius:50%;border:2px solid white;box-shadow:0 0 5px rgba(0,0,0,0.45);"></div>',
    iconSize: [dotSize, dotSize],
    iconAnchor: [dotSize/2, dotSize/2]
  });
  var m = L.marker([wp.lat, wp.lng], {icon: icon})
    .addTo(routeGroup)
    .bindPopup('<strong>' + wp.group + '</strong><br><em>' + wp.year + '</em><br><span style="font-size:0.9em">' + wp.info + '</span>');
  if (wp.highlight) {
    setTimeout(function() { m.openPopup(); }, 400);
  }
  markers.push(m);
  dnaMap.panTo([wp.lat, wp.lng], {animate: true, duration: 0.7});
  currentStep = i + 1;
  var delay = wp.highlight ? 2000 : 1100;
  animTimer = setTimeout(function() { animateStep(i + 1); }, delay);
}
function resetAnimation() {
  clearTimeout(animTimer);
  isAnimating = false;
  currentStep = 0;
  markers = [];
  document.getElementById('btn-play').disabled = false;
  document.getElementById('station-panel').style.display = 'none';
  routeGroup.clearLayers();
  if (dnaMap.hasLayer(iceLayer)) dnaMap.removeLayer(iceLayer);
  dnaMap.setView([20, 30], 3);
}
function buildStationsTable() {
  var tbody = document.getElementById('stations-tbody');
  if (!tbody) return;
  waypoints.forEach(function(wp, i) {
    var tr = document.createElement('tr');
    tr.id = 'station-row-' + i;
    tr.style.borderBottom = '1px solid #e9ecef';
    tr.style.transition = 'background-color 0.3s';
    if (wp.highlight) tr.style.fontWeight = '600';
    tr.innerHTML =
      '<td style="padding:8px 12px; color:#999;">' + (i + 1) + '</td>' +
      '<td style="padding:8px 12px; font-weight:600; color:' + (wp.highlight ? '#cc2222' : '#1a5f9e') + ';">' + wp.group + '</td>' +
      '<td style="padding:8px 12px; white-space:nowrap;">' + wp.year + '</td>' +
      '<td style="padding:8px 12px; color:#555;">' + wp.info.replace(/<[^>]*>/g, '') + '</td>';
    tr.style.cursor = 'pointer';
    tr.addEventListener('click', function() {
      var m = markers[i];
      if (m) { dnaMap.setView([wp.lat, wp.lng], 6); m.openPopup(); }
    });
    tbody.appendChild(tr);
  });
}
function highlightStation(i) {
  waypoints.forEach(function(_, j) {
    var row = document.getElementById('station-row-' + j);
    if (row) row.style.backgroundColor = (j === i) ? '#dce8f5' : '';
  });
  // Nur innerhalb des Tabellen-Containers scrollen, nicht die ganze Seite
  var activeRow = document.getElementById('station-row-' + i);
  if (activeRow) {
    var container = activeRow.closest('div[style*="overflow-y"]');
    if (container) container.scrollTop = activeRow.offsetTop - container.offsetTop - 40;
  }
}
document.addEventListener('DOMContentLoaded', function() {
  initDnaMap();
  buildStationsTable();
});
</script>