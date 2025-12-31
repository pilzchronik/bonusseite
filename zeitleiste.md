---
layout: page
title: "Zeitleiste"
permalink: /zeitleiste/
---

<style>
  /* Die Linie */
  .timeline {
    position: relative;
    max-width: 900px;
    margin: 40px auto;
    padding-left: 30px;
    border-left: 3px solid #e0e0e0;
  }

  /* Der einzelne Eintrag */
  .container {
    position: relative;
    margin-bottom: 40px;
    padding-left: 30px;
  }

  /* Der Punkt auf der Linie */
  .container::before {
    content: '';
    position: absolute;
    left: -39px;
    top: 6px;
    width: 14px;
    height: 14px;
    background: white;
    border: 3px solid #2a5d8f;
    border-radius: 50%;
    z-index: 2;
  }

  /* Jahreszahl */
  .year {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    color: #2a5d8f;
    font-size: 1.1em;
    margin-bottom: 5px;
    display: block;
  }

  /* Titel des Ereignisses */
  h3 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1.25em;
    color: #333;
    font-weight: 600;
  }

  /* Fließtext */
  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
    margin-top: 0;
  }

  /* Kleine Tags (Kategorien) */
  .meta-tag {
    display: inline-block;
    font-size: 0.85em;
    color: #777;
    background: #f4f4f4;
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid #eee;
  }

  /* DNA-Aufklappbereich */
  details {
    margin-bottom: 50px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #fafafa;
  }
  
  summary {
    cursor: pointer;
    padding: 15px;
    font-weight: bold;
    color: #555;
    outline: none;
  }
  
  summary:hover {
    background: #f0f0f0;
  }

  .dna-section {
    padding: 20px;
    border-top: 1px solid #eee;
    background: white;
  }
</style>

<div class="intro-section" style="text-align: center; margin-bottom: 50px;">
  <h1>Geschichte im Zeitraffer</h1>
  <p style="color: #666; max-width: 600px; margin: 0 auto;">
    Eine chronologische Reise durch die Familiengeschichte – von den genetischen Ursprüngen bis zur Gegenwart.
  </p>
</div>

