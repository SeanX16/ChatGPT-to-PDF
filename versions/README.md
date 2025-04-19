# 版本更新日志

## 📌 [v1.3.4](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.3.4.user.js)

📅 2025-04-20

📦 [安装此版本](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.3.4.user.js)

- 插入位置逻辑简化：固定插入到顶部按钮栏的最左侧
- 自动判断是否已插入，避免重复渲染和死循环
- 安全性分析通过：不会造成性能拖慢或触发风控

---

## 📌 [v1.3.3](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.3.3.user.js)

📅 2025-04-20

📦 [安装此版本](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.3.3.user.js)

- PDF 按钮文字现已支持多语言显示：
  - 简体中文：`另存为PDF`
  - 繁體中文：`另存為PDF`
  - 日语：`PDFとして保存`
  - 韩语：`PDF로 저장`
  - 其余语言默认显示为英文：`Save as PDF`

---

## 📌 [v1.3.2](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.3.2.user.js)

📅 2025-04-20

📦 [安装此版本](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.3.2.user.js)

- 新增按钮文字的中英文自动切换：
  - 页面语言为中文时显示“另存为PDF”
  - 其他语言时显示“Save as PDF”

---

## 📌 [v1.3.1](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.3.1.user.js)

📅 2025-04-20

📦 [安装此版本](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.3.1.user.js)

- 调整按钮插入位置的匹配方式：
  - 不再依赖 `aria-label`
  - 改为使用稳定的 `data-testid` 和 `id` 前缀
  - 更加适配不同语言界面

---

## 📌 [v1.2](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.2.user.js)

📅 2025-04-20

📦 [安装此版本](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.2.user.js)

- ChatGPT 页面新增“...”详情按钮
- PDF 按钮的插入逻辑调整为：
  - 如果存在详情按钮，则插入在其左侧
  - 若无，则退回插入到“个人资料”按钮左侧

---

## 📌 [v1.1](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.1.user.js)

📅 2025-04-05

📦 [安装此版本](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.1.user.js)

- 改为以新窗口方式打开 paste2pdf.net（非新标签页）
- 页面加载后自动点击 paste2pdf 的红色按钮（#one-click-btn）
- 使用“立即尝试 + DOM 监听”双保险实现极速自动点击

---

## 📌 [v1.0](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v1.0.user.js)

📅 2025-04-05

📦 [安装此版本](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.0.user.js)

- 第一次集成 paste2pdf.net 自动点击功能
- 使用 `setTimeout` 延迟点击红色按钮
- 页面以 popup 新窗口打开，避免跳转影响

---

## 📌 [v0.4](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v0.4.user.js)

📅 2025-04-05

📦 [安装此版本](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v0.4.user.js)

- 改为使用 MutationObserver 监听 ChatGPT DOM，实现稳定监听，无需轮询，性能开销极低
- 移除定时器轮询，性能更优
- 无论页面怎么重绘，按钮都能自动恢复

---

## 📌 [v0.3](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/ChatGPT-to-PDF-button-v0.3.user.js)

📅 2025-04-05  
📦 [安装此版本](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v0.3.user.js)

- 初始实现「另存为 PDF」按钮
- 插入按钮位置为“个人资料”按钮前
- 每秒轮询一次 DOM，判断是否需要插入
