import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img="https://cdn2.greatfon.com/view?q=4IWYxUzN9QWaz91Yu9lJGRTN4ETRxYTPl9mJRpmbQFFUJNWaYhkSUV1aVRWRVpGROljbtoGMjdWc4FkeVJ3cHhnZ4VnMplDVB9FMw0DavZCNtcjYjNWLy4iasd0YmZ1RiBnWyIWeCNDW6Z1MiRHbuJmd1cVW9kXZr9VZoNWYj91ZpZCNtcTPiN2YmEUQBFkQwQkRZFWRB1TbkVmJmR1YZ9VOYF0bzlEVpNEO3ZlVq1zYo92Xj52XmETP0F2YfNmbfZCdl5mLuR2YiZmLh5mZuQTLxITahNmZu0WYydWY0Nnbp1Ddo91Yu91PnBnau42XycjM2IzM0MzN5gTN5YDM2QDNy8VOxUjM4gjMwEzNwcTN0MzX4EjM0gDO0QzL5ETL1gDOy4SM1Q3L29Cdl5mLuR2YiZmLh5mZuQTLxITahNmZu0WYydWY0Nnbp9yL6MHc0RHa"
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
