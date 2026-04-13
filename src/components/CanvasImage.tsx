import { useEffect, useRef } from "react";
import Canvas from "./Canvas";
import DownloadButton from "./DownloadButton";
import { drawCanvasImage } from "../utils/drawing";

export default function CanvasImage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const size = 500; // Keep high quality size, Canvas component handles display scaling

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawCanvasImage(ctx, size);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-full overflow-hidden">
      <Canvas canvasRef={canvasRef} size={size} />
      <DownloadButton canvasRef={canvasRef} />
    </div>
  );
}