---
layout: default
title: Startseite
---

<link href="{{ site.baseurl }}/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="{{ site.baseurl }}/pagefind/pagefind-ui.js"></script>

<div class="intro-section">
  <h1>Digitale Ergänzungen zur Pilz-Chronik</h1>
  <p>
    Korrekturen, neue Forschungsergebnisse und interaktive Materialien zu beiden Bänden.
  </p>
  <div id="search" style="max-width: 560px; margin: 20px auto 0 auto;"></div>
</div>

<div class="primary-actions">

  <a href="{{ '/werkstatt/' | relative_url }}" class="action-card korrekturen">
    <h3>Werkstatt</h3>
    <p>Korrekturen und neue Funde seit Drucklegung.</p>
  </a>

  <a href="{{ '/orte/' | relative_url }}" class="action-card neues">
    <h3>Karte &amp; Orte</h3>
    <p>Interaktive Familienkarte, Ortsverzeichnis und Ortsnamenlexikon Böhmen.</p>
  </a>

  <a href="{{ '/nachweise/' | relative_url }}" class="action-card ergaenzungen">
    <h3>Nachweise</h3>
    <p>Quellen, Archive, Inhalt &amp; Index, Abbildungsverzeichnis.</p>
  </a>

</div>

<p class="section-divider">Weiteres</p>

<div class="nav-grid">

  <a href="{{ '/zeitleiste/' | relative_url }}" class="nav-card">
    <h3>Zeitleiste</h3>
    <p>Familiengeschichte im Zeitstrahl — von den genetischen Ursprüngen bis zur Gegenwart.</p>
  </a>

  <div class="nav-card">
    <h3>DNA-Analyse</h3>
    <p>Haplogruppen und was die Genetik über die Familienherkunft sagt.</p>
    <p style="margin-top: 10px; margin-bottom: 0;">
      <a href="{{ '/dna-analyse/' | relative_url }}" style="display: block; margin-bottom: 6px; font-size: 0.88em;">→ Haplogruppen &amp; Migrationsrouten</a>
      <a href="https://pilzchronik.github.io/dna-matches/" style="display: block; font-size: 0.88em;">→ DNA-Matches Pilz–Zeisl</a>
      <span style="display: block; font-size: 0.78em; color: #999; margin-top: 3px;">Stärkster Treffer bei FTDNA — autosomale Verwandtschaftsforschung</span>
    </p>
  </div>

  <a href="{{ '/stammbaum/' | relative_url }}" class="nav-card">
    <h3>Personen &amp; Familien</h3>
    <p>Stammbäume, Ahnentafeln und Detailsuche im MacFamilyTree-Archiv.</p>
  </a>

</div>

<script>
  window.addEventListener('DOMContentLoaded', function() {
    new PagefindUI({
      element: "#search",
      showSubResults: true,
      excerptLength: 30,
      translations: {
        placeholder: "Person, Ort oder Thema suchen …",
        zero_results: "Nichts gefunden für „[SEARCH_TERM]"",
        many_results: "[COUNT] Treffer",
        one_result: "1 Treffer"
      }
    });
  });
</script>
