---
layout: page
title: Alle Beiträge
permalink: /archiv/
---

<style>
  /* Container für die Liste */
  .post-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Der einzelne Eintrag */
  .post-item {
    padding: 25px 0;
    border-bottom: 1px solid #eee;
  }

  .post-item:last-child {
    border-bottom: none;
  }

  /* Datum */
  .post-meta {
    font-size: 0.85em;
    color: #888;
    margin-bottom: 5px;
    display: block;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  /* Titel als Link */
  .post-link {
    font-size: 1.4em;
    font-weight: bold;
    color: #2a5d8f; /* Pilz-Blau */
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    transition: color 0.2s;
  }

  .post-link:hover {
    color: #1a3a5a;
    text-decoration: underline;
  }

  /* Auszugstext */
  .post-excerpt {
    color: #555;
    line-height: 1.6;
    margin: 0;
  }

  /* Intro-Text oben */
  .archive-intro {
    background: #f9f9f9;
    padding: 20px;
    border-left: 4px solid #2a5d8f;
    margin-bottom: 40px;
    color: #444;
  }
</style>

<div class="archive-intro">
  <p>Hier finden Sie alle bisher veröffentlichten Ergänzungen, Forschungsberichte und Korrekturen zur Chronik in chronologischer Reihenfolge.</p>
</div>

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-item">
      <span class="post-meta">{{ post.date | date: "%d.%m.%Y" }}</span>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </li>
  {% endfor %}
</ul>