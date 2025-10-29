---
layout: page
title: "Pilz-Chronik – Bonusseite"
---

# Willkommen – kompakter Status

Diese Bonusseite ist bewusst **schlank** gehalten. Weitere Inhalte folgen schrittweise.

## Neueste Meldungen
{% if site.posts and site.posts.size > 0 %}
{% for post in site.posts limit:3 %}
- {{ post.date | date: "%d.%m.%Y" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
_No ch keine Neuigkeiten vorhanden._
{% endif %}
