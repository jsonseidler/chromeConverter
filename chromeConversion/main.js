// let header = document.querySelector('#headerOne');
// header.setAttribute('class', 'red');

const url = 'http://api.mathjs.org/v4/';

const answer = document.querySelector('#answer');

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

const data = {
  expr: '5.08 cm in inch',
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
    return data.json();
  })
  .then(res => {
    console.log(res);
    answer.innerHTML = res.result;
  })
  .catch(error => {
    console.log(error);
  });
