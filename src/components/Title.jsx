import React from "react";

const Title = (props) => {
  return (
    <div className="flex items-center">
      <h2 className="text-3xl md:text-4xl font-roboto-slab font-semibold pr-7 mb-2 dark:text-white">
        {props.title}
      </h2>
      <span className="w-36 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg"></span>
    </div>
  );
};

export default Title;
