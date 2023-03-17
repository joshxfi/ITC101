import { Song } from "./components";
import { topSongs } from "./constants";

function App() {
  return (
    <div className="bg-stone-800 min-h-screen text-white grid place-items-center">
      <div className='grid grid-cols-3 gap-6'>

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
