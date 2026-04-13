type CanvasProps = {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  size: number;
};

export default function Canvas({ canvasRef, size }: CanvasProps) {
  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{
        border: "2px solid black",
        display: "block",
        margin: "0 auto",
      }}
    />
  );
}