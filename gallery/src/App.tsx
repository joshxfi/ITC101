import { useState, useCallback } from "react";
import { Toaster } from "react-hot-toast";
import useSWR, { Fetcher } from "swr";
import toast from "react-hot-toast";
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
      name: "Pork",
      Icon: GiPig,
    },
    {
      name: "Dessert",
      Icon: GiCakeSlice,
    },
  ];

  return (
    <main className="px-4 py-12 text-white max-w-screen-xl mx-auto flex flex-col items-center">
      <div className="inline-flex flex-wrap justify-center mx-auto gap-2 mb-4 text-sm">
        {categories.map(({ name, Icon }) => (
          <button
            type="button"
            key={name}
            onClick={() => {
              setCategory(name);
              toast(`Category is now ${name}`, {
                icon: "😋",
                style: {
                  color: "#fff",
                  background: "#000",
                  border: "2px solid #fff",
                },
              });
              setTimeout(() => mutate(), 500);
            }}
            className="bg-black transition-all text-white py-3 px-8 flex space-x-3 items-center rounded-full"
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

      <Toaster position="bottom-right" />
    </main>
  );
}

export default App;
