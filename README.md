# ChatGPT-to-PDF

Tampermonkey userscript that inserts a "Save as PDF" button into ChatGPT UI, which redirects content to [https://paste2pdf.net](https://paste2pdf.net) for PDF saving.

## ✅ Features

- 🧠 Seamless integration into ChatGPT top bar UI
- 📄 Opens paste2pdf.net in new tab for PDF saving
- 🔁 Automatically re-appears after ChatGPT UI rerenders (MutationObserver-based)

## 📦 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Install [the latest version](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-latest.user.js)  of the script, or choose from: 

| 版本 | 下载链接 | 描述 |
|------|----------|------|
| v1.1 ✅ | [ChatGPT-to-PDF-button-v1.1.user.js](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-v1.1.user.js) | 新窗口打开 paste2pdf.net，极速自动点击红色按钮（立即尝试 + DOM 监听双保险） |
| v1.0 | [ChatGPT-to-PDF-button-v1.0.user.js](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-v1.0.user.js) | 新窗口打开 paste2pdf.net，并延时自动点击红色按钮（setTimeout 实现） |
| v0.4 | [ChatGPT-to-PDF-button-v0.4.user.js](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-v0.4.user.js) | 使用 MutationObserver，零轮询，自动保持按钮 |
| v0.3 | [ChatGPT-to-PDF-button-v0.3.user.js](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-v0.3.user.js) | 定时检测，每秒检查一次 DOM 重新插入按钮 |


## 🛠 使用方法

1. 在 ChatGPT 网页中，点击你想保存的每条消息右上角的「复制」按钮；
2. 然后点击页面右上角的「另存为PDF」按钮；
3. 页面将自动跳转到 [paste2pdf.net](https://paste2pdf.net/)，你可以直接在该网页中预览并使用浏览器「打印」保存为 PDF。

> 建议使用 Microsoft Edge 浏览器进行保存，体验最佳。


## 💡 Screenshot

![screenshot](./screenshot-v2.png)
