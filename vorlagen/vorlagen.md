⸻


# 🧾 Vorlagen für neue Beiträge
_Pilz-Chronik – Bonusseite (intern, nicht veröffentlicht)_

Stand: November 2025  
Autor: Wolfgang Pilz  

Diese Datei sammelt alle gebräuchlichen Beitragstypen für die Bonusseite.  
**Neu:** Alle Vorlagen haben jetzt
- ein `excerpt:` (für die Startseite),
- den einheitlichen Warnhinweis,
- und die richtigen Pfade mit `{{ site.baseurl }}`.

---

## 🧭 Grundprinzip

1. **Alle neuen Beiträge** kommen nach `_posts/`
2. Dateiname immer so:  
   `JJJJ-MM-TT-titel-des-beitrags.md`  
   Beispiel:  
   `2025-11-01-identifizierung-vinzenz-und-franziska-pilz.md`
3. Ganz oben steht immer ein **YAML-Header** zwischen `---`
4. Bilder liegen in: `assets/images/` → im Post immer so verlinken:  
   `{{ site.baseurl }}/assets/images/dateiname.jpg`
5. PDFs liegen in: `assets/pdf/` → im Post immer so verlinken:  
   `{{ site.baseurl }}/assets/pdf/datei.pdf`
6. Dateinamen immer **klein schreiben, ohne Leerzeichen**
7. Nach Upload: **Strg + F5** im Browser → neue Version laden

---

## 📘 V1 – Beitrag mit Bild

**Verwenden, wenn:** du eine Ergänzung oder einen Fund zeigen willst und ein Bild vorhanden ist.

