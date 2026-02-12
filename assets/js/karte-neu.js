// Genealogie-Karte für pilzchronik.github.io
// Version 3.8 - Ergänzung Pechau (Tod Philipp Bechinie)
// Stand: Januar 2026

document.addEventListener('DOMContentLoaded', function() {
    
    var mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    var map = L.map('map');
    window.karteMap = map; // Global für Ortsnamen-Tool
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

    // Datenbasis
    var orte = [
        // === PILZ-LINIE ===
        {name: "Dörnthal", lat: 50.7339, lon: 13.3486, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Ältester Ursprung (Pültz/Pilz), Richteramt."},
        {name: "Olbernhau", lat: 50.6661, lon: 13.3381, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Handwerkszentrum, Exulantensiedlung."},
        {name: "Rothenthal", lat: 50.6342, lon: 13.3733, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Geburt F.A. Pilz; Startpunkt Migration Böhmen."},
        {name: "Kallich (Kalek)", lat: 50.5775, lon: 13.3219, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Erster Ankunftsort in Böhmen; Hungersnot 1772."},
        {name: "Schmiedeberg", lat: 50.4381, lon: 13.0536, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Familie Hofmann; Bergbau & Industrie."},
        {name: "Weipert", lat: 50.4922, lon: 13.0319, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bergstadt; Geburt des Großvaters (1876)."},
        {name: "Stolzenhain", lat: 50.4128, lon: 12.9789, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Hauptort der Förster-Generationen."},
        {name: "Preßnitz", lat: 50.4667, lon: 13.1333, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Versunkene Stadt; Grubenunglück 1698."},
        {name: "Kupferberg", lat: 50.4214, lon: 13.1153, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Katholisch-politisches Casino (V.W. Pilz)."},
        {name: "Hlawatschow", lat: 49.9120, lon: 14.7660, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Geburt Vinzenz Pilz 1830."},
        {name: "Helfenberg", lat: 48.5442, lon: 14.1419, kategorie: "Pilz-Linie", region: "OÖ", beschreibung: "Wirkungsort Alois Pilz; Waldhäuser: Geburt d. Vaters."},
        {name: "Libeschitz", lat: 50.2939, lon: 13.6233, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Wirkungsstätte Lehrer F.A. Pilz."},
        {name: "Amschelberg", lat: 49.6558, lon: 14.4744, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Taufe Apollonia Jablotzki; Radetzky-Bezug."},
        {name: "Schloss Rothenhaus", lat: 50.5123, lon: 13.4519, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Dienstsitz der herrschaftlichen Förster."},
        {name: "Gottesgab", lat: 50.4097, lon: 12.9244, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Familien Glaser und Gahler."},
        {name: "B. Wiesenthal", lat: 50.4394, lon: 13.0156, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Heirat V. Pilz & F. Gahler."},
        {name: "Sebastiansberg", lat: 50.5100, lon: 13.2511, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bergstadt im Erzgebirge. Tod Franziska Pilz 1921."},
        {name: "Eger (Cheb)", lat: 50.0796, lon: 12.3739, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Mägdebrunnen (Oswald Hofmann)."},
        {name: "Bechyně", lat: 49.2972, lon: 14.4708, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bezirk Tabor."},
        {name: "Joachimsthal", lat: 50.3583, lon: 12.9344, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Ausbildung von Alois Johann Pilz."},
        {name: "Komotau", lat: 50.4605, lon: 13.4178, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Chomutov."},
        {name: "Saaz", lat: 50.3269, lon: 13.5456, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Hopfenstadt Žatec."},
        {name: "Prag", lat: 50.0875, lon: 14.4214, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Böhmische Landeshauptstadt."},
        {name: "Teplitz-Schönau", lat: 50.6403, lon: 13.8244, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bedeutendes Kurbad."},
        {name: "Salzburg-Aigen", lat: 47.7833, lon: 13.0831, kategorie: "Pilz-Linie", region: "Salzburg", beschreibung: "Ruhestandsort der Großeltern."},
        {name: "München", lat: 48.1372, lon: 11.5755, kategorie: "Pilz-Linie", region: "Bayern", beschreibung: "Wohnort Oswald Hofmann."},
        {name: "Pechau (bei Magdeburg)", lat: 52.0919, lon: 11.7303, kategorie: "Pilz-Linie", region: "Sachsen-Anhalt", beschreibung: "Tod von Philipp Bechinie (1819)."}, // NEU

        // === EBERSTALLER-LINIE ===
        {name: "Wallern/Trattnach", lat: 48.2336, lon: 13.9450, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Reichhof; 300 Jahre Stammsitz. ehemals Krenglbach."},
        {name: "Radstadt", lat: 47.3833, lon: 13.4500, kategorie: "Eberstaller-Linie", region: "Salzburg", beschreibung: "Eberstaller-Bäckerei."},
        {name: "Rott bei Salzburg", lat: 47.8333, lon: 12.9833, kategorie: "Eberstaller-Linie", region: "Salzburg", beschreibung: "Geburt Großvater Johann Eberstaller."},
        {name: "Bad Aussee", lat: 47.6097, lon: 13.7822, kategorie: "Eberstaller-Linie", region: "Steiermark", beschreibung: "Heirat Eberstaller/Mittermaier (1895)."},
        {name: "Linz", lat: 48.3064, lon: 14.2861, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Oberösterreichische Landeshauptstadt."},
        {name: "Rannariedl", lat: 48.4831, lon: 13.7833, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Gerichtsdiener Strixner."},
        {name: "Steyr", lat: 48.0425, lon: 14.4211, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Industriestadt."},
        {name: "Wels", lat: 48.1656, lon: 14.0353, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Tod von Johann B. Eberstaller, Urgroßvater, 1905."},

        // === TIROLER LINIE ===
        {name: "Kartitsch", lat: 46.7231, lon: 12.5008, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Petererhof; Zentrum der Linie."},
        {name: "Sexten", lat: 46.7019, lon: 12.3586, kategorie: "Tiroler Linie", region: "Südtirol", beschreibung: "Reider/Tschurtschenthaler."},
        {name: "Rovereto", lat: 45.8885, lon: 11.0413, kategorie: "Tiroler Linie", region: "Trentino", beschreibung: "Kofler/Cofler Dynastie."},
        {name: "Mailand", lat: 45.4642, lon: 9.1900, kategorie: "Tiroler Linie", region: "Lombardei", beschreibung: "Finanzier Peter Kofler."},
        {name: "Anras", lat: 46.7739, lon: 12.5608, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Pfarrer Bodner/Kofler."},
        {name: "Lienz", lat: 46.8289, lon: 12.7686, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Bezirkshauptstadt Osttirol."},
        {name: "Padua", lat: 45.4064, lon: 11.8768, kategorie: "Tiroler Linie", region: "Venetien", beschreibung: "Universität (Cofler-Studium)."},
        {name: "Triest", lat: 45.6495, lon: 13.7768, kategorie: "Tiroler Linie", region: "Friaul-Jul. V.", beschreibung: "Cofler-Ärzte."},

        // === ZUSAMMENFÜHRUNG ===
        {name: "Innsbruck", lat: 47.2692, lon: 11.3933, kategorie: "Zusammenführung", region: "Tirol", beschreibung: "Zentraler Wohnort ab 1953."},
        {name: "Sillian", lat: 46.7528, lon: 12.4211, kategorie: "Zusammenführung", region: "Tirol", beschreibung: "Zollamt Alois A. Pilz."},

        // === SLAWONIEN (Alois Vjekoslav Pilz) ===
        {name: "Badljevina", lat: 45.5135, lon: 17.1924, kategorie: "Pilz-Linie", region: "Slawonien", beschreibung: "Wohnort Alois Vjekoslav Pilz (19.02.1858)."},
        {name: "Ivanovo Polje", lat: 45.5900, lon: 17.1500, kategorie: "Pilz-Linie", region: "Slawonien", beschreibung: "Johannisfeld. Wohnort u. Oberförster Alois Vjekoslav Pilz (1870-1880)."},
        {name: "Negoslavci", lat: 45.2783, lon: 18.9975, kategorie: "Pilz-Linie", region: "Slawonien", beschreibung: "Herrschaftlicher Förster (1876) und Sterbeort von Alois Vjekoslav Pilz (21.09.1894)."},

        // === SONSTIGE ===
        {name: "Wien", lat: 48.2092, lon: 16.3728, kategorie: "Sonstige", region: "Wien", beschreibung: "Reichshauptstadt."},
        {name: "Budapest", lat: 47.4979, lon: 19.0402, kategorie: "Sonstige", region: "Ungarn", beschreibung: "Metropole an der Donau."}
    ];
    
    // Sortieren: Kategorie -> Name
    orte.sort(function(a, b) {
        if (a.kategorie < b.kategorie) return -1;
        if (a.kategorie > b.kategorie) return 1;
        return a.name.localeCompare(b.name);
    });

    var markers = {};
    
    // Marker setzen
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
        // Tabelle leeren
        tbody.innerHTML = '';

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

    // --- CONTROLS: VOLLBILD ---
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
