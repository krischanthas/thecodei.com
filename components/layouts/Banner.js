import React from "react";

const Banner = ({ subject, body }) => {
  return (
    <div className="w-100 p-4 bg-orange-200 rounded-md">
      <h2 className="text-md">{subject}</h2>
      <p className="text-sm">{body}</p>
    </div>
  );
};

export default Banner;
