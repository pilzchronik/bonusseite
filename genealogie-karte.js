// Genealogie-Karte für pilzchronik.github.io
// Verwendet OpenStreetMap via Leaflet.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Prüfe ob map-Element existiert
    var mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Map-Element nicht gefunden!');
        return;
    }
    
    console.log('Initialisiere Karte...');
    
    // Karte initialisieren (Zentrum: Erzgebirge/Böhmen)
    var map = L.map('map').setView([50.0, 13.0], 6);
    
    // OpenStreetMap Tiles hinzufügen
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(map);
    
    // Farben für die verschiedenen Linien
    var lineColors = {
        'Pilz-Linie': '#e74c3c',
        'Eberstaller-Linie': '#3498db',
        'Tiroler Linie': '#2ecc71',
        'Zusammenführung': '#f39c12'
    };
    
    // Custom Marker erstellen
    function createCustomIcon(kategorie) {
        var color = lineColors[kategorie] || '#999';
        return L.divIcon({
            className: 'custom-div-icon',
            html: '<div style="background-color: ' + color + '; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.5);"></div>',
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
    }
    
    // Alle Orte
    var orte = [
        {name: "Dörnthal", lat: 50.733965, lon: 13.333618, kategorie: "Pilz-Linie", 
         beschreibung: "Pültz/Pilz (Jobst). Ältester nachgewiesener Ursprung der Pilz-Linie. Tätigkeit als Richter und Gerichtsschöppe."},
        
        {name: "Olbernhau", lat: 50.65886, lon: 13.33831, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Michael, Samuel, Christian G.). Zentrum des Handwerks (Leinweber, Musiker)."},
        
        {name: "Rothenthal", lat: 50.63861, lon: 13.38139, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Friedrich August, Carl Gottlob). Geburtsort von Friedrich August Pilz."},
        
        {name: "Kallich (Kalek)", lat: 50.59013, lon: 13.33231, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Johanna Sophia, Friedrich August), Reichl (Maria Theresia). Ankunftsort nach Migration."},
        
        {name: "Schmiedeberg (Kovářská)", lat: 50.4899, lon: 13.0336, kategorie: "Pilz-Linie",
         beschreibung: "Hofmann (Franz, Emma), Pilz (Klara Anna Mück). Herkunftsort der Familie Hofmann."},
        
        {name: "Weipert (Vejprty)", lat: 50.49232, lon: 13.03213, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Alois Johann). Geburt des Großvaters (1876)."},
        
        {name: "Stolzenhain", lat: 50.46583, lon: 13.05694, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Vinzenz), Gahler (Franziska). Zentraler Ort für die Förster-Generationen."},
        
        {name: "Preßnitz (Přísečnice)", lat: 50.473611, lon: 13.131389, kategorie: "Pilz-Linie",
         beschreibung: "Kreissl (Johann), Pilz (Vinzenz). Königliche Bergstadt, später überflutet."},
        
        {name: "Kupferberg (Měděnec)", lat: 50.42541, lon: 13.13373, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Vinzenz Wenzel). Politische Tätigkeit im katholisch-politischen Casino."},
        
        {name: "Hlawatschow", lat: 49.91261, lon: 14.7663, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Vinzenz). Geburtsort des Ururgroßvaters Vinzenz Pilz (1830)."},
        
        {name: "Libeschitz", lat: 50.31232, lon: 13.61361, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Friedrich August). Wirkte hier als Lehrer bis zu seinem Tod (1812)."},
        
        {name: "Amschelberg", lat: 49.65861, lon: 14.47139, kategorie: "Pilz-Linie",
         beschreibung: "Bechinie (Theresia), Radetzky (Taufpate). Taufe der jüdischen Vorfahrin Apollonia Jablotzki."},
        
        {name: "Krenglbach", lat: 48.21391, lon: 13.93519, kategorie: "Eberstaller-Linie",
         beschreibung: "Eberstaller (Wolf, Johann). Standort des Reichhofs. Ältester Ort der Eberstaller-Linie."},
        
        {name: "Radstadt", lat: 47.38333, lon: 13.46667, kategorie: "Eberstaller-Linie",
         beschreibung: "Eberstaller (Matthias, Johann Baptist). Gründung der Eberstaller-Bäckerei."},
        
        {name: "Rott bei Salzburg", lat: 47.7875, lon: 12.975, kategorie: "Eberstaller-Linie",
         beschreibung: "Eberstaller (Johann). Geburtsort des Großvaters Johann Eberstaller (1893)."},
        
        {name: "Kartitsch", lat: 46.7382, lon: 12.4784, kategorie: "Tiroler Linie",
         beschreibung: "Reider, Kofler, Eberstaller. Standort des Petererhofs. Zentrum der Tiroler Linie."},
        
        {name: "Helfenberg", lat: 48.55867, lon: 14.14762, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Alois Johann, Emma, Alois Anton). Dienstort als Oberförster."},
        
        {name: "Sexten", lat: 46.6994, lon: 12.3522, kategorie: "Tiroler Linie",
         beschreibung: "Reider, Tschurtschenthaler. Ursprungsort der Familie Reider ab ca. 1600."},
        
        {name: "Rovereto", lat: 45.8885, lon: 11.0413, kategorie: "Tiroler Linie",
         beschreibung: "Kofler / Cofler (Anton, Peter). Gründung einer Unternehmerdynastie."},
        
        {name: "Mailand", lat: 45.4642, lon: 9.19, kategorie: "Tiroler Linie",
         beschreibung: "Kofler (Peter). Wirkungsstätte des Finanziers Peter Kofler."},
        
        {name: "Schloss Rothenhaus", lat: 50.51226, lon: 13.45189, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Vinzenz Franz, Vinzenz). Dienstsitz der Förstergenerationen."},
        
        {name: "Innsbruck", lat: 47.2692, lon: 11.4041, kategorie: "Zusammenführung",
         beschreibung: "Pilz (Alois Anton, Hilda), Eberstaller (Johann, Katharina). Zentraler Wohnort ab 1953."},
        
        {name: "Salzburg-Aigen", lat: 47.78607, lon: 13.08811, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Alois Johann, Emma). Wohnort der Großeltern im Ruhestand (ab 1936)."},
        
        {name: "Kainisch", lat: 47.57005, lon: 13.84073, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Emma, Erhard). Sterbeort von Großmutter Emma Pilz."},
        
        {name: "Dresden", lat: 51.0504, lon: 13.7372, kategorie: "Pilz-Linie",
         beschreibung: "Kulturelles Zentrum Sachsens"},
        
        {name: "Prag", lat: 50.0755, lon: 14.4378, kategorie: "Pilz-Linie",
         beschreibung: "Hauptstadt Böhmens"},
        
        {name: "Linz", lat: 48.3069, lon: 14.2858, kategorie: "Eberstaller-Linie",
         beschreibung: "Oberösterreichische Landeshauptstadt"},
        
        {name: "Padua", lat: 45.4064, lon: 11.8768, kategorie: "Tiroler Linie",
         beschreibung: "Italienische Universitätsstadt"},
        
        {name: "Triest", lat: 45.6495, lon: 13.7768, kategorie: "Tiroler Linie",
         beschreibung: "Cofler-Ärzte"}
    ];
    
    // Marker zur Karte hinzufügen
    orte.forEach(function(ort) {
        var marker = L.marker([ort.lat, ort.lon], {
            icon: createCustomIcon(ort.kategorie)
        }).addTo(map);
        
        marker.bindPopup(
            '<strong>' + ort.name + '</strong><br>' +
            '<em style="color: ' + lineColors[ort.kategorie] + ';">' + ort.kategorie + '</em><br>' +
            '<small style="color: #555;">' + ort.beschreibung + '</small>'
        );
    });
    
    // Legende hinzufügen
    var legend = L.control({position: 'bottomright'});
    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'legend');
        div.innerHTML = '<h4>Familienlinien</h4>';
        
        for (var kategorie in lineColors) {
            div.innerHTML += 
                '<div class="legend-item">' +
                '<span class="legend-color" style="background:' + lineColors[kategorie] + '"></span>' +
                '<span>' + kategorie + '</span>' +
                '</div>';
        }
        
        return div;
    };
    legend.addTo(map);
    
    console.log('Karte erfolgreich geladen!');
});