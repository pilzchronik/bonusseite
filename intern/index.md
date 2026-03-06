---
layout: page
title: Interne Arbeitsseiten
permalink: /intern/
---

*Diese Seiten sind öffentlich erreichbar, aber nicht verlinkt. Sie dienen als persönliche Gedankenstütze und Arbeitsnotizen.*

---

{% assign intern_seiten = site.intern | sort: "title" %}
{% for seite in intern_seiten %}
- [{{ seite.title }}]({{ seite.url | relative_url }})
{% endfor %}
