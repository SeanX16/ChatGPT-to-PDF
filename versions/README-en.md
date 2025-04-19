# Version Changelog

🌐 English | [中文](./versions/README.md)

## 📌 [v1.3.4](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.3.4.user.js)

📅 2025-04-20  
📦 [Install this version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.3.4.user.js)

- Simplified insertion logic: always inserted at the first position in the top toolbar
- Automatically detects duplication to avoid re-insertion or loops
- Safety confirmed: no performance impact or risk of triggering rate limits

---

## 📌 [v1.3.3](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.3.3.user.js)

📅 2025-04-20  
📦 [Install this version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.3.3.user.js)

- PDF button text now supports multilingual display:
  - Simplified Chinese: `另存为PDF`
  - Traditional Chinese: `另存為PDF`
  - Japanese: `PDFとして保存`
  - Korean: `PDF로 저장`
  - All other languages default to English: `Save as PDF`

---

## 📌 [v1.3.2](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.3.2.user.js)

📅 2025-04-20  
📦 [Install this version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.3.2.user.js)

- Added automatic text switching based on page language:
  - Shows “另存为PDF” for Chinese
  - Shows “Save as PDF” for all other languages

---

## 📌 [v1.3.1](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.3.1.user.js)

📅 2025-04-20  
📦 [Install this version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.3.1.user.js)

- Refactored insertion logic:
  - No longer relies on `aria-label`
  - Now uses stable `data-testid` or `id` attributes
  - Compatible with multi-language UI

---

## 📌 [v1.2](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.2.user.js)

📅 2025-04-20  
📦 [Install this version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.2.user.js)

- ChatGPT UI added a new `...` project details button
- Insertion logic updated:
  - Insert PDF button to the left of the details button if it exists
  - Otherwise fallback to the left of the profile button

---

## 📌 [v1.1](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.1.user.js)

📅 2025-04-05  
📦 [Install this version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.1.user.js)

- Switched to opening paste2pdf.net in a popup window
- Automatically clicks the red "1-click PDF" button on page load
- Combines immediate attempt + DOM observer for fast auto-click

---

## 📌 [v1.0](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.0.user.js)

📅 2025-04-05  
📦 [Install this version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.0.user.js)

- First integration with paste2pdf.net
- Uses `setTimeout` to delay red button click
- Opens in popup to avoid redirecting the current page

---

## 📌 [v0.4](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v0.4.user.js)

📅 2025-04-05  
📦 [Install this version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v0.4.user.js)

- Switched to MutationObserver to monitor ChatGPT UI
- Removed polling, greatly improved performance
- Button restores itself after any UI redraw

---

## 📌 [v0.3](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v0.3.user.js)

📅 2025-04-05  
📦 [Install this version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v0.3.user.js)

- Initial implementation of the “Save as PDF” button
- Inserted before profile button
- DOM scanned every second to re-insert when needed
