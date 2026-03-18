---
layout: page
title: "Zeitleiste"
permalink: /zeitleiste/
---

<style>
  /* Design-Philosophie: Richterlicher Stil */
  /* Schlicht, seriös, weißer Hintergrund, Akzentfarbe Dunkelblau */

  .timeline-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 40px auto;
    color: #555;
    line-height: 1.6;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
  }

  .timeline-section-title {
    color: #333;
    font-size: 1.4em;
    margin: 40px 0 20px 30px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-left: 5px solid #2a5d8f;
    padding-left: 15px;
  }

  /* Die Linie */
  .timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
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
    left: -39px; /* Exakt auf der Linie positioniert */
    top: 6px;
    width: 14px;
    height: 14px;
    background: white;
    border: 3px solid #2a5d8f; /* Pilz-Blau */
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
    font-size: 1.2em;
    color: #222;
  }

  /* Fließtext */
  p {
    margin: 0;
    color: #555;
    line-height: 1.5;
  }

  /* Kleines Tag für die Kategorie */
  .meta-tag {
    display: inline-block;
    margin-top: 8px;
    padding: 2px 8px;
    background: #f0f4f8;
    color: #444;
    font-size: 0.8em;
    border-radius: 4px;
    font-style: italic;
  }

  @media (max-width: 600px) {
    .timeline-section-title {
      font-size: 1.1em;
      margin-left: 10px;
      padding-left: 10px;
    }
    .timeline {
      padding-left: 20px;
    }
    .container {
      padding-left: 20px;
      margin-bottom: 30px;
    }
    .container::before {
      left: -29px;
      width: 12px;
      height: 12px;
    }
    .year { font-size: 1em; }
    h3 { font-size: 1.05em; }
    p { font-size: 0.9em; }
  }
</style>

<div class="timeline-intro">
  <h2>Geschichte im Zeitraffer</h2>
  <p>Eine chronologische Reise durch die Familiengeschichte – von den genetischen Ursprüngen bis zur Gegenwart.</p>
</div>

<div class="timeline-section-title">Prähistorische Wurzeln (DNA-Analyse)</div>

<div class="timeline">

  <div class="container">
    <span class="year">ca. 300.000 v. Chr.</span>
    <h3>Gemeinsame Ursprünge in Afrika</h3>
    <p>Sowohl die väterliche Linie (Y-Adam, Zentralafrika) als auch die mütterliche Linie (mt-Eva, Ostafrika) beginnen in Afrika. Von dort wandern beide Linien unabhängig über das Horn von Afrika und die Arabische Halbinsel nach Vorderasien.</p>
    <span class="meta-tag">DNA-Analyse</span>
  </div>

  <div class="container">
    <span class="year">ca. 40.000 v. Chr.</span>
    <h3>Väterliche Linie: Haplogruppe J</h3>
    <p>Im Nahen Osten entsteht die J-Haplogruppe. Der Zweig J2 bildet sich ca. 25.000 v. Chr. in Anatolien während der letzten Eiszeit heraus.</p>
    <span class="meta-tag">DNA-Analyse</span>
  </div>

  <div class="container">
    <span class="year">ca. 25.000 v. Chr.</span>
    <h3>Mütterliche Linie: Haplogruppe H</h3>
    <p>In Westanatolien entsteht die H-Linie — heute die häufigste mütterliche Haplogruppe in Europa. Sie erreicht über den Balkan Mitteleuropa.</p>
    <span class="meta-tag">DNA-Analyse</span>
  </div>

  <div class="container">
    <span class="year">ca. 6.500 v. Chr.</span>
    <h3>Neolithische Expansion</h3>
    <p>Frühe Ackerbauern bringen die J2-Linien über den Balkan nach Mitteleuropa.</p>
    <span class="meta-tag">DNA-Analyse</span>
  </div>

  <div class="container">
    <span class="year">ca. 450 n. Chr.</span>
    <h3>Entstehung H41a9</h3>
    <p>Der spezifische mütterliche Zweig H41a9 entsteht im Alpen-Balkan-Raum. Früheste getestete Nachkommen stammen aus Österreich und Kroatien.</p>
    <span class="meta-tag">DNA-Analyse</span>
  </div>

</div>

<div class="timeline-section-title">Historische Zeitleiste</div>

