# ChatGPT-to-PDF

Tampermonkey userscript that inserts a "Save as PDF" button into ChatGPT UI, which redirects content to [https://paste2pdf.net](https://paste2pdf.net) for PDF saving.

## ✅ Features

- 🧠 Seamless integration into ChatGPT top bar UI
- 📄 Opens paste2pdf.net in new tab for PDF saving
- 🔁 Automatically re-appears after ChatGPT UI rerenders (MutationObserver-based)

## 📦 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Click [here to install this script](https://github.com/yourname/chatgpt-save-pdf/raw/main/save-chatgpt-to-pdf.user.js)

## 🛠 使用方法

1. 在 ChatGPT 网页中，点击你想保存的每条消息右上角的「复制」按钮；
2. 然后点击页面右上角的「另存为PDF」按钮；
3. 页面将自动跳转到 [paste2pdf.net](https://paste2pdf.net/)，你可以直接在该网页中预览并使用浏览器「打印」保存为 PDF。

> 建议使用 Microsoft Edge 浏览器进行保存，体验最佳。


## 💡 Screenshot

![screenshot](./screenshot.png)
