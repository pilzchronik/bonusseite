---
layout: default
title: "Pilz-Chronik – Bonusseite"
---

# Willkommen auf der Bonusseite zur Pilz-Chronik

Diese Seite ergänzt die gedruckten Bände der *Pilz-Chronik* um digitale Inhalte,  
aktuelle Ergänzungen, Richtigstellungen und zusätzliche Quellen.  
Alle Materialien wurden geprüft und sind nach Themen geordnet.  

---

## 🔗 Inhalte dieser Bonusseite
- Projektarchiv und Online-Ressourcen  
- Digitale Quellen und Nachweise (Kirchenbücher, Urkunden, Zeitungen)  
- Karten, Ortsverzeichnisse und historische Datenbanken  
- Downloads und Errata (aktualisierte Fassungen der Chronik)

---

<h2 style="color:#3b5b92; border-bottom:2px solid #b86c3a; padding-bottom:4px;">
🕮 Änderungen, Ergänzungen und sonstige Neuigkeiten
</h2>

{% for post in site.posts limit:3 %}
<div style="margin-bottom:1.5em; padding-left:0.5em;">
📘 <strong>{{ post.date | date: "%d.%m.%Y" }} – 
<a href="{{ post.url | relative_url }}" style="color:#3b5b92;">{{ post.title }}</a></strong><br>
<span style="color:#333;">{{ post.excerpt | strip_html | truncate: 200 }}</span>
</div>
{% endfor %}

<hr style="border: 0.5px solid #b86c3a; margin: 1em 0;">

<p><a href="{{ site.baseurl }}/posts/" style="color:#3b5b92; font-weight:bold;">
→ Alle Beiträge anzeigen</a></p>

---

<small><em>Stand: Oktober 2025 – Pilz-Chronik-Bonusseite (erstellt mit Unterstützung von ChatGPT)</em></small>
