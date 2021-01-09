let x = 1;
let y = 1;

const p1_button = document.querySelector('#p1button');
const p1_score = document.querySelector('#score1');
const reset = document.querySelector('#reset');
const p2_button = document.querySelector('#p2button');
const p2_score = document.querySelector('#score2');
const aim = document.querySelector('#sel1')


p1_button.addEventListener('click', function (e) {
    p1_score.innerHTML = x++;
    if (Number(p1_score.innerHTML) === Number(aim.value)) {
        p1_score.style.color = "green";
        p2_score.style.color = "red";
        p2_button.disabled = true;
        p1_button.disabled = true;
    }
})

p2_button.addEventListener('click', function () {
    p2_score.innerHTML = y++;
    if (Number(p2_score.innerHTML) === Number(aim.value)) {
        p1_score.style.color = "red";
        p2_score.style.color = "green";
        p2_button.disabled = true;
        p1_button.disabled = true;
    }
})

reset.addEventListener('click', function () {
    x = 1;
    y = 1;
    p2_score.innerHTML = 0;
    p1_score.innerHTML = 0;
    p1_score.style.color = null;
    p2_score.style.color = null;
    p2_button.disabled = false;
    p1_button.disabled = false;
})







