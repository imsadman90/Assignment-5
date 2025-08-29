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


// Coins & Call Buttons
const coinNumber = document.getElementById('coinValue');
let coinCount = parseInt(coinNumber.innerText);
console.log("Initial Coins:", coinCount);

const callButtons = document.getElementsByClassName('call-btn');
const historyList = document.getElementById('call-history-list');
const clearHistoryBtn = document.getElementById('clear-history');

const callHistoryData = [];
console.log("Initial Call History:", callHistoryData);


// Call Function
for (let i = 0; i < callButtons.length; i++) {
   let btn = callButtons[i];
   btn.addEventListener('click', function () {
      const card = btn.parentElement.parentElement;
      const serviceName = card.querySelector('.service-name').innerText;
      const serviceNumber = card.querySelector('.service-number').innerText;

      console.log("Trying to call:", serviceName, serviceNumber);

      if (coinCount >= 20) {
         coinCount -= 20;
         coinNumber.innerText = coinCount;
         alert("Calling " + serviceName + " at " + serviceNumber + "...");
         console.log("Call Success:", serviceName, serviceNumber, "| Remaining Coins:", coinCount);

         const data = {
            name: serviceName,
            number: serviceNumber,
            time: new Date().toLocaleTimeString()
         }
         callHistoryData.push(data);
         console.log("Call Added to History:", data);

         displayCallHistory();

      } else {
         alert("Not enough coins! You need at least 20 coins to make a call.");
         console.log("Call Failed: Not enough coins");
      }
   });
}


// Call History
function displayCallHistory() {
   historyList.innerHTML = "";
   console.log("🔄 Updating Call History Display...");

   for (const data of callHistoryData) {
      const div = document.createElement("div");
      div.innerHTML = `
         <div class="rounded-xl flex justify-between bg-gray-100 items-center p-2 lg:gap-2">
            <div>
               <h1 class="font-semibold">${data.name}</h1>
               <p class="text-gray-500">${data.number}</p>
            </div>
            <p class="text-sm">${data.time}</p>
         </div>
      `;
      historyList.appendChild(div);
   }

   console.log("Current Call History:", callHistoryData);
}


// Clear History
clearHistoryBtn.addEventListener('click', function () {
   callHistoryData.length = 0;
   displayCallHistory();
   console.log(" Call History Cleared!");
});