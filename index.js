const btnEl = document.getElementById("calculate")
const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const numberofpeopleInput = document.getElementById("people")
 const totalSpan = document.getElementById("total")
const perPersonSpan = document.getElementById("perPerson");
function calculateTotal(){
   const billValue = Number (billInput.value) || 0;
   const tipValue = Number (tipInput.value)  || 0;
   const numberofpeopleValue = Number (numberofpeopleInput.value)  || 1;

   const totalValue  = billValue * (1 + tipValue / 100);
  const perPersonValue = totalValue / numberofpeopleValue; 

   totalSpan.innerText = totalValue.toFixed(2);
   perPersonSpan.innerText = perPersonValue.toFixed(2);

}



btnEl.addEventListener("click", calculateTotal);
billInput.addEventListener("input", calculateTotal);
tipInput.addEventListener("input", calculateTotal);
numberofpeopleInput.addEventListener("input", calculateTotal);
