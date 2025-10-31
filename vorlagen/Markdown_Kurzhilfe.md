# 🧾 Markdown-Kurzhilfe für die Pilz-Chronik-Bonusseite

Stand: November 2025  
Autor: Wolfgang Pilz

Diese Datei erklärt die wichtigsten Markdown-Formatierungen, um Beiträge auf der Bonusseite einfach und sauber zu gestalten.

---

## 1. Fett und Kursiv

| Wirkung | Markdown-Schreibweise | Ergebnis |
|----------|-----------------------|-----------|
| **Fett** | `**Text**` | **Text** |
| *Kursiv* | `*Text*` | *Text* |
| **_Fett und kursiv_** | `**_Text_**` | **_Text_** |

Beispiel:

```markdown
**Vinzenz Pilz** wurde 1830 in Hlawatschow geboren.
```

---

## 2. Überschriften

| Ebene | Markdown | Beispielanzeige |
|--------|-----------|----------------|
| H1 | `# Haupttitel` | Große Überschrift |
| H2 | `## Abschnitt` | Mittlere Überschrift |
| H3 | `### Unterabschnitt` | Kleinere Überschrift |

Empfehlung: auf der Bonusseite meist nur `##` oder `###` verwenden.

---

## 3. Absätze und Zeilenumbrüche

- Ein neuer Absatz = eine **Leerzeile** dazwischen  
- Ein Zeilenumbruch innerhalb eines Absatzes = **zwei Leerzeichen am Zeilenende**

```markdown
Dies ist der erste Satz.  
Und das steht jetzt in der nächsten Zeile.
```

---

## 4. Aufzählungen

```markdown
- Erster Punkt
- Zweiter Punkt
  - Unterpunkt (zwei Leerzeichen eingerückt)
```

Ergebnis:

- Erster Punkt
- Zweiter Punkt
  - Unterpunkt

---

## 5. Nummerierte Listen

```markdown
1. Erstens
2. Zweitens
3. Drittens
```

Ergebnis:

1. Erstens
2. Zweitens
3. Drittens

---

## 6. Zitate und Hinweise

```markdown
> Dies ist ein Zitat oder Hinweistext.
```

Ergebnis:

> Dies ist ein Zitat oder Hinweistext.

---

## 7. Links

```markdown
[Text des Links](https://beispielseite.at)
```

Beispiel:

```markdown
[Familia Austria](https://www.familia-austria.at)
```

---

## 8. Bilder

```markdown
![Beschreibung des Bildes](/assets/images/dateiname.jpg)
```

💡 **Wichtig:**  
- Keine Leerzeichen oder Umlaute im Dateinamen  
- Ordnerpfad exakt angeben (`/assets/images/`)

---

## 9. Trennlinie

```markdown
---
```

Ergebnis:

---

---

## 10. Inline-Code

Wenn ein Begriff genau so angezeigt werden soll, wie er geschrieben wird (z. B. Dateiname oder Befehl):

```markdown
`_config.yml`
```

Ergebnis: `_config.yml`

---

## 11. Beispiel für einen Beitragstext

```markdown
**Vinzenz Pilz** wurde am 26. Dezember 1830 in *Hlawatschow* geboren.  
Er heiratete **Franziska Gahler** und ließ sich in *Stolzenhain* nieder.

> Quelle: Pilz-Chronik, Band 2, S. 23–25
```

Ergebnis:

**Vinzenz Pilz** wurde am 26. Dezember 1830 in *Hlawatschow* geboren.  
Er heiratete **Franziska Gahler** und ließ sich in *Stolzenhain* nieder.

> Quelle: Pilz-Chronik, Band 2, S. 23–25

---

Diese Datei gehört in den Ordner `/vorlagen/`  
und dient als Nachschlagehilfe für zukünftige Änderungen.

*Pilz-Chronik Bonusseite © Wolfgang Pilz, 2025*
