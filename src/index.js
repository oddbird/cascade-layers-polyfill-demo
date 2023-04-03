const inputs = document.querySelectorAll('input');

inputs.forEach(function (i) {
  i.addEventListener('click', function (el) {
    if (
      document.querySelector('input[name="stylesheet"]:checked').value ===
      document.getElementById('polyfilled').value
    ) {
      let remove = document.getElementById('raw');
      remove ? remove.parentNode.removeChild(remove) : '';

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = '../dist/polyfilled.css';
      link.id = 'polyfilled-css';

      document.head.appendChild(link);
    } else {
      console.log(
        document.querySelector('input[name="stylesheet"]:checked').value,
        document.getElementById('polyfilled'),
      );
      let remove = document.getElementById('polyfilled-css');
      remove.parentNode ? remove.parentNode.removeChild(remove) : '';
     
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = '../dist/raw.css';
      link.id = 'raw';

      document.head.appendChild(link);
    }
  });
});
