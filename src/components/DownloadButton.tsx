type DownloadButtonProps = {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
};

export default function DownloadButton({ canvasRef }: DownloadButtonProps) {
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return <button onClick={handleDownload}>Download Image</button>;
}