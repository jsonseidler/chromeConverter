// let header = document.querySelector('#headerOne');
// header.setAttribute('class', 'red');
document.addEventListener('DOMContentLoaded', function() {
  console.log('html has loaded');

  function convert() {
    const answer = document.querySelector('#answer');
    const url = 'http://api.mathjs.org/v4/';
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let num = document.getElementById('num').value;

    console.log(from);
    console.log(to);
    console.log(num);

    let query = `${num} ${from} in ${to}`;

    const data = {
      expr: query,
      precision: 14
    };

    const otherPram = {
      headers: {
        'content-type': 'application/json;'
      },
      body: JSON.stringify(data),
      method: 'POST'
    };

    fetch(url, otherPram)
      .then(data => {
        console.log('first');
        return data.json();
      })
      .then(res => {
        console.log('second');
        return (answer.innerHTML = res.result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const drop = document.getElementById('dropbtn');
  // .addEventListener('click', convert);

  drop.addEventListener('click', convert);
});

// const data = {
//   expr: [
//     'a = 1.2 * (2 + 4.5)',
//     'a / 2',
//     '5.08 cm in inch',
//     'sin(45 deg) ^ 2',
//     '9 / 3 + 2i',
//     'b = [-1, 2; 3, 1]',
//     'det(b)'
//   ],
//   precision: 14
// };

// const data = {
//   expr: '5.08 cm in inch',
//   precision: 14
// };

// const otherPram = {
//   headers: {
//     'content-type': 'application/json;'
//   },
//   body: JSON.stringify(data),
//   method: 'POST'
// };

// fetch(url, otherPram)
//   .then(data => {
//     return data.json();
//   })
//   .then(res => {
//     console.log(res);
//     answer.innerHTML = res.result;
//   })
//   .catch(error => {
//     console.log(error);
//   });
