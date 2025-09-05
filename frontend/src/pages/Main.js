import React from "react";
import "../../public/assets/css/main.css";
import Navigation from "../components/Navigation";
import { MyFeed, AllFeed } from "../components/Feeds";

class Main extends React.Component
{
  render()
  {
    return (
      <div>
        <header>
          <Navigation />
        </header>

        <div className="text-center my-8">
          <h3 className="text-lg text-text">Search:</h3>
          <input
            type="text"
            placeholder="project or user or keyword"
            className="mt-2 p-2 w-4/5 max-w-md border border-highlight rounded"
          />
        </div>

        <h1 className="text-center text-2xl font-bold text-text mb-8">Discover</h1>
        <div className="flex flex-row justify-around items-start mx-4 p-4 bg-black bg-opacity-75 rounded-lg shadow">
          <div className="flex-1 mx-2 text-center">
            <h3 className="text-xl font-semibold mb-4 text-accent">Your feed</h3>
            <MyFeed />
          </div>
          <div className="flex-1 mx-2 text-center">
            <h3 className="text-xl font-semibold mb-4 text-accent">Top feed</h3>
            <AllFeed />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
