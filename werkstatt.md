---
layout: page
title: Aktuelles & Themen
permalink: /werkstatt/
---

<h1>TEST: Werkstatt & Analysen</h1>

<p>Wenn du das siehst, funktioniert die Seite grundsätzlich.</p>

<hr>

<h2>TEST 1: Gibt es Posts?</h2>
<p>Anzahl Posts: {{ site.posts.size }}</p>

<hr>

<h2>TEST 2: Gibt es Kategorien?</h2>
<p>Anzahl Kategorien: {{ site.categories.size }}</p>

{% assign test_cats = site.categories | sort %}
{% for cat in test_cats %}
  <p>Kategorie: <strong>{{ cat[0] }}</strong> ({{ cat[1].size }} Beiträge)</p>
{% endfor %}

<hr>

<h2>TEST 3: Alle Posts auflisten</h2>
<ul>
{% for post in site.posts limit:5 %}
  <li>{{ post.date | date: "%d.%m.%Y" }} - {{ post.title }}</li>
{% endfor %}
</ul>
