function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 

document.getElementById('triangle-calculation-card').addEventListener('mouseover', function(){
    document.getElementById('triangle-calculation-card').style.backgroundColor = randomColor();
})
document.getElementById('rectangle-calculation-card').addEventListener('mouseover', function(){
    document.getElementById('rectangle-calculation-card').style.backgroundColor = randomColor();
})