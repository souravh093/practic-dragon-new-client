import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-5">All Category</h2>
      </div>
      <div className="flex flex-col gap-5 text-2xl font-semibold">
        {
            categories.map(category => <Link to={`/category/${category.id}`} className="hover:bg-red-50 py-4 text-gray-500 rounded pl-10" to={''} key={categories.id}>{category.name}</Link>)
        }
      </div>
    </div>
  );
};

export default LeftSide;
