let bgBody = document.getElementById('bgBody');
const btn = document.getElementById('randomColor');

btn.addEventListener('click', () => {
    console.log("passou")
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("Passou " + randomColor)
    document.body.style.backgroundColor = '#' + randomColor;
})
