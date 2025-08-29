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