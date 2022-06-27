let layerTest = document.createElement('style');
let passesTest = false;
layerTest.innerHTML = `@layer browser-syntax-test {
  :root {
    --test: testing;
  }
}`;
// Get the first script tag
var ref = document.querySelector('script');

// Insert our new styles before the first script tag
ref.parentNode.insertBefore(layerTest, ref);

if (
  window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--test')
    .trim() === 'testing'
) {
  passesTest = true;
}

if (passesTest) {
} else {
}
