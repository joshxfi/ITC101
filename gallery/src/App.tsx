import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  return res.json();
};

function App() {
  const { data } = useSWR("/", fetcher);

  return (
    <div className="App">
      <p>hello</p>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}

export default App;
