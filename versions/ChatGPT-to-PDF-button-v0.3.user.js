// ==UserScript==
// @name         ChatGPT-to-PDF button
// @namespace    https://github.com/SeanX16/ChatGPT-to-PDF
// @version      0.3
// @author       SeanX16
// @description  在“个人资料”按钮左侧插入“另存为PDF”按钮，点击后打开 paste2pdf.net。采用定时检测，页面重渲染时能自动重插入。
// @match        https://chatgpt.com/*
// @icon         https://chatgpt.com/favicon.ico
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-v0.3.user.js
// @updateURL    https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-latest.user.js
// ==/UserScript==

(function() {
  'use strict';

  // 创建按钮元素的函数
  function createPdfButton() {
    const btn = document.createElement('button');
    btn.id = 'my-pdf-button';
    // 模仿共享按钮的样式，使高度、字体、内边距与原生一致
    btn.className = 'btn relative btn-secondary text-token-text-primary';
    // 去掉右侧边距
    btn.style.margin = '0';

    const innerDiv = document.createElement('div');
    innerDiv.className = 'flex w-full items-center justify-center gap-1.5';

    // 创建 SVG 图标（尺寸 20x20，与共享按钮一致）
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

    const textNode = document.createTextNode('另存为PDF');

    innerDiv.appendChild(svg);
    innerDiv.appendChild(textNode);
    btn.appendChild(innerDiv);

    // 按钮点击打开 paste2pdf.net
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.open('https://paste2pdf.net/', '_blank');
    });

    return btn;
  }

  // 每秒检测一次，如果页面中不存在我们的按钮，则在“个人资料”按钮前插入
  function ensurePdfButton() {
    // 使用 aria-label 包含“个人资料”来查找按钮
    const profileBtn = document.querySelector('button[aria-label*="个人资料"]');
    if (profileBtn) {
      const parent = profileBtn.parentElement;
      // 如果我们的按钮不在该容器内，则插入
      if (!parent.querySelector('#my-pdf-button')) {
        const btn = createPdfButton();
        // 插入到“个人资料”按钮之前
        profileBtn.insertAdjacentElement('beforebegin', btn);
      }
    }
  }

  // 使用 setInterval 每1000ms检测一次
  setInterval(ensurePdfButton, 1000);

  // 另外，在页面加载时也先调用一次
  ensurePdfButton();

})();
