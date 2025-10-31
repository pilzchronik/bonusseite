---
layout: home
title: "Pilz-Chronik – Bonusseite"
---

# Willkommen auf der Bonusseite zur *Pilz-Chronik*

Diese Seite ergänzt die gedruckten Bände der *Pilz-Chronik* um digitale Inhalte, aktuelle **Ergänzungen**, **Richtigstellungen** und **zusätzliche Quellen**.  
Alle Materialien wurden überprüft und sind nach Themen geordnet.

## 🗂️ Inhalte dieser Bonusseite

- 🔍 **Projektarchiv und Online-Ressourcen**  
  (ergänzende Dokumente, Kirchenbücher, Urkunden, Zeitungen)
- 🗺️ **Karten, Ortsverzeichnisse und historische Datenbanken**
- 🕰️ **Interaktive Zeitleiste**  
  (chronologische Darstellung der Familienereignisse, online besser nutzbar als im Druck)  
  → [Zur Zeitleiste]({{ "/zeitleiste.html" | relative_url }})
- 🧾 **Downloads und Errata**  
  (aktualisierte Fassungen und Korrekturen zu Band 1 und Band 2)

## 📰 Änderungen, Ergänzungen und Neuigkeiten

Die letzten Einträge:

{% for post in site.posts limit:3 %}
- **{{ post.date | date: "%d.%m.%Y" }} – [{{ post.title }}]({{ post.url | relative_url }})**  
  *{{ post.excerpt | strip_html | truncate: 180 }}*
{% endfor %}

[→ Alle Beiträge anzeigen]({{ "/posts.html" | relative_url }})

---

<small>Stand: {{ site.time | date: "%B %Y" }} – Pilz-Chronik-Bonusseite  
(erstellt mit Unterstützung von ChatGPT)</small>
