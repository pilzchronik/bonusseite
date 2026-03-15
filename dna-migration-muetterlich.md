---
layout: page
title: DNA-Migrationsroute – Mütterliche Linie
permalink: /dna-migration-muetterlich/
status: vorläufig
stand_vom: 2026-03-15
---
<p style="margin-bottom: 1.5rem;"><a href="{{ '/dna-analyse/' | relative_url }}" style="color: #7a3a8a;">← Zurück zur DNA-Analyse</a></p>
<p>Diese Karte zeigt die Wanderung der mütterlichen Vorfahrenlinie (mtDNA) über rund 300.000 Jahre – von den Ursprüngen in Ostafrika bis nach <strong>Österreich/Kroatien, ca. 450 n. Chr.</strong> Jede Station entspricht einer genetischen Verzweigung. Quelle: FamilyTreeDNA, Haplogruppe H41a9.</p>
<p style="background:#f5f5f5; border-left:4px solid #888; padding:0.6rem 0.9rem; font-size:0.92rem; margin-bottom:1rem;">Bemerkenswert: Während die väterliche Linie über den Balkan und die Alpen nach Mitteleuropa gelangte, flüchtete die mütterliche Linie während der Eiszeit auf die Iberische Halbinsel — und fand ihren Weg über Westeuropa und Skandinavien zurück.</p>
<div id="dna-controls" style="margin: 1rem 0 0.75rem 0;">
  <button id="btn-play" onclick="startAnimation()">▶ Abspielen</button>
  <button id="btn-reset" onclick="resetAnimation()" style="margin-left:0.5rem;">↺ Zurücksetzen</button>
</div>
<div id="station-panel" style="display: none; background: #f5eefb; border-left: 4px solid #7a3a8a; border-radius: 4px; padding: 14px 18px; margin-bottom: 10px; transition: opacity 0.3s;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
    <span id="panel-group" style="font-size: 1.35em; font-weight: 700; color: #7a3a8a;"></span>
    <span id="panel-step" style="font-size: 0.82em; color: #999;"></span>
  </div>
  <div id="panel-year" style="font-size: 1.05em; font-weight: 600; color: #555; margin-bottom: 4px;"></div>
  <div id="panel-info" style="font-size: 0.92em; color: #444; line-height: 1.5;"></div>
</div>
<span id="info-label" style="display:none;"></span>
<div id="map" style="height: 580px; border: 1px solid #ccc; border-radius: 4px;"></div>
<p style="margin-top: 0.6rem; font-size: 0.82rem; color: #888;">Haplogruppen-Bezeichnungen nach FamilyTreeDNA. Zeitangaben sind wissenschaftliche Schätzwerte. Die blaue Fläche markiert die maximale Eisausdehnung während der letzten Eiszeit (ca. 20.000 v. Chr.).</p>

<details style="margin-top: 2rem; background: #f5eefb; border-left: 4px solid #7a3a8a; border-radius: 4px; padding: 0;">
  <summary style="padding: 14px 18px; cursor: pointer; font-weight: 600; color: #7a3a8a; font-size: 1.05em; user-select: none;">Was bedeuten die Haplogruppen-Namen?</summary>
  <div style="padding: 4px 18px 18px 18px; font-size: 0.92em; line-height: 1.7; color: #444;">
    <p>Haplogruppen bezeichnen Äste im Stammbaum der Menschheit. Jeder Name steht für eine bestimmte <strong>Mutation</strong> in der mitochondrialen DNA, die sich einmal ereignet hat und seitdem von jeder Mutter an alle Kinder weitergegeben wird.</p>
    <p style="margin-top: 8px;">Das Namensystem – vom ältesten zum jüngsten Ast:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9em;">
      <tr style="border-bottom: 1px solid #e0d0e8;">
        <td style="padding: 6px 10px; font-weight: 600; white-space: nowrap; color: #7a3a8a;">L</td>
        <td style="padding: 6px 10px;">Die ältesten menschlichen Linien, alle in Afrika entstanden. Die Apostrophe in L1'7, L2'3'4'6 usw. zeigen, welche Untergruppen noch gemeinsam zusammenhängen.</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0d0e8;">
        <td style="padding: 6px 10px; font-weight: 600; white-space: nowrap; color: #7a3a8a;">N</td>
        <td style="padding: 6px 10px;">Erste Linie außerhalb Afrikas – Vorfahrin fast aller nicht-afrikanischen mütterlichen Linien.</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0d0e8;">
        <td style="padding: 6px 10px; font-weight: 600; white-space: nowrap; color: #7a3a8a;">R → R0 → HV → H</td>
        <td style="padding: 6px 10px;">Schrittweise Verzweigungen vom Nahen Osten nach Europa. H ist heute die häufigste mütterliche Haplogruppe in Europa (ca. 40 %).</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; font-weight: 600; white-space: nowrap; color: #7a3a8a;">H41a9</td>
        <td style="padding: 6px 10px;">Unsere spezifische Endposition – eine sehr seltene Unterlinie, entstanden ca. 450 n. Chr. im Alpen-Balkan-Raum. Die Ziffern und Buchstaben (41, a, 9) bezeichnen immer feinere Verzweigungen.</td>
      </tr>
    </table>
  </div>
