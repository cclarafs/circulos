let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas(300, 300);
  background(color(150, 0, 0));
  cor = "color(random(0, 355), random(0, 355), random(0,355))";
  circuloX = [1, 1, 1];
  circuloY = [random(height), random(height), random(height)];
}
function draw() {
  fill(cor);

  // console.log(circuloX length);
  for (let contador in circuloX) {
    console.log(contador);
    circle(circuloX[contador], circuloY[contador], 50);
    circuloX[contador] += random(0, 3);
    circuloY[contador] += random(-3, 3);

    if (circuloX[contador] >= width) {
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  }

  if (mouseIsPressed) {
    cor = color(random(0, 355), random(0, 355), random(0, 355), random(0, 100));
  }
}