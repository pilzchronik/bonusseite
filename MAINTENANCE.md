# Wartungshinweise für die Pilz-Chronik Bonusseite

**Version:** Januar 2025  
**Repository:** https://github.com/pilzchronik/bonusseite  
**Live-Website:** https://pilzchronik.github.io/bonusseite/

---

## Für Familienmitglieder und Nachfolger

Diese Website ist die **digitale Ergänzung zur gedruckten Familienchronik** (Band 1 & 2).  
Sie wurde bewusst nachhaltig und wartungsarm aufgebaut, um **jahrzehntelang ohne Eingriffe lauffähig** zu bleiben.

**Wichtig:** Auch wenn niemand mehr aktiv daran arbeitet, wird die Website weiterhin funktionieren.

---

## Was automatisch weiterläuft (KEINE Wartung nötig)

Diese Komponenten sind so gebaut, dass sie **ohne menschliches Eingreifen jahrzehntelang funktionieren:**

### ✅ **GitHub Pages Hosting**
- Solange GitHub existiert (wahrscheinlich 20-50+ Jahre)
- Automatisches Deployment bei jedem Push
- Kostenlos und ohne Ablaufdatum

### ✅ **Alle Seiten & Inhalte**
- Reine HTML/CSS/JavaScript-Dateien
- Keine Datenbank, keine serverseitigen Skripte
- Funktioniert auf jedem Webserver oder offline

### ✅ **OpenStreetMap Karte** (`/orte/`)
- Keine API-Schlüssel erforderlich
- Community-betrieben (seit 2004)
- Karten-Tiles von öffentlichen Servern
- Fallback: Koordinatenliste in der Seite eingebettet

### ✅ **Pagefind-Suche** (`/suche/`)
- Lokale JavaScript-Suche
- Keine externe Abhängigkeit
- Index wird bei jedem Build neu erstellt
- Funktioniert auch offline

### ✅ **PDFs und Bilder**
- Alle Dokumente direkt im Repository
- Keine externen Links oder Cloud-Dienste
- Buchregister als fest eingebundene PDF-Datei

---

## Was experimentell ist (kann ausfallen)

Diese Komponenten könnten in Zukunft nicht mehr funktionieren. **Die Website läuft auch ohne sie problemlos weiter.**

### ⚠️ **ChatGPT-Assistent** (Chatling)
- Auf einigen Seiten als Chat-Widget eingebunden
- Ist auf der Startseite als "experimentell" gekennzeichnet
- **Falls er nicht mehr funktioniert:** KEINE Aktion nötig
- Die Website zeigt dann einfach kein Chat-Widget mehr

**Zum manuellen Entfernen** (optional):
- Suche in allen `.md` und `.html` Dateien nach `chatling` oder `chatgpt`
- Kommentiere die entsprechenden `<script>`-Tags aus
- Oder: Ignoriere es einfach – schadet nicht

---

## Langzeitarchivierung & Backups

### 📦 **Zenodo-Archiv** (Hauptbackup)

**Vollständiges Archiv bei Zenodo:**
- **Link:** [wird ergänzt nach Upload]
- **DOI:** [wird nach Veröffentlichung vergeben]
- **Inhalt:**
  - Beide Buch-PDFs (Band 1 & 2)
  - Komplettes GitHub-Repository (bereinigt)
  - Diese MAINTENANCE.md
  - README mit Nutzungshinweisen

**Garantierte Verfügbarkeit:** Mindestens 20 Jahre, wahrscheinlich länger  
**Zugriff:** Öffentlich, kostenlos, zitierfähig

### 🌐 **Internet Archive** (Zusatzbackup)

Die Website wird automatisch von archive.org gesichert:
- **Wayback Machine:** https://web.archive.org/web/*/pilzchronik.github.io/bonusseite/
- Snapshots mehrmals pro Jahr
- Funktioniert automatisch (keine Wartung nötig)

**Manuelle Archivierung:**
- Besuche: https://web.archive.org/save/https://pilzchronik.github.io/bonusseite/
- Erstellt sofortigen Snapshot

