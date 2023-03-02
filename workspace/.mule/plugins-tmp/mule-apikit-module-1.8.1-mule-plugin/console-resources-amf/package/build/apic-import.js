
      var bp;

      if (window.__console_path__) {
        bp = window.__console_path__;
      } else {
        var st=document.getElementsByTagName('script');
        var au=st[st.length - 1].src;
        bp = au.replace('apic-import.js', '');
      }

      var legacyScriptsCount = 0;
      function styleDocument() {
        document.addEventListener('WebComponentsReady', function() {
          setTimeout(function() {
            function shouldAddDocumentStyle(n) {
              return n.nodeType === Node.ELEMENT_NODE && n.localName === 'style' && !n.hasAttribute('scope');
            }
            const CustomStyleInterface = window.ShadyCSS.CustomStyleInterface;
            const candidates = document.querySelectorAll('style');
            for (let i = 0; i < candidates.length; i++) {
              const candidate = candidates[i];
              if (shouldAddDocumentStyle(candidate)) {
                CustomStyleInterface.addCustomStyle(candidate);
              }
            }
          }, 1000);
        });
      }
      function loadConsoleWhenDone(){
        legacyScriptsCount++
        if(legacyScriptsCount==3 && isLegacy()==true){
          loadConsole();
          styleDocument();
        }
      }
      function addScript(src, onLoadCallback) {
        var s = document.createElement('script');
        s.setAttribute('nomodule', '');
        s.src = bp + src;
        s.onload = onLoadCallback;
        document.body.appendChild(s);
      }
    addScript('./vendor.js',loadConsoleWhenDone);addScript('polyfills/core-js.95bb72a2469a8129765e70e29aaa3d5c.js',loadConsoleWhenDone);addScript('polyfills/systemjs.760c9a81f93e1ad7c34169a9c1865ae0.js',loadConsoleWhenDone);addScript('polyfills/regenerator-runtime.95dc763885f05111a2f88232a2d0cf2d.js',loadConsoleWhenDone);function loadConsole() {try{s = document.createElement('script');s.innerHTML = 'window.importShim = s => import(s)';document.body.appendChild(s);}catch(e){console.log(e);};try{!function(){function e(e,o){return new Promise((function(t,n){document.head.appendChild(Object.assign(document.createElement("script"),{src:e,onload:t,onerror:n},o?{type:"module"}:void 0))}))}var o=[];function t(){"noModule"in HTMLScriptElement.prototype?window.importShim(bp+"api-console-b90c1d37.js"):System.import(bp+"legacy/api-console-073d7357.js")}"fetch"in window||o.push(e(bp+"polyfills/fetch.a1ad5fb96dc0cb61b9454244c9bd7fe6.js",!1)),"noModule"in HTMLScriptElement.prototype&&!("importShim"in window)&&o.push(e(bp+"polyfills/dynamic-import.991be47e17117abb5eb15f5254ad3869.js",!1)),(!("attachShadow"in Element.prototype)||!("getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&o.push(e(bp+"polyfills/webcomponents.ee2261f464b51aff8cdc704a7781c613.js",!1)),!("noModule"in HTMLScriptElement.prototype)&&"getRootNode"in Element.prototype&&o.push(e(bp+"polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",!1)),o.length?Promise.all(o).then(t):t()}()}catch(e){console.log(e);};}
    function isLegacy() {
      const script = document.createElement('script');
      return !('noModule' in script);
    }
    if(isLegacy()==false){
      loadConsole();
    }
    