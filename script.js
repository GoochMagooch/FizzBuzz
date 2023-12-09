const num = document.querySelector('.num');
const btn = document.querySelector('.button');
const output = document.querySelector('.output');

function fizzBuzz() {
    if (num.value >= 1) {
        for (i = 1; i <= num.value; i++) {
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
    } else {
        alert('enter a number please');
    }
}

btn.addEventListener('click', fizzbuzz);