import { Song } from "./components";

function App() {
  return (
    <div className="bg-stone-800 min-h-screen text-white flex gap-4 items-center justify-center">
      <Song
        top={10}
        title="Matilda"
        author="Harry Styles"
        image="matilda.jpeg"
        link="#"
      />
      <Song
        top={9}
        title="Hello Anxiety"
        author="Phum Viphurit"
        image="hello_anxiety.jpg"
        link="#"
      />
    </div>
  );
}

export default App;
