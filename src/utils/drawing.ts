export function drawCanvasImage(
  ctx: CanvasRenderingContext2D,
  size: number
) {
  // 🔴 Red primary diagonal
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size, size);
  ctx.stroke();

  // 🟢 Green secondary diagonal
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, size);
  ctx.lineTo(size, 0);
  ctx.stroke();

  // 🔵 Blue bottom triangle
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(0, size);
  ctx.lineTo(size / 2, size / 2);
  ctx.lineTo(size, size);
  ctx.closePath();
  ctx.fill();
}