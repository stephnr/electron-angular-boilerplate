(function() {
  'use strict';

  function import_file(type, path) {
    if(type === 'script') {
      var resource = document.createElement('script');
      resource.setAttribute('type', 'text/javascript');
      resource.setAttribute('src', path.join(__dirname, 'public', path));
      document.body.appendChild(resource);
    } else if(type === 'stylesheet') {
      var resource = document.createElement('link');
      resource.setAttribute('rel', 'stylesheet');
      resource.setAttribute('href', path.join(__dirname, 'public', path));
      document.head.appendChild(resource);
    } else {
      console.error('Unsupported type provided to import', type);
    }
  };
})();
