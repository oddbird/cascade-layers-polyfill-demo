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
        document.documentElement.classList.remove('polyfilled');
        break;
      case 'polyfilled':
        removeCSS('plain');
        addCSS('polyfilled');
        document.documentElement.classList.add('polyfilled');
        break;
    }
  });
});

// the support function
// - returns true or false depending on support
// - sets a class on the root element
// @see https://codepen.io/miriamsuzanne/pen/poLOYrz
const checkLayerSupport = () => {
  const varName = '--js-test-layer-support';

  // inject a style element with a layered variable
  const style = document.createElement('style');
  style.textContent = `@layer {:root{${varName}: true;}}`;
  document.head.appendChild(style);

  // check if the variable is set
  const hasSupport = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .includes('true');

  // remove the style element
  document.head.removeChild(style);

  // add a root class
  const supportClass = hasSupport ? 'layers-true' : 'layers-false';
  document.documentElement.classList.add(supportClass);

  // return true if supported
  return hasSupport;
};

// check for @layer support
checkLayerSupport();
