---
layout: page
title: "Pilz-Chronik – Bonusseite"
---

Willkommen auf der **Bonusseite zur Pilz-Chronik**.  
Hier erscheinen Ergänzungen, neue Funde und Berichtigungen zu:

- **Band 1 – Die Suche** - **Band 2 – Ahnentafel und Analysen**

Die gedruckten Bände bleiben die Hauptquelle.  
Diese Seite dient dazu, aktuelle Ergänzungen und Forschungsergebnisse fortzuführen.

---

## Weiterführende Online-Angebote

Diese Bonusseite ist der zentrale, dauerhafte Speicherort. Zusätzlich pflegen wir spezialisierte Seiten für vertiefende Forschung und interaktive Daten.

### 🧬 Interaktive Stammbäume
*(Lebende Datenbanken zum Suchen)*

- [**TNG Datenbank (pilz.fun)**](https://www.pilz.fun)  
  Passwortgeschützte Hauptdatenbank
- [**MacFamilyTree Online**](https://www.macfamilytree.com/pilzw/Pilz-Chronik/index.html)  
  Alternative grafische Ansicht

### 🔍 Spezialisierte Forschung
*(Themenseiten zu komplexen Familienzweigen)*

- [**Familie Kofler & Cofler**](https://sites.google.com/view/koflerzucofler/startseite)  
  Von Osttirol nach Italien
- [**Rätsel Slawonien**](https://sites.google.com/view/raetsel-in-slawonien/startseite)  
  Die Spuren von Alois Vjekoslav Pilz
- [**Das Bechinie-Rätsel**](https://sites.google.com/view/raetselphilippbechinie/startseite)  
  Forschung zu den adeligen Wurzeln
- [**DNA-Genealogie**](https://sites.google.com/view/pilzdna/startseite)  
  Details zu Haplogruppen und Urzeit

---

## Inhalt dieser Bonusseite

Hier finden Sie:
- Nachträge und Funde zu Personen, Orten und Familienlinien  
- Berichtigungen und Ergänzungen zu den beiden Bänden  
- zusätzliche Dokumente, Scans und Quellenhinweise

---

## Neueste Beiträge

{% for post in site.posts limit:3 %}
- **{{ post.date | date: "%d.%m.%Y" }} – [{{ post.title }}]({{ post.url | relative_url }})** {{ post.excerpt | strip_html | truncate: 180 }}
{% endfor %}

[→ Alle Beiträge anzeigen]({{ "/posts/" | relative_url }})

---

## Downloads

Ergänzende Inhalte zur *Pilz-Chronik* stehen gesammelt auf der Seite:  
[→ Downloads anzeigen]({{ "/downloads/" | relative_url }})

---

*Stand: {{ site.time | date: "%B %Y" }} – Pilz-Chronik Bonusseite*
