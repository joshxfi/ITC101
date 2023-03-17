import { Song } from "./components";
import { topSongs } from "./constants";

function App() {
  return (
    <div className="bg-stone-800 min-h-screen text-white grid place-items-center py-24">
      <div className='text-center mb-14'>
        <h1 className='font-bold text-5xl'>Top 10 Favorite Songs</h1>
        <p className="text-stone-500 text-xl font-medium mt-4">Josh Daniel Bañares</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {topSongs.map((s) => (
          <Song
            key={s.title}
            top={s.top}
            title={s.title}
            artist={s.artist}
            image={s.img}
            link={s.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
