import { useEffect, useRef } from "react";
import Canvas from "./Canvas";
import DownloadButton from "./DownloadButton";
import { drawCanvasImage } from "../utils/drawing";

export default function CanvasImage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const size = 300;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawCanvasImage(ctx, size);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Canvas canvasRef={canvasRef} size={size} />
      <br />
      <DownloadButton canvasRef={canvasRef} />
    </div>
  );
}