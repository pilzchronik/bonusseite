---
layout: page
title: Archiv & Fundstücke
permalink: /archiv/
---

<style>
  .post-list {
    list-style: none;
    padding: 0;
  }
  .post-item {
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eee;
  }
  .post-date {
    color: #888;
    font-size: 0.9em;
    margin-bottom: 5px;
    display: block;
  }
  .post-title {
    font-size: 1.6em;
    margin-top: 0;
    margin-bottom: 10px;
  }
  .post-title a {
    text-decoration: none;
    color: #2a5d8f;
  }
  .post-title a:hover {
    text-decoration: underline;
  }
  .post-excerpt {
    color: #555;
    line-height: 1.6;
  }
  .read-more {
    display: inline-block;
    margin-top: 10px;
    color: #2a5d8f;
    font-weight: bold;
    font-size: 0.9em;
    text-decoration: none;
  }
</style>

<h1>Archiv & Fundstücke</h1>
<p style="color: #666; margin-bottom: 40px;">
  Hintergrundberichte und Dokumente aus der digitalen Werkstatt.
</p>

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-item">
      <span class="post-date">{{ post.date | date: "%d. %B %Y" }}</span>
      <h2 class="post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <div class="post-excerpt">
        {{ post.excerpt }}
      </div>
      <a href="{{ post.url | relative_url }}" class="read-more">Weiterlesen →</a>
    </li>
  {% endfor %}
</ul>

<p style="text-align: center; margin-top: 60px;">
  <a href="/" style="text-decoration: none; color: #555;">← Zurück zur Startseite</a>
</p>
