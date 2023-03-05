import { useState, useCallback } from "react";
import { Toaster } from "react-hot-toast";
import useSWR, { Fetcher } from "swr";
import {
  GiFoodChain,
  GiCow,
  GiChicken,
  GiCakeSlice,
  GiPig,
} from "react-icons/gi";

import type { IMeal } from "./types";
import { Meal } from "./components/Meal";

function App() {
  const [category, setCategory] = useState("Seafood");

  const fetcher: Fetcher<{ meals: IMeal[] }> = useCallback(async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    return res.json();
  }, [category]);

  const { data, mutate } = useSWR("/", fetcher);

  const categories = [
    {
      name: "Seafood",
      Icon: GiFoodChain,
    },
    {
      name: "Beef",
      Icon: GiCow,
    },
    {
      name: "Chicken",
      Icon: GiChicken,
    },
    {
      name: "Dessert",
      Icon: GiCakeSlice,
    },
    {
      name: "Pork",
      Icon: GiPig,
    },
  ];

  return (
    <main className="px-4 py-12 text-white max-w-screen-xl mx-auto flex flex-col items-center">
      <div className="inline-flex justify-center mx-auto space-x-2 mb-6 bg-white rounded-full p-1 text-sm">
        {categories.map(({ name, Icon }) => (
          <button
            type="button"
            key={name}
            onClick={() => {
              setCategory(name);
              setTimeout(() => mutate(), 500);
            }}
            className="bg-black transition-all text-white py-4 px-8 flex space-x-3 items-center rounded-full"
          >
            <Icon className="text-xl" /> <p>{name}</p>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {data?.meals.map((meal) => (
          <Meal key={meal.strMeal} {...meal} />
        ))}
      </div>

      <Toaster position="top-right" />
    </main>
  );
}

export default App;
