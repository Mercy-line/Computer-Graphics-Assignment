type CanvasProps = {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  size: number;
};

export default function Canvas({ canvasRef, size }: CanvasProps) {
  return (
    <div className="relative inline-block max-w-full overflow-hidden rounded-lg border-2 border-black">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="block max-w-full h-auto mx-auto"
      />
    </div>
  );
}