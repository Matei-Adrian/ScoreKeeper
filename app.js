const add1 = document.querySelector('#player-one');
const add2 = document.querySelector('#player-two');
const reset = document.querySelector('#reset');
const p = document.querySelector('div p:nth-of-type(1)');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
let team1 = 0;
let team2 = 0;
const maxScore = document.querySelector('#select-score');

add1.addEventListener('click', function () {
    span1.innerText = `${++team1}`;
    if (team1 === maxVal) {
        span1.style.color = 'green';
        span2.style.color = 'red';
        add1.disabled = true;
        add2.disabled = true;
        add1.style.background = `rgba(25, 114, 120, 0.5)`;
        add2.style.background = `rgba(196, 69, 54, 0.5)`;
    }
});
add2.addEventListener('click', function () {
    span2.innerText = `${++team2}`;
    if (team2 === maxVal) {
        span1.style.color = 'red';
        span2.style.color = 'green';
        add2.disabled = true;
        add1.disabled = true;
        add1.style.background = `rgba(25, 114, 120, 0.5)`;
        add2.style.background = `rgba(196, 69, 54, 0.5)`;
    }
});
reset.addEventListener('click', function () {
    span1.style.color = 'black';
    span2.style.color = 'black';
    team1 = 0;
    team2 = 0;
    span1.innerText = team1;
    span2.innerText = team2;
    add1.disabled = false;
    add2.disabled = false;
    add1.style.background = `rgb(25, 114, 120)`;
    add2.style.background = `rgb(196, 69, 54)`;
});
let maxVal = 5;
maxScore.addEventListener('change', function (e) {
    if (e.target.value === 'default') {
        maxVal = 5;
    } else if (e.target.value === 'second') {
        maxVal = 6;
    } else if (e.target.value === 'third') {
        maxVal = 7;
    } else if (e.target.value === 'fourth') {
        maxVal = 8;
    } else if (e.target.value === 'fifth') {
        maxVal = 9;
    } else {
        maxVal = 10;
    }
});

