let bgBody = document.getElementById('bgBody');
const btn = document.getElementById('randomColor');

btn.addEventListener('click', () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
})
