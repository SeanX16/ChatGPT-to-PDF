# ChatGPT-to-PDF

🌐 [English](./README.md) | 中文

这是一个 Tampermonkey 脚本，为 ChatGPT 网页插入「另存为PDF」按钮，并跳转至 [paste2pdf.net](https://paste2pdf.net) 实现一键 PDF 导出。

## ✅ 功能特点

- 🧠 按钮原生集成进 ChatGPT 顶部导航栏 UI
- 🖼 新窗口打开 paste2pdf.net，非新标签页
- 🔁 页面变动后按钮自动恢复（MutationObserver 实现）
- ⚡ 自动点击 paste2pdf 页面红色「1-Click PDF」按钮

## 📦 安装方式

1. 安装 [Tampermonkey 插件](https://www.tampermonkey.net/)
2. 一键安装 [最新版脚本](https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-latest.user.js)
3. 或从以下历史版本中选择：

   所有版本更新记录与下载链接现已移至专门的版本更新日志页面：
   👉 [点击查看完整版本更新记录 »](https://github.com/SeanX16/ChatGPT-to-PDF/blob/main/versions/README.md)

## 🛠 使用方法

1. 在 ChatGPT 页面中，点击你想保存的消息右上角「复制」按钮；
2. 点击右上角新增的「另存为PDF」按钮；
3. 页面会自动打开 [paste2pdf.net](https://paste2pdf.net)，并自动点击红色按钮生成 PDF。

> 💡 推荐使用 Microsoft Edge 浏览器保存 PDF，效果最佳。

## 🖼 截图

![screenshot](./screenshot-v2.png)
