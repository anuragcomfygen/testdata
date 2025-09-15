import React from "react";
import { useUser } from "../hooks/Hooks";

export const Home = () => {
  const { user } = useUser();

  return (
    <div className="flex justify-center mt-20 bg-gray-700 min-h-screen">
      
    </div>
  );
};

export default Home;
