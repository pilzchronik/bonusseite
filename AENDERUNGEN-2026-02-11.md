# Änderungen vom 11. Februar 2026

Diese Datei dokumentiert die tatsächlich durchgeführten Verbesserungen.
Sie können diese Datei nach dem Testen löschen.

---

## Durchgeführte Änderungen

### 1. `_config.yml` — URL und Sprache gesetzt
- `url` von `""` auf `"https://pilzchronik.github.io"` gesetzt
- `lang: de` hinzugefügt
- **Warum:** Verbessert SEO und ermöglicht korrekte Canonical-URLs

### 2. `.gitignore` — Gemfile.lock entfernt
- `Gemfile.lock` wird jetzt versioniert (für reproduzierbare Builds)

### 3. `quellen.md` — Hardcodierten Pfad korrigiert
- `/bonusseite/inhalt-index/` durch `{{ '/inhalt-index/' | relative_url }}` ersetzt
- **Warum:** Funktioniert auch wenn sich die Base-URL ändert

### 4. `impressum.md` — Datenschutzhinweis ergänzt
- Abschnitt „Datenschutz" hinzugefügt mit Hinweisen auf:
  - GitHub Pages (Hosting)
  - Chatling (Chat-Widget)
  - OpenStreetMap (Kartendaten)
- **Warum:** DSGVO-Compliance für österreichischen Betreiber

### 5. `assets/js/karte-neu.js` — console.log entfernt
- Debug-Ausgabe `console.log('Initialisiere Karte v3.8...')` entfernt

### 6. `assets/js/ortsnamen-tool.js` — console.log entfernt
- Debug-Ausgabe `console.log('Ortsnamen-Tool initialisiert...')` entfernt
- `console.warn` (für echte Fehler) beibehalten

### 7. `genealogie-karte.js` — Gelöscht
- Wurde nirgends mehr eingebunden (orte.md nutzt nur `karte-neu.js`)
- War eine ältere Duplikat-Version

### 8. `orte.md` — rel="noopener noreferrer" ergänzt
- Beim Wikipedia-Link im Ortsnamen-Bereich

---

## Nicht durchgeführt (manueller Schritt empfohlen)

### Leaflet lokal hosten
Die Leaflet-Bibliothek wird weiterhin vom CDN (unpkg.com) geladen.
Für bessere Langzeit-Sicherheit könnten Sie die Dateien manuell herunterladen:

1. Ordner `assets/vendor/leaflet/` erstellen
2. Folgende Dateien von https://unpkg.com/leaflet@1.9.4/dist/ herunterladen:
   - `leaflet.js`
   - `leaflet.css`
3. In `orte.md` die zwei CDN-Links anpassen:
   - `https://unpkg.com/leaflet@1.9.4/dist/leaflet.css` → `{{ '/assets/vendor/leaflet/leaflet.css' | relative_url }}`
   - `https://unpkg.com/leaflet@1.9.4/dist/leaflet.js` → `{{ '/assets/vendor/leaflet/leaflet.js' | relative_url }}`

---

## Geänderte Dateien (Zusammenfassung)

| Datei | Art der Änderung |
|-------|-----------------|
| `_config.yml` | URL + Sprache ergänzt |
| `.gitignore` | Gemfile.lock entfernt |
| `quellen.md` | Pfad-Fix |
| `impressum.md` | Datenschutz ergänzt |
| `assets/js/karte-neu.js` | console.log entfernt |
| `assets/js/ortsnamen-tool.js` | console.log entfernt |
| `genealogie-karte.js` | GELÖSCHT |
| `orte.md` | rel="noopener" ergänzt |
