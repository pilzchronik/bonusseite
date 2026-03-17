// Ortsnamen-Übersetzer (DE ↔ CZ)
// Für pilzchronik.github.io
// Stand: Februar 2026

(function() {
  'use strict';

  var ortsnamenData = [];
  var searchInput, resultsBody, resultCount, noResults, initialHint, resultsContainer, clearBtn;

  // Diakritika-Normalisierung für Fuzzy-Suche
  // "Zatec" findet "Žatec", "Usti" findet "Ústí" etc.
  function removeDiacritics(str) {
    var map = {
      'á':'a','à':'a','ä':'a','â':'a',
      'č':'c','ć':'c',
      'ď':'d',
      'é':'e','è':'e','ě':'e','ë':'e','ê':'e',
      'í':'i','ì':'i','î':'i','ï':'i',
      'ň':'n','ñ':'n',
      'ó':'o','ò':'o','ö':'o','ô':'o',
      'ř':'r',
      'š':'s','ś':'s',
      'ť':'t',
      'ú':'u','ù':'u','ü':'u','û':'u','ů':'u',
      'ý':'y','ÿ':'y',
      'ž':'z','ź':'z',
      'ß':'ss',
      'Á':'a','À':'a','Ä':'a','Â':'a',
      'Č':'c','Ć':'c',
      'Ď':'d',
      'É':'e','È':'e','Ě':'e','Ë':'e','Ê':'e',
      'Í':'i','Ì':'i','Î':'i','Ï':'i',
      'Ň':'n','Ñ':'n',
      'Ó':'o','Ò':'o','Ö':'o','Ô':'o',
      'Ř':'r',
      'Š':'s','Ś':'s',
      'Ť':'t',
      'Ú':'u','Ù':'u','Ü':'u','Û':'u','Ů':'u',
      'Ý':'y',
      'Ž':'z','Ź':'z'
    };
    return str.replace(/[^\x00-\x7F]/g, function(ch) {
      return map[ch] || ch;
    });
  }

  function normalize(str) {
    return removeDiacritics(str).toLowerCase().trim();
  }

  function matchScore(entry, term) {
    var normTerm = normalize(term);
    var normDe = normalize(entry.de);
    var normCz = normalize(entry.cz);

    // Exakter Treffer (höchste Priorität)
    if (normDe === normTerm || normCz === normTerm) return 100;

    // Beginnt mit Suchbegriff
    if (normDe.indexOf(normTerm) === 0 || normCz.indexOf(normTerm) === 0) return 80;

    // Enthält Suchbegriff
    if (normDe.indexOf(normTerm) >= 0 || normCz.indexOf(normTerm) >= 0) return 60;

    // Kein Treffer
    return 0;
  }

  function renderResults(term) {
    if (!resultsBody) return;

    resultsBody.innerHTML = '';

    if (!term || term.trim().length < 2) {
      resultCount.textContent = ortsnamenData.length;
      noResults.style.display = 'none';
      if (initialHint) initialHint.style.display = 'block';
      if (resultsContainer) resultsContainer.style.display = 'none';
      if (clearBtn) clearBtn.style.display = 'none';
      return;
    }

    if (initialHint) initialHint.style.display = 'none';
    if (resultsContainer) resultsContainer.style.display = 'block';
    if (clearBtn) clearBtn.style.display = 'block';

    // Suche + Scoring
    var matches = [];
    for (var i = 0; i < ortsnamenData.length; i++) {
      var score = matchScore(ortsnamenData[i], term);
      if (score > 0) {
        matches.push({ entry: ortsnamenData[i], score: score });
      }
    }

    // Nach Score sortieren, dann alphabetisch
    matches.sort(function(a, b) {
      if (b.score !== a.score) return b.score - a.score;
      // Chronik-Orte bevorzugen
      var aChronik = a.entry.chronik ? 1 : 0;
      var bChronik = b.entry.chronik ? 1 : 0;
      if (bChronik !== aChronik) return bChronik - aChronik;
      return a.entry.de.localeCompare(b.entry.de);
    });

    // Max 50 anzeigen
    var shown = Math.min(matches.length, 50);

    for (var j = 0; j < shown; j++) {
      var entry = matches[j].entry;
      var tr = document.createElement('tr');
      if (entry.chronik) {
        tr.className = 'ortsnamen-chronik';
      }

      var tdDe = document.createElement('td');
      tdDe.innerHTML = highlightMatch(entry.de, term);
      if (entry.chronik) {
        tdDe.innerHTML += ' <span class="chronik-badge" title="In der Pilz-Chronik dokumentiert">📖</span>';
      }

      var tdCz = document.createElement('td');
      tdCz.innerHTML = highlightMatch(entry.cz, term);

      // Karten-Button
      var mapBtn = document.createElement('button');
      mapBtn.className = 'ortsnamen-map-btn';
      mapBtn.title = 'Auf der Karte anzeigen';
      mapBtn.textContent = '🗺️';
      mapBtn.setAttribute('data-de', entry.de);
      mapBtn.setAttribute('data-cz', entry.cz);
      mapBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var de = this.getAttribute('data-de');
        var cz = this.getAttribute('data-cz');
        if (typeof window.showOrtOnMap === 'function') {
          window.showOrtOnMap(de, cz);
        }
      });
      tdCz.appendChild(mapBtn);

      tr.appendChild(tdDe);
      tr.appendChild(tdCz);
      resultsBody.appendChild(tr);
    }

    resultCount.textContent = matches.length;
    if (matches.length > 50) {
      resultCount.textContent = matches.length + ' (erste 50 angezeigt)';
    }
    noResults.style.display = matches.length === 0 ? 'block' : 'none';
  }

  function highlightMatch(text, term) {
    if (!term || term.trim().length < 2) return escapeHtml(text);

    var normText = normalize(text);
    var normTerm = normalize(term);
    var idx = normText.indexOf(normTerm);

    if (idx === -1) return escapeHtml(text);

    // Finde die entsprechende Stelle im Original-Text
    var before = text.substring(0, idx);
    var match = text.substring(idx, idx + term.length);
    var after = text.substring(idx + term.length);

    return escapeHtml(before) + '<mark>' + escapeHtml(match) + '</mark>' + escapeHtml(after);
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // Initialisierung
  function init(data) {
    ortsnamenData = data;

    searchInput = document.getElementById('ortsnamen-suche');
    resultsBody = document.getElementById('ortsnamen-tbody');
    resultCount = document.getElementById('ortsnamen-count');
    noResults = document.getElementById('ortsnamen-no-results');
    initialHint = document.getElementById('ortsnamen-hint');
    resultsContainer = document.getElementById('ortsnamen-ergebnisse');
    clearBtn = document.getElementById('ortsnamen-clear');

    if (!searchInput || !resultsBody) {
      console.warn('Ortsnamen-Tool: DOM-Elemente nicht gefunden');
      return;
    }

    // Anzahl setzen
    if (resultCount) {
      resultCount.textContent = ortsnamenData.length;
    }

    // Event Listener: Suche
    var debounceTimer;
    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      var val = this.value;
      debounceTimer = setTimeout(function() {
        renderResults(val);
      }, 150);
    });

    // Klickbare Beispiel-Suchen
    var beispiele = document.querySelectorAll('.ortsnamen-beispiel');
    for (var i = 0; i < beispiele.length; i++) {
      beispiele[i].addEventListener('click', function() {
        var term = this.getAttribute('data-term');
        searchInput.value = term;
        searchInput.focus();
        renderResults(term);
      });
    }

    // Löschen-Button
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.focus();
        renderResults('');
      });
    }

    // URL-Hash: Direkt zur Suche springen
    if (window.location.hash === '#ortsnamen' && searchInput) {
      setTimeout(function() {
        searchInput.focus();
      }, 500);
    }
  }

  // Global verfügbar machen
  window.initOrtsnamenTool = init;
})();
