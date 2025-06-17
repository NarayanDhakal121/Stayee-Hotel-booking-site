import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCards from "./HotelCards";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40 bg-slate-50 py-20 max-w-7xl mx-auto">
      <Title
        title="Featured Destination"
        subTitle=" Explore beautiful destinations, unique stays, and hidden gems that promise unforgettable experiences. Let your journey begin with the perfect place to stay. "
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCards key={room._id} room={room} index={index} />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        {" "}
        View All Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
