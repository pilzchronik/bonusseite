---
layout: page
title: Quellen & Forschungswerkzeuge
permalink: /quellen/
---

<style>
  /* --- TYPOGRAFIE & BASIS --- */
  .page-content { 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; 
    color: #333; 
    line-height: 1.6; 
  }
  
  /* Intro */
  .intro-text {
    max-width: 800px;
    margin-bottom: 30px;
    color: #555;
    font-size: 1.05em;
  }

  /* --- INHALTSVERZEICHNIS (TOC) --- */
  .toc-container {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 40px;
    border-left: 4px solid #666;
  }
  .toc-title {
    font-weight: 700;
    margin-bottom: 10px;
    display: block;
    font-size: 1.1em;
    color: #333;
  }
  .toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
    columns: 2; /* hier ok: kurze Links */
    column-gap: 28px; /* etwas kompakter */
  }
  @media (max-width: 600px) { .toc-list { columns: 1; } }
  
  .toc-item { margin-bottom: 6px; font-size: 0.95em; }
  .toc-item a { text-decoration: none; color: #2a5d8f; }
  .toc-item a:hover { text-decoration: underline; }
  
  /* Unterpunkte im TOC einrücken */
  .toc-sub { margin-left: 15px; font-size: 0.9em; color: #666; }

  /* --- KORREKTUR-BOX (sachlich, nicht alarmistisch) --- */
  .correction-box {
    border: 1px solid #ddd;
    background-color: #fafafa;
    border-left: 5px solid #666;
    padding: 18px 20px;
    margin-bottom: 60px;
    border-radius: 3px;
  }
  .correction-head {
    color: #222;
    font-weight: 700;
    font-size: 1.15em;
    margin-bottom: 8px;
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .badge {
    font-size: 0.8em;
    font-weight: 600;
    color: #555;
    background: #eee;
    padding: 2px 8px;
    border-radius: 999px;
  }
  .note {
    margin: 0 0 12px 0;
    font-size: 0.9em;
    color: #666;
  }

  /* --- ÜBERSCHRIFTEN --- */
  h2 {
    color: #1a3d5c;
    font-size: 1.6em;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  
  h3 {
    color: #333;
    font-size: 1.1em;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 10px;
    text-transform: none;       /* keine Versalien */
    letter-spacing: normal;     /* bessere Lesbarkeit */
  }
  
  .category-desc {
    font-size: 0.95em;
    color: #666;
    margin-bottom: 15px;
    font-style: italic;
  }

  /* --- LISTEN (einspaltig & ruhig) --- */
  ul.ref-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li.ref-item {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0; /* etwas sichtbarer */
  }
  
  li.ref-item strong { color: #222; font-weight: 600; margin-right: 5px; }
  
  a.ext-link {
    color: #2a5d8f;
    text-decoration: none;
  }
  a.ext-link:hover { text-decoration: underline; color: #000; }
  
  .sep { color: #bbb; margin: 0 5px; }

  /* --- DOWNLOAD BEREICH --- */
  .download-area {
    background: #f9f9f9;
    padding: 20px;
    margin-top: 60px;
    border-top: 4px solid #ccc;
    border-radius: 3px;
  }
  .download-title {
    margin-top: 0;
    border: none;
    font-size: 1.3em;
    color: #333;
    padding-bottom: 0;
    margin-bottom: 15px;
  }

  /* --- Footer-Stand --- */
  .page-stand {
    text-align: center;
    margin-top: 50px;
    color: #999;
    font-size: 0.85em;
  }
</style>

<div class="intro-text">
  Diese Seite versammelt digitale Archive, konkrete Quellenfunde sowie Werkzeuge zur räumlichen und historischen Einordnung. Sie dient als transparente Arbeitsgrundlage und Ergänzung zur gedruckten Chronik.
</div>

<div class="toc-container">
  <span class="toc-title">Inhalt dieser Seite</span>
  <ul class="toc-list">
    <li class="toc-item"><a href="#korrekturen">1. Korrekturen zur 1. Auflage</a></li>

    <li class="toc-item"><a href="#archive">2. Archive &amp; Portale</a></li>
    <li class="toc-item toc-sub"><a href="#tschechische-archive">2.1 Tschechische Staatsarchive</a></li>
    <li class="toc-item toc-sub"><a href="#matriken">2.2 Matriken (AT / DE)</a></li>
    <li class="toc-item toc-sub"><a href="#zeitungen">2.3 Zeitungen &amp; Dokumente</a></li>
    <li class="toc-item toc-sub"><a href="#datenbanken">2.4 Genealogische Datenbanken</a></li>

    <li class="toc-item"><a href="#funde">3. Konkrete Quellenfunde</a></li>
    <li class="toc-item toc-sub"><a href="#urkunden">3.1 Urkunden &amp; Einträge</a></li>
    <li class="toc-item toc-sub"><a href="#presse">3.2 Zeitungsartikel</a></li>
    <li class="toc-item toc-sub"><a href="#nachlaesse">3.3 Nachlässe, Sonderdokumente &amp; Audio</a></li>

    <li class="toc-item"><a href="#karten">4. Räumliche Verortung</a></li>
    <li class="toc-item toc-sub"><a href="#historische-karten">4.1 Historische Karten</a></li>
    <li class="toc-item toc-sub"><a href="#moderne-karten">4.2 Moderne Kartenportale</a></li>
    <li class="toc-item toc-sub"><a href="#ortsnamen">4.3 Ortsnamenzuordnung</a></li>

    <li class="toc-item"><a href="#downloads">5. Downloads &amp; Langzeitsicherung</a></li>
  </ul>
</div>

<div id="korrekturen" class="correction-box">
  <div class="correction-head">
    <span>Korrekturen zur 1. Auflage (2025)</span>
    <span class="badge">Platzhalter</span>
  </div>
  <p class="note">Hinweis: Die folgenden Einträge sind Platzhalter zur Demonstration.</p>
  <ul class="ref-list">
    <li class="ref-item"><strong>Bd. 1, S. 145:</strong> Geburtsdatum ist 12. Mai 1880 (nicht 1881).</li>
    <li class="ref-item"><strong>Bd. 2, S. 98:</strong> Ortsname lautet „Schmiedeberg“.</li>
  </ul>
</div>

<h2 id="archive">2. Archive &amp; Portale</h2>

<h3 id="tschechische-archive">2.1 Tschechische Staatsarchive</h3>
<p class="category-desc">Kirchenbücher, Grundbücher und Verwaltungsquellen aus Böhmen/Mähren.</p>
<ul class="ref-list">
  <li class="ref-item"><strong>SOA Prag</strong> <span class="sep">|</span> <a href="https://ebadatelna.soapraha.cz/" target="_blank" rel="noopener noreferrer" class="ext-link">ebadatelna.soapraha.cz</a></li>
  <li class="ref-item"><strong>SOA Leitmeritz</strong> <span class="sep">|</span> <a href="http://vademecum.soalitomerice.cz/" target="_blank" rel="noopener noreferrer" class="ext-link">vademecum.soalitomerice.cz</a></li>
  <li class="ref-item"><strong>SOA Pilsen</strong> <span class="sep">|</span> <a href="http://www.portafontium.eu/" target="_blank" rel="noopener noreferrer" class="ext-link">portafontium.eu</a></li>
  <li class="ref-item"><strong>SOA Wittingau</strong> <span class="sep">|</span> <a href="https://digi.ceskearchivy.cz/" target="_blank" rel="noopener noreferrer" class="ext-link">digi.ceskearchivy.cz</a></li>
  <li class="ref-item"><strong>SOA Zamrsk</strong> <span class="sep">|</span> <a href="https://vychodoceskearchivy.cz/zamrsk/matriky/" target="_blank" rel="noopener noreferrer" class="ext-link">vychodoceskearchivy.cz</a></li>
  <li class="ref-item"><strong>SOA Königgrätz</strong> <span class="sep">|</span> <a href="https://aron.vychodoceskearchivy.cz/" target="_blank" rel="noopener noreferrer" class="ext-link">aron.vychodoceskearchivy.cz</a></li>
  <li class="ref-item"><strong>Nationalarchiv Prag</strong> <span class="sep">|</span> <a href="https://www.nacr.cz/" target="_blank" rel="noopener noreferrer" class="ext-link">nacr.cz</a></li>
</ul>

<h3 id="matriken">2.2 Österreichische &amp; Deutsche Matriken</h3>
<ul class="ref-list">
  <li class="ref-item"><strong>Matriken Tirol</strong> <span class="sep">|</span> <a href="https://matriken.tirol.gv.at/" target="_blank" rel="noopener noreferrer" class="ext-link">matriken.tirol.gv.at</a></li>
  <li class="ref-item"><strong>Matricula Online</strong> <span class="sep">|</span> <a href="https://data.matricula-online.eu/" target="_blank" rel="noopener noreferrer" class="ext-link">matricula-online.eu</a></li>
  <li class="ref-item"><strong>Archion (Evang.)</strong> <span class="sep">|</span> <a href="https://www.archion.de/" target="_blank" rel="noopener noreferrer" class="ext-link">archion.de</a></li>
  <li class="ref-item"><strong>LKA Dresden</strong> <span class="sep">|</span> <a href="https://www.evlks.de/" target="_blank" rel="noopener noreferrer" class="ext-link">evlks.de</a></li>
</ul>

<h3 id="zeitungen">2.3 Zeitungen &amp; Dokumente</h3>
<ul class="ref-list">
  <li class="ref-item"><strong>ANNO (ÖNB)</strong> <span class="sep">|</span> <a href="https://anno.onb.ac.at/" target="_blank" rel="noopener noreferrer" class="ext-link">anno.onb.ac.at</a></li>
  <li class="ref-item"><strong>Teßmann digital</strong> <span class="sep">|</span> <a href="https://digital.tessmann.it/" target="_blank" rel="noopener noreferrer" class="ext-link">tessmann.it</a></li>
  <li class="ref-item"><strong>Kramerius (NKP)</strong> <span class="sep">|</span> <a href="https://kramerius.nkp.cz/" target="_blank" rel="noopener noreferrer" class="ext-link">kramerius.nkp.cz</a></li>
  <li class="ref-item"><strong>Internet Archive</strong> <span class="sep">|</span> <a href="https://archive.org" target="_blank" rel="noopener noreferrer" class="ext-link">archive.org</a></li>
  <li class="ref-item"><strong>Monasterium</strong> <span class="sep">|</span> <a href="https://www.monasterium.net/" target="_blank" rel="noopener noreferrer" class="ext-link">monasterium.net</a></li>
</ul>

<h3 id="datenbanken">2.4 Genealogische Datenbanken</h3>
<ul class="ref-list">
  <li class="ref-item"><strong>FamilySearch</strong> <span class="sep">|</span> <a href="https://www.familysearch.org/" target="_blank" rel="noopener noreferrer" class="ext-link">familysearch.org</a></li>
  <li class="ref-item"><strong>GenTeam</strong> <span class="sep">|</span> <a href="https://www.genteam.at/" target="_blank" rel="noopener noreferrer" class="ext-link">genteam.at</a></li>
  <li class="ref-item"><strong>Familia Austria</strong> <span class="sep">|</span> <a href="https://www.familia-austria.at/" target="_blank" rel="noopener noreferrer" class="ext-link">familia-austria.at</a></li>
  <li class="ref-item"><strong>CompGen / GedBas</strong> <span class="sep">|</span> <a href="https://www.compgen.de/" target="_blank" rel="noopener noreferrer" class="ext-link">compgen.de</a></li>
  <li class="ref-item"><strong>JewishGen</strong> <span class="sep">|</span> <a href="https://www.jewishgen.org/" target="_blank" rel="noopener noreferrer" class="ext-link">jewishgen.org</a></li>
  <li class="ref-item"><strong>Toledot</strong> <span class="sep">|</span> <a href="https://toledot.org/" target="_blank" rel="noopener noreferrer" class="ext-link">toledot.org</a></li>
  <li class="ref-item"><strong>Geni (Prague Families)</strong> <span class="sep">|</span> <a href="https://www.geni.com/" target="_blank" rel="noopener noreferrer" class="ext-link">geni.com</a></li>
  <li class="ref-item"><strong>Ancestry</strong> <span class="sep">|</span> <a href="https://www.ancestry.de/" target="_blank" rel="noopener noreferrer" class="ext-link">ancestry.de</a></li>
  <li class="ref-item"><strong>MyHeritage</strong> <span class="sep">|</span> <a href="https://www.myheritage.de/" target="_blank" rel="noopener noreferrer" class="ext-link">myheritage.de</a></li>
</ul>


<h2 id="funde">3. Konkrete Quellenfunde</h2>

<h3 id="urkunden">3.1 Urkunden &amp; Einträge</h3>
<ul class="ref-list">
  <li class="ref-item"><strong>Verlassenschaft Wolf Eberstaller (1672)</strong> <span class="sep">→</span> <a href="https://familysearch.org/ark:/61903/3:1:33S7-L1X7-HX1?cc=1929847&wc=MY4B-ZJM:1047408501" target="_blank" rel="noopener noreferrer" class="ext-link">FamilySearch</a></li>
  <li class="ref-item"><strong>Tod Johann Kreissl (1698)</strong> <span class="sep">→</span> <a href="#" class="ext-link">SOA Leitmeritz</a></li>
  <li class="ref-item"><strong>Taufe Apollonia Jablotzki (1768)</strong> <span class="sep">→</span> <a href="https://ebadatelna.soapraha.cz/d/6850/60" target="_blank" rel="noopener noreferrer" class="ext-link">SOA Prag</a></li>
  <li class="ref-item"><strong>Heirat Philipp Bechinie (1769)</strong> <span class="sep">→</span> <a href="https://ebadatelna.soapraha.cz/d/5876/167" target="_blank" rel="noopener noreferrer" class="ext-link">SOA Prag</a></li>
  <li class="ref-item"><strong>Tod Johanna S. Pilz (1772)</strong> <span class="sep">→</span> <a href="https://vademecum.soalitomerice.cz/vademecum/permalink?xid=09ddd7cea03b9b8d:4e496e4e:12216bae987:-7718&scan=d23789c7c2aa4e75b0bfdf9ef4c6593b" target="_blank" rel="noopener noreferrer" class="ext-link">SOA Leitmeritz</a></li>
  <li class="ref-item"><strong>Unterschrift F. A. Pilz, Kallich</strong> <span class="sep">→</span> <a href="https://vademecum.soalitomerice.cz/vademecum/permalink?xid=09ddd7cea03b9b8d:4e496e4e:12216bae987:-747e&scan=4efc5f91034a44d1ac50afc8e8eed735" target="_blank" rel="noopener noreferrer" class="ext-link">SOA Leitmeritz</a></li>
  <li class="ref-item"><strong>Kriegstrauung J. Eberstaller &amp; K. Reider (1916)</strong> <span class="sep">→</span> <a href="#" class="ext-link">Matriken Tirol</a></li>
</ul>

<h3 id="presse">3.2 Zeitungsartikel &amp; Pressefunde</h3>
<ul class="ref-list">
  <li class="ref-item"><strong>Casino in Kupferberg (1871)</strong> <span class="sep">→</span> <a href="https://anno.onb.ac.at/cgi-content/anno?aid=vtl&datum=18710323&seite=5" target="_blank" rel="noopener noreferrer" class="ext-link">ANNO</a></li>
  <li class="ref-item"><strong>Vinzenz Pilz in Kupferberg (1872)</strong> <span class="sep">→</span> <a href="#" class="ext-link">ANNO</a></li>
  <li class="ref-item"><strong>Raufhandel Franz Eberstaller (1887)</strong> <span class="sep">→</span> <a href="#" class="ext-link">Salzburger Chronik</a></li>
  <li class="ref-item"><strong>Ebermanns Mundwasser (1893)</strong> <span class="sep">→</span> <a href="#" class="ext-link">Prager Abendblatt</a></li>
  <li class="ref-item"><strong>Dackel entlaufen (1913)</strong> <span class="sep">→</span> <a href="#" class="ext-link">Mühlviertler Nachr.</a></li>
  <li class="ref-item"><strong>Jagdglück Helfenberg (1913)</strong> <span class="sep">→</span> <a href="#" class="ext-link">Mühlviertler Nachr.</a></li>
  <li class="ref-item"><strong>Grässlicher Unglücksfall (1925)</strong> <span class="sep">→</span> <a href="#" class="ext-link">Mühlviertler Nachr.</a></li>
  <li class="ref-item"><strong>Ein unglücklicher Zufall (1925)</strong> <span class="sep">→</span> <a href="#" class="ext-link">Salzburger Chronik</a></li>
  <li class="ref-item"><strong>Nachruf Leonhard Reider (1928)</strong> <span class="sep">→</span> <a href="#" class="ext-link">Teßmann</a></li>
  <li class="ref-item"><strong>Artikel Karoline Eberstaller (1931)</strong> <span class="sep">→</span> <a href="#" class="ext-link">Jornal do Brasil</a></li>
  <li class="ref-item"><strong>Radfahrerwildling Alois Pilz</strong> <span class="sep">→</span> <a href="#" class="ext-link">ANNO</a></li>
  <li class="ref-item"><strong>Petition der Abdecker</strong> <span class="sep">→</span> <a href="#" class="ext-link">wasbishergeschah.at</a></li>
</ul>

<h3 id="nachlaesse">3.3 Nachlässe, Sonderdokumente &amp; Audio</h3>
<ul class="ref-list">
  <li class="ref-item"><strong>Tagebuch Johann Eberstaller</strong> <span class="sep">→</span> <a href="https://sites.google.com/d/14h2Dj-fE3gkh_mwjM2cQyf2UWrhRLQSf/p/1ubsocuUXl5fEKcMf_BgaJlbEG2SL955V/edit" target="_blank" rel="noopener noreferrer" class="ext-link">Digitalisat</a></li>
  <li class="ref-item"><strong>Ahnenliste Eberstaller (Adler 1953)</strong> <span class="sep">→</span> <a href="https://drive.google.com/file/d/10M1CXZaet3WLb7xonSvEdDJWKH6mBN7-/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="ext-link">Google Drive</a></li>
  <li class="ref-item"><strong>Schubert: „Der Vollmond strahlt“</strong> <span class="sep">→</span> <a href="https://www.youtube.com/watch?v=Y-o_qrazKQQ" target="_blank" rel="noopener noreferrer" class="ext-link">YouTube (E. Schwarzkopf)</a></li>
  <li class="ref-item"><strong>Schubert: „Lied der Anne Lyle“</strong> <span class="sep">→</span> <a href="https://www.youtube.com/watch?v=Ma59U6k926M" target="_blank" rel="noopener noreferrer" class="ext-link">YouTube (G. Janowitz)</a></li>
</ul>


<h2 id="karten">4. Räumliche Verortung</h2>

<h3 id="historische-karten">4.1 Historische Karten (Erste Militärische Landesaufnahme)</h3>
<p class="category-desc">Deutsche Ortsnamen im historischen Kontext (ca. 1764).</p>
<ul class="ref-list">
  <li class="ref-item"><strong>Rothenhaus</strong> <span class="sep">|</span> <a href="https://maps.arcanum.com/de/map/firstsurvey-bohemia/?layers=141&bbox=1483866.5262799335%2C6534575.474643094%2C1498093.368169512%2C6539763.63793795" target="_blank" rel="noopener noreferrer" class="ext-link">Karte öffnen</a></li>
  <li class="ref-item"><strong>Kallich</strong> <span class="sep">|</span> <a href="https://maps.arcanum.com/de/map/firstsurvey-bohemia/?layers=141&bbox=1468470.5815351685%2C6543321.173811231%2C1496924.2653143252%2C6553697.500400944" target="_blank" rel="noopener noreferrer" class="ext-link">Karte öffnen</a></li>
  <li class="ref-item"><strong>Schmiedeberg</strong> <span class="sep">|</span> <a href="https://maps.arcanum.com/de/map/firstsurvey-bohemia/?layers=osm%2C141&bbox=1445671.6567497356%2C6519835.961017222%2C1459898.498639314%2C6525024.124312078" target="_blank" rel="noopener noreferrer" class="ext-link">Karte öffnen</a></li>
  <li class="ref-item"><strong>Kupferberg</strong> <span class="sep">|</span> <a href="https://maps.arcanum.com/de/map/firstsurvey-bohemia/?layers=141&bbox=1454500,6525000,1460000,6530000" target="_blank" rel="noopener noreferrer" class="ext-link">Karte öffnen</a></li>
  <li class="ref-item"><strong>Weipert</strong> <span class="sep">|</span> <a href="#" class="ext-link">Karte öffnen</a></li>
  <li class="ref-item"><strong>Gottesgab</strong> <span class="sep">|</span> <a href="#" class="ext-link">Karte öffnen</a></li>
  <li class="ref-item"><strong>Libeschitz</strong> <span class="sep">|</span> <a href="#" class="ext-link">Karte öffnen</a></li>
  <li class="ref-item"><strong>Hlawatschow</strong> <span class="sep">|</span> <a href="#" class="ext-link">Karte öffnen</a></li>
  <li class="ref-item"><strong>Amschelberg</strong> <span class="sep">|</span> <a href="#" class="ext-link">Karte öffnen</a></li>
</ul>

<h3 id="moderne-karten">4.2 Moderne Kartenportale &amp; Besitzlagen</h3>
<ul class="ref-list">
  <li class="ref-item"><strong>Mapire (Arcanum)</strong> <span class="sep">|</span> <a href="https://mapire.eu/en/" target="_blank" rel="noopener noreferrer" class="ext-link">mapire.eu</a></li>
  <li class="ref-item"><strong>Mapy.cz</strong> <span class="sep">|</span> <a href="https://mapy.cz/" target="_blank" rel="noopener noreferrer" class="ext-link">mapy.cz</a></li>
  <li class="ref-item"><strong>HIK Tirol</strong> <span class="sep">|</span> <a href="https://hik.tirol.gv.at/" target="_blank" rel="noopener noreferrer" class="ext-link">hik.tirol.gv.at</a></li>
  <li class="ref-item"><strong>DORIS (OÖ)</strong> <span class="sep">|</span> <a href="https://doris.at/" target="_blank" rel="noopener noreferrer" class="ext-link">doris.at</a></li>
  <li class="ref-item"><strong>Topothek</strong> <span class="sep">|</span> <a href="https://www.topothek.at/" target="_blank" rel="noopener noreferrer" class="ext-link">topothek.at</a></li>
</ul>

<h3 id="ortsnamen">4.3 Ortsnamenzuordnung (DE ↔ CZ)</h3>
<ul class="ref-list">
  <li class="ref-item"><strong>Wikipedia: Deutsche Ortsnamen CZ</strong> <span class="sep">|</span> <a href="#" class="ext-link">Link</a></li>
  <li class="ref-item"><strong>Tschechien-Online (A–Z)</strong> <span class="sep">|</span> <a href="#" class="ext-link">Link</a></li>
  <li class="ref-item"><strong>Ortslexikon SOA Leitmeritz</strong> <span class="sep">|</span> <a href="#" class="ext-link">Link</a></li>
</ul>

<div id="downloads" class="download-area">
  <h2 class="download-title">5. Downloads &amp; Langzeitsicherung</h2>
  
  <ul class="ref-list">
    <li class="ref-item">
      <strong>Gesamtregister Band 1 &amp; 2 (PDF)</strong><br>
      <span style="color:#666; font-size:0.9em;">Namen- und Ortsverzeichnis zur schnellen Orientierung. [Download folgt]</span>
    </li>
    <li class="ref-item">
      <strong>Langzeitsicherung (Zenodo)</strong><br>
      <span style="color:#666; font-size:0.9em;">Archivierte Forschungsdaten (DOI: 10.5281/zenodo.15828594).</span><br>
      <a href="https://doi.org/10.5281/zenodo.15828594" target="_blank" rel="noopener noreferrer" class="ext-link">Zum Zenodo-Archiv →</a>
    </li>
  </ul>
</div>

<p class="page-stand">
  Stand: 02.01.2026. Diese Seite ergänzt die gedruckte Pilz-Chronik.
</p>
###
