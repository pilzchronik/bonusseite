// Genealogie-Karte für pilzchronik.github.io
// Version 3.1 - Konsolidierte Daten + Tabelle + Vollbild (wiederhergestellt)
// Stand: Januar 2026

document.addEventListener('DOMContentLoaded', function() {
    
    var mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    console.log('Initialisiere Karte v3.1...');
    
    var map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    var lineColors = {
        'Pilz-Linie': '#e74c3c',       // Rot
        'Eberstaller-Linie': '#3498db', // Blau
        'Tiroler Linie': '#2ecc71',     // Grün
        'Zusammenführung': '#f39c12',   // Orange
        'Sonstige': '#95a5a6'           // Grau
    };

    function createCustomIcon(kategorie) {
        var color = lineColors[kategorie] || '#95a5a6';
        return L.divIcon({
            className: 'custom-div-icon',
            html: '<div style="background-color: ' + color + '; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.5);"></div>',
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
    }

    // Konsolidierte Daten: Mischung aus Master-CSV und bekannten Beschreibungen
    var orte = [
        // === PILZ-LINIE (Sachsen/Böhmen) ===
        {name: "Dörnthal", lat: 50.7339, lon: 13.3486, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Pültz/Pilz (Jobst). Ältester nachgewiesener Ursprung. Richter und Gerichtsschöppe."},
        {name: "Olbernhau", lat: 50.6661, lon: 13.3381, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Zentrum des Handwerks. Siedlung böhmischer Exulanten (Niederneuschönberg)."},
        {name: "Rothenthal", lat: 50.6342, lon: 13.3733, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Geburtsort von Friedrich August Pilz. Ausgangspunkt der Migration nach Böhmen."},
        {name: "Kallich (Kalek)", lat: 50.5775, lon: 13.3219, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Ankunftsort nach Migration. Hungersnot 1772. Heirat Pilz/Reichl."},
        {name: "Schmiedeberg (Kovářská)", lat: 50.4381, lon: 13.0536, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Herkunft Familie Hofmann. Bergbau und Industrialisierung."},
        {name: "Weipert (Vejprty)", lat: 50.4922, lon: 13.0319, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Geburt des Großvaters (1876). Königliche Bergstadt."},
        {name: "Stolzenhain", lat: 50.4128, lon: 12.9789, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Zentraler Ort für die Förster-Generationen. Tod von Vinzenz Pilz (1883)."},
        {name: "Preßnitz (Přísečnice)", lat: 50.4667, lon: 13.1333, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Versunkene Stadt (Stausee). Ort des Grubenunglücks 1698."},
        {name: "Kupferberg (Měděnec)", lat: 50.4214, lon: 13.1153, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Vinzenz Wenzel Pilz: 'katholisch-politisches Casino'."},
        {name: "Ondrejov", lat: 49.912, lon: 14.766, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Hlawatschow/Ondrejov. Bechinie/Pilz Verbindung."},
        {name: "Libeschitz", lat: 50.2939, lon: 13.6233, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Friedrich August Pilz (Lehrer). Saazer Hopfenland."},
        {name: "Amschelberg (Kosova Hora)", lat: 49.6558, lon: 14.4744, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Taufe der jüdischen Vorfahrin Apollonia Jablotzki. Radetzky-Bezug."},
        {name: "Schloss Rothenhaus", lat: 50.5123, lon: 13.4519, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Dienstsitz der Förstergenerationen."},
        {name: "Gottesgab (Boží Dar)", lat: 50.4097, lon: 12.9244, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Familien Glaser, Gahler."},
        {name: "Böhmisch Wiesenthal", lat: 50.4394, lon: 13.0156, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Heirat der Urgroßeltern Vinzenz Pilz & Franziska Gahler."},
        {name: "Sebastiansberg", lat: 50.51, lon: 13.2511, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bergstadt im Erzgebirge."},
        {name: "Eger (Cheb)", lat: 50.0796, lon: 12.3739, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Mägdebrunnen von Oswald Hofmann."},
        
        // === EBERSTALLER-LINIE (Oberösterreich/Salzburg) ===
        {name: "Wallern an der Trattnach", lat: 48.2336, lon: 13.945, kategorie: "Eberstaller-Linie", region: "Oberösterreich", beschreibung: "Reichhof. Fast 300 Jahre Sesshaftigkeit der Eberstaller."},
        {name: "Radstadt", lat: 47.3833, lon: 13.45, kategorie: "Eberstaller-Linie", region: "Salzburg", beschreibung: "Gründung und Niedergang der Eberstaller-Bäckerei."},
        {name: "Rott bei Salzburg", lat: 47.8333, lon: 12.9833, kategorie: "Eberstaller-Linie", region: "Salzburg", beschreibung: "Geburtsort des Großvaters Johann Eberstaller."},
        {name: "Bad Aussee / Unterkainisch", lat: 47.6097, lon: 13.7822, kategorie: "Eberstaller-Linie", region: "Steiermark", beschreibung: "Heirat Johann B. Eberstaller & Klara Mittermaier (1895)."},
        {name: "Helfenberg", lat: 48.5442, lon: 14.1419, kategorie: "Eberstaller-Linie", region: "Oberösterreich", beschreibung: "Dienstort Alois Pilz als Oberförster. Geburtsort des Vaters."},
        {name: "Linz", lat: 48.3064, lon: 14.2861, kategorie: "Eberstaller-Linie", region: "Oberösterreich", beschreibung: "Landeshauptstadt."},
        {name: "Rannariedl", lat: 48.4831, lon: 13.7833, kategorie: "Eberstaller-Linie", region: "Oberösterreich", beschreibung: "Gerichtsdiener Strixner."},
        {name: "Krenglbach", lat: 48.2053, lon: 13.9558, kategorie: "Eberstaller-Linie", region: "Oberösterreich", beschreibung: "Orte Breitwiesen, Göldnig."},
        {name: "Steinerkirchen a.d. Traun", lat: 48.0789, lon: 13.9578, kategorie: "Eberstaller-Linie", region: "Oberösterreich", beschreibung: "Orte Almegg, Atzmannsdorf."},
        
        // === TIROLER LINIE ===
        {name: "Kartitsch", lat: 46.7231, lon: 12.5008, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Petererhof. Zentrum der Tiroler Linie."},
        {name: "Sexten", lat: 46.7019, lon: 12.3586, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Reider (Reidhof), Tschurtschenthaler."},
        {name: "Rovereto", lat: 45.8885, lon: 11.0413, kategorie: "Tiroler Linie", region: "Welschtirol", beschreibung: "Kofler/Cofler Dynastie."},
        {name: "Mailand", lat: 45.4642, lon: 9.19, kategorie: "Tiroler Linie", region: "Lombardei", beschreibung: "Finanzier Peter Kofler."},
        {name: "Anras", lat: 46.7739, lon: 12.5608, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Pfarrer Bodner/Kofler."},
        {name: "Lienz", lat: 46.8289, lon: 12.7686, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Bezirkshauptstadt."},
        {name: "Sillian", lat: 46.7528, lon: 12.4211, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Zollamt Alois A. Pilz."},
        {name: "Padua", lat: 45.4064, lon: 11.8768, kategorie: "Tiroler Linie", region: "Venetien", beschreibung: "Universität (Cofler)."},
        {name: "Triest", lat: 45.6495, lon: 13.7768, kategorie: "Tiroler Linie", region: "Adria", beschreibung: "Cofler-Ärzte."},

        // === ZUSAMMENFÜHRUNG / LEBEN ===
        {name: "Innsbruck", lat: 47.2692, lon: 11.3933, kategorie: "Zusammenführung", region: "Tirol", beschreibung: "Zentraler Wohnort ab 1953."},
        {name: "Salzburg-Aigen", lat: 47.7833, lon: 13.0831, kategorie: "Zusammenführung", region: "Salzburg", beschreibung: "Ruhestand der Großeltern."},
        
        // === WEITERE ORTE (Aus Master-Liste ergänzt) ===
        {name: "Bechyně", lat: 49.2972, lon: 14.4708, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bezirk Tabor."},
        {name: "Brandau", lat: 50.6319, lon: 13.3906, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bezirk Komotau."},
        {name: "Brüx (Most)", lat: 50.5028, lon: 13.6361, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bezirk Brüx."},
        {name: "Duppau (Doupov)", lat: 50.2592, lon: 13.1411, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Abgekommener Ort."},
        {name: "Joachimsthal", lat: 50.3583, lon: 12.9344, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Ausbildung Alois Johann Pilz."},
        {name: "Komotau", lat: 50.4605, lon: 13.4178, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Chomutov."},
        {name: "Saaz", lat: 50.3269, lon: 13.5456, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Hopfenstadt Žatec."},
        {name: "Prag", lat: 50.0875, lon: 14.4214, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Landeshauptstadt."},
        {name: "Teplitz-Schönau", lat: 50.6403, lon: 13.8244, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Kurbad."},
        {name: "Wien", lat: 48.2092, lon: 16.3728, kategorie: "Sonstige", region: "Wien", beschreibung: "Reichshauptstadt."},
        {name: "Budapest", lat: 47.4979, lon: 19.0402, kategorie: "Sonstige", region: "Ungarn", beschreibung: "Ofen/Pest."},
        {name: "Cseszte", lat: 48.4, lon: 17.3667, kategorie: "Sonstige", region: "Ungarn", beschreibung: "Schattmannsdorf. Komitat Pressburg."},
        {name: "Steyr", lat: 48.0425, lon: 14.4211, kategorie: "Eberstaller-Linie", region: "Oberösterreich", beschreibung: "-"},
        {name: "Wels", lat: 48.1656, lon: 14.0353, kategorie: "Eberstaller-Linie", region: "Oberösterreich", beschreibung: "-"},
        {name: "Blumenau (Ostpreußen)", lat: 54.0747, lon: 20.6613, kategorie: "Sonstige", region: "Ostpreußen", beschreibung: "Heilsberg."},
        {name: "München", lat: 48.1372, lon: 11.5755, kategorie: "Sonstige", region: "Bayern", beschreibung: "-"}
    ];
    
    // Sortieren für die Tabelle (nach Region, dann Name)
    orte.sort(function(a, b) {
        if (a.kategorie < b.kategorie) return -1;
        if (a.kategorie > b.kategorie) return 1;
        return a.name.localeCompare(b.name);
    });

    var markers = {}; // Store markers by ID or Name to access them later
    
    // Marker zur Karte hinzufügen
    orte.forEach(function(ort, index) {
        ort.id = 'ort-' + index;

        var marker = L.marker([ort.lat, ort.lon], {
            icon: createCustomIcon(ort.kategorie)
        }).addTo(map);
        
        var popupContent = '<strong>' + ort.name + '</strong><br>' +
                           '<span style="font-size:0.8em; color:#666; text-transform:uppercase;">' + ort.region + '</span><br>' +
                           '<em style="color: ' + lineColors[ort.kategorie] + ';">' + ort.kategorie + '</em>';
        if(ort.beschreibung && ort.beschreibung !== "-") {
            popupContent += '<br><small style="color: #333; display:block; margin-top:4px;">' + ort.beschreibung + '</small>';
        }

        marker.bindPopup(popupContent);
        marker.bindTooltip(ort.name, { direction: 'top', offset: [0, -10], className: 'ort-tooltip' });
        
        markers[ort.id] = marker;
    });

    var group = L.featureGroup(Object.values(markers));
    map.fitBounds(group.getBounds().pad(0.1));

    // --- TABELLE GENERIEREN ---
    var tbody = document.getElementById('orte-tbody');
    if (tbody) {
        orte.forEach(function(ort) {
            var tr = document.createElement('tr');
            var rowClass = 'row-sonstige';
            if(ort.kategorie === 'Pilz-Linie') rowClass = 'row-pilz';
            if(ort.kategorie === 'Eberstaller-Linie') rowClass = 'row-eberstaller';
            if(ort.kategorie === 'Tiroler Linie') rowClass = 'row-tirol';
            if(ort.kategorie === 'Zusammenführung') rowClass = 'row-zusammen';
            tr.className = rowClass;

            tr.innerHTML = '<td><span class="ort-name">' + ort.name + '</span></td>' +
                           '<td>' + (ort.region || '-') + '</td>' +
                           '<td><span class="ort-beschreibung">' + (ort.beschreibung !== "-" ? ort.beschreibung : "") + '</span></td>';
            
            tr.addEventListener('click', function() {
                var m = markers[ort.id];
                if (m) {
                    map.flyTo(m.getLatLng(), 13, { duration: 1.5 });
                    m.openPopup();
                    mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });

            tbody.appendChild(tr);
        });
    }

    // --- SUCHFUNKTION ---
    window.filterTable = function() {
        var input = document.getElementById('ort-suche');
        var filter = input.value.toUpperCase();
        var rows = tbody.getElementsByTagName('tr');

        for (var i = 0; i < rows.length; i++) {
            var txtValue = rows[i].textContent || rows[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }

    // --- CONTROLS: RESET-ZOOM ---
    var OverviewControl = L.Control.extend({
        options: { position: 'topleft' },
        onAdd: function(map) {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
            var button = L.DomUtil.create('a', '', container);
            button.href = '#'; button.title = 'Reset Zoom'; button.innerHTML = '⟲';
            button.style.cssText = 'display:block; width:30px; height:30px; line-height:30px; text-align:center; text-decoration:none; background:white; font-weight:bold; color:#333;';
            L.DomEvent.on(button, 'click', function(e) {
                L.DomEvent.preventDefault(e);
                map.fitBounds(group.getBounds().pad(0.1));
            });
            return container;
        }
    });
    map.addControl(new OverviewControl());

    // --- CONTROLS: VOLLBILD (Wiederhergestellt) ---
    var isFullscreen = false;
    
    var FullscreenControl = L.Control.extend({
        options: { position: 'topleft' },
        onAdd: function(map) {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
            var button = L.DomUtil.create('a', '', container);
            button.href = '#'; button.title = 'Vollbild'; button.innerHTML = '⛶';
            button.style.cssText = 'display:block; width:30px; height:30px; font-size:16px; font-weight:bold; line-height:30px; text-align:center; text-decoration:none; color:#333; background:white;';
            
            L.DomEvent.on(button, 'click', function(e) {
                L.DomEvent.preventDefault(e);
                L.DomEvent.stopPropagation(e);
                
                if (!isFullscreen) {
                    if (mapElement.requestFullscreen) { mapElement.requestFullscreen(); } 
                    else if (mapElement.webkitRequestFullscreen) { mapElement.webkitRequestFullscreen(); } 
                    else if (mapElement.msRequestFullscreen) { mapElement.msRequestFullscreen(); }
                } else {
                    if (document.exitFullscreen) { document.exitFullscreen(); } 
                    else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); } 
                    else if (document.msExitFullscreen) { document.msExitFullscreen(); }
                }
            });
            return container;
        }
    });
    map.addControl(new FullscreenControl());
    
    function onFullscreenChange() {
        isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
        setTimeout(function() { map.invalidateSize(); }, 100);
    }
    
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    document.addEventListener('msfullscreenchange', onFullscreenChange);
});