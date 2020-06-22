const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const auth = document.querySelector('#auth').value;
  console.log(email, auth);

  fetch('https://api.kelta.com/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `Login=getRewardTotalDay&email=${email}&password=${auth}`,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

fetch('https://api.kelta.com/getRewardTotalDay', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body:
    'metoda=getRewardTotalDay&token=f4754a04a0ffdae8ea040a9dc0d95269&currency_id=2&limit=7',
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