<div class="timeline">

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
    <span class="year">† vor April 1558</span>
    <h3>Michel Pültz I., Schöppe in Dörnthal</h3>
    <p>Tatsächlicher Stammvater und frühester belegter Pültz in Dörnthal. Seine umfangreiche Nachlassregelung im April 1558 (Gerichtsbuch Dörnthal Bd. 01) ist der gesicherte Beginn der Familiengeschichte im Erzgebirge und belegt die Familie bereits als Teil der elitären Gerichtsschöppen.</p>
    <span class="meta-tag">Stammvater</span>
  </div>

  <div class="container">
    <span class="year">1562</span>
    <h3>Michel Pültz in wirtschaftlicher Not</h3>
    <p>Ein Michel Pültz (vermutlich Michel junior) muss in wirtschaftlicher Bedrängnis („fünfter Not") ein Gut an den Grundherrn Caspar von Schönberg abtreten. Ein eindrucksvoller Beleg für die Krisen der damaligen Zeit – aber nicht die erste urkundliche Nennung der Familie.</p>
    <span class="meta-tag">Erzgebirge</span>
  </div>

  <div class="container">
    <span class="year">† 1619</span>
    <h3>Jobst Pültz, Richter in Dörnthal</h3>
    <p>Richter und Amtsträger in Dörnthal. Die ältere Forschung hielt ihn fälschlich für den Vater von Abraham Piltz. Die Auswertung der Gerichtsbücher hat jedoch gezeigt: Jobst und der Familienvater Joseph Pültz sind zwei verschiedene Personen.</p>
    <span class="meta-tag">Forschungskorrektur</span>
  </div>

  <div class="container">
    <span class="year">ab 1610</span>
    <h3>Joseph Pültz, der Familienvater</h3>
    <p>Direkter Vorfahre der Auswanderungslinie. Er regelt in den 1610er Jahren mehrfach Land- und Erbverträge für seine Kinder. Darf nicht mit dem gleichzeitig lebenden Richter Jobst Pültz verwechselt werden.</p>
    <span class="meta-tag">Stammreihe</span>
  </div>

  <div class="container">
    <span class="year">1591</span>
    <h3>Geburt von Abraham Piltz</h3>
    <p>Sohn von Joseph Pültz. Abraham ist das entscheidende Bindeglied in die Nachbarorte: Er heiratet 1614 Maria Hengst, zieht weg und verlegt den Lebensmittelpunkt der direkten Stammlinie nach Blumenau/Olbernhau (urkundlich belegt 1624 als „Abraham Pültz zu Blumenau"). Ab hier lassen sich die Primärquellen der direkten Linie lückenlos nachweisen.</p>
    <span class="meta-tag">Auswanderer</span>
  </div>

  <div class="container">
    <span class="year">1618–1648</span>
    <h3>Dreißigjähriger Krieg</h3>
    <p>Verwüstung in Sachsen und Böhmen. Rahmenbedingung für erste Migrationen. Erwähnung eines Niclas Reichl in Kallich.</p>
    <span class="meta-tag">Zeitgeschichte</span>
  </div>

  <div class="container">
    <span class="year">1621</span>
    <h3>Blutgericht am Altstädter Ring</h3>
    <p>Hinrichtung von 27 böhmischen Anführern in Prag. Ein dramatischer Wendepunkt für den protestantischen Adel, der den historischen Hintergrund für das "Bechinie-Rätsel" bildet.</p>
    <span class="meta-tag">Kontext</span>
  </div>

  <div class="container">
    <span class="year">1672</span>
    <h3>Tod von Wolf Eberstaller</h3>
    <p>Das „Verlassenschaftsprotokoll“ am Reichhof (Krenglbach) gibt seltene Einblicke in Besitz und Erbfolge jener Zeit.</p>
    <span class="meta-tag">Eberstaller-Linie</span>
  </div>

  <div class="container">
    <span class="year">1756–1763</span>
    <h3>Siebenjähriger Krieg</h3>
    <p>Der Krieg verwüstet Sachsen und erschüttert die Wirtschaft des Erzgebirges nachhaltig. Seine Spätfolgen treffen in den Jahren danach besonders die Saigerhütte Grünthal.</p>
    <span class="meta-tag">Zeitgeschichte</span>
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
    <span class="year">1764–1777</span>
    <h3>Dreifachkrise an der Saigerhütte Grünthal – Auslöser der Auswanderung?</h3>
    <p>Als Spätfolge des Siebenjährigen Krieges brach der Kupferabsatz ein; 1777 erwog das Oberbergamt die Stilllegung des Werks. Im Juni 1771 zerstörte ein Jahrhunderthochwasser der Flöha die Hammerwerke. Gleichzeitig löste eine Klimakatastrophe 1770–1772 eine verheerende Hungersnot im Erzgebirge aus – der Getreidepreis verzehnfachte sich. Das Zusammenwirken von Wirtschaftskrise, Naturkatastrophe und Hungersnot gilt als wahrscheinlicher Grund für die Auswanderung des Kupferhammerschmieds Carl Gottlob Biltz/Pilz (* 1738) von Grünthal nach Kallich in Böhmen.</p>
    <span class="meta-tag">Migration – Schlüsselereignis</span>
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
    <p>Begegnung des Feldmarschalls mit dem Bekanntenkreis von Maria Antonietta Gioppi (geb. Cofler) in Mantua. Ein weiterer Berührungspunkt der Familie mit der Geschichte.</p>
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
