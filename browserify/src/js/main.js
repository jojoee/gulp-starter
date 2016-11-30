window.ui = require('./ui');
window.core = require('./core');

console.log('main.js');

document.addEventListener('DOMContentLoaded', function() {
  ui.init();
  core.init();
});
