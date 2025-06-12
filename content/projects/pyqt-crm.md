---
"title": "Case Study: CRM Enhancement"
"status": "completed"
"postingDate": "2024-11"
"tagline": "Dieses PoC, zeigt mögliche KI-gestützte Erweiterungen für ein CRM-System. "
"blogIntro": "Dieses Proof of Concept (PoC) wurde als Teil der Special Week an der Berner Fachhochschule entwickelt. Es zeigt, wie KI-gestützte Funktionen in die Datenaktualisierung eines CRM-Systems vereinfachen können, um die Effizienz und Benutzerfreundlichkeit zu verbessern. Das PoC nutzt PyQt für die GUI-Entwicklung und verschiedene KI-APIs für die Funktionalität."
"imageUrl": "/images/projects/crm_pyqt.webp"
"imgOverlay": ""
"tags": [
  "Python",
  "PyQT",
  "Perplexity API",
  "ScrapingBee",
  "Sales"
]
"githubUrl": ""
"liveUrl": ""
---

# Optimierung des CRM

In der heutigen datengesteuerten Geschäftswelt ist ein effektives Kundenbeziehungsmanagement (CRM) unerlässlich. Doch
selbst die fortschrittlichsten CRM-Systeme sind nur so gut wie die Daten, die sie enthalten. In einem Projekt, welches
sich mit den Herausforderungen in der Datenqualität eines bestehenden CRM-Systems auseinandersetzte, konten
wertvolle Einblicke gewonnen werden.

# Projektinhalt

Dieses Proof of Concept (PoC) wurde von einem Projektteam im Rahmen der Special Week an der Berner Fachhochschule
entwickelt. Mittels PyQt
wurde eine einfache GUI erstellt, die es ermöglicht, basierend auf einer URL-Liste Daten aus dem Web zu extrahieren.
Über verschiedene Schritte werden folgenden Informationen gesammelt:

- **Unternehmensanalyse:** Kurzbeschreibung des Unternehmens, was es macht und in welcher Branche es tätig ist.
- **Mitbewerberanalyse:** Es werden 5–10 ähnliche Unternehmen identifiziert, die in der gleichen Branche tätig sind.
  Eine neue Abfrage für die neuen Unternehmen kann ebenfalls direkt gestartet werden.
- **Generelle Kontaktdaten:** E-Mail-Adresse, Telefonnummer, Adresse und weitere relevante Kontaktdaten.
- **Kontaktpersonen:** Informationen über spezifische Kontaktpersonen, die für das Unternehmen relevant sind, wie Name,
  Position und E-Mail-Adresse. Ein Screenshot der Webseite wird erstellt, um die Richtigkeit der gesammelten Daten zu
  überprüfen.

## Die Herausforderung: Ineffiziente Daten und manuelle Arbeit

Das Ausgangsproblem war typisch für viele Unternehmen: Das vorhandene CRM-System litt unter doppelten Einträgen,
veralteten Informationen und unvollständigen Datensätzen. Diese Inkonsistenzen beeinträchtigten die Wirksamkeit von
Vertriebs- und Marketingbemühungen erheblich. Manuelle Überprüfungen waren zeitaufwändig und banden wertvolle
Ressourcen, die an anderer Stelle besser eingesetzt werden könnten. Das Ziel war klar: Die CRM-Daten sollten bereinigt,
validiert und angereichert werden, um ihre Genauigkeit und Relevanz zu verbessern und die Zuverlässigkeit des Systems zu
erhöhen.

## Zwei Lösungsansätze für mehr Datenqualität

Um diesen Anforderungen gerecht zu werden, wurden zwei primäre Lösungsansätze entwickelt: Ein
Roboter-Automatisierungstool und eine API- & Web-Scraping-Lösung. Da die Roboter-Automatisierungslösung sehr komplex und
wenig flexibel war, wurde der Fokus auf die zweite Lösung gelegt.

### API- & Web-Scraping-Lösung: Tiefenanalyse aus dem Web

Die zweite Lösung nutzt öffentlich verfügbare APIs, um Daten aus externen Quellen zu sammeln, zu filtern und zu
analysieren. Der Workflow ist dabei mehrstufig:  
**Schritt für Schritt zur umfassenden Information:**

1. **URL-Verarbeitung (Scraping):** URLs aus einer bereinigten Eingabedatei werden an eine Scraping-API übergeben. Diese
   extrahiert alle Links von der Homepage, filtert relevante URLs und speichert sie. Dieser Ansatz ermöglicht eine
   einfache Integration von Filtermechanismen.
2. **URL-Analyse (Intelligente API-Nutzung):** Die Perplexity API (LLM mit Internetzugang), wir genutzt, um
   Informationen über Unternehmen, Domains und ähnliche Unternehmen zu sammeln. Dies vereinfacht die Datenerfassung
   erheblich und liefert aktuelle Informationen sowie Zusammenfassungen des aktuellen Seitenstatus.
3. **Kontaktdaten-Scraping:** Eine weitere API wird verwendet, um präzise und umfassende Kontaktdaten von den
   gefilterten Seiten zu extrahieren. Alle gesammelten Kontaktdaten werden pro Domain in einer einzigen Datei
   zusammengeführt. Um die Richtigkeit zu überprüfen, wird auch ein Screenshot der Seite erfasst, was eine schnelle
   Verifizierung ohne Browseröffnung ermöglicht.
4. **Datenvisualisierung:** Nach jedem Verarbeitungsschritt werden die gesammelten Daten in einer benutzerfreundlichen
   grafischen Oberfläche (GUI) visualisiert, um einen schnellen Überblick zu ermöglichen.

Warum dieser Ansatz?  
Web-Scraping ermöglicht eine umfassende Datenerfassung, auch spezifischer Kontaktpersonen. Die Entscheidung, APIs statt
eines lokalen Sprachmodells (LLM) zu verwenden, basierte auf der Komplexität und den Ressourcenanforderungen lokaler
LLMs. APIs bieten eine schlankere Lösung, obwohl ein optimiertes lokales LLM in der Zukunft eine Option sein könnte.
Zudem gilt es zu bedenken, dass die Nutzung von APIs mit Kosten verbunden ist, die bei der Planung berücksichtigt werden
müssen. Ausserdem können diese in der Funktionsweise ändern, was zu Anpassungen der Logik führen könnte.

## Ausblick und zukünftige Verbesserungen

Das Projekt birgt ein enormes Potenzial für zukünftige Erweiterungen:

* **Robot-Automatisierung:** Integration zukünftiger KI-APIs mit Web-Browsing-Funktionen und automatische UI-Anpassung
  durch Bilderkennung oder maschinelles Lernen.
* **API & Scraping:** Erweiterung der Datenquellen (z.B. branchenspezifische Datenbanken), Parallelverarbeitung und
  Caching zur Beschleunigung und Kostenreduzierung, verbesserte Datenvalidierung und Optimierung von KI-Modellen. Eine
  anspruchsvollere GUI mit interaktiven Datenvisualisierungen könnte die Benutzererfahrung weiter verbessern.

## Fazit: Ein strategisches Asset für die Zukunft

Die Implementierung dieser Lösungen kann das CRM-System eines Unternehmens in einen zuverlässigeren und strategischen
Vermögenswert verwandeln. Durch die Konzentration auf Automatisierung und Datenanalyse legt dieses Projekt den
Grundstein für ein leistungsstarkes CRM- und Marktanalysetool.