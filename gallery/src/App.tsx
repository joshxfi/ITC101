import { Toaster } from "react-hot-toast";
import useSWR, { Fetcher } from "swr";

import type { IMeal } from "./types";
import { Meal } from "./components/Meal";

const fetcher: Fetcher<{ meals: IMeal[] }> = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  return res.json();
};

function App() {
  const { data } = useSWR("/", fetcher);

  return (
    <main className="px-4 py-12">
      <div className="flex flex-wrap gap-4 max-w-screen-xl mx-auto justify-center">
        {data?.meals.map((meal) => (
          <Meal key={meal.strMeal} {...meal} />
        ))}
      </div>

        <Toaster />
    </main>
  );
}

export default App;
