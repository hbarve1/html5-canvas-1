import "./style.css";

const canvas = document.createElement("canvas");

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;
canvas.style.position = "absolute";
canvas.style.top = "0";
canvas.style.left = "0";
// canvas.style.width = `${windowWidth}px`;
// canvas.style.height = `${windowHeight}px`;

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d")!;

// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, 800, 600);

window.addEventListener("resize", () => {
  // canvas.style.width = `${window.innerWidth}px`;
  // canvas.style.height = `${window.innerHeight}px`;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.lineWidth = 5;
// ctx.arc(100, 100, 50, 0, Math.PI * 2);
// ctx.stroke();

const mouse: {
  x: undefined | number;
  y: undefined | number;
} = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  // ctx.beginPath();
  // ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  // ctx.stroke();
  // drawCircle();
  // console.log(mouse);
});

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  // console.log(mouse);
  // drawCircle();
});

function drawCircle() {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouse.x!, mouse.y!, 50, 0, Math.PI * 2);
  // ctx.arc(130, 100, 50, 0, Math.PI * 2);
  // ctx.stroke();
  ctx.fill();
}

// drawCircle();
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  drawCircle();
}
animate();
