---
layout: page
title: "Pilz-Chronik – Bonusseite"
---

Willkommen auf der Ergänzungsseite zur **Pilz-Chronik**.

Hier veröffentlichst du laufend **Nachträge, Berichtigungen, neue Funde und Downloads** zu
- **Band 1 – Die Suche** und
- **Band 2 – Ahnentafel und Analysen**.

Die gedruckten Bände bleiben die Hauptquelle.  
Diese Seite dient nur dazu, den Stand aktuell zu halten.

---

## Was hier zu finden ist

- Ergänzungen zu Personen, Orten und Linien aus den Bänden
- Berichtigungen (z. B. Datumsangaben, Schreibweisen, Ortszuordnungen)
- zusätzliche Dokumente (Scans, PDF, Kirchenbuchauszüge)
- Hinweise auf Online-Quellen, die im Buch nicht mehr untergebracht waren

---

## Neueste Beiträge

Die letzten Einträge:

{% for post in site.posts limit:3 %}
- **{{ post.date | date: "%d.%m.%Y" }} – [{{ post.title }}]({{ post.url | relative_url }})**  
  {{ post.excerpt | strip_html | truncate: 180 }}
{% endfor %}

[→ Alle Beiträge anzeigen]({{ "/posts/" | relative_url }})

---

## Downloads

Die Downloads (PDF, Scans, Errata) findest du über den Menüpunkt **„Downloads“**  
oder direkt im Ordner `assets/pdf/`.

---

*Stand: {{ site.time | date: "%B %Y" }} – Pilz-Chronik-Bonusseite*
