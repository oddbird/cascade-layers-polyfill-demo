const inputs = document.querySelectorAll(
  'input[type="radio"][name="stylesheet"]',
);

const removeCSS = (type) => {
  const oldCSS = document.getElementById(`${type}-css`);
  oldCSS?.parentNode?.removeChild(oldCSS);
};

const addCSS = (type) => {
  const newCSS = document.createElement('link');
  newCSS.rel = 'stylesheet';
  newCSS.type = 'text/css';
  newCSS.href = `./dist/${type}.css`;
  newCSS.id = `${type}-css`;
  document.head.appendChild(newCSS);
};

inputs.forEach(function (i) {
  i.addEventListener('change', function (el) {
    switch (el.target.value) {
      case 'plain':
        removeCSS('polyfilled');
        addCSS('plain');
        break;
      case 'polyfilled':
        removeCSS('plain');
        addCSS('polyfilled');
        break;
    }
  });
});
