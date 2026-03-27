---
layout: page
title: Werkstatt
permalink: /werkstatt/
---

<h1 style="color: #111; margin-bottom: 10px;">Werkstatt</h1>

<style>
  .post-header { display: none !important; }

  .page-content {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    color: #333;
    line-height: 1.5;
  }

  .intro-text {
    max-width: 800px;
    margin-bottom: 30px;
    color: #666;
    font-size: 0.95em;
  }

  /* Suchleiste */
  .search-bar {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
  }

  .search-box {
    padding: 8px 14px;
    font-size: 0.9em;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    max-width: 360px;
    box-sizing: border-box;
  }

  .search-box:focus {
    outline: none;
    border-color: #999;
  }

  /* Angepinnter Beitrag */
  .pinned-post {
    display: flex;
    align-items: baseline;
    gap: 12px;
    padding: 14px 18px;
    margin-bottom: 30px;
    background: #fafafa;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
  }

  .pinned-post .pin-label {
    font-size: 0.75em;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1px;
    flex-shrink: 0;
  }

  .pinned-post a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95em;
  }

  .pinned-post a:hover {
    text-decoration: underline;
  }

  /* Monatsgruppen */
  .month-group {
    margin-bottom: 10px;
  }

  .month-header {
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #999;
    margin-top: 30px;
    margin-bottom: 12px;
    font-weight: 600;
  }

  .month-header:first-of-type {
    margin-top: 0;
  }

  /* Post-Einträge */
  .post-entry {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.1s;
  }

  .post-entry:last-child {
    border-bottom: none;
  }

  .post-entry:hover {
    background-color: #fafafa;
    margin: 0 -8px;
    padding: 10px 8px;
    border-radius: 3px;
  }

  .post-title-row {
    display: flex;
    align-items: baseline;
  }

  .post-date {
    font-size: 0.85em;
    color: #999;
    width: 80px;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  .post-link {
    color: #333;
    text-decoration: none;
    font-size: 0.95em;
    flex: 1;
  }

  .post-link:hover {
    text-decoration: underline;
  }

  .post-excerpt {
    margin-left: 80px;
    font-size: 0.82em;
    color: #999;
    margin-top: 2px;
    line-height: 1.4;
  }

  .post-entry.hidden {
    display: none;
  }

  .no-results {
    text-align: center;
    padding: 40px 20px;
    color: #999;
    font-size: 0.9em;
  }

  .result-info {
    font-size: 0.8em;
    color: #bbb;
    text-align: right;
    margin-top: 20px;
  }

  .month-group.hidden {
    display: none;
  }

  @media (max-width: 600px) {
    .search-box { width: 100%; }
    .post-date { width: 60px; font-size: 0.8em; }
    .post-excerpt { margin-left: 60px; }
  }
</style>

<div class="intro-text">
  Alle Beiträge seit Drucklegung — chronologisch, mit Suchfunktion.<br>
  <span style="font-size:0.9em;">← <a href="{{ '/updates/' | relative_url }}">Zurück zur Übersicht (Aktuelles)</a></span>
</div>

<!-- Angepinnter Errata-Post -->
{% for post in site.posts %}
  {% if post.pinned %}
  <div class="pinned-post" data-searchable="{{ post.title | downcase }}">
    <span class="pin-label">Angepinnt</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </div>
  {% endif %}
{% endfor %}

<!-- Suche -->
<div class="search-bar">
  <input type="text" id="searchBox" class="search-box" placeholder="Beitrag suchen …" autocomplete="off">
</div>

<!-- Beitragsliste gruppiert nach Monat -->
<div id="postList">
{% assign posts_by_date = site.posts | sort: 'date' | reverse %}
{% assign current_month = "" %}
{% for post in posts_by_date %}
  {% unless post.pinned %}
  {% assign post_month = post.date | date: "%Y-%m" %}
  {% if post_month != current_month %}
    {% unless current_month == "" %}</div>{% endunless %}
    {% assign current_month = post_month %}
<div class="month-group" data-month="{{ post_month }}">
  <div class="month-header">{% include datum.html date=post.date format="monat" %}</div>
  {% endif %}
  <div class="post-entry" data-searchable="{{ post.title | downcase | xml_escape }} {{ post.excerpt | strip_html | strip_newlines | downcase | xml_escape }}">
    <div class="post-title-row">
      <span class="post-date">{{ post.date | date: "%d.%m." }}</span>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </div>
    {% if post.excerpt and post.excerpt != "" %}
    <div class="post-excerpt">{{ post.excerpt | strip_html | strip_newlines | truncate: 150 }}</div>
    {% endif %}
  </div>
  {% endunless %}
{% endfor %}
</div>

<div class="no-results" id="noResults" style="display: none;">
  Keine Beiträge gefunden.
</div>

<div class="result-info" id="resultInfo"></div>

<script>
  var searchBox = document.getElementById('searchBox');
  var entries = document.querySelectorAll('.post-entry');
  var pinnedPost = document.querySelector('.pinned-post');
  var monthGroups = document.querySelectorAll('.month-group');
  var noResults = document.getElementById('noResults');
  var resultInfo = document.getElementById('resultInfo');

  searchBox.addEventListener('input', filterPosts);

  function filterPosts() {
    var term = searchBox.value.toLowerCase().trim();
    var visible = 0;

    // Pinned post
    if (pinnedPost) {
      var pinnedSearchable = pinnedPost.getAttribute('data-searchable');
      var showPinned = (term === '' || pinnedSearchable.indexOf(term) > -1);
      pinnedPost.style.display = showPinned ? '' : 'none';
    }

    // Regular posts
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var text = entry.getAttribute('data-searchable');
      if (term === '' || text.indexOf(term) > -1) {
        entry.classList.remove('hidden');
        visible++;
      } else {
        entry.classList.add('hidden');
      }
    }

    // Leere Monatsgruppen ausblenden
    for (var j = 0; j < monthGroups.length; j++) {
      var group = monthGroups[j];
      var visibleEntries = group.querySelectorAll('.post-entry:not(.hidden)');
      group.classList.toggle('hidden', visibleEntries.length === 0);
    }

    noResults.style.display = visible === 0 ? 'block' : 'none';
    resultInfo.textContent = term !== ''
      ? visible + ' von ' + entries.length + ' Beiträgen'
      : '';
  }
</script>
