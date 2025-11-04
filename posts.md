---
layout: page
title: "Alle Beiträge"
permalink: /posts/
---

# Alle Beiträge

Hier sind **alle bisher erschienenen Beiträge** der Bonusseite aufgelistet – chronologisch rückwärts.
So finden Sie auch ältere Berichtigungen wieder.

{% for post in site.posts %}
- **{{ post.date | date: "%d.%m.%Y" }} – [{{ post.title }}]({{ post.url | relative_url }})**  
  {{ post.excerpt | default: post.content | strip_html | truncate: 200 }}
{% endfor %}

---

## KI-generierte Informationen: Hinweise zur Nutzung

### Grundlage dieser Webseite

**Die Kerndaten sind verlässlich.** Alle Familiendaten, Stammbäume, Lebensdaten und wesentlichen Informationen sind recherchiert, geprüft und manuell erstellt.

Zur Unterstützung bei der Texterstellung und Strukturierung wird teilweise Künstliche Intelligenz eingesetzt. Diese dient primär der **Datensicherung und effizienten Dokumentation**. Eine vollständige nachträgliche Überprüfung aller erweiterten Textpassagen ist vorgesehen, aber mit 77 Jahren realistisch gesehen möglicherweise nicht mehr vollständig umsetzbar.

### Wichtige Eigenschaften KI-generierter Inhalte

**Momentaufnahmen, keine lebenden Dokumente**  
KI-Systeme verfügen über einen "Wissensstichtag" – einen festen Zeitpunkt ihrer Datenbasis. Einmal erstellte Texte bleiben unverändert und werden nicht automatisch aktualisiert. Die KI "pflegt" ihre eigenen Texte nicht.

**Nachgewiesene Fehlerquoten**  
Eine internationale Studie von 2025 (BBC, ARD, ZDF u.a.) zu führenden KI-Assistenten ergab:
- 45% der Antworten wiesen erhebliche Mängel auf
- 31% hatten Probleme bei Quellenangaben
- 20% enthielten nachweislich falsche oder veraltete Informationen

**Doppelte Alterung**  
KI-Texte veralten sowohl durch überholte Informationen als auch durch inzwischen bessere KI-Technologie.

### Einordnung für diese Webseite

Die **Grunddaten zur Familiengeschichte sind gesichert und verlässlich**. Erweiterte Textpassagen und Ausarbeitungen können KI-unterstützt sein und dienen der Dokumentation und Strukturierung. Sie erheben keinen Anspruch auf dauerhafte Aktualität.

Das Erstellungsdatum gibt Aufschluss über den Zeitpunkt der Informationslage.

---

[← Zurück zur Startseite]({{ "/" | relative_url }})