</details>

<h3 style="color: #333; margin-top: 2.5rem; margin-bottom: 0.5rem; font-size: 1.15em;">Stationen der Wanderung</h3>
<p style="font-size: 0.88em; color: #888; margin-bottom: 12px;">16 genetische Verzweigungen über 300.000 Jahre. Die aktive Station wird während der Animation hervorgehoben.</p>
<div style="max-height: 420px; overflow-y: auto; border: 1px solid #e0e4e8; border-radius: 4px;">
  <table id="stations-table" style="width: 100%; border-collapse: collapse; font-size: 0.88em;">
    <thead>
      <tr style="background: #7a3a8a; color: white; position: sticky; top: 0; z-index: 2;">
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
  background: #7a3a8a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.92rem;
}
#btn-play:hover, #btn-reset:hover { background: #572870; }
#btn-play:disabled { background: #aaa; cursor: default; }
</style>
<script>
var waypoints = [
  { group: "mt-Eve",             year: "ca. 300.000 v. Chr.", lat:  8.0, lng: 40.0, info: "Mitochondriale Eva – gemeinsame Urmutter aller heute lebenden Menschen. Ostafrika/Äthiopien." },
  { group: "L1'7",               year: "ca. 200.000 v. Chr.", lat:  7.0, lng: 38.0, info: "Frühe Aufspaltung in Ostafrika." },
  { group: "L2'7",               year: "ca. 160.000 v. Chr.", lat:  9.0, lng: 36.0, info: "Ostafrika – weitere Differenzierung." },
  { group: "L2'3'4'6",           year: "ca. 130.000 v. Chr.", lat: 11.0, lng: 35.0, info: "Ostafrika/Sudan." },
  { group: "L3'4'6",             year: "ca. 100.000 v. Chr.", lat: 13.0, lng: 36.0, info: "Nordostafrika/Äthiopien." },
  { group: "L3'4",               year: "ca. 85.000 v. Chr.",  lat: 11.5, lng: 42.0, info: "Horn von Afrika – Vorbereitung des Auszugs." },
  { group: "L3",                 year: "ca. 70.000 v. Chr.",  lat: 13.0, lng: 43.5, info: "Nordostafrika – Ausgangspunkt des Auszugs aus Afrika." },
  { group: "N",                  year: "ca. 60.000 v. Chr.",  lat: 22.0, lng: 56.0, info: "Arabische Halbinsel/Oman – erster Halt nach dem Auszug aus Afrika." },
  { group: "R",                  year: "ca. 55.000 v. Chr.",  lat: 28.0, lng: 56.0, info: "Persischer Golf/Iran – weitere Wanderung nordwärts." },
  { group: "R0",                 year: "ca. 45.000 v. Chr.",  lat: 33.0, lng: 44.0, info: "Levante/Irak – Vorläufer fast aller europäischen mütterlichen Linien." },
  { group: "HV",                 year: "ca. 35.000 v. Chr.",  lat: 37.5, lng: 37.0, info: "Anatolien/Türkei – Verzweigung in H- und V-Linien. Eiszeit-Refugium im Nahen Osten.", highlight_ice: true },
  { group: "H",                  year: "ca. 25.000 v. Chr.",  lat: 38.0, lng: 32.0, info: "Westanatolien – mit dem Rückzug des Eises beginnt die Wanderung westwärts.", highlight_ice: true },
  { group: "H (Balkan)",         year: "ca. 15.000 v. Chr.",  lat: 41.5, lng: 22.0, info: "Griechenland/Balkan – Einzug in Europa über die Balkanhalbinsel. Historische Verbindung: Römerzeitliche Balkans." },
  { group: "H (Mitteleuropa)",   year: "ca. 8.000 v. Chr.",   lat: 44.0, lng: 17.0, info: "Westbalkan/Adriaraum – H wird zur häufigsten mütterlichen Haplogruppe in Europa." },
  { group: "H41a6'7'8'9'21",    year: "ca. 2.100 v. Chr.",   lat: 45.5, lng: 15.5, info: "Balkan/Kroatien-Slowenien-Raum – Vorläuferlinie. Historische Verbindungen: Fatyanovo-Kultur, Eisenzeitliches Skandinavien." },
  { group: "H41a9",              year: "ca. 450 n. Chr.",      lat: 46.5, lng: 14.8, info: "<strong>Österreich / Kroatien, ca. 450 n. Chr.</strong> – direkter mütterlicher Ursprung in der Pilz-Chronik. 4 getestete Nachkommen aus Österreich und Kroatien.", highlight: true }
];
var iceCoords = [
  [72,-25],[76,0],[73,15],[70,25],[66,30],[61,30],
  [57,25],[54,20],[52,15],[51,10],[50,5],[50,0],
  [51,-5],[53,-10],[56,-15],[59,-20],[63,-25],[68,-25],[72,-25]
];
var dnaMap, routeGroup, iceLayer, markers = [], animTimer;
var currentStep = 0, isAnimating = false;
function initDnaMap() {
  dnaMap = L.map('map').setView([20, 20], 3);
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
  panel.style.borderLeftColor = wp.highlight ? '#cc2222' : '#7a3a8a';
  panel.style.background = wp.highlight ? '#fef5f5' : '#f5eefb';
  document.getElementById('panel-group').textContent = 'Haplogruppe ' + wp.group;
  document.getElementById('panel-group').style.color = wp.highlight ? '#cc2222' : '#7a3a8a';
  document.getElementById('panel-step').textContent = 'Station ' + (i + 1) + ' von ' + waypoints.length;
  document.getElementById('panel-year').textContent = wp.year;
  document.getElementById('panel-info').innerHTML = wp.info;
}
function animateStep(i) {
  if (i >= waypoints.length) {
    isAnimating = false;
    document.getElementById('panel-step').textContent = '✓ Route vollständig';
    return;
  }
  var wp = waypoints[i];
  if (wp.highlight_ice || (i >= 8 && i <= 10)) {
    if (!dnaMap.hasLayer(iceLayer)) iceLayer.addTo(dnaMap);
  } else {
    if (dnaMap.hasLayer(iceLayer)) dnaMap.removeLayer(iceLayer);
  }
  updatePanel(i);
  highlightStation(i);
  if (i > 0) {
    var prev = waypoints[i - 1];
    L.polyline([[prev.lat, prev.lng],[wp.lat, wp.lng]], {
      color: '#7a3a8a', weight: 2.5, opacity: 0.85
    }).addTo(routeGroup);
  }
  var dotColor = wp.highlight ? '#cc2222' : '#7a3a8a';
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
  dnaMap.setView([20, 20], 3);
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
      '<td style="padding:8px 12px; font-weight:600; color:' + (wp.highlight ? '#cc2222' : '#7a3a8a') + ';">' + wp.group + '</td>' +
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
    if (row) row.style.backgroundColor = (j === i) ? '#ead8f5' : '';
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