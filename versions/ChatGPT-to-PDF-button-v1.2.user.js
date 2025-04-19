// ==UserScript==
// @name         ChatGPT-to-PDF Button
// @namespace    https://github.com/SeanX16/ChatGPT-to-PDF
// @version      1.2
// @author       SeanX16
// @description  在 ChatGPT 插入“另存为PDF”按钮，并在新窗口打开 paste2pdf.net 后极速自动点击红色按钮
// @match        https://chatgpt.com/*
// @match        https://paste2pdf.net/*
// @icon         https://chatgpt.com/favicon.ico
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.2.user.js
// @updateURL    https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-latest.user.js
// ==/UserScript==


// v1.2 更新内容：
// ChatGPT 网页新加入了“...”的详情按钮，故修改PDF按钮位置，移动到详情按钮左侧
// (没有详情按钮的页面还是按原来的样子插入到头像左侧)

(function() {
  'use strict';

  const domain = window.location.hostname;

  // ——— ChatGPT 页面插按钮 ———
  if (domain.includes('chatgpt.com')) {
    function createPdfButton() {
      const btn = document.createElement('button');
      btn.id = 'my-pdf-button';
      btn.className = 'btn relative btn-secondary text-token-text-primary';
      btn.style.margin = '0';
      const inner = document.createElement('div');
      inner.className = 'flex w-full items-center justify-center gap-1.5';
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS,'svg');
      svg.setAttribute('width','20'); svg.setAttribute('height','20');
      svg.setAttribute('viewBox','0 0 24 24');
      svg.setAttribute('fill','none');
      svg.setAttribute('stroke-width','1.5');
      svg.setAttribute('stroke','currentColor');
      svg.classList.add('icon-sm');
      svg.style.marginRight='4px';
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
        window.open('https://paste2pdf.net/', 'paste2pdf-popup', 'width=1000,height=800');
      });
      return btn;
    }

    function ensurePdfButton() {
      // 先拿到顶部那一行按钮的容器
      const toolbar = document.querySelector('div.flex.items-center.gap-2.pe-1.leading-\\[0\\]');
      if (!toolbar) return;
    
      // 只在这个容器里找“显示项目详情”或“打开对话选项”
      const detailBtn = toolbar.querySelector(
        'button[aria-label="显示项目详情"], button[aria-label="打开对话选项"]'
      );
      // 如果没找到，再退而求其次找“个人资料”
      const profileBtn = detailBtn
        ? detailBtn
        : toolbar.querySelector('button[aria-label*="个人资料"]');
      if (!profileBtn) return;
    
      // 看它前面是不是已经插过一次，不是的话就删旧的、插新的
      const prev = profileBtn.previousElementSibling;
      if (!prev || prev.id !== 'my-pdf-button') {
        document.getElementById('my-pdf-button')?.remove();
        const btn = createPdfButton();
        profileBtn.insertAdjacentElement('beforebegin', btn);
      }
    }

    ensurePdfButton();
    new MutationObserver(ms => {
      for (let m of ms) if (m.type === 'childList') { ensurePdfButton(); break; }
    }).observe(document.body, { childList: true, subtree: true });

  // ——— paste2pdf.net 页面自动点击 ———
  } else if (domain.includes('paste2pdf.net')) {
    function tryClick() {
      const redBtn = document.querySelector('#one-click-btn');
      if (redBtn) {
        redBtn.click();
        return true;
      }
      return false;
    }
    // 先立即尝试
    if (!tryClick()) {
      // 再监听 DOM 变化，按钮一出现就点击
      const obs = new MutationObserver((_, o) => {
        if (tryClick()) o.disconnect();
      });
      obs.observe(document.body, { childList: true, subtree: true });
    }
  }
})();
