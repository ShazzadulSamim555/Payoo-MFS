
// document.getElementById('btn-transferMoney').addEventListener('click', function (event){
//     event.preventDefault();
//     const pin=1234;
//     const currentBalance=(document.getElementById('current-balance'));
//     const currentBalance2=parseInt(currentBalance.innerText);

//     const accountNumber= (document.getElementById('account-number').value);
//     const transferAmount= parseInt(document.getElementById('transfer-amount').value);
//     const pinNumber= parseInt(document.getElementById('pin-number').value);

//     if(pinNumber === pin){
//         if(accountNumber.length != 11){
//             alert('Invalid, Please Enter 11-digit Account Number');
//         }
//         else{
//             if(transferAmount <= currentBalance2){
//                 const newBalance= currentBalance2- transferAmount;
//                 currentBalance.innerText= newBalance;
//             }
//             else{
//                 alert("⚠️ Insufficient Balance!");
//             }
//         }
        
//     }
//     else{
//         alert("❌ Invalid PIN Number. Please try again.");
//     }
// })