import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {  
  const categoriesNews = useLoaderData();
  return (
    <div>
      {categoriesNews.map((category) => (
        <NewsCard key={category._id} news={category} />
      ))}
    </div>
  );
};

export default Category;
