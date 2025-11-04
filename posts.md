---
layout: page
title: "Alle Beiträge"
permalink: /posts/
---

# Alle Beiträge

Hier sind **alle bisher erschienenen Beiträge** der Bonusseite aufgelistet – chronologisch rückwärts.
So finden Sie auch ältere Berichtigungen wieder.

{% for post in site.posts %}
- **{{ post.date | date: "%d.%m.%Y" }} – [{{ post.title }}]({{ post.url | relative_url }})**
 {{ post.excerpt | default: post.content | strip_html | truncate: 200 }}
{% endfor %}

---

[← Zurück zur Startseite]({{ "/" | relative_url }})