<div class="timeline">

  <details>
    <summary>🧬 Prähistorische Wurzeln anzeigen (DNA-Analyse)</summary>
    <div class="dna-section">
      
      <div class="container" style="margin-bottom: 20px;">
        <span class="year">ca. 25.000 v. Chr.</span>
        <h3>Väterliche Linie (J2-M172)</h3>
        <p>Entstehung im Nahen Osten/Kaukasus. Die Vorfahren waren Jäger und Sammler vor dem Höhepunkt der letzten Eiszeit.</p>
      </div>

      <div class="container" style="margin-bottom: 20px;">
        <span class="year">ca. 20.000 v. Chr.</span>
        <h3>Mütterliche Linie (H)</h3>
        <p>Entstehung in Westasien. Diese Linie erreichte Europa vermutlich vor dem Höhepunkt der Eiszeit und ist heute die häufigste in Europa.</p>
      </div>

      <div class="container" style="margin-bottom: 20px;">
        <span class="year">ca. 6.500 v. Chr.</span>
        <h3>Neolithische Expansion</h3>
        <p>Frühe Ackerbauern bringen die J2-Linien über den Balkan nach Mitteleuropa.</p>
      </div>

      <div class="container" style="margin-bottom: 0;">
        <span class="year">Mittelalter</span>
        <h3>Entstehung H41a9</h3>
        <p>Der spezifische mütterliche Zweig H41a9 bildet sich im Alpen-Balkan-Raum heraus.</p>
      </div>

    </div>
  </details>


  <div class="container">
    <span class="year">ca. 1290</span>
    <h3>Lienhard Tschurtschenthaler</h3>
    <p>Frühester dokumentierter Vorfahre; bäuerliche Familie in Sexten (Südtirol). Ein erster fester Ankerpunkt in den Quellen.</p>
    <span class="meta-tag">Spitzenahn</span>
  </div>

  <div class="container">
    <span class="year">1335</span>
    <h3>Erste Erwähnung von Preßnitz</h3>
    <p>Der Ort im böhmischen Erzgebirge wird erstmals urkundlich genannt. Er wird später ein zentraler Schauplatz der Familiengeschichte.</p>
    <span class="meta-tag">Erzgebirge</span>
  </div>

  <div class="container">
    <span class="year">1539–1619</span>
    <h3>Jobst Pültz, Richter in Dörnthal</h3>
    <p>Frühester namentlich belegter Pilz in Dörnthal (Sachsen). Die Zuordnung zur direkten Stammreihe ist sehr wahrscheinlich, aber nicht lückenlos beweisbar.</p>
    <span class="meta-tag">Forschung</span>
  </div>

  <div class="container">
    <span class="year">1591</span>
    <h3>Geburt von Abraham Piltz</h3>
    <p>Stammvater in Dörnthal. Ab hier lassen sich die Primärquellen der direkten Linie lückenlos nachweisen.</p>
    <span class="meta-tag">Stammreihe</span>
  </div>

  <div class="container">
    <span class="year">1618–1648</span>
    <h3>Dreißigjähriger Krieg</h3>
    <p>Verwüstung in Sachsen und Böhmen. Rahmenbedingung für erste Migrationen. Erwähnung eines Niclas Reichl in Kallich.</p>
    <span class="meta-tag">Zeitgeschichte</span>
  </div>

  <div class="container">
    <span class="year">1672</span>
    <h3>Tod von Wolf Eberstaller</h3>
    <p>Das „Verlassenschaftsprotokoll“ am Reichhof (Krenglbach) gibt seltene Einblicke in Besitz und Erbfolge jener Zeit.</p>
    <span class="meta-tag">Eberstaller-Linie</span>
  </div>

  <div class="container">
    <span class="year">1756–1763</span>
    <h3>Siebenjähriger Krieg / Migration</h3>
    <p>Wahrscheinlicher Auslöser der Migration der Familie Pilz von Sachsen ins böhmische Erzgebirge.</p>
    <span class="meta-tag">Migration</span>
  </div>

  <div class="container">
    <span class="year">1761</span>
    <h3>Geburt Friedrich August Pilz</h3>
    <p>In Rothenthal (Sachsen). Er wird später Lehrer in Kallich und festigt die Familie in Böhmen.</p>
    <span class="meta-tag">Stammvater Böhmen</span>
  </div>

  <div class="container">
    <span class="year">1768</span>
    <h3>Die Radetzky-Verbindung</h3>
    <p>Taufe der Theresia (Apollonia Jablotzki). Ihr Taufpate ist Graf Peter Eusebius Radetzky – Beginn der sogenannten „Radetzky-Klammer“.</p>
    <span class="meta-tag">Adelsforschung</span>
  </div>

  <div class="container">
    <span class="year">1811</span>
    <h3>Geburt Vinzenz Wenzel Pilz</h3>
    <p>Vater der unehelichen Söhne Vinzenz & Alois Vjekoslav. Begründer der Förstertradition in der Familie.</p>
    <span class="meta-tag">Förster</span>
  </div>

  <div class="container">
    <span class="year">1834</span>
    <h3>Alois Vjekoslav Pilz</h3>
    <p>Geburt des späteren Oberförsters, der nach Slawonien (heute Kroatien) auswandert und sich dort kulturell assimiliert.</p>
    <span class="meta-tag">Slawonien-Linie</span>
  </div>

  <div class="container">
    <span class="year">1851</span>
    <h3>Testament von Peter Kofler</h3>
    <p>Erstellt in Rovereto. Es dokumentiert den großen Wohlstand und klärt die Verwandtschaftsverhältnisse zwischen Tirol und Italien.</p>
    <span class="meta-tag">Kofler-Linie</span>
  </div>

  <div class="container">
    <span class="year">1858</span>
    <h3>Radetzky in Italien</h3>
    <p>Begegnung des Feldmarschalls mit Maria Antonietta Gioppi (geb. Cofler). Ein weiterer Berührungspunkt der Familie mit der Geschichte.</p>
    <span class="meta-tag">Historie</span>
  </div>

  <div class="container">
    <span class="year">1881</span>
    <h3>Geburt Emma Hofmann</h3>
    <p>Großmutter des Autors (Kekulé 5). Durch sie verbinden sich die Handwerker-Traditionen aus Schmiedeberg mit der Familie.</p>
    <span class="meta-tag">Kekulé 5</span>
  </div>

  <div class="container">
    <span class="year">1945/1946</span>
    <h3>Vertreibung aus Böhmen</h3>
    <p>Verlust der Heimat für den Großteil der deutschsprachigen Verwandtschaft. Die direkte Linie lebte bereits in Österreich.</p>
    <span class="meta-tag">Zäsur</span>
  </div>

  <div class="container">
    <span class="year">2025</span>
    <h3>Abschluss der Chronik</h3>
    <p>Veröffentlichung von Band 1 und 2 sowie Start dieses digitalen Archivs zur langfristigen Sicherung der Daten.</p>
    <span class="meta-tag">Gegenwart</span>
  </div>

</div>

<p style="text-align: center; margin-top: 60px;">
  <a href="/" style="text-decoration: none; color: #555; border-bottom: 1px solid #ccc;">← Zurück zur Startseite</a>
</p>