### 📚 **Gedruckte Bücher** (Primärquelle)

Die wichtigsten Inhalte existieren als **gedruckte Familienchronik**:
- Band 1: [Titel, Jahr]
- Band 2: [Titel, Jahr]
- Exemplare in [Anzahl] Familienbibliotheken
- Pflichtexemplar: Österreichische Nationalbibliothek

**Diese Bücher sind die eigentliche Hauptquelle.** Die Website ist nur eine Ergänzung.

---

## Notfall-Szenarien & Lösungen

### 🚨 **Szenario 1: GitHub existiert nicht mehr**

**Lösung: Zenodo-Archiv herunterladen**

1. Gehe zu: [Zenodo-Link wird ergänzt]
2. Lade die ZIP-Datei herunter
3. Entpacke sie auf deinen Computer
4. Öffne `_site/index.html` im Browser
   → Die Website läuft vollständig offline!

**Alternative: Auf anderen Webserver hochladen**
- Lade den `_site` Ordner auf einen beliebigen Webhost
- Oder: Nutze kostenloses Netlify, Vercel, Cloudflare Pages
- Die Seite läuft überall, wo HTML funktioniert

### 🚨 **Szenario 2: Zenodo ist nicht erreichbar**

**Lösung: Internet Archive**
- Besuche: https://web.archive.org/web/*/pilzchronik.github.io/bonusseite/
- Wähle einen Snapshot aus
- Lade die Seiten einzeln herunter

### 🚨 **Szenario 3: Alle Online-Dienste sind weg**

**Lösung: M-DISC Archiv-Kopien**

Falls vorhanden, wurden M-DISCs (Archiv-DVDs) erstellt und an folgende Personen verteilt:
- [Name, Kontakt]
- [Name, Kontakt]
- [Name, Kontakt]

Diese Discs enthalten:
- Komplettes Repository
- Beide Buch-PDFs
- Diese Anleitung

**Haltbarkeit:** 100-1000 Jahre (Herstellerangabe)

---

## Technische Dokumentation

### Architektur

**Was ist Jekyll?**
- Static Site Generator (macht aus Markdown → HTML)
- Keine Datenbank, keine PHP, kein CMS
- Läuft komplett beim Build-Prozess
- Endprodukt: Reine HTML/CSS/JS-Dateien im `_site` Ordner

**Build-Prozess:**
1. Jekyll liest `.md` Dateien
2. Wendet Layouts an (`_includes/`, `_layouts/`)
3. Erstellt statische HTML im `_site/`
4. Pagefind indexiert den Inhalt für die Suche
5. GitHub Pages veröffentlicht automatisch

### Verzeichnisstruktur

```
bonusseite/
├── _config.yml           # Jekyll-Konfiguration
├── _posts/               # Blog-Beiträge (Werkstatt)
├── _includes/            # Wiederverwendbare Komponenten
├── _data/                # Navigationsdaten
├── assets/
│   ├── js/               # JavaScript (Karte, etc.)
│   └── images/           # Bilder & Logos
├── index.md              # Startseite
├── orte.md               # Karten-Seite
├── quellen.md            # Quellen-Verzeichnis
├── stammbaum.md          # Stammbaum-Links
├── suche.md              # Suchseite (Pagefind)
├── _site/                # ⚠️ Wird automatisch generiert (nicht bearbeiten!)
└── MAINTENANCE.md        # Diese Datei
```

### Lokale Installation (für Änderungen)

**Falls du Änderungen vornehmen willst:**

1. **Ruby & Jekyll installieren**
   ```bash
   # macOS
   brew install ruby
   gem install jekyll bundler
   
   # Windows: https://jekyllrb.com/docs/installation/windows/
   ```

2. **Repository klonen**
   ```bash
   git clone https://github.com/pilzchronik/bonusseite.git
   cd bonusseite
   ```

3. **Abhängigkeiten installieren**
   ```bash
   bundle install
   ```

4. **Lokal starten**
   ```bash
   bundle exec jekyll serve
   ```
   → Öffne http://localhost:4000/bonusseite/

