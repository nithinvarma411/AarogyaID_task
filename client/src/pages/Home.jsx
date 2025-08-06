import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">In Part-2, the initial data retrieval takes around 1–2 minutes due to cold-start delays, as the backend is hosted on Render's free tier.</h1>
      </div>
      <div className="flex justify-center gap-4 items-center h-screen">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/part1")}
        >
          Part 1
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/part2")}
        >
          Part 2
        </button>
      </div>
    </>
  );
}

export default Home;
