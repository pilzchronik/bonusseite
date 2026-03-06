---
layout: page
title: Interne Arbeitsseiten
permalink: /intern/
---

*Diese Seiten sind öffentlich erreichbar, aber nicht verlinkt. Sie dienen als persönliche Gedankenstütze und Arbeitsnotizen.*

---

{% assign intern_pages = site.pages | where_exp: "p", "p.url contains '/intern/'" | sort: "title" %}
{% for p in intern_pages %}
{% unless p.url == "/bonusseite/intern/" %}
- [{{ p.title }}]({{ p.url | relative_url }}){% if p.stand_vom %} — Stand: {{ p.stand_vom }}{% endif %}{% if p.status %} *({{ p.status }})*{% endif %}
{% endunless %}
{% endfor %}