5. **Änderungen hochladen**
   - Mit GitHub Desktop
   - Oder: `git add .` → `git commit -m "..."` → `git push`

### Abhängigkeiten

**Externe Dienste:**
- GitHub Pages (Hosting)
- OpenStreetMap (Karten-Tiles)
- Leaflet.js (Karten-Bibliothek, von CDN)
- Chatling (optional, experimentell)

**Lokale Komponenten:**
- Pagefind (Suche, wird lokal gebaut)
- Jekyll (Build-Tool)
- Minima Theme (Jekyll-Theme)

---

## Kontakt & Support

### Für technische Fragen

**IT-affine Familienmitglieder:**
- [Name, E-Mail]
- [Name, E-Mail]

**Externe Unterstützung:**
- Österreichische Genealogische Gesellschaft: https://www.oegf.at/
- Jekyll Community: https://jekyllrb.com/community/
- GitHub Support: https://support.github.com/

### Für inhaltliche Fragen zur Familienforschung

**Primärkontakt:**
- [Name, E-Mail]

**Backup-Kontakte:**
- [Name, E-Mail]
- [Name, E-Mail]

**Archive mit Familienunterlagen:**
- [Archiv-Name, Standort]
- [Archiv-Name, Standort]

---

## Checkliste für Erben / Nachfolger

Falls du diese Website übernimmst:

### ☐ **Sofort (innerhalb 1 Monat)**
- [ ] Prüfe, ob GitHub-Account noch aktiv ist
- [ ] Teste, ob Website unter https://pilzchronik.github.io/bonusseite/ erreichbar ist
- [ ] Lade Zenodo-Archiv herunter und speichere lokal
- [ ] Aktualisiere Kontaktdaten in dieser MAINTENANCE.md

### ☐ **Kurzfristig (innerhalb 6 Monaten)**
- [ ] Erstelle eigenen GitHub-Account (falls noch keiner)
- [ ] Lass dich als Collaborator zum Repository hinzufügen
- [ ] Mache einen Test-Commit (z.B. Update-Datum ändern)
- [ ] Sichere alle Passwörter in Passwort-Manager

### ☐ **Mittelfristig (innerhalb 1 Jahr)**
- [ ] Prüfe, ob ChatGPT-Bot noch funktioniert (optional)
- [ ] Aktualisiere Zenodo-Archiv mit neuester Version
- [ ] Erstelle M-DISC Kopien (3-5 Stück)
- [ ] Verteile M-DISCs an Familienmitglieder

### ☐ **Optional: Langfristige Verbesserungen**
- [ ] Kontaktiere Landesarchiv Tirol wegen Archivierung
- [ ] Erwäge Spende an Genealogie-Verein
- [ ] Füge weitere Forschungsergebnisse hinzu
- [ ] Aktualisiere gedruckte Chronik (neue Auflage?)

---

## Versions-Historie dieser Datei

- **Januar 2025:** Erste Version erstellt
- [Weitere Updates hier eintragen]

---

## Lizenz & Urheberrecht

**Diese Familienchronik ist urheberrechtlich geschützt.**

- © [Dein Name / Familie Pilz]
- Alle Rechte vorbehalten
- Weitergabe an Familienmitglieder ausdrücklich erlaubt
- Kommerzielle Nutzung nicht gestattet
- Zitierung mit Quellenangabe erlaubt

**Bei Fragen zur Nutzung:** Siehe Kontaktdaten oben

---

## Schlusswort

Diese Website wurde mit Sorgfalt und Blick auf **langfristige Beständigkeit** erstellt.

Selbst wenn niemand sie mehr aktiv wartet, wird sie dank ihrer einfachen, robusten Architektur
**jahrzehntelang funktionieren** und die Familiengeschichte für kommende Generationen bewahren.

Die wichtigsten Informationen existieren zusätzlich in **gedruckter Form** und in **mehreren
digitalen Archiven**. Die Familie Pilz ist damit für die Zukunft gut dokumentiert.

---

**Erstellt:** Januar 2025  
**Letztes Update:** [Datum]  
**Nächste Überprüfung empfohlen:** [Datum + 2 Jahre]
