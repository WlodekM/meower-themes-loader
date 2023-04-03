
    // inject a CSS block of code or request an external CSS file
    function injectCSS(_rule, _cb){

      // it's a remote file if ".path" is defined 
      if (_rule.path){

          var el = document.createElement('link');

          el.setAttribute('type', 'text/css');
          el.setAttribute('rel', 'stylesheet');
          el.onload = _cb;
          el.onerror = function(){
              console.error("Code-Injector [CSS] - Error loading: " + _rule.path);
              _cb();
          };

          el.href = appendCache(_rule.path);
          
          document.head.append(el);
      }
      else{

          var el = document.createElement('style');
              el.textContent = _rule.code;

          document.head.append(el);
      }
  }

  function button() {
    injectCSS({code:'/*Hello World*/'})
  }
