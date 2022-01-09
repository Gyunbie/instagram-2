import { useEffect, useState } from "react";
import faker from "faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src="https://cdn2.greatfon.com/view?q=4IWYxUzN9QWaz91Yu9lJGRTN4ETRxYTPl9mJRpmbQFFUJNWaYhkSUV1aVRWRVpGROljbtoGMjdWc4FkeVJ3cHhnZ4VnMplDVB9FMw0DavZCNtcjYjNWLy4iasd0YmZ1RiBnWyIWeCNDW6Z1MiRHbuJmd1cVW9kXZr9VZoNWYj91ZpZCNtcTPiN2YmEUQBFkQwQkRZFWRB1TbkVmJmR1YZ9VOYF0bzlEVpNEO3ZlVq1zYo92Xj52XmETP0F2YfNmbfZCdl5mLuR2YiZmLh5mZuQTLxITahNmZu0WYydWY0Nnbp1Ddo91Yu91PnBnau42XycjM2IzM0MzN5gTN5YDM2QDNy8VOxUjM4gjMwEzNwcTN0MzX4EjM0gDO0QzL5ETL1gDOy4SM1Q3L29Cdl5mLuR2YiZmLh5mZuQTLxITahNmZu0WYydWY0Nnbp9yL6MHc0RHa"
            alt=""
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>

          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
