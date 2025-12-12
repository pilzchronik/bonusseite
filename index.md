---
layout: page
title: "Pilz-Chronik – Bonusseite"
---

Willkommen auf der **Bonusseite zur Pilz-Chronik**.

Dies ist die zentrale Anlaufstelle für Ergänzungen, neue Funde und Berichtigungen zu den gedruckten Bänden:

- **Band 1 – Die Suche**
- **Band 2 – Ahnentafel und Analysen**

Die gedruckten Bände bleiben die Hauptquelle.
Diese Seite ist die **einzige Plattform, die noch aktiv betreut wird**.

---

## Das digitale Familien-Archiv

Über viele Jahre sind neben dem Buchprojekt verschiedene spezialisierte Webseiten entstanden. Da ich dieses Projekt als Privatperson führe, kann ich diese Vielzahl an Seiten nicht mehr laufend pflegen.

Sie bleiben jedoch als **abgeschlossene Archive ("Lese-Bibliothek")** online, damit die dort gesammelten wertvollen Details nicht verloren gehen. Bitte beachten Sie, dass dort keine Aktualisierungen mehr stattfinden.

### 🧬 Stammbaum-Datenbanken
*(Stand der Daten: Archiviert)*

- [**TNG Datenbank (pilz.fun)**](https://www.pilz.fun)  
  Umfangreiche Datenbank mit Suchfunktion.
- [**MacFamilyTree Online**](https://www.macfamilytree.com/pilzw/Pilz-Chronik/index.html)  
  Grafische Ansicht der Verwandtschaftsverhältnisse.

### 🔍 Themen-Archive
*(Detaillierte Forschungsergebnisse aus früheren Jahren)*

- [**Familie Kofler & Cofler**](https://sites.google.com/view/koflerzucofler/startseite)  
  Historie der Wanderung von Osttirol nach Italien.
- [**Rätsel Slawonien**](https://sites.google.com/view/raetsel-in-slawonien/startseite)  
  Umfangreiche Materialsammlung zu Alois Vjekoslav Pilz.
- [**Das Bechinie-Rätsel**](https://sites.google.com/view/raetselphilippbechinie/startseite)  
  Forschungsstand zu den möglichen adeligen Wurzeln.
- [**DNA-Genealogie**](https://sites.google.com/view/pilzdna/startseite)  
  Grundlagen und Details zu den Haplogruppen.

---

## Inhalt dieser Bonusseite

Hier finden Sie die aktuellen Nachträge:
- Funde zu Personen, Orten und Familienlinien
- Berichtigungen und Ergänzungen zu den Bänden
- Zusätzliche Dokumente und Quellenhinweise

---

## Neueste Beiträge

{% for post in site.posts limit:3 %}
- **{{ post.date | date: "%d.%m.%Y" }} – [{{ post.title }}]({{ post.url | relative_url }})**
{% endfor %}

[→ Alle Beiträge anzeigen]({{ "/posts/" | relative_url }})

---

## Downloads

Übersichten und Verzeichnisse zur *Pilz-Chronik* finden Sie hier:  
[→ Zu den Downloads]({{ "/downloads/" | relative_url }})

---

*Stand: {{ site.time | date: "%B %Y" }} – Pilz-Chronik Bonusseite*
