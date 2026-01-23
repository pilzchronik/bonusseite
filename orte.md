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
  
  /* Tabellenstil für Ortsübersicht */
  .orte-tabelle {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.9em;
  }
  .orte-tabelle th {
    background: #2a5d8f;
    color: white;
    padding: 12px 10px;
    text-align: left;
    font-weight: 600;
  }
  .orte-tabelle td {
    padding: 10px;
    border-bottom: 1px solid #e9ecef;
    vertical-align: top;
  }
  .orte-tabelle tr:hover {
    background: #f8f9fa;
  }
  .orte-tabelle .ort-name {
    font-weight: 600;
    color: #333;
  }
  .orte-tabelle .ort-beschreibung {
    color: #666;
    font-size: 0.9em;
  }
  .linie-pilz { border-left: 4px solid #e74c3c; }
  .linie-eberstaller { border-left: 4px solid #3498db; }
  .linie-tirol { border-left: 4px solid #2ecc71; }
  .linie-zusammen { border-left: 4px solid #f39c12; }
</style>

<h1 style="color: #333; margin-bottom: 20px;">Orte & Herkunft</h1>

<div class="intro-block">
  <p>
    Räumliche und genetische Perspektiven ergänzen die schriftlichen Quellen der Pilz-Chronik.<br>
    Diese Seite verbindet die dokumentierten Lebensorte mit den tiefen genetischen Wurzeln.
  </p>
</div>

<h2 class="section-title">Lebensorte (Karte)</h2>

<div class="sustainability-note">
  <strong>Hinweis zur Nachhaltigkeit:</strong> Diese Karte verwendet OpenStreetMap – 
  eine freie, community-betriebene Kartenlösung, die ohne kommerzielle API-Schlüssel 
  funktioniert und langfristig verfügbar bleiben sollte.
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
  <summary>Vollständige Ortstabelle mit Koordinaten anzeigen</summary>

<h3 style="color: #e74c3c; margin-top: 30px;">Pilz-Linie (Sachsen/Böhmen)</h3>

<table class="orte-tabelle">
  <thead>
    <tr>
      <th>Ort</th>
      <th>Koordinaten</th>
      <th>Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr class="linie-pilz">
      <td class="ort-name">Dörnthal</td>
      <td>50.7346° N, 13.3353° E</td>
      <td class="ort-beschreibung">Ältester nachgewiesener Ursprung der Pilz-Linie. Pültz/Pilz (Jobst) als Richter und Gerichtsschöppe.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Olbernhau</td>
      <td>50.6564° N, 13.3441° E</td>
      <td class="ort-beschreibung">Zentrum des Handwerks (Leinweber, Musiker). Siedlung böhmischer Exulanten in Niederneuschönberg.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Rothenthal</td>
      <td>50.6363° N, 13.3734° E</td>
      <td class="ort-beschreibung">Geburtsort von Friedrich August Pilz. Ausgangspunkt der Migration nach Böhmen.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Kallich (Kalek)</td>
      <td>50.5782° N, 13.3224° E</td>
      <td class="ort-beschreibung">Ankunftsort nach Migration. Tod von Johanna Sophia während Hungersnot (1772). Heirat Pilz/Reichl (1788).</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Schmiedeberg (Kovářská)</td>
      <td>50.4382° N, 13.0538° E</td>
      <td class="ort-beschreibung">Herkunftsort der Familie Hofmann (Schuhmacher, Drogist, Bildhauer). Wichtiger Ort für Bergbau.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Weipert (Vejprty)</td>
      <td>50.4922° N, 13.0315° E</td>
      <td class="ort-beschreibung">Geburt des Großvaters Alois Johann (1876). Wichtige königliche Bergstadt an der sächsischen Grenze.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Stolzenhain</td>
      <td>50.4111° N, 12.9937° E</td>
      <td class="ort-beschreibung">Zentraler Ort für die Förster-Generationen. Tod von Vinzenz Pilz (1883).</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Preßnitz (Přísečnice)</td>
      <td>50.4778° N, 13.1251° E</td>
      <td class="ort-beschreibung">Königliche Bergstadt, im 20. Jh. für Stausee überflutet. Ort des Grubenunglücks 1698.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Kupferberg (Měděnec)</td>
      <td>50.4213° N, 13.1169° E</td>
      <td class="ort-beschreibung">Politische Tätigkeit von Vinzenz Wenzel Pilz im „katholisch-politischen Casino".</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Libeschitz</td>
      <td>50.2937° N, 13.6216° E</td>
      <td class="ort-beschreibung">Friedrich August Pilz wirkte hier als Lehrer bis zu seinem Tod. Zentrum des Saazer Hopfenanbaus.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Amschelberg</td>
      <td>49.6542° N, 14.4720° E</td>
      <td class="ort-beschreibung">Taufe der jüdischen Vorfahrin Apollonia Jablotzki. Zentraler Ort der „Radetzky-Klammer".</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Helfenberg</td>
      <td>48.5423° N, 14.1422° E</td>
      <td class="ort-beschreibung">Dienstort als Oberförster. Ortsteil Waldshäuser ist Geburtsort des Vaters Alois Anton Pilz.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Schloss Rothenhaus</td>
      <td>50.5123° N, 13.4519° E</td>
      <td class="ort-beschreibung">Dienstsitz der Förstergenerationen Pilz (Vinzenz Franz, Vinzenz).</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Salzburg-Aigen</td>
      <td>47.7861° N, 13.0877° E</td>
      <td class="ort-beschreibung">Wohnort der Großeltern im Ruhestand auf dem Gut des Schlosses Aigen.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Kainisch</td>
      <td>47.5704° N, 13.8432° E</td>
      <td class="ort-beschreibung">Sterbeort von Großmutter Emma Pilz. Dienstort von Onkel Erhard Pilz als Oberförster.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Bad Aussee</td>
      <td>47.6114° N, 13.7844° E</td>
      <td class="ort-beschreibung">Familie Pilz. Verbindung zur Steiermark.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Blumenau</td>
      <td>50.6680° N, 13.3520° E</td>
      <td class="ort-beschreibung">Ortsteil von Olbernhau im sächsischen Erzgebirge.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Dresden</td>
      <td>51.0504° N, 13.7372° E</td>
      <td class="ort-beschreibung">Kulturelles Zentrum Sachsens.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Eger (Cheb)</td>
      <td>50.0796° N, 12.3739° E</td>
      <td class="ort-beschreibung">Westböhmische Handelsstadt.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Erzgebirge (Region)</td>
      <td>50.6000° N, 13.2000° E</td>
      <td class="ort-beschreibung">Bergbauregion, Kerngebiet der Pilz-Linie.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Freiberg</td>
      <td>50.9167° N, 13.3333° E</td>
      <td class="ort-beschreibung">Zinngießer Pilz.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Gottesgab (Boží Dar)</td>
      <td>50.4111° N, 12.9222° E</td>
      <td class="ort-beschreibung">Gahler-Familie.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Graz</td>
      <td>47.0707° N, 15.4395° E</td>
      <td class="ort-beschreibung">Cousine Helga.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Karlsbad</td>
      <td>50.2319° N, 12.8720° E</td>
      <td class="ort-beschreibung">Böhmisches Kurbad.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Komotau (Chomutov)</td>
      <td>50.4605° N, 13.4178° E</td>
      <td class="ort-beschreibung">Wichtige böhmische Stadt.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Leipzig</td>
      <td>51.3397° N, 12.3731° E</td>
      <td class="ort-beschreibung">Handels- und Messestadt.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Negoslavci</td>
      <td>45.3000° N, 19.0000° E</td>
      <td class="ort-beschreibung">Alois Vjekoslav.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Ondrejov</td>
      <td>49.9045° N, 14.7832° E</td>
      <td class="ort-beschreibung">Bechinie/Pilz. Verbindung zur böhmischen Linie.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Prag</td>
      <td>50.0755° N, 14.4378° E</td>
      <td class="ort-beschreibung">Hauptstadt Böhmens.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Sayda</td>
      <td>50.6789° N, 13.4214° E</td>
      <td class="ort-beschreibung">Gerichtsbücher.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Sebastiansberg</td>
      <td>50.5333° N, 13.2500° E</td>
      <td class="ort-beschreibung">Bergstadt im Erzgebirge.</td>
    </tr>
    <tr class="linie-pilz">
      <td class="ort-name">Sillian</td>
      <td>46.7486° N, 12.4139° E</td>
      <td class="ort-beschreibung">Alois A. Pilz (Zollamt).</td>
    </tr>
  </tbody>
</table>

<h3 style="color: #3498db; margin-top: 40px;">Eberstaller-Linie (Oberösterreich)</h3>

<table class="orte-tabelle">
  <thead>
    <tr>
      <th>Ort</th>
      <th>Koordinaten</th>
      <th>Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr class="linie-eberstaller">
      <td class="ort-name">Wallern an der Trattnach</td>
      <td>48.2139° N, 13.9351° E</td>
      <td class="ort-beschreibung">Standort des Reichhofs. Ältester Ort der Eberstaller-Linie; außergewöhnliche Sesshaftigkeit (fast 300 Jahre).</td>
    </tr>
    <tr class="linie-eberstaller">
      <td class="ort-name">Radstadt</td>
      <td>47.3847° N, 13.4629° E</td>
      <td class="ort-beschreibung">Gründung und späterer Niedergang der Eberstaller-Bäckerei.</td>
    </tr>
    <tr class="linie-eberstaller">
      <td class="ort-name">Rott bei Salzburg</td>
      <td>47.8303° N, 12.9956° E</td>
      <td class="ort-beschreibung">Geburtsort des Großvaters Johann Eberstaller.</td>
    </tr>
    <tr class="linie-eberstaller">
      <td class="ort-name">Linz</td>
      <td>48.3069° N, 14.2858° E</td>
      <td class="ort-beschreibung">Oberösterreichische Landeshauptstadt.</td>
    </tr>
    <tr class="linie-eberstaller">
      <td class="ort-name">Rannariedl</td>
      <td>48.4833° N, 13.7667° E</td>
      <td class="ort-beschreibung">Gefangenenausbruch.</td>
    </tr>
  </tbody>
</table>

<h3 style="color: #2ecc71; margin-top: 40px;">Tiroler Linie (Osttirol/Südtirol)</h3>

<table class="orte-tabelle">
  <thead>
    <tr>
      <th>Ort</th>
      <th>Koordinaten</th>
      <th>Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr class="linie-tirol">
      <td class="ort-name">Kartitsch (Petererhof)</td>
      <td>46.7375° N, 12.4781° E</td>
      <td class="ort-beschreibung">Standort des Petererhofs. Zentrum der Tiroler Linie. Geburtsort der Mutter- und Großmuttergeneration.</td>
    </tr>
    <tr class="linie-tirol">
      <td class="ort-name">Sexten</td>
      <td>46.7018° N, 12.3509° E</td>
      <td class="ort-beschreibung">Ursprungsort der Familie Reider (Reidhof) und der ältesten nachweisbaren Vorfahren (Tschurtschenthaler).</td>
    </tr>
    <tr class="linie-tirol">
      <td class="ort-name">Rovereto</td>
      <td>45.8885° N, 11.0413° E</td>
      <td class="ort-beschreibung">Kofler/Cofler (Anton, Peter). Gründung einer Unternehmerdynastie.</td>
    </tr>
    <tr class="linie-tirol">
      <td class="ort-name">Mailand</td>
      <td>45.4642° N, 9.1900° E</td>
      <td class="ort-beschreibung">Wirkungsstätte des Finanziers Peter Kofler.</td>
    </tr>
    <tr class="linie-tirol">
      <td class="ort-name">Mantua</td>
      <td>45.1564° N, 10.7914° E</td>
      <td class="ort-beschreibung">Radetzky-Bezug.</td>
    </tr>
    <tr class="linie-tirol">
      <td class="ort-name">Anras</td>
      <td>46.7725° N, 12.5564° E</td>
      <td class="ort-beschreibung">Pfarrer Bodner/Kofler.</td>
    </tr>
    <tr class="linie-tirol">
      <td class="ort-name">Heinfels</td>
      <td>46.7500° N, 12.4333° E</td>
      <td class="ort-beschreibung">Bezirk Lienz.</td>
    </tr>
    <tr class="linie-tirol">
      <td class="ort-name">Padua</td>
      <td>45.4064° N, 11.8768° E</td>
      <td class="ort-beschreibung">Italienische Universitätsstadt.</td>
    </tr>
    <tr class="linie-tirol">
      <td class="ort-name">Triest</td>
      <td>45.6495° N, 13.7768° E</td>
      <td class="ort-beschreibung">Cofler-Ärzte.</td>
    </tr>
  </tbody>
</table>

<h3 style="color: #f39c12; margin-top: 40px;">Zusammenführung</h3>

<table class="orte-tabelle">
  <thead>
    <tr>
      <th>Ort</th>
      <th>Koordinaten</th>
      <th>Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr class="linie-zusammen">
      <td class="ort-name">Innsbruck</td>
      <td>47.2692° N, 11.4041° E</td>
      <td class="ort-beschreibung">Zentraler Wohnort der Familie ab 1953. Arbeitsort von Alois Anton Pilz (Zoll) und Johann Eberstaller (Bank). Sterbeort mehrerer Generationen.</td>
    </tr>
  </tbody>
</table>

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

<h2 class="section-title">Genetische Herkunft</h2>
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
