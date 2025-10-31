---
layout: page
title: "Pilz-Chronik – Bonusseite"
---

Willkommen auf der **Bonusseite zur Pilz-Chronik**.  
Hier erscheinen Ergänzungen, neue Funde und Berichtigungen zu:

- **Band 1 – Die Suche**  
- **Band 2 – Ahnentafel und Analysen**

---

## Inhalt

- Nachträge, Funde und Berichtigungen  
- Dokumente und PDF-Downloads  
- Hinweise auf Online-Quellen und Karten

---

## Neueste Beiträge

{% for post in site.posts limit:3 %}
- **{{ post.date | date: "%d.%m.%Y" }} – [{{ post.title }}]({{ post.url | relative_url }})**  
  {{ post.excerpt | strip_html | truncate: 180 }}
{% endfor %}

[→ Alle Beiträge anzeigen]({{ "/posts/" | relative_url }})

---

## Downloads

Ergänzende Inhalte zur *Pilz-Chronik* stehen gesammelt auf der Seite  
[→ Downloads anzeigen]({{ "/downloads/" | relative_url }})

---

*Stand: {{ site.time | date: "%B %Y" }} – Pilz-Chronik Bonusseite*
