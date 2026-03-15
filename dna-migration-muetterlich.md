---
layout: page
title: DNA-Migrationsroute – Mütterliche Linie
permalink: /dna-migration-muetterlich/
status: vorläufig
stand_vom: 2026-03-15
---
<p>Diese Karte zeigt die Wanderung der mütterlichen Vorfahrenlinie (mtDNA) über rund 300.000 Jahre – von den Ursprüngen in Ostafrika bis nach <strong>Österreich/Kroatien, ca. 450 n. Chr.</strong> Jede Station entspricht einer genetischen Verzweigung. Quelle: FamilyTreeDNA, Haplogruppe H41a9.</p>
<p style="background:#f5f5f5; border-left:4px solid #888; padding:0.6rem 0.9rem; font-size:0.92rem; margin-bottom:1rem;">Bemerkenswert: Während die väterliche Linie über den Balkan und die Alpen nach Mitteleuropa gelangte, flüchtete die mütterliche Linie während der Eiszeit auf die Iberische Halbinsel — und fand ihren Weg über Westeuropa und Skandinavien zurück.</p>
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
function animateStep(i) {
  if (i >= waypoints.length) {
    isAnimating = false;
    document.getElementById('info-label').textContent = '✓ Route vollständig – ' + waypoints[waypoints.length-1].year;
    return;
  }
  var wp = waypoints[i];
  if (wp.highlight_ice || (i >= 8 && i <= 10)) {
    if (!dnaMap.hasLayer(iceLayer)) iceLayer.addTo(dnaMap);
  } else {
    if (dnaMap.hasLayer(iceLayer)) dnaMap.removeLayer(iceLayer);
  }
  document.getElementById('info-label').textContent = wp.group + '  ·  ' + wp.year;
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
  document.getElementById('info-label').textContent = '';
  routeGroup.clearLayers();
  if (dnaMap.hasLayer(iceLayer)) dnaMap.removeLayer(iceLayer);
  dnaMap.setView([20, 20], 3);
}
document.addEventListener('DOMContentLoaded', initDnaMap);
</script>