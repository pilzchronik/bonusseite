---
layout: cover
title: Startseite
---

<link href="{{ site.baseurl }}/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="{{ site.baseurl }}/pagefind/pagefind-ui.js"></script>

<section class="bwm-hero" aria-label="Hero">
  <div class="bwm-hero-left">
    <div>
      <p class="bwm-hero-eyebrow">Familienchronik &middot; zwei B&auml;nde</p>
      <h1 class="bwm-hero-title">Pilz-<br>Chronik</h1>
    </div>
    <div class="bwm-hero-mid">
      <hr class="bwm-hero-line">
      <p class="bwm-hero-author">Wolfgang Pilz</p>
    </div>
  </div>

  <div class="bwm-hero-right">
    <p class="bwm-hero-meta">Digitale Erg&auml;nzungen</p>
    <p class="bwm-hero-lead">Korrekturen, neue Forschungsergebnisse und Materialien zu beiden B&auml;nden.</p>
    <div class="bwm-chat-hint">
      <p class="bwm-chat-eyebrow">Chat-Assistent &mdash; eine Frage frei formulieren</p>
      <p class="bwm-chat-text">Kennt die <em>gesamte</em> Pilz-Familienforschung &mdash; auch das, was nicht auf dieser Webseite steht (Stand M&auml;rz 2026). Antworten in S&auml;tzen, sofort.</p>
      <p class="bwm-chat-cue">Knopf rechts unten &searr;</p>
    </div>

    <p class="bwm-hero-meta" style="margin-top: 4px;">Stichwort-Suche &mdash; auf dieser Webseite st&ouml;bern</p>
    <p class="bwm-hero-search-text">Findet Personen, Orte und Themen in den Beitr&auml;gen, der Werkstatt und den Nachweisen.</p>
    <div id="search" class="bwm-search" style="margin-top: 6px;"></div>
  </div>
</section>

<section class="bwm-primary" aria-label="Hauptbereiche">
  <p class="bwm-primary-eyebrow">Hauptbereiche</p>
  <div class="bwm-primary-list">
    <a class="bwm-primary-item" href="{{ '/werkstatt/' | relative_url }}">
      <span class="bwm-primary-item-num">01</span>
      <h2 class="bwm-primary-item-title">Werkstatt</h2>
      <p class="bwm-primary-item-body">Korrekturen und neue Funde seit Drucklegung &mdash; Errata, Quellenfunde, offene Fragen.</p>
      <span class="bwm-primary-item-cta">Eintr&auml;ge ansehen &rarr;</span>
    </a>

    <a class="bwm-primary-item" href="{{ '/orte/' | relative_url }}">
      <span class="bwm-primary-item-num">02</span>
      <h2 class="bwm-primary-item-title">Karte &amp; Orte</h2>
      <p class="bwm-primary-item-body">Interaktive Familienkarte, Ortsverzeichnis und Ortsnamenlexikon B&ouml;hmen.</p>
      <span class="bwm-primary-item-cta">Karte &ouml;ffnen &rarr;</span>
    </a>

    <a class="bwm-primary-item" href="{{ '/nachweise/' | relative_url }}">
      <span class="bwm-primary-item-num">03</span>
      <h2 class="bwm-primary-item-title">Nachweise</h2>
      <p class="bwm-primary-item-body">Quellen, Archive, Inhalt &amp; Index, Abbildungsverzeichnis.</p>
      <span class="bwm-primary-item-cta">Nachweise durchsuchen &rarr;</span>
    </a>
  </div>
</section>

<section class="bwm-secondary" aria-label="Weitere Materialien">
  <p class="bwm-secondary-eyebrow">Weitere Materialien</p>
  <div class="bwm-secondary-list">

    <a class="bwm-secondary-item" href="{{ '/zeitleiste/' | relative_url }}">
      <span class="bwm-secondary-item-title">Zeitleiste</span>
      <span class="bwm-secondary-item-meta">Zeitleiste</span>
      <span class="bwm-secondary-item-body">Chronologische &Uuml;bersicht der Familienereignisse &uuml;ber beide B&auml;nde.</span>
      <span class="bwm-secondary-item-arrow">&rarr;</span>
    </a>

    <a class="bwm-secondary-item" href="{{ '/dna-analyse/' | relative_url }}">
      <span class="bwm-secondary-item-title">DNA-Analyse</span>
      <span class="bwm-secondary-item-meta">DNA-Analyse</span>
      <span class="bwm-secondary-item-body">Haplogruppen und was die Genetik &uuml;ber die Familienherkunft sagt.</span>
      <span class="bwm-secondary-item-arrow">&rarr;</span>
    </a>

    <a class="bwm-secondary-item" href="{{ '/stammbaum/' | relative_url }}">
      <span class="bwm-secondary-item-title">Personen &amp; Familien</span>
      <span class="bwm-secondary-item-meta">Personen &amp; Familien</span>
      <span class="bwm-secondary-item-body">Stammb&auml;ume, Ahnentafeln und Detailsuche im MacFamilyTree-Archiv.</span>
      <span class="bwm-secondary-item-arrow">&rarr;</span>
    </a>

  </div>
</section>

<script>
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof PagefindUI !== 'undefined') {
      new PagefindUI({
        element: "#search",
        showSubResults: true,
        excerptLength: 30,
        translations: {
          placeholder: "Person, Ort oder Thema suchen …",
          zero_results: "Nichts gefunden für „[SEARCH_TERM]“",
          many_results: "[COUNT] Treffer",
          one_result: "1 Treffer"
        }
      });
    }
  });
</script>
