// type DownloadButtonProps = {
//   canvasRef: React.RefObject<HTMLCanvasElement | null>;
// };

// export default function DownloadButton({ canvasRef }: DownloadButtonProps) {
//   const handleDownload = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const link = document.createElement("a");
//     link.download = "image.png";
//     link.href = canvas.toDataURL("image/png");
//     link.click();
//   };

//   return <button onClick={handleDownload}>Download Image</button>;
// }

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

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleDownload}
        className="
    px-6 py-3
rounded-xl
text-white
font-semibold
font-serif
bg-gradient-to-r from-black via-gray-800 to-black
shadow-lg
hover:shadow-2xl
hover:scale-105
active:scale-95
transition-all
duration-300
ease-in-out
flex
items-center
gap-2
        "
      >
        Download Image
      </button>
    </div>
  );
}