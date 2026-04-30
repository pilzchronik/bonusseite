---
layout: page
title: Werkstatt
permalink: /werkstatt/
---

<div class="intro-text">
  Korrekturen und neue Forschungsergebnisse seit Drucklegung — oben als Übersicht, unten alle Beiträge chronologisch.
</div>

<div class="update-container">

  <div class="col-corrections">
    <h2 class="sec-title" style="color: #8f2a2a;">Berichtigungen</h2>
    <ul class="update-list">
      {% assign corrections = site.tags.Korrekturen %}
      {% if corrections.size > 0 %}
        {% for post in corrections limit:10 %}
        <li class="update-item">
          {% if post.buch_band %}
            <span class="meta-tag tag-vol">Band {{ post.buch_band }} / S. {{ post.buch_seite }}</span>
          {% endif %}
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% if post.stand_vom %}
            <span class="tag-date">Stand: {{ post.stand_vom }}</span>
          {% else %}
            <span class="tag-date">{{ post.date | date: "%d.%m.%Y" }}</span>
          {% endif %}
        </li>
        {% endfor %}
      {% else %}
        <li class="update-item" style="color:#666; font-style:italic;">Keine offenen Berichtigungen bekannt.</li>
      {% endif %}
    </ul>
  </div>

  <div class="col-additions">
    <h2 class="sec-title" style="color: #2a5d8f;">Neue Funde</h2>
    <ul class="update-list">
      {% assign additions = site.tags["Neue Funde"] %}
      {% if additions.size > 0 %}
        {% for post in additions limit:10 %}
        <li class="update-item">
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span class="tag-date">{{ post.date | date: "%d.%m.%Y" }}</span>
          <p style="font-size: 0.9rem; margin: 0.4rem 0 0 0; color: #555;">
            {{ post.excerpt | strip_html | truncatewords: 15 }}
          </p>
        </li>
        {% endfor %}
      {% else %}
        <li class="update-item" style="color:#666; font-style:italic;">Derzeit keine neuen Ergänzungen.</li>
      {% endif %}
    </ul>
  </div>

</div>

---

## Alle Beiträge

<!-- Angepinnter Errata-Post -->
{% for post in site.posts %}
  {% if post.pinned %}
  <div class="pinned-post" data-searchable="{{ post.title | downcase }}">
    <span class="pin-label">Angepinnt</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </div>
  {% endif %}
{% endfor %}

<div class="search-bar">
  <input type="text" id="searchBox" class="search-box" placeholder="Beitrag suchen …" autocomplete="off">
</div>

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

<div class="no-results" id="noResults" style="display: none;">Keine Beiträge gefunden.</div>
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
    if (pinnedPost) {
      var ps = pinnedPost.getAttribute('data-searchable');
      pinnedPost.style.display = (term === '' || ps.indexOf(term) > -1) ? '' : 'none';
    }
    for (var i = 0; i < entries.length; i++) {
      var text = entries[i].getAttribute('data-searchable');
      if (term === '' || text.indexOf(term) > -1) { entries[i].classList.remove('hidden'); visible++; }
      else { entries[i].classList.add('hidden'); }
    }
    for (var j = 0; j < monthGroups.length; j++) {
      var vis = monthGroups[j].querySelectorAll('.post-entry:not(.hidden)');
      monthGroups[j].classList.toggle('hidden', vis.length === 0);
    }
    noResults.style.display = visible === 0 ? 'block' : 'none';
    resultInfo.textContent = term !== '' ? visible + ' von ' + entries.length + ' Beiträgen' : '';
  }
</script>
