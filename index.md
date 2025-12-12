---
layout: page
title: "Pilz-Chronik – Bonusseite"
---

Willkommen auf der **Bonusseite zur Pilz-Chronik**.

Dies ist die zentrale Anlaufstelle für Ergänzungen, neue Funde und Berichtigungen zu den gedruckten Bänden:

- **Band 1 – Die Suche**
- **Band 2 – Ahnentafel und Analysen**

Die gedruckten Bände bleiben die Hauptquelle.
---
## Weiterführende Forschung

Die spezialisierten Webseiten (Slawonien, Kofler, Bechinie, DNA) sowie die interaktiven Stammbaum-Datenbanken finden Sie nun gesammelt unter:

[→ Zu den Forschungsprojekten & Datenbanken](/links/)
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
