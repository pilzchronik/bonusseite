---
layout: page
title: "Pilz-Chronik – Bonusseite"
---

# Pilz-Chronik – Bonusseite

Willkommen auf der Ergänzungsseite zur *Pilz-Chronik*.  
Hier sammelst du Aktualisierungen, neue Funde und kleinere Berichtigungen zu **Band 1 (Die Suche)** und **Band 2 (Ahnentafel und Analysen)**. Die gedruckten Bände bleiben die Hauptquelle – hier kommen nur Nachträge dazu.

## Was hier zu finden ist

- Projektarchiv und Online-Ressourcen  
  (ergänzende Dokumente, Kirchenbücher, Urkunden, Zeitungen)
- Karten, Ortsverzeichnisse und historische Datenbanken
- Downloads und Errata  
  (aktualisierte Fassungen und Korrekturen zu Band 1 und Band 2)

## Ergänzungen und Neuigkeiten

Die letzten Einträge:

{% for post in site.posts limit:3 %}
- **{{ post.date | date: "%d.%m.%Y" }} – [{{ post.title }}]({{ post.url | relative_url }})**  
  {{ post.excerpt | strip_html | truncate: 180 }}
{% endfor %}

[→ Alle Beiträge anzeigen]({{ "/posts.html" | relative_url }})

---

*Stand: {{ site.time | date: "%B %Y" }}*
