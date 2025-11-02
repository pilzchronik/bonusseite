---
layout: page
title: "Verzeichnis der Beiträge"
permalink: /verzeichnis/
---

# 📚 Verzeichnis der Bonus-Beiträge

Hier sind alle Einträge der Bonusseite **automatisch nach Themen (Kategorien)** geordnet.  
So findest du auch ältere, längere oder sehr spezielle Notizen wieder.

> **Hinweis:**  
> Viele Beiträge tragen den Vermerk „Vorläufiger Arbeitsstand“, weil sie mit KI entworfen wurden und erst nach Archiv- oder Quellenprüfung endgültig übernommen werden.

---

{% assign sorted = site.categories | sort %}
{% for category in sorted %}
## {{ category[0] | capitalize }}

{% for post in category[1] %}
- **[{{ post.title }}]({{ post.url | relative_url }})**  
  <small>{{ post.date | date: "%d.%m.%Y" }} – {{ post.excerpt | default: post.title | strip_html | truncate: 160 }}</small>
{% endfor %}

{% endfor %}
