// ==UserScript==
// @name         ChatGPT-to-PDF button
// @namespace    https://github.com/SeanX16/ChatGPT-to-PDF
// @version      0.4
// @author       SeanX16
// @description  使用 MutationObserver 监听 DOM 变化，只在需要时重插入按钮，避免定时轮询开销。
// @match        https://chatgpt.com/*
// @icon         https://chatgpt.com/favicon.ico
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-v0.4.user.js
// @updateURL    https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-latest.user.js
// ==/UserScript==


(function() {
  'use strict';

  // 创建按钮的工厂函数
  function createPdfButton() {
    const btn = document.createElement('button');
    btn.id = 'my-pdf-button';
    btn.className = 'btn relative btn-secondary text-token-text-primary';
    btn.style.margin = '0'; // 紧贴右侧按钮
    const inner = document.createElement('div');
    inner.className = 'flex w-full items-center justify-center gap-1.5';
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width','20'); svg.setAttribute('height','20');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('fill','none');
    svg.setAttribute('stroke-width','1.5');
    svg.setAttribute('stroke','currentColor');
    svg.classList.add('icon-sm');
    svg.style.marginRight = '4px';
    const path = document.createElementNS(svgNS,'path');
    path.setAttribute('stroke-linecap','round');
    path.setAttribute('stroke-linejoin','round');
    path.setAttribute('d','M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z');
    svg.appendChild(path);
    inner.appendChild(svg);
    inner.appendChild(document.createTextNode('另存为PDF'));
    btn.appendChild(inner);
    btn.addEventListener('click', e => {
      e.stopPropagation();
      window.open('https://paste2pdf.net/', '_blank');
    });
    return btn;
  }

  // 把按钮插到“个人资料”按钮左侧
  function ensurePdfButton() {
    const profileBtn = document.querySelector('button[aria-label*="个人资料"]');
    if (!profileBtn) return;
    if (!profileBtn.previousElementSibling ||
        profileBtn.previousElementSibling.id !== 'my-pdf-button') {
      // 如果前面没有我们按钮，就先删掉旧的再插入新的
      const old = document.getElementById('my-pdf-button');
      old && old.remove();
      const btn = createPdfButton();
      profileBtn.insertAdjacentElement('beforebegin', btn);
    }
  }

  // 首次执行
  ensurePdfButton();

  // 用 MutationObserver 监听整个 body 的子树变化
  const observer = new MutationObserver((mutations) => {
    for (let m of mutations) {
      // 只要“个人资料”按钮或它的父容器发生增删，我们就尝试插入
      if (m.type === 'childList') {
        ensurePdfButton();
        break;
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();
