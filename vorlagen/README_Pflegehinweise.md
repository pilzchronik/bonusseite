Sehr gut, Wolfgang 👍
Dann bekommst du jetzt eine Pflege- und Änderungsanleitung im Stil deiner Bonusseite – sachlich, knapp und eindeutig, damit du sie auch in ein paar Jahren noch verstehst, ohne überlegen zu müssen.

Ich nenne sie
👉 README_Pflegehinweise.md
und du kannst sie in den Ordner /vorlagen legen.

⸻

📘 README_Pflegehinweise.md

# Pflege- und Änderungsanleitung – Pilz-Chronik-Bonusseite

Stand: November 2025  
Autor: Wolfgang Pilz

---

## 1. Grundprinzip

> **„Never change a running system.“**  
> Änderungen immer nur in kleinen Schritten durchführen.  
> Nach jeder Änderung prüfen, ob der Seitenaufbau („Build“) erfolgreich war.

---

## 2. Wo Änderungen erlaubt sind

### a) Neue Beiträge (Blog-Posts)
- Ablage: `_posts/`
- Dateiname nach Schema:  
  `YYYY-MM-DD-titel-des-beitrags.md`  
  Beispiel: `2025-11-02-neuer-fund-in-komotau.md`
- Kopfbereich („Front Matter“):

  ```yaml
  ---
  layout: post
  title: "Neuer Fund in Komotau"
  date: 2025-11-02
  author: "Wolfgang Pilz"
  categories: [Ahnenforschung, Ergänzungen]
  ---

	•	Darunter normaler Text in Markdown.

b) Navigation
	•	Datei: _config.yml
	•	Bereich: header_pages:
	•	Hier können Seiten hinzugefügt oder entfernt werden (z. B. downloads.md, karte.md).
	•	Reihenfolge bestimmt die Anzeige im Menü.

c) Startseite (index.md)
	•	Text darf angepasst werden (z. B. Begrüßung, Beschreibung).
	•	Keine Layout- oder Liquid-Befehle ändern ({% ... %}).

d) Downloads und Assets
	•	Ablage: assets/
	•	Bilder → assets/images/
	•	PDFs → assets/pdf/
	•	Keine Leerzeichen oder Großbuchstaben im Dateinamen (Beispiel: vinzenz-franziska-pilz.jpg).

⸻

3. Wo Änderungen nicht empfohlen sind

Datei / Ordner	Grund
_config.yml	Nur bei Bedarf (z. B. Navigation) – falsches Leerzeichen führt zu Build-Fehler.
_layouts/, _includes/	Enthalten Theme-Vorlagen. Nicht anrühren.
Gemfile, Gemfile.lock	Gehören zum GitHub-System.
index.html	Nicht verwenden. Nur index.md aktiv.


⸻

4. Wenn die Seite nicht mehr aktualisiert wird
	1.	Prüfen unter
GitHub → Actions → Pages build and deployment
	2.	Wenn rotes Kreuz:
	•	Letzte Zeilen im „Log“ lesen.
	•	Meist Fehler in _config.yml (Einrückung, Sonderzeichen).
	3.	Falls kein offensichtlicher Fehler:
_config.yml am Ende leicht ändern:

rebuild_trigger: "YYYY-MM-DD"

und committen → GitHub startet Neubau.

⸻

5. Sicherungs- und Archivhinweise
	•	Nach jeder größeren Änderung den kompletten Ordner bonusseite lokal sichern.
	•	PDFs und Bilder zusätzlich auf externer Festplatte speichern.
	•	Änderungen immer mit kurzer Commit-Nachricht versehen (z. B. „neuer Post Vinzenz Pilz“).

⸻

6. Kontakt und Nachfolger-Hinweis

Sollte jemand anderes die Betreuung übernehmen:
	•	Zugang zu GitHub (pilzchronik-Konto) und Login-Mailadresse dokumentieren.
	•	Diese Datei zuerst lesen, bevor Änderungen gemacht werden.

⸻

Pilz-Chronik-Bonusseite – Technische Pflegehinweise (seit 2025).

---

### 💡 Verwendung

- Datei speichern als:  
  `/vorlagen/README_Pflegehinweise.md`
- Sie erscheint nicht auf der Website, dient nur dir als „Wartungsbuch“.

---

Möchtest du, dass ich dir noch eine zweite kleine **Vorlage-Datei für neue Beiträge** dazuschreibe  
(zum Beispiel `vorlage_post.md` mit fertig vorbereitetem Kopfbereich und Struktur)?  
Dann hast du in Zukunft nur mehr „Kopieren → Umbenennen → Text einfügen“.
