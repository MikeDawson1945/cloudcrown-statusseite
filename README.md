# 🌐 CloudCrown Hosting – Statusseite

![Letztes Update](https://img.shields.io/endpoint?url=https://mikedawson1945.github.io/cloudcrown-statusseite/badge-last-updated.json)
![Hauptseite](https://img.shields.io/endpoint?url=https://mikedawson1945.github.io/cloudcrown-statusseite/badge-cloudcrown.json)
![Mailserver](https://img.shields.io/endpoint?url=https://mikedawson1945.github.io/cloudcrown-statusseite/badge-mail.json)
![Kundenpanel](https://img.shields.io/endpoint?url=https://mikedawson1945.github.io/cloudcrown-statusseite/badge-panel.json)

Willkommen auf der öffentlich einsehbaren Statusseite von **CloudCrown Hosting**.
Hier siehst du live, ob unsere wichtigsten Dienste erreichbar sind.

👉 **Live ansehen:**
🔗 [https://mikedawson1945.github.io/cloudcrown-statusseite](https://mikedawson1945.github.io/cloudcrown-statusseite)

---

## 📊 Überwachte Dienste

* 🌐 | Webseite | ([https://cloudcrown.ch](https://cloudcrown.ch))
* 📧 | Mailserver |
* 👤 | Kundenpanel | ([https://mein.cloudcrown.ch](https://mein.cloudcrown.ch))

Die Seite wird alle **15 Minuten** automatisch über [GitHub Actions](https://github.com/features/actions) aktualisiert.

---

## ⚙️ Technisches Setup

* `status.json` wird automatisiert erstellt (per Bash & Curl)
* `uptime-history.json` speichert Statusverläufe (0 = offline, 1 = online)
* `index.html` zeigt den Status per JavaScript live an
* Uptime-Historie wird über Balkendiagramm dargestellt
* Badges werden über [`shields.io`](https://shields.io) aus JSON-Dateien generiert

Du kannst den Code gern als Vorlage für dein eigenes Hosting-Projekt nutzen 🎯

---

## 📬 Kontakt

Betrieben von [CloudCrown Hosting](https://www.cloudcrown.ch)
📧 [support@cloudcrown.ch](mailto:support@cloudcrown.ch)

---

## 📄 Lizenz

MIT License – frei verwendbar mit Quellenangabe.

---

### 📃 Hinweis für Entwickler

Die Seite verwendet durchgehend die Schriftart **Montserrat** (eingebunden via Google Fonts).
Falls du eigene Anpassungen vornimmst, findest du die Font-Definition im `<head>` der `index.html` Datei:

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  body {
    font-family: 'Montserrat', sans-serif;
  }
</style>
```
