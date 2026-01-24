// Genealogie-Karte für pilzchronik.github.io
// Verwendet OpenStreetMap via Leaflet.js
// Version 2.1 - Mit selbstgebautem Vollbild, Tooltips und Übersicht-Button
// Koordinaten korrigiert nach händischer Recherche (Januar 2026)

document.addEventListener('DOMContentLoaded', function() {
    
    var mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Map-Element nicht gefunden!');
        return;
    }
    
    console.log('Initialisiere Karte...');
    
    // Karte initialisieren
    var map = L.map('map');
    
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
    
    // Alle Orte mit korrigierten Koordinaten
    var orte = [
        // === PILZ-LINIE (Sachsen/Böhmen) ===
        {name: "Dörnthal", lat: 50.734608, lon: 13.335342, kategorie: "Pilz-Linie", 
         beschreibung: "Pültz/Pilz (Jobst). Ältester nachgewiesener Ursprung der Pilz-Linie. Tätigkeit als Richter und Gerichtsschöppe."},
        
        {name: "Olbernhau", lat: 50.656426, lon: 13.344097, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Michael, Samuel, Christian G.). Zentrum des Handwerks (Leinweber, Musiker). Siedlung böhmischer Exulanten in Niederneuschönberg."},
        
        {name: "Rothenthal", lat: 50.636343, lon: 13.373365, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Friedrich August, Carl Gottlob). Geburtsort von Friedrich August Pilz. Ausgangspunkt der Migration nach Böhmen."},
        
        {name: "Kallich (Kalek)", lat: 50.578222, lon: 13.322382, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Johanna Sophia, Friedrich August), Reichl (Maria Theresia). Ankunftsort nach Migration. Tod von Johanna Sophia während Hungersnot (1772)."},
        
        {name: "Schmiedeberg (Kovářská)", lat: 50.438156, lon: 13.053818, kategorie: "Pilz-Linie",
         beschreibung: "Hofmann (Franz, Emma). Herkunftsort der Familie Hofmann (Schuhmacher, Drogist, Bildhauer). Wichtiger Ort für Bergbau und Industrialisierung."},
        
        {name: "Weipert (Vejprty)", lat: 50.492245, lon: 13.031502, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Alois Johann). Geburt des Großvaters (1876). Wichtige königliche Bergstadt an der sächsischen Grenze."},
        
        {name: "Stolzenhain", lat: 50.411143, lon: 12.993736, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Vinzenz), Gahler (Franziska). Zentraler Ort für die Förster-Generationen. Tod von Vinzenz Pilz (1883)."},
        
        {name: "Preßnitz (Přísečnice)", lat: 50.477827, lon: 13.125143, kategorie: "Pilz-Linie",
         beschreibung: "Kreissl (Johann), Pilz (Vinzenz). Königliche Bergstadt, im 20. Jh. für Stausee überflutet. Ort des Grubenunglücks 1698."},
        
        {name: "Kupferberg (Měděnec)", lat: 50.421261, lon: 13.116903, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Vinzenz Wenzel). Politische Tätigkeit im 'katholisch-politischen Casino'."},
        
        {name: "Ondrejov", lat: 49.904503, lon: 14.78322, kategorie: "Pilz-Linie",
         beschreibung: "Bechinie/Pilz. Verbindung zur böhmischen Linie."},
        
        {name: "Libeschitz", lat: 50.293671, lon: 13.621588, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Friedrich August). Wirkte hier als Lehrer bis zu seinem Tod. Zentrum des Saazer Hopfenanbaus."},
        
        {name: "Amschelberg", lat: 49.65421, lon: 14.471998, kategorie: "Pilz-Linie",
         beschreibung: "Bechinie (Theresia), Radetzky (Taufpate). Taufe der jüdischen Vorfahrin Apollonia Jablotzki. Zentraler Ort der 'Radetzky-Klammer'."},
        
        {name: "Helfenberg", lat: 48.542296, lon: 14.142194, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Alois Johann, Emma, Alois Anton). Dienstort als Oberförster. Ortsteil Waldshäuser ist Geburtsort des Vaters."},
        
        {name: "Schloss Rothenhaus", lat: 50.51226, lon: 13.45189, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Vinzenz Franz, Vinzenz). Dienstsitz der Förstergenerationen."},
        
        {name: "Salzburg-Aigen", lat: 47.786114, lon: 13.087678, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Alois Johann, Emma). Wohnort der Großeltern im Ruhestand auf dem Gut des Schlosses Aigen."},
        
        {name: "Kainisch", lat: 47.570388, lon: 13.84316, kategorie: "Pilz-Linie",
         beschreibung: "Pilz (Emma, Erhard). Sterbeort von Großmutter Emma Pilz. Dienstort von Onkel Erhard Pilz als Oberförster."},
        
        {name: "Bad Aussee", lat: 47.6114, lon: 13.7844, kategorie: "Pilz-Linie",
         beschreibung: "Familie Pilz. Verbindung zur Steiermark."},
        
        {name: "Blumenau", lat: 50.668, lon: 13.352, kategorie: "Pilz-Linie",
         beschreibung: "Ortsteil von Olbernhau im sächsischen Erzgebirge."},
        
        {name: "Dresden", lat: 51.0504, lon: 13.7372, kategorie: "Pilz-Linie",
         beschreibung: "Kulturelles Zentrum Sachsens."},
        
        {name: "Eger (Cheb)", lat: 50.0796, lon: 12.3739, kategorie: "Pilz-Linie",
         beschreibung: "Westböhmische Handelsstadt."},
        
        {name: "Erzgebirge (Region)", lat: 50.6, lon: 13.2, kategorie: "Pilz-Linie",
         beschreibung: "Bergbauregion, Kerngebiet der Pilz-Linie."},
        
        {name: "Freiberg", lat: 50.9167, lon: 13.3333, kategorie: "Pilz-Linie",
         beschreibung: "Zinngießer Pilz."},
        
        {name: "Gottesgab (Boží Dar)", lat: 50.4111, lon: 12.9222, kategorie: "Pilz-Linie",
         beschreibung: "Gahler-Familie."},
        
        {name: "Graz", lat: 47.0707, lon: 15.4395, kategorie: "Pilz-Linie",
         beschreibung: "Cousine Helga."},
        
        {name: "Karlsbad", lat: 50.2319, lon: 12.872, kategorie: "Pilz-Linie",
         beschreibung: "Böhmisches Kurbad."},
        
        {name: "Komotau (Chomutov)", lat: 50.4605, lon: 13.4178, kategorie: "Pilz-Linie",
         beschreibung: "Wichtige böhmische Stadt."},
        
        {name: "Leipzig", lat: 51.3397, lon: 12.3731, kategorie: "Pilz-Linie",
         beschreibung: "Handels- und Messestadt."},
        
        {name: "Mantua", lat: 45.1564, lon: 10.7914, kategorie: "Tiroler Linie",
         beschreibung: "Radetzky-Bezug."},
        
        {name: "Negoslavci", lat: 45.3, lon: 19.0, kategorie: "Pilz-Linie",
         beschreibung: "Alois Vjekoslav."},
        
        {name: "Prag", lat: 50.0755, lon: 14.4378, kategorie: "Pilz-Linie",
         beschreibung: "Hauptstadt Böhmens."},
        
        {name: "Sayda", lat: 50.6789, lon: 13.4214, kategorie: "Pilz-Linie",
         beschreibung: "Gerichtsbücher."},
        
        {name: "Sebastiansberg", lat: 50.5333, lon: 13.25, kategorie: "Pilz-Linie",
         beschreibung: "Bergstadt im Erzgebirge."},
        
        {name: "Sillian", lat: 46.7486, lon: 12.4139, kategorie: "Pilz-Linie",
         beschreibung: "Alois A. Pilz (Zollamt)."},
        
        // === EBERSTALLER-LINIE (Oberösterreich) ===
        {name: "Wallern an der Trattnach", lat: 48.21385, lon: 13.935106, kategorie: "Eberstaller-Linie",
         beschreibung: "Eberstaller (Wolf, Johann). Standort des Reichhofs. Ältester Ort der Eberstaller-Linie; außergewöhnliche Sesshaftigkeit (fast 300 Jahre)."},
        
        {name: "Radstadt", lat: 47.384665, lon: 13.462865, kategorie: "Eberstaller-Linie",
         beschreibung: "Eberstaller (Matthias, Johann Baptist). Gründung und späterer Niedergang der Eberstaller-Bäckerei."},
        
        {name: "Rott bei Salzburg", lat: 47.830256, lon: 12.99556, kategorie: "Eberstaller-Linie",
         beschreibung: "Eberstaller (Johann). Geburtsort des Großvaters Johann Eberstaller."},
        
        {name: "Linz", lat: 48.3069, lon: 14.2858, kategorie: "Eberstaller-Linie",
         beschreibung: "Oberösterreichische Landeshauptstadt."},
        
        {name: "Rannariedl", lat: 48.4833, lon: 13.7667, kategorie: "Eberstaller-Linie",
         beschreibung: "Gefangenenausbruch."},
        
        // === TIROLER LINIE (Osttirol/Südtirol) ===
        {name: "Kartitsch (Petererhof)", lat: 46.737519, lon: 12.47813, kategorie: "Tiroler Linie",
         beschreibung: "Reider (Leonhard, Katharina), Kofler (Katharina), Eberstaller (Hilda). Standort des Petererhofs. Zentrum der Tiroler Linie. Geburtsort der Mutter- und Großmuttergeneration."},
        
        {name: "Sexten", lat: 46.701849, lon: 12.350907, kategorie: "Tiroler Linie",
         beschreibung: "Reider, Tschurtschenthaler. Ursprungsort der Familie Reider (Reidhof) und der ältesten nachweisbaren Vorfahren."},
        
        {name: "Rovereto", lat: 45.8885, lon: 11.0413, kategorie: "Tiroler Linie",
         beschreibung: "Kofler / Cofler (Anton, Peter). Gründung einer Unternehmerdynastie."},
        
        {name: "Mailand", lat: 45.4642, lon: 9.19, kategorie: "Tiroler Linie",
         beschreibung: "Kofler (Peter). Wirkungsstätte des Finanziers Peter Kofler."},
        
        {name: "Anras", lat: 46.7725, lon: 12.5564, kategorie: "Tiroler Linie",
         beschreibung: "Pfarrer Bodner/Kofler."},
        
        {name: "Heinfels", lat: 46.75, lon: 12.4333, kategorie: "Tiroler Linie",
         beschreibung: "Bezirk Lienz."},
        
        {name: "Padua", lat: 45.4064, lon: 11.8768, kategorie: "Tiroler Linie",
         beschreibung: "Italienische Universitätsstadt."},
        
        {name: "Triest", lat: 45.6495, lon: 13.7768, kategorie: "Tiroler Linie",
         beschreibung: "Cofler-Ärzte."},
        
        // === ZUSAMMENFÜHRUNG ===
        {name: "Innsbruck", lat: 47.2692, lon: 11.4041, kategorie: "Zusammenführung",
         beschreibung: "Pilz (Alois Anton, Hilda), Eberstaller (Johann, Katharina). Zentraler Wohnort der Familie ab 1953. Arbeitsort von Alois Anton Pilz (Zoll) und Johann Eberstaller (Bank)."}
    ];
    
    // Array für alle Marker
    var markers = [];
    
    // Marker zur Karte hinzufügen
    orte.forEach(function(ort) {
        var marker = L.marker([ort.lat, ort.lon], {
            icon: createCustomIcon(ort.kategorie)
        }).addTo(map);
        
        // Tooltip beim Hover (nur Ortsname)
        marker.bindTooltip(ort.name, {
            permanent: false,
            direction: 'top',
            offset: [0, -10],
            className: 'ort-tooltip'
        });
        
        // Popup beim Klick (vollständige Info)
        marker.bindPopup(
            '<strong>' + ort.name + '</strong><br>' +
            '<em style="color: ' + lineColors[ort.kategorie] + ';">' + ort.kategorie + '</em><br>' +
            '<small style="color: #555;">' + ort.beschreibung + '</small>'
        );
        
        markers.push(marker);
    });
    
    // Automatisch auf alle Marker zoomen mit etwas Padding
    var group = L.featureGroup(markers);
    var initialBounds = group.getBounds().pad(0.1);
    map.fitBounds(initialBounds);
    
    // === ÜBERSICHT-BUTTON (Zurück zur Gesamtansicht) ===
    var OverviewControl = L.Control.extend({
        options: {
            position: 'topleft'
        },
        onAdd: function(map) {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
            var button = L.DomUtil.create('a', '', container);
            button.href = '#';
            button.title = 'Zur Übersicht';
            button.innerHTML = '⟲';
            button.style.cssText = 'display: block; width: 30px; height: 30px; font-size: 18px; font-weight: bold; line-height: 30px; text-align: center; text-decoration: none; color: #333; background: white;';
            
            L.DomEvent.on(button, 'click', function(e) {
                L.DomEvent.preventDefault(e);
                L.DomEvent.stopPropagation(e);
                map.fitBounds(initialBounds);
            });
            
            return container;
        }
    });
    
    map.addControl(new OverviewControl());
    
    // === VOLLBILD-BUTTON (selbstgebaut, ohne Plugin) ===
    var isFullscreen = false;
    
    var FullscreenControl = L.Control.extend({
        options: {
            position: 'topleft'
        },
        onAdd: function(map) {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
            var button = L.DomUtil.create('a', '', container);
            button.href = '#';
            button.title = 'Vollbild';
            button.innerHTML = '⛶';
            button.style.cssText = 'display: block; width: 30px; height: 30px; font-size: 16px; font-weight: bold; line-height: 30px; text-align: center; text-decoration: none; color: #333; background: white;';
            
            L.DomEvent.on(button, 'click', function(e) {
                L.DomEvent.preventDefault(e);
                L.DomEvent.stopPropagation(e);
                
                if (!isFullscreen) {
                    // Vollbild aktivieren
                    if (mapElement.requestFullscreen) {
                        mapElement.requestFullscreen();
                    } else if (mapElement.webkitRequestFullscreen) {
                        mapElement.webkitRequestFullscreen();
                    } else if (mapElement.msRequestFullscreen) {
                        mapElement.msRequestFullscreen();
                    }
                } else {
                    // Vollbild beenden
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }
            });
            
            return container;
        }
    });
    
    map.addControl(new FullscreenControl());
    
    // Fullscreen-Status überwachen und Karte neu zeichnen
    function onFullscreenChange() {
        isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
        
        // Kurze Verzögerung, dann Karte aktualisieren
        setTimeout(function() {
            map.invalidateSize();
        }, 100);
    }
    
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    document.addEventListener('msfullscreenchange', onFullscreenChange);
    
    console.log('Karte erfolgreich geladen mit ' + orte.length + ' Orten!');
});
