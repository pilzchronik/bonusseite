# Pilz-Chronik – Bonusseite (Finales Update 2025)
=================================================

Dieses Archiv enthält die vollständig vorbereitete **Bonusseite zur Pilz-Chronik**  
mit Blogsystem, Design-Vorlage, Download-Ordner und allen Anleitungen.

---

## 🧭 Installation

1. Entpacken Sie dieses Archiv lokal.   Ihr GitHub-Repository unter  
   `/bonusseite/` hoch.  
3. Prüfen Sie, dass die Struktur exakt so aussieht:

/bonusseite/
  ├── index.md
  ├── downloads.md
  ├── _posts/
  ├── _vorlagen/
  │   ├── README_Pflegehinweise.md
  │   └── vorlagen.md
  ├── assets/
  │   ├── custom.css
  │   └── pdf/
  │       ├── Pilz-Chronik_Band1_Leseprobe.pdf
  │       └── Errata_2025.pdf
  ├── Anleitungen/
  │   ├── Pilzchronik_Bonusseite_Download-Anleitung.pdf
  │   ├── Pilzchronik_Bonusseite_Download-Kurz_Design.pdf
  │   └── Pilzchronik_Bonusseite_Errata-Kurz_Design_v2.pdf
  ├── custom_demo.html
  └── README.txt

---

## ⚙️ Nach dem Upload

- GitHub Pages baut die Website **automatisch neu**.  
- Die Blogeinträge erscheinen auf der **Startseite** unter *Neueste Beiträge*.  
- Der Menüpunkt **Downloads** führt direkt zu den PDF-Dateien.  
- Design-Anpassungen erfolgen in  
  `assets/custom.css` → (z. B. Farben, Ränder, Schriftgrößen).  
- Interne Arbeitsvorlagen liegen unter  
  `/_vorlagen/` → (Pflege- und Postvorlagen, nicht sichtbar auf der Website).

---

## 🧩 Hinweise zum Seiten-Build

- Prüfen Sie den Status unter  
  **GitHub → Actions → Pages build and deployment**.  
- Bei einem roten ❌:
  - Letzte Zeilen im Log lesen  
  - Häufigste Ursache: Einrückungsfehler in `_config.yml`  
- Falls kein Fehler ersichtlich:
  - In `_config.yml` am Ende ergänzen:

    rebuild_trigger: "2025-11-02"

  - Commit ausführen → GitHub startet den Neuaufbau.

---

## 💡 Aktueller Stand (November 2025)

Die neue `index.md` wurde korrekt eingespielt,  
wird aber auf GitHub Pages eventuell mit **zeitlicher Verzögerung** angezeigt.  
Grund: Caching oder automatischer Build-Puffer bei Pages.  

➡️ **Lösung:**  
Ein kleiner Folge-Commit (z. B. ein neuer Post oder eine minimale Textänderung)  
startet den Rebuild automatisch.  
Keine inhaltliche oder syntaktische Korrektur erforderlich.

---

## 🗃️ Empfohlene Kontrolle nach Änderungen

1. Seite im Browser neu laden (**Strg + F5**)  
2. Prüfen:
   - Sind neue Beiträge sichtbar?  
   - Funktionieren Bilder und Links?  
   - Menü vollständig?  
3. Wenn ja → System läuft stabil ✅

---

*Pilz-Chronik – Bonusseite © Wolfgang Pilz, 2025*  
*(Für den privaten, nicht-kommerziellen Gebrauch bestimmt.)*
