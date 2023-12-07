const num = document.querySelectorAll('.num');
const btn = document.querySelectorAll('.button');
const output = document.querySelectorAll('.output');

function fizzbuzz() {
    if (num.value >= 1) {
        for (i = 1, i <= num.value, i++)
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}

btn.addEventListener('click', fizzbuzz);