import CanvasImage from "./components/CanvasImage";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">

      <h1 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold mb-10 text-center bg-gradient-to-r from-black via-gray-700 to-black text-transparent bg-clip-text whitespace-nowrap">
        PNG Drawing Assignment
      </h1>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg">
        <CanvasImage />
      </div>

    </div>
  );
}