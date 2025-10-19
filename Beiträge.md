---
layout: default
title: "Alle Beiträge"
permalink: /beitraege/
---

# 🕮 Änderungen, Ergänzungen und sonstige Neuigkeiten

Hier finden Sie sämtliche Meldungen, Ergänzungen und Richtigstellungen  
zur *Pilz-Chronik* in chronologischer Reihenfolge.  
Die neuesten Beiträge stehen oben.

---

<ul style="list-style-type:none; padding-left:0;">
{% for post in site.posts %}
  <li style="margin-bottom:1em; padding-left:0.5em;">
    📘 <strong>{{ post.date | date: "%d.%m.%Y" }} – 
    <a href="{{ post.url | relative_url }}" style="color:#3b5b92;">{{ post.title }}</a></strong><br>
    <span style="color:#333;">{{ post.excerpt | strip_html | truncate: 250 }}</span>
  </li>
{% endfor %}
</ul>

---

<small><em>Stand: {{ site.time | date: "%B %Y" }} – Pilz-Chronik-Bonusseite</em></small>
