document.getElementById("btn-log").addEventListener("click", function (event) {
  event.preventDefault();

  const mobile = 12345678910;
  const pin = 1234;

  const phoneNumber = document.getElementById("phoneNumber").value;
  // console.log(typeof(phoneNumber)); //string
  const intPhone = parseInt(phoneNumber);
  const pinNumber = document.getElementById("pinNumber").value;
  const intPin = parseInt(pinNumber);

  if (intPhone === mobile && intPin === pin) {
    window.location.href = "./home.html";
  } else {
    const alertBox = document.getElementById("alertBox");
    alertBox.innerHTML = `<div role="alert" class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Error! Phone Number or PIN is incorrect.</span>
</div>`;
  }
});
