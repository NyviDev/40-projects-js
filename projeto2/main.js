let displayValue = document.getElementById('displayValue');
let currentValue = 0;

let botoes = document.querySelectorAll('.btn');

botoes.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const option = e.currentTarget.classList;

        if(option.contains("decrease")) {
            currentValue --;
        } else if (option.contains("increase")){
            currentValue ++;
        } else {
            currentValue = 0;
        }

        if(currentValue > 0) {
            displayValue.style.color = '#0f0';
        } else if (currentValue < 0) {
            displayValue.style.color = '#f00';
        } else {
            displayValue.style.color = '#fff';
        }

        displayValue.textContent = currentValue;

    })
})

/*
const increase = document.getElementById('increase');
const reser = document.getElementById('reset');
const decrease = document.getElementById('decrease');

increase.addEventListener('click', () => {
    currentValue += 1;
    console.log(currentValue);
    displayValue.innerHTML = currentValue;
})

decrease.addEventListener('click', () => {
    currentValue -= 1;
    console.log(currentValue);
    displayValue.innerHTML = currentValue;
})

reset.addEventListener('click', () => {
    currentValue = 0;
    console.log(currentValue);
    displayValue.innerHTML = currentValue;
    
})

*/

