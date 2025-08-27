// // Show Add Money form
// document.getElementById("add-money").addEventListener("click", function () {
//   document.getElementById("addmoney-form").classList.remove("hidden");
//   document.getElementById("cashout-form").classList.add("hidden");
//   document.getElementById("transferMoney-form").classList.add("hidden");
// });

// // Show Cash Out form
// document.getElementById("cash-out").addEventListener("click", function () {
//   document.getElementById("cashout-form").classList.remove("hidden");
//   document.getElementById("addmoney-form").classList.add("hidden");
//   document.getElementById("transferMoney-form").classList.add("hidden");
// });
// //show Transfer Money
// document
//   .getElementById("transfer-money")
//   .addEventListener("click", function () {
//     document.getElementById("transferMoney-form").classList.remove("hidden");
//     document.getElementById("addMoney-form").classList.add("hidden");
//       document.getElementById("cashout-form").classList.add("hidden");
//   });

// // Add Money Logic
// document
//   .getElementById("btn-addmoney")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     let currentBalance = document.getElementById("current-balance");
//     let currentBalance2 = parseInt(currentBalance.innerText);

//     const addPin = parseInt(document.getElementById("add-pin").value);
//     const addAmount2 = parseInt(document.getElementById("add-amount").value);
//     const pin = 1234;

//     if (addPin === pin) {
//       let newBalance = addAmount2 + currentBalance2;
//       currentBalance.innerText = newBalance;
//     } else {
//       alert("❌ Invalid PIN Number. Please try again.");
//     }
//   });

// // Cash Out Logic
// document
//   .getElementById("btn-cashout")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     let currentBalance = document.getElementById("current-balance");
//     let currentBalance2 = parseInt(currentBalance.innerText);

//     const cashoutPin = parseInt(document.getElementById("cashout-pin").value);
//     const cashoutAmount2 = parseInt(
//       document.getElementById("cashout-amount").value
//     );
//     const pin = 1234;

//     if (cashoutPin === pin) {
//       if (cashoutAmount2 <= currentBalance2) {
//         let newBalance = currentBalance2 - cashoutAmount2;
//         currentBalance.innerText = newBalance;
//       } else {
//         alert("⚠️ Insufficient Balance!");
//       }
//     } else {
//       alert("❌ Invalid PIN Number. Please try again.");
//     }
//   });
