function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').innerText = '0';
  }
  
  function calculateResult() {
    let display = document.getElementById('display');
    try {
      display.innerText = eval(display.innerText);
    } catch (error) {
      display.innerText = 'Error';
    }
  }
  