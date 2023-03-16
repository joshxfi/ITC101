import { BsPlayCircleFill } from "react-icons/bs";

function App() {
  return (
    <div className="bg-stone-800 min-h-screen text-white flex flex-col items-center justify-center">
      <section className="bg-stone-900 p-8 rounded-xl w-[350px] shadow-lg">
        <img
          src="/songs/10.jpeg"
          alt="as it was"
          className="w-full h-[200px] object-cover rounded-lg"
        />

        <div className="mt-8 flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            <h1 className="text-green-500 text-6xl font-extrabold">10</h1>
            <div>
              <h2 className="font-bold text-2xl">Matilda</h2>
              <h3 className="text-stone-500 font-medium text-sm">Harry Styles</h3>
            </div>
          </div>

          <BsPlayCircleFill className='text-5xl hover:text-green-400 hover:scale-110 transition-all inline-block cursor-pointer' />
        </div>
      </section>
    </div>
  );
}

export default App;
