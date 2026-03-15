---
layout: page
title: DNA-Migrationsroute – Väterliche Linie
permalink: /dna-migration/
status: vorläufig
stand_vom: 2026-03-15
---
<p style="margin-bottom: 1.5rem;"><a href="{{ '/orte/' | relative_url }}" style="color: #1a5f9e;">← Zurück zu Orte &amp; Herkunft</a></p>
<p>Diese Karte zeigt die Wanderung der väterlichen Vorfahrenlinie (Y-DNA) über rund 300.000 Jahre – von den Ursprüngen in Zentralafrika bis zu <strong>Abraham Pilz, geboren ca. 1590</strong> im Erzgebirge. Jede Station entspricht einer genetischen Verzweigung (Haplogruppe). Quelle: FamilyTreeDNA, Haplogruppe J-FT159612.</p>
<div id="dna-controls" style="margin: 1rem 0 0.75rem 0;">
  <button id="btn-play" onclick="startAnimation()">▶ Abspielen</button>
  <button id="btn-reset" onclick="resetAnimation()" style="margin-left:0.5rem;">↺ Zurücksetzen</button>
  <span id="info-label" style="margin-left: 1.2rem; font-style: italic; color: #555; font-size:0.95rem;"></span>
</div>
<div id="map" style="height: 580px; border: 1px solid #ccc; border-radius: 4px;"></div>
<p style="margin-top: 0.6rem; font-size: 0.82rem; color: #888;">Haplogruppen-Bezeichnungen nach FamilyTreeDNA. Zeitangaben sind wissenschaftliche Schätzwerte. Die blaue Fläche markiert die maximale Eisausdehnung während der letzten Eiszeit (ca. 20.000 v. Chr.).</p>
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
function animateStep(i) {
  if (i >= waypoints.length) {
    isAnimating = false;
    document.getElementById('info-label').textContent = '✓ Route vollständig – ' + waypoints[waypoints.length-1].year;
    return;
  }
  var wp = waypoints[i];
  // Eisschild anzeigen beim glazialen Maximum (Schritte 11–13)
  if (i >= 11 && i <= 13) {
    if (!dnaMap.hasLayer(iceLayer)) iceLayer.addTo(dnaMap);
  } else {
    if (dnaMap.hasLayer(iceLayer)) dnaMap.removeLayer(iceLayer);
  }
  document.getElementById('info-label').textContent = wp.group + '  ·  ' + wp.year;
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
  document.getElementById('info-label').textContent = '';
  routeGroup.clearLayers();
  if (dnaMap.hasLayer(iceLayer)) dnaMap.removeLayer(iceLayer);
  dnaMap.setView([20, 30], 3);
}
document.addEventListener('DOMContentLoaded', initDnaMap);
</script>