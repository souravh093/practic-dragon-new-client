import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const categoriesNews = useLoaderData()
  return (
    <div>
      <h2>This is category section{id}</h2>
    </div>
  );
};

export default Category;
