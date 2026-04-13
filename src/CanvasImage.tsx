import { useEffect, useRef } from "react";

export default function CanvasImage() {
  // 👇 TypeScript: specify the type of the ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // ✅ Safety check (very important in TS)
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const size = 300;

    // 🔴 Draw primary diagonal (Red)
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(size, size);
    ctx.stroke();

    // 🟢 Draw secondary diagonal (Green)
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.lineTo(size, 0);
    ctx.stroke();

    // 🔵 Fill bottom triangle (Blue)
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(0, size);          // bottom-left
    ctx.lineTo(size / 2, size / 2); // center
    ctx.lineTo(size, size);       // bottom-right
    ctx.closePath();
    ctx.fill();

  }, []);

  // 💾 Download function
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        style={{ border: "2px solid black" }}
      />
      <br />
      <button onClick={handleDownload}>
        Download Image
      </button>
    </div>
  );
}