```markdown
---
layout: post
title: "Überschrift des Beitrags"
date: 2025-11-01
author: "Wolfgang Pilz"
categories: ["Ergänzungen"]
image: /assets/images/beispielbild.jpg
excerpt: "Kurze Inhaltsangabe, 1–2 Sätze, warum der Beitrag zur Bonusseite gehört."
---

> ⚠️ **Vorläufiger Arbeitsstand**  
>
> Dieser Beitrag wurde **im Wesentlichen mithilfe Künstlicher Intelligenz (KI)** erstellt.  
> Er dient derzeit **als Information, Gedankenstütze und Entwurf** für weitere, genauere Nachforschungen im Rahmen der *Pilz-Chronik*.  
>
> Inhalte, Daten und Deutungen können sich noch ändern, sobald neue Quellen überprüft und eingearbeitet werden.

---

Kurze Einleitung.

Ein bis zwei Sätze, warum dieser Eintrag auf die Bonusseite gehört
(z. B. „Ergänzung zu den böhmischen Förstern im Raum Komotau.“)

![Bildbeschreibung]({{ site.baseurl }}/assets/images/beispielbild.jpg)

Quelle: *Pilz-Chronik*, Band 2, S. xx.


⸻

📗 V2 – Beitrag ohne Bild

Verwenden, wenn: du nur Text hast oder eine kleine Ergänzung machst.

---
layout: post
title: "Neue Ergänzung zu Vinzenz Pilz"
date: 2025-11-01
author: "Wolfgang Pilz"
categories: ["Ergänzungen"]
excerpt: "Ergänzung zu Band 2, S. 24, Kekulé 8 – Vinzenz Pilz."
---

> ⚠️ **Vorläufiger Arbeitsstand**  
>
> Dieser Beitrag wurde **im Wesentlichen mithilfe Künstlicher Intelligenz (KI)** erstellt.  
> Er dient derzeit **als Gedankenstütze und Entwurf** für weitere, genauere Nachforschungen im Rahmen der *Pilz-Chronik*.  
>
> Inhalte, Daten und Deutungen können sich noch ändern, sobald neue Quellen überprüft und eingearbeitet werden.

---

Hier kommt der eigentliche Text.

Kurze Angabe, warum die Ergänzung nötig ist
(z. B. „Erweiterung zu Band 2, S. 24, Kekulé 8 – Vinzenz Pilz“).

Quelle: *Pilz-Chronik*, Band 2, S. 24.


⸻

📙 V3 – Beitrag mit großem Bild + Downloadlink

Verwenden, wenn: du ein Bild zeigen willst, aber zusätzlich die große Originaldatei zum Herunterladen anbieten möchtest.

---
layout: post
title: "Identifizierung bestätigt: Vinzenz und Franziska Pilz"
date: 2025-10-30
author: "Wolfgang Pilz"
categories: ["Ahnenforschung", "Forensik"]
image: /assets/images/vinzenz-und-franziska-pilz.jpg
excerpt: "Forensische KI-Analysen bestätigen: Das bisher unbeschriftete Atelierfoto zeigt sehr wahrscheinlich Vinzenz und Franziska Pilz."
---

> ⚠️ **Vorläufiger Arbeitsstand**  
>
> Dieser Beitrag wurde **im Wesentlichen mithilfe Künstlicher Intelligenz (KI)** erstellt.  
> Er dient derzeit **als Information, Gedankenstütze und Entwurf** für weitere, genauere Nachforschungen im Rahmen der *Pilz-Chronik*.  
>
> Inhalte, Daten und Deutungen können sich noch ändern, sobald neue Quellen überprüft und eingearbeitet werden.

---

Dieses Foto konnte nun eindeutig der Familie Pilz zugeordnet werden.  
Die forensischen KI-Gutachten (Gemini, Manus AI, ChatGPT) stützen alle dieselbe Schlussfolgerung.

![Vinzenz und Franziska Pilz]({{ site.baseurl }}/assets/images/vinzenz-und-franziska-pilz.jpg)

📄 Große Version / Scan:  
[Download (PDF)]({{ site.baseurl }}/assets/pdf/vinzenz-und-franziska-pilz.pdf)

Quellen: *Pilz-Chronik*, Band 1, S. 82–90; Band 2, S. 23–25.


⸻

📕 V4 – Berichtigung zu Band 1 oder Band 2

Verwenden, wenn: du eine Stelle aus den Büchern berichtigen möchtest.

---
layout: post
title: "Berichtigung zu Band 2 – Vinzenz Pilz"
date: 2025-11-01
author: "Wolfgang Pilz"
categories: ["Berichtigungen"]
excerpt: "Korrektur zu Band 2, S. 24: Sterbeort und -datum von Vinzenz Pilz."
---

> ⚠️ **Vorläufiger Arbeitsstand**  
>
> Dieser Beitrag wurde **im Wesentlichen mithilfe Künstlicher Intelligenz (KI)** erstellt.  
> Er dient derzeit **als Entwurf für eine spätere, geprüfte Fassung** der *Pilz-Chronik*.  
>
> Inhalte, Daten und Deutungen können sich noch ändern.

---

**Betroffene Stelle:** *Pilz-Chronik*, Band 2, S. 24 (Kekulé 8)  
**Bisheriger Text:** „… starb 1884 …“  
**Richtig:** „… starb am 21.12.1883 in Stolzenhain – Háj u Loučné, Böhmen.“  

**Begründung:** Die Bonusseite soll immer den letzten, korrigierten Stand zur Chronik enthalten.

**Quelle:** Kirchenbuch Stolzenhain, Eintrag vom 21.12.1883; vgl. *Pilz-Chronik*, Band 2, S. 23–25.


⸻

📔 V5 – Neuer Download (PDF, Scan, Urkunde)

Verwenden, wenn: du ein neues Dokument online stellen willst.

---
layout: post
title: "Download: Pensionsbescheid Alois Johann Pilz"
date: 2025-11-01
author: "Wolfgang Pilz"
categories: ["Downloads"]
excerpt: "Scan eines ergänzenden Dokuments zu den Transkriptionen in Band 2."
---

> ⚠️ **Vorläufiger Arbeitsstand**  
>
> Dieser Beitrag wurde **im Wesentlichen mithilfe Künstlicher Intelligenz (KI)** erstellt.  
> Er dient derzeit **als Arbeitsnotiz** für spätere, redaktionell geprüfte Fassungen.  
>
> Inhalte, Daten und Deutungen können sich noch ändern.

---

Der folgende Scan ergänzt den Abschnitt „Transkriptionen und Dokumente“ in Band 2.

👉 **PDF ansehen:**  
[Download (PDF)]({{ site.baseurl }}/assets/pdf/pensionsbescheid-alois-johann-pilz.pdf)

Quelle: *Pilz-Chronik*, Band 2, S. 165.


⸻

📒 V6 – Kurzer Textnachtrag / Hinweis

Verwenden, wenn: du nur einen kleinen Zusatz bringen möchtest.

---
layout: post
title: "Nachtrag zu Band 1 – Familie Kofler"
date: 2025-11-01
author: "Wolfgang Pilz"
categories: ["Ergänzungen"]
excerpt: "Kleiner Zusatz zu Band 1, Kapitel 'Drei Brüder, drei Wege zum Erfolg' – Peter Kofler."
---

> ⚠️ **Vorläufiger Arbeitsstand**  
>
> Dieser Beitrag wurde **im Wesentlichen mithilfe Künstlicher Intelligenz (KI)** erstellt.  
> Er dient derzeit **als Merker** für spätere, genauere Nachforschungen.  
>
> Inhalte, Daten und Deutungen können sich noch ändern.

---

Zusatz zu Band 1, Kapitel „Drei Brüder, drei Wege zum Erfolg“,  
dort wurden die Notizen zu Peter Kofler 1851 ergänzt.

Quelle: *Pilz-Chronik*, Band 1, S. 134–138.


⸻

🪶 Hinweise für neue Bilder
	•	Dateinamen immer klein und ohne Leerzeichen schr aeiben.
	•	Möglichst unter 1 MB, damit die Seite schnell lädt.
	•	Große Druckdateien immer als eigenen Link anbieten (siehe V3).
	•	Nach dem Hochladen im Browser: Strg + F5 → Cache leeren.

⸻

Ende der Vorlagen – Stand November 2025

