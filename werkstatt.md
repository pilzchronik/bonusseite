---
layout: page
title: Aktuelles
permalink: /werkstatt/
---

<h1 style="color: #111; margin-bottom: 10px;">Aktuelles seit Drucklegung</h1>

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

  /* Filter-Leiste */
  .filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
  }

  .filter-label {
    font-size: 0.85em;
    color: #999;
    margin-right: 4px;
  }

  .tag-btn {
    padding: 5px 14px;
    border: 1px solid #ddd;
    border-radius: 3px;
    background: white;
    color: #666;
    font-size: 0.85em;
    cursor: pointer;
    transition: all 0.15s;
  }

  .tag-btn:hover {
    border-color: #999;
    color: #333;
  }

  .tag-btn.active {
    background: #333;
    color: white;
    border-color: #333;
  }

  /* Suchfeld */
  .search-box {
    padding: 6px 12px;
    font-size: 0.85em;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 200px;
    margin-left: auto;
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
  .post-row {
    display: flex;
    align-items: baseline;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.1s;
  }

  .post-row:last-child {
    border-bottom: none;
  }

  .post-row:hover {
    background-color: #fafafa;
    margin: 0 -8px;
    padding: 8px 8px;
    border-radius: 3px;
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

  .post-tag {
    font-size: 0.7em;
    color: #aaa;
    margin-left: 10px;
    flex-shrink: 0;
  }

  .post-row.hidden {
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

  /* Monatsheader ausblenden wenn alle Posts darin hidden */
  .month-group.hidden {
    display: none;
  }

  @media (max-width: 600px) {
    .filter-bar { flex-direction: column; align-items: stretch; }
    .search-box { width: 100%; margin-left: 0; margin-top: 8px; }
    .post-date { width: 60px; font-size: 0.8em; }
  }
</style>

<div class="intro-text">
  Neue Funde, Ergänzungen und Korrekturen zur gedruckten Pilz-Chronik (Band&nbsp;1&nbsp;&&nbsp;2).
</div>

<!-- Angepinnter Errata-Post -->
{% for post in site.posts %}
  {% if post.pinned %}
  <div class="pinned-post" data-tag="Korrekturen" data-searchable="{{ post.title | downcase }}">
    <span class="pin-label">Angepinnt</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </div>
  {% endif %}
{% endfor %}

<!-- Filter + Suche -->
<div class="filter-bar">
  <span class="filter-label">Filtern:</span>
  <button class="tag-btn active" data-tag="alle">Alle</button>
  <button class="tag-btn" data-tag="Neue Funde">Neue Funde</button>
  <button class="tag-btn" data-tag="Ergänzungen">Ergänzungen</button>
  <button class="tag-btn" data-tag="Hintergrund">Hintergrund</button>
  <input type="text" id="searchBox" class="search-box" placeholder="Suchen …" autocomplete="off">
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
  {% assign post_tag = post.tags | first | default: "" %}
  <div class="post-row" data-tag="{{ post_tag }}" data-searchable="{{ post.title | downcase }}">
    <span class="post-date">{{ post.date | date: "%d.%m." }}</span>
    <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {% if post_tag != "" %}<span class="post-tag">{{ post_tag }}</span>{% endif %}
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
  var rows = document.querySelectorAll('.post-row');
  var pinnedPost = document.querySelector('.pinned-post');
  var monthGroups = document.querySelectorAll('.month-group');
  var noResults = document.getElementById('noResults');
  var resultInfo = document.getElementById('resultInfo');
  var activeTag = 'alle';

  // Tag-Filter
  document.querySelector('.filter-bar').addEventListener('click', function(e) {
    if (!e.target.classList.contains('tag-btn')) return;
    var buttons = document.querySelectorAll('.tag-btn');
    for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove('active');
    e.target.classList.add('active');
    activeTag = e.target.getAttribute('data-tag');
    filterPosts();
  });

  searchBox.addEventListener('input', filterPosts);

  function filterPosts() {
    var term = searchBox.value.toLowerCase().trim();
    var visible = 0;

    // Pinned post
    if (pinnedPost) {
      var pinnedSearchable = pinnedPost.getAttribute('data-searchable');
      var pinnedTag = pinnedPost.getAttribute('data-tag');
      var showPinned = (activeTag === 'alle' || pinnedTag === activeTag) &&
                       (term === '' || pinnedSearchable.indexOf(term) > -1);
      pinnedPost.style.display = showPinned ? '' : 'none';
    }

    // Regular posts
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var tag = row.getAttribute('data-tag');
      var text = row.getAttribute('data-searchable');
      var matchTag = (activeTag === 'alle' || tag === activeTag);
      var matchSearch = (term === '' || text.indexOf(term) > -1);

      if (matchTag && matchSearch) {
        row.classList.remove('hidden');
        visible++;
      } else {
        row.classList.add('hidden');
      }
    }

    // Leere Monatsgruppen ausblenden
    for (var j = 0; j < monthGroups.length; j++) {
      var group = monthGroups[j];
      var visibleRows = group.querySelectorAll('.post-row:not(.hidden)');
      group.classList.toggle('hidden', visibleRows.length === 0);
    }

    noResults.style.display = visible === 0 ? 'block' : 'none';
    resultInfo.textContent = (term !== '' || activeTag !== 'alle') 
      ? visible + ' von ' + rows.length + ' Beiträgen' 
      : '';
  }
</script>
