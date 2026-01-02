---
layout: page
title: Werkstatt
permalink: /werkstatt/
---

<style>
  .post-list { list-style: none; padding: 0; }
  .post-item {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
  }
  .post-date { color: #888; font-size: 0.9em; font-family: "Helvetica Neue", sans-serif; }
  .post-title {
    display: block;
    font-size: 1.4em;
    color: #2a5d8f;
    font-weight: bold;
    text-decoration: none;
    margin: 5px 0 10px 0;
  }
  .post-title:hover { text-decoration: underline; }
  .post-excerpt { color: #555; line-height: 1.6; }
</style>

<div style="text-align: center; margin-bottom: 40px; color: #555;">
  <p>Laufende Analysen, Hintergrundberichte und neue Erkenntnisse aus der digitalen Werkstatt zur Pilz-Chronik.</p>
</div>

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-item">
      <span class="post-date">{{ post.date | date: "%d.%m.%Y" }}</span>
      <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <div class="post-excerpt">{{ post.excerpt }}</div>
    </li>
  {% endfor %}
</ul>
