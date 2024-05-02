// FilterableList.js
import React, { useState } from "react";

const FilterableList = ({ items }) => {
  const initialCategory = items.length > 0 ? items[0].category : null;
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const remainingItems = selectedCategory
    ? items.slice(1).filter((item) => item.category === selectedCategory)
    : items.slice(1);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Filterable List</h2>
      <div className="flex space-x-4 mb-4">
        {Array.from(new Set(items.map((item) => item.category))).map(
          (category, index) => (
            <button
              key={index}
              className={`${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          )
        )}
        {/* <button
          className={`${
            selectedCategory === null
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 rounded`}
          onClick={() => handleCategoryChange(null)}
        >
          All
        </button> */}
      </div>
      {items.length > 0 && (
        <div className="border p-4 mb-4">
          <p className="text-lg font-semibold">{items[0].name}</p>
          <p>{items[0].category}</p>
        </div>
      )}
      <ul>
        {remainingItems.map((item) => (
          <li key={item.id} className="border p-4 mb-2">
            <p className="text-lg font-semibold">{item.name}</p>
            <p>{item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;
