const btn = document.getElementById('button');

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet', 'pink', 'aqua', 'beige', 'crimson', 'cyan', 'gold', 'greenyellow', 'khaki', 'lightgreen', 'paleturquoise'];

function change() {
  document.body.style.background = rainbow[Math.floor(17*Math.random())];
}

btn.addEventListener('click', change);