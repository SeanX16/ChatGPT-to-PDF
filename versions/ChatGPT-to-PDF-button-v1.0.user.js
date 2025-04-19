// ==UserScript==
// @name         ChatGPT-to-PDF Button
// @namespace    https://github.com/SeanX16/ChatGPT-to-PDF
// @version      1.0
// @author       SeanX16
// @description  在 ChatGPT 页面插入“另存为PDF”按钮，点击后以新窗口打开 paste2pdf.net 等待1s后自动点击红色按钮。使用 MutationObserver 保持按钮稳定。
// @match        https://chatgpt.com/*
// @match        https://paste2pdf.net/*
// @icon         https://chatgpt.com/favicon.ico
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.0.user.js
// @updateURL    https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-latest.user.js
// ==/UserScript==

(function() {
  'use strict';

  // 根据当前域名分别执行不同逻辑
  const domain = window.location.hostname;

  // ============== ChatGPT 页面逻辑 ==============
  if (domain.includes('chatgpt.com')) {
    // 定义插入按钮的函数
    function createPdfButton() {
      const btn = document.createElement('button');
      btn.id = 'my-pdf-button';
      btn.className = 'btn relative btn-secondary text-token-text-primary';
      btn.style.margin = '0'; // 去掉多余间距

      const inner = document.createElement('div');
      inner.className = 'flex w-full items-center justify-center gap-1.5';

      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', '20');
      svg.setAttribute('height', '20');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke-width', '1.5');
      svg.setAttribute('stroke', 'currentColor');
      svg.classList.add('icon-sm');
      svg.style.marginRight = '4px';

      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('d', 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z');
      svg.appendChild(path);

      inner.appendChild(svg);
      inner.appendChild(document.createTextNode('另存为PDF'));
      btn.appendChild(inner);

      // 点击按钮时，以新窗口方式打开 paste2pdf.net
      btn.addEventListener('click', e => {
        e.stopPropagation();
        // 新窗口打开（popup窗口，宽1000、高800）
        window.open('https://paste2pdf.net/', 'paste2pdf-popup', 'width=1000,height=800');
      });
      return btn;
    }

    // 插入按钮的函数，插入到“个人资料”按钮前
    function ensurePdfButton() {
      // 这里使用 aria-label 匹配包含“个人资料”的按钮
      const profileBtn = document.querySelector('button[aria-label*="个人资料"]');
      if (!profileBtn) return;
      if (!profileBtn.previousElementSibling || profileBtn.previousElementSibling.id !== 'my-pdf-button') {
        const old = document.getElementById('my-pdf-button');
        old && old.remove();
        const btn = createPdfButton();
        // 插入到目标按钮之前
        profileBtn.insertAdjacentElement('beforebegin', btn);
      }
    }

    // 初次尝试插入
    ensurePdfButton();

    // 用 MutationObserver 监听整个 body 的 DOM 变化，保证按钮在页面重渲染后依然存在
    const observer = new MutationObserver(mutations => {
      for (let m of mutations) {
        if (m.type === 'childList') {
          ensurePdfButton();
          break;
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

  // ============== paste2pdf.net 页面逻辑 ==============
  } else if (domain.includes('paste2pdf.net')) {
    // 当页面加载后自动点击红色按钮（选择器为 "#one-click-btn"）
    window.addEventListener('load', () => {
      // 延时一会儿，等待 red button 渲染出来
      setTimeout(() => {
        const redBtn = document.querySelector('#one-click-btn');
        if (redBtn) {
          redBtn.click();
        } else {
          console.warn('未找到红色按钮 (#one-click-btn)');
        }
      }, 200);
    });
  }
})();
