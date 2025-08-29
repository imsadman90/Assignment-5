const hearts = document.querySelectorAll('.fa-heart');
const heartCountSpan = document.getElementById('heartCount');

for (const heart of hearts) {
   heart.addEventListener('click', function () {
      if (heart.style.color === 'red') {
         heart.style.color = '';
         console.log("Heart unliked ", heart);
      } else {
         heart.style.color = 'red';
         let count = parseInt(heartCountSpan.innerText);
         heartCountSpan.innerText = count + 1;
         console.log("Heart liked | Total Hearts:", heartCountSpan.innerText);
      }
   })
}

// Copy Buttons
let copyCount = 0;
const copyButtons = document.getElementsByClassName("copyBtn");

for (let i = 0; i < copyButtons.length; i++) {
   copyButtons[i].onclick = function () {
      const card = copyButtons[i].parentElement.parentElement;
      const serviceNumber = card.querySelector('.service-number').innerText;
      navigator.clipboard.writeText(serviceNumber);

      copyCount += 1;
      document.getElementById("copyCount").innerText = copyCount;
      document.getElementById("nav-copy-btn").style.backgroundColor = "darkgreen";

      console.log("Copied Service Number:", serviceNumber, "| Total Copies:", copyCount);
   };
}