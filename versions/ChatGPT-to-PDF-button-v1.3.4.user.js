// ==UserScript==
// @name         ChatGPT-to-PDF Button
// @namespace    https://github.com/SeanX16/ChatGPT-to-PDF
// @version      1.3.4
// @author       SeanX16
// @description  在 ChatGPT 插入“另存为PDF”按钮，并在新窗口打开 paste2pdf.net 后极速自动点击红色按钮
// @match        https://chatgpt.com/*
// @match        https://paste2pdf.net/*
// @icon         https://chatgpt.com/favicon.ico
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/versions/ChatGPT-to-PDF-button-v1.3.4.user.js
// @updateURL    https://raw.githubusercontent.com/SeanX16/ChatGPT-to-PDF/main/ChatGPT-to-PDF-button-latest.user.js
// ==/UserScript==

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
    
      // —— 多语言适配 —— 
      const lang = (document.documentElement.lang || navigator.language || '').toLowerCase();
      let labelText;
    
      if (lang.startsWith('zh-cn') || lang.startsWith('zh-sg')) {
        // 简体
        labelText = '另存为PDF';
      } else if (
        lang.startsWith('zh-tw') ||
        lang.startsWith('zh-hk') ||
        lang.startsWith('zh-cht') ||
        lang.startsWith('zh-hant')
      ) {
        // 繁体（台湾／香港）
        labelText = '另存為PDF';
      } else if (lang.startsWith('ja')) {
        // 日语
        labelText = 'PDFとして保存';
      } else if (lang.startsWith('ko')) {
        // 韩语
        labelText = 'PDF로 저장';
      } else {
        // 其他一律英文
        labelText = 'Save as PDF';
      }
      // ————————————
    
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
      path.setAttribute(
        'd',
        'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 ' +
        '1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 ' +
        '12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 ' +
        '1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 ' +
        '1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
      );
      svg.appendChild(path);
    
      inner.appendChild(svg);
      inner.appendChild(document.createTextNode(labelText));
    
      btn.appendChild(inner);
      btn.addEventListener('click', e => {
        e.stopPropagation();
        window.open(
          'https://paste2pdf.net/',
          'paste2pdf-popup',
          'width=1000,height=800'
        );
      });
    
      return btn;
    }        

    function ensurePdfButton() {
      // 找到顶栏按钮容器
      const toolbar = document.querySelector('div.flex.items-center.gap-2.pe-1.leading-\\[0\\]');
      if (!toolbar) return;
    
      // 如果第一个已经是我们插的按钮，就什么都不做
      if (toolbar.firstElementChild?.id === 'my-pdf-button') {
        return;
      }
    
      // 否则先删掉旧的，再 prepend 新的
      document.getElementById('my-pdf-button')?.remove();
      const btn = createPdfButton();
      toolbar.prepend(btn);
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
