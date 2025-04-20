function checkChar() {
    const input = document.getElementById("charInput").value.toLowerCase();
    const result = document.getElementById("result");
  
    if (!input.match(/[a-z]/i)) {
      result.textContent = "Please enter a valid alphabet character.";
      result.className = "alert alert-warning";
      result.classList.remove("d-none");
      return;
    }
  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    if (vowels.includes(input)) {
      result.textContent = `"${input.toUpperCase()}" is a Vowel.`;
      result.className = "alert alert-success";
    } else {
      result.textContent = `"${input.toUpperCase()}" is a Consonant.`;
      result.className = "alert alert-info";
    }
  
    result.classList.remove("d-none");
  }
  