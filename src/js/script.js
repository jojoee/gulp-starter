console.log('this is script.js');

function testJs() {
  var jsEle = document.getElementById('js');

  if (jsEle) {
    jsEle.innerHTML = 'javascript: ok';
    jsEle.style.color = '#03B48D';
    console.log('javascript: ok');
  }
}

testJs();
