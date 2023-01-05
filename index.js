function outcome() {
  let num1 = Number(window.document.getElementById('num-one').value)
  let num2 = Number(window.document.getElementById('num-two').value)
  let cal = 0
  
  if (window.document.getElementById('box1').checked) {
    cal = num1 + num2
  }
  else if (window.document.getElementById('box2').checked) {
    cal = num1 - num2
  }
  else if (window.document.getElementById('box3').checked) {
    cal = num1 * num2
  }
  else if (window.document.getElementById('box4').checked) {
    cal = num1 / num2 
  }
  window.document.getElementById('resultArea').innerText = cal
}