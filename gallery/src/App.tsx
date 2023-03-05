import { Meals } from "./components/Meals";

function App() {

  return (
    <main className="px-4 py-12">
      <div className="flex flex-wrap gap-4 max-w-screen-xl mx-auto justify-center">
        <Meals />
      </div>
    </main>
  );
}

export default App;
