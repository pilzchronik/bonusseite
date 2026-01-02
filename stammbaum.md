---
layout: page
title: Stammbaum
permalink: /stammbaum/
---

<h1 style="color: #333; margin-bottom: 20px;">Stammbaum & Dossiers</h1>

<style>
  /* --- FIX: Automatische Überschrift ausblenden (gegen Dopplung) --- */
  .post-header { display: none !important; }

  /* Haupt-Aktion (MacFamilyTree) - Modernes Hero-Element */
  .hero-box {
    background: linear-gradient(to right, #f8f9fa, white);
    border: 1px solid #e9ecef;
    border-left: 5px solid #2a5d8f; /* Pilz-Blau */
    padding: 30px;
    border-radius: 4px;
    margin-bottom: 50px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
  }
  
  .btn-primary {
    display: inline-block;
    background: #2a5d8f;
    color: white !important;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 15px;
    transition: background 0.2s;
  }
  .btn-primary:hover { background: #1e456a; }

  /* Dossier-Liste (Grid-Layout) */
  .dossier-list { 
    list-style: none; 
    padding: 0; 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 25px; 
    margin-top: 20px;
  }
  
  .dossier-item {
    padding: 25px;
    border: 1px solid #eee;
    background: white;
    border-radius: 4px;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .dossier-item:hover { 
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.05); 
    border-color: #2a5d8f;
  }
  
  .dossier-item h3 { 
    margin-top: 0; 
    font-size: 1.2em; 
    color: #333; 
    margin-bottom: 10px;
  }
  
  .dossier-item p {
    color: #666;
    font-size: 0.95em;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  .dossier-item a { 
    color: #2a5d8f; 
    text-decoration: none; 
    font-weight: bold; 
    display: inline-block; 
  }
  .dossier-item a:hover { text-decoration: underline; }

  /* Legacy Box (Warnung) */
  .legacy-box {
    background: #fff8e1; /* Sanftes Gelb */
    border: 1px solid #ffeeba;
    padding: 20px;
    border-radius: 4px;
    margin-top: 60px;
    color: #856404;
    font-size: 0.9em;
  }
</style>

<div class="hero-box">
  <h2 style="margin-top: 0; color: #2a5d8f; font-size: 1.5em;">Interaktiver Stammbaum</h2>
  <p style="color: #555; line-height: 1.6;">
    Die modernste Ansicht der Familiendaten. Erkunden Sie die Verwandtschaftsverhältnisse visuell über die Plattform MacFamilyTree.
  </p>
  <a href="https://www.macfamilytree.com/pilzw/Pilz-Chronik/index.html" class="btn-primary" target="_blank">🌳 Stammbaum öffnen (Online)</a>
</div>

<h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; color: #1a3d5c;">Thematische Dossiers</h2>
<p style="margin-bottom: 25px; color: #666;">Separate Forschungswebseiten zu speziellen Zweigen und Rätseln der Familie.</p>

<ul class="dossier-list">
  <li class="dossier-item">
    <h3>Rätsel Slawonien</h3>
    <p>Forschung zu Alois Vjekoslav Pilz und der Auswanderung in den Balkanraum.</p>
    <a href="https://sites.google.com/view/raetsel-in-slawonien/startseite" target="_blank">🔗 Zur Materialsammlung</a>
  </li>
  <li class="dossier-item">
    <h3>Das Bechinie-Rätsel</h3>
    <p>Untersuchung der möglichen adeligen Wurzeln (Bechinie von Lazan) und familiärer Legenden.</p>
    <a href="https://sites.google.com/view/raetselphilippbechinie/startseite" target="_blank">🔗 Zum Forschungsstand</a>
  </li>
  <li class="dossier-item">
    <h3>Familie Kofler & Cofler</h3>
    <p>Historie der Wanderung von Osttirol nach Italien (Rovereto) und die Spaltung der Linie.</p>
    <a href="https://sites.google.com/view/koflerzucofler/startseite" target="_blank">🔗 Zur Webseite</a>
  </li>
  <li class="dossier-item">
    <h3>DNA-Genealogie</h3>
    <p>Detaillierte Hintergründe zu den Haplogruppen (J2b / H41a9) und Vergleichsdaten.</p>
    <a href="https://sites.google.com/view/pilzdna/startseite" target="_blank">🔗 Zur DNA-Seite</a>
  </li>
</ul>

<div class="legacy-box">
  <strong>⚠️ Archiv-Hinweis (TNG):</strong><br>
  Die alte TNG-Datenbank (<em>pilz.fun</em>) wird nicht mehr aktiv gepflegt und dient nur noch als Referenz. Bitte nutzen Sie primär den MacFamilyTree-Link oben.
  <br><br>
  <a href="https://www.pilz.fun" style="color: #856404; text-decoration: underline;" target="_blank">Zur alten Datenbank (noch verfügbar)</a>
</div>
