import { signIn, useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import Image from "next/image";
import { LoginIcon } from "@heroicons/react/outline";

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-6xl"
      }`}
    >
      {session ? (
        <>
          <section className="col-span-2">
            {/* Stories */}
            <Stories />

            {/* Posts */}
            <Posts />
          </section>

          <section className="hidden xl:inline-grid md:col-span-1">
            <div className="fixed top-20">
              {/* Mini Profile */}
              <MiniProfile />

              {/* Suggestions */}
              <Suggestions />
            </div>
          </section>
        </>
      ) : (
        <div className="flex justify-between items-center mx-auto">
          <div className="flex flex-col items-center">
            <img src="/images/instagram-landing-phones.png" alt="" />
            <img
              src="https://links.papareact.com/ocw"
              alt=""
              className="w-96"
            />

            <button
              onClick={signIn}
              className="flex items-center text-white text-xl font-bold bg-blue-500 rounded-lg px-2 py-1.5 hover:bg-blue-400 duration-150"
            >
              <p className="flex">
                <LoginIcon className="h-8 w-8" /> Sign In with Google
              </p>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Feed;
