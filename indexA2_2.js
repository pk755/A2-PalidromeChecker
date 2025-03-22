function checkPalindrome() {
    const input = document.getElementById('numberInput').value.trim();
    const result = document.getElementById('result');
  
    if (!/^\d+$/.test(input)) {
      result.textContent = "Please enter only numbers.";
      result.style.color = "red";
      return;
    }
  
    const reversed = input.split('').reverse().join('');
    if (input === reversed) {
      result.textContent = "It is a palindrome!";
      result.style.color = "green";
    } else {
      result.textContent = "It is not a palindrome.";
      result.style.color = "red";
    }
  }
  