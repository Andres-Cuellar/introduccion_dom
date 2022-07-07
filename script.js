let starValue;

function messageCLG(value) {
  console.log("Haz presionado la opción: ", value);
  starValue = value;
  console.log(starValue);
}

function thankYou() {
  let container = document.querySelector(".container");
  container.innerHTML = `
  <img src="/img/illustration-thank-you.svg" alt="thank you">  
  <p class="container__result"> You selected out ${starValue} of 5</p>
  <h1>Thank you!</h1>
  <p>We appreciate you taking the time to give a rating.
  If you ever need more support, don't hesitate to get in touch!</p>
  `;
}
