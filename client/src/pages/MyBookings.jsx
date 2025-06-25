import React, { useState } from "react";
import Title from "../components/Title";
import { userBookingsDummyData } from "../assets/assets";
import { assets } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your hotel reservation in one place"
        align="left"
      />
      <div>
        <div className="hidden md:grid grid-cols-[3fr_2fr_1fr] w-full border-b  border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Time</div>
          <div className="w-1/3">Payment</div>
        </div>
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t gap-4"
          >
            {/* --- Column 1: Hotel Details --- */}
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={booking.room.images[0]}
                alt="hotel-img"
                className="min-md:w-44 rounded shadow object-cover"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-xl font-semibold">
                  {booking.hotel.name}
                  <span className="font-inner text-sm ml-1">
                    ({booking.room.roomType})
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img
                    src={assets.locationIcon}
                    alt="location-icon"
                    className="w-4 h-4"
                  />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img
                    src={assets.guestsIcon}
                    alt="guests-icon"
                    className="w-4 h-4"
                  />
                  <span>{booking.guests} guests</span>
                </div>
                <p className="text-base"> Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* --- Column 2: Date & Time --- */}
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
              <div>
                <p>check-in</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p>check-out</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>

            {/* --- Column 3: Payment status--- */}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2 ">
                <div
                  className={`h-3 w-3 rounded-full ${
                    booking.isPaid ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>

                <p
                  className={`text-sm ${
                    booking.isPaid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {booking.isPaid ? "Paid" : "Not Paid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button className="px-4 py-1.5 text-xs border border-gray-400 rounded-full hover:bg-gray-50 translation-all cursor-pointer mt-1">
                    pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
