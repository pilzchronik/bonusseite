
1) README_Pflegehinweise.md

# Pflege- und Änderungsanleitung – Pilz-Chronik-Bonusseite

Stand: November 2025  
Autor: Wolfgang Pilz  

---

## 1. Grundprinzip

> **„Never change a running system.“**  
> Änderungen immer nur in kleinen Schritten durchführen.  
> Nach jeder Änderung prüfen, ob der Seitenaufbau („Build“) erfolgreich war.

**Warum?**  
Die Bonusseite läuft auf GitHub Pages mit Jekyll. Schon ein falsches Leerzeichen in der `_config.yml` kann den ganzen Build stoppen. Darum immer: eine Änderung – dann testen.

---

## 2. Wo Änderungen erlaubt sind

### a) Neue Beiträge (Blog-Posts)

- Ablage: `_posts/`
- Dateiname immer nach Schema:  
  `YYYY-MM-DD-titel-des-beitrags.md`  
  Beispiel: `2025-11-02-neuer-fund-in-komotau.md`
- Kopfbereich („YAML-Header“) immer ganz oben:

  ```yaml
  ---
  layout: post
  title: "Neuer Fund in Komotau"
  date: 2025-11-02
  author: "Wolfgang Pilz"
  categories: [Ahnenforschung, Ergänzungen]
  ---

	•	Darunter normaler Text in Markdown.
	•	Bilder einbinden mit:

![Beschreibung](/assets/images/dateiname.jpg)



Begründung:
Nur _posts/ ist dafür gedacht, laufend neue Inhalte aufzunehmen. Das ist die sicherste Stelle.

⸻

b) Navigation
	•	Datei: _config.yml
	•	Bereich: header_pages:
	•	Dort können Seiten hinzugefügt oder entfernt werden (z. B. downloads.md, karte.md).
	•	Die Reihenfolge dort ist die Reihenfolge im Menü.

Begründung:
Die Navigation wird vom minima-Theme aus der _config.yml gelesen. Kleine Änderung reicht.

⸻

c) Startseite (index.md)
	•	Text darf angepasst werden (Begrüßung, kurzer Hinweis auf neue Ergänzungen).
	•	Wichtig: keine Liquid-Befehle ändern ({% ... %}), weil die vom Theme gebraucht werden.

⸻

d) Downloads und Assets
	•	Ablage gesamt: assets/
	•	Bilder → assets/images/
	•	PDFs → assets/pdf/
	•	Niemals Leerzeichen oder Umlaute im Dateinamen
→ besser: vinzenz-und-franziska-pilz.jpg
→ nicht: Vinzenz Pilz groß.jpg

Begründung:
GitHub und Browser sind bei Leerzeichen/Ä,Ö,Ü oft „heikel“. Klein schreiben funktioniert immer.

⸻

3. Wo Änderungen nicht empfohlen sind

Datei / Ordner	Grund
_config.yml (außer Navigation)	Schon ein falsches Leerzeichen bringt einen Build-Fehler.
_layouts/, _includes/	Das sind die Vorlagen vom minima-Theme. Nicht ändern.
Gemfile, Gemfile.lock	Gehören zu GitHub Pages. Nicht anfassen.
index.html	Nicht verwenden. Nur index.md ist aktiv.

Begründung:
Du willst die Seite einfach und wartbar halten, ohne jedes Mal Hilfe holen zu müssen.

⸻

4. Wenn die Seite nicht mehr aktualisiert wird
	1.	Auf GitHub gehen:
Repository → Actions → Pages build and deployment
	2.	Wenn ein rotes Kreuz ❌ zu sehen ist:
	•	Letzte Zeilen im „Log“ lesen.
	•	Häufigste Ursache: Fehler in _config.yml (Einrückung, Sonderzeichen, falsche Zeile).
	3.	Wenn kein Fehler erkennbar ist:
	•	Am Ende der _config.yml diese Zeile ergänzen oder ändern:

rebuild_trigger: "2025-11-02"


	•	Dann committen → GitHub baut neu.

Begründung:
Damit „stößt“ du GitHub an, die Seite neu zu generieren, ohne wirklich etwas am Layout zu verändern.

⸻

5. Sicherung und Archiv
	•	Nach jeder größeren Änderung den kompletten Ordner bonusseite lokal sichern.
	•	Bilder und PDFs zusätzlich auf externer Festplatte ablegen.
	•	Bei jedem Commit eine kurze Nachricht schreiben, z. B.:
	•	neuer Post Vinzenz Pilz
	•	Download ergänzt
	•	Navigation aktualisiert

Begründung:
Dann weißt du auch in 2 Jahren noch, was du da gemacht hast.

⸻

6. GitHub im Browser – Kurzanleitung
	1.	Im Browser öffnen: dein GitHub-Repository der Bonusseite.
	2.	Datei suchen (z. B. _posts/2025-11-02-neuer-fund-in-komotau.md oder /vorlagen/vorlagen.md)
	3.	Datei anklicken.
	4.	Oben rechts auf den Stift (Edit) klicken.
	5.	Text ändern oder neuen Text einfügen.
	6.	Unten bei Commit changes einen kurzen Kommentar schreiben.
	7.	Auf Commit changes klicken.

💡 Tipp:
Wenn du eine neue Datei anlegen willst:
Add file → Create new file und gleich den richtigen Pfad angeben, z. B.
_posts/2025-11-02-neuer-fund-in-komotau.md

⸻

7. Mini-Test nach jeder Änderung
	•	Seite im Browser neu laden: Strg + F5
(damit der Browser nicht die alte Version aus dem Speicher zeigt)
	•	Prüfen:
	•	Ist der neue Beitrag da?
	•	Funktionieren die Bilder?
	•	Funktionieren die Links?
	•	Ist das Menü noch ganz?

Wenn ja → Änderung war erfolgreich ✅

⸻

8. Für Nachfolger

Falls jemand anderer die Seite weiterführt:
	•	Zugang zu GitHub (Benutzername + Passwort) dokumentieren
	•	E-Mail-Adresse für GitHub dokumentieren
	•	Zuerst diese Datei lesen, dann erst Änderungen machen
	•	Beiträge immer auf die beiden Bände beziehen:
	•	Band 1 – Die Suche (2025)
	•	Band 2 – Ahnentafel und Analysen (2025)

⸻
