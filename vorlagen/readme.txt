
# 🧾 Vorlagen und Anleitungen für neue Beiträge  
_Pilz-Chronik – Bonusseite (intern, nicht veröffentlicht)_

Diese Datei enthält alle grundlegenden Textbausteine, die du für neue Beiträge auf der Bonusseite brauchst.  
Der Ordner `_vorlagen` wird von Jekyll **nicht angezeigt**, dient also nur als persönliche Arbeitsmappe.

---

## 🧭 Grundprinzip

1. Jeder neue Beitrag kommt in den Ordner `_posts/`
2. Der Dateiname hat immer das Format:

JJJJ-MM-TT-titel-des-beitrags.md

Beispiel:

2025-11-01-identifizierung-vinzenz-und-franziska-pilz.md

3. Oben im Beitrag steht immer ein sogenannter „YAML-Header“ (zwischen den `---` Linien).
Darin stehen:
- `layout: post`  → sagt Jekyll, dass es ein Blogeintrag ist  
- `title:` → Überschrift  
- `date:` → Veröffentlichungsdatum  
- `author:` → dein Name  
- `categories:` → Stichwörter (z. B. Ergänzungen, Berichtigungen, Forensik)

4. Bilder liegen im Ordner  

assets/images/

und werden so eingebunden:

```markdown
![Beschreibung](/bonusseite/assets/images/dateiname.jpg)


⸻

📘 Vorlage 1: Normaler Beitrag mit Bild

---
layout: post
title: "Überschrift des Beitrags"
date: 2025-11-01
author: "Wolfgang Pilz"
categories: [Ergänzungen]
---

### Kurze Einleitung

Ein bis zwei Sätze, warum dieser Eintrag auf die Bonusseite gehört.

![Bildbeschreibung](/bonusseite/assets/images/dateiname.jpg)

Text, Erläuterungen, Quellen usw.


⸻

📗 Vorlage 2: Beitrag ohne Bild

---
layout: post
title: "Neue Ergänzung zu Vinzenz Pilz"
date: 2025-11-01
author: "Wolfgang Pilz"
categories: [Ergänzungen]
---

Hier kommt der eigentliche Text.  
Kurze Angabe, warum die Ergänzung nötig ist (z. B. „Berichtigung zu Band 2, S. 24“).

**Quelle:** Pilz-Chronik, Band 2, S. 23–25.


⸻

📙 Vorlage 3: Beitrag mit großem Bild + Downloadlink

---
layout: post
title: "Identifizierung bestätigt: Vinzenz und Franziska Pilz"
date: 2025-10-30
author: "Wolfgang Pilz"
categories: [Ahnenforschung, Forensik]
---

![Vinzenz und Franziska Pilz](/bonusseite/assets/images/vinzenz-und-franziska-pilz.jpg)

Dieses Foto konnte nun eindeutig der Familie Pilz zugeordnet werden. 
Die forensischen KI-Gutachten (Gemini, Manus AI, ChatGPT) stützen alle dieselbe Schlussfolgerung.

> **Große Version für Druck:**  
> [Originalbild herunterladen](/bonusseite/assets/images/vinzenz-und-franziska-pilz-original.jpg)

**Quellen:** Pilz-Chronik, Band 1, S. 82–90; Band 2, S. 23–25.


⸻

📕 Vorlage 4: Berichtigung zu Band 1 oder 2

---
layout: post
title: "Berichtigung zu Band 2 – Vinzenz Pilz"
date: 2025-11-01
author: "Wolfgang Pilz"
categories: [Berichtigungen]
---

**Betroffene Stelle:** Pilz-Chronik, Band 2, S. 24 (Kekulé 8)

**Bisheriger Text:** „… starb 1884 …“

**Richtig:** „… starb am 21.12.1883 in Stolzenhain – Háj u Loučné, Böhmen.“

**Begründung:**  
Die Bonusseite soll immer den letzten, korrigierten Stand zur Chronik enthalten.

**Quelle:** Kirchenbuch Stolzenhain, Eintrag vom 21.12.1883 (siehe PDF im Downloadbereich).


⸻

📔 Vorlage 5: Neuer Download (z. B. PDF)

---
layout: post
title: "Download: Pensionsbescheid Alois Johann Pilz"
date: 2025-11-01
author: "Wolfgang Pilz"
categories: [Downloads]
---

Der folgende Scan ergänzt den Abschnitt *Transkriptionen und Dokumente* in **Band 2**.

👉 [PDF ansehen](/bonusseite/assets/pdf/pensionsbescheid-alois-johann-pilz.pdf)

**Quelle:** Pilz-Chronik, Band 2, S. 165.


⸻

🪶 Hinweise für neue Bilder
	•	Dateinamen immer klein, ohne Leerzeichen:
vinzenz-und-franziska-pilz.jpg
	•	Dateigröße unter 1 MB → lädt schneller
	•	Große Druckdateien kannst du als Zusatzlink einbauen (siehe Vorlage 3)
	•	Browser-Cache nach Upload leeren (Strg + F5)

⸻
