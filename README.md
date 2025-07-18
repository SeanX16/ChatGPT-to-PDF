# ChatGPT-to-PDF

🌐 English | [中文](./README-zh.md)

A Tampermonkey userscript that inserts a **Save as PDF** button into ChatGPT UI, redirecting copied messages to [paste2pdf.net](https://paste2pdf.net) for instant PDF conversion.

## ✅ Features

- 🧠 Seamlessly integrated with ChatGPT top bar UI
- 🖼 Opens paste2pdf.net in a **popup window**
- 🔁 Button auto-restores itself after UI re-render (MutationObserver based)
- ⚡ Automatically clicks the red "1-Click PDF" button

## 📦 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Click to install [latest version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-latest.user.js)
3. Or pick from historical versions below:

   All version history and download links are now maintained in a separate changelog file:
   
   👉 [View Full Version Changelog »](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/README-en.md)

## 🛠 Usage

1. In ChatGPT, click the "Copy" button on any message you want to save.
2. Click "Save as PDF" in the top-right bar.
3. A popup will open [paste2pdf.net](https://paste2pdf.net), which previews content and auto-triggers PDF rendering.

> 💡 Recommended to use Microsoft Edge for the cleanest PDF output.

## 🖼 Screenshot

![screenshot](./screenshot-v2.png)

## 📝 License

This project is licensed under the [MIT License](LICENSE).  
Feel free to use, modify, and distribute it with proper attribution.
