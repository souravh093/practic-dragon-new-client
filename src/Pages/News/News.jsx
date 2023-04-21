import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsights from "./EditorInsights/EditorInsights";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  return (
    <div>
      
      <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img class="rounded-t-lg w-full" src={image_url} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">{details}</p>
          <Link
            to={`/category/${category_id}`}
            class="inline-flex gap-3 items-center  px-3 py-2 text-xl font-medium text-center text-white bg-red-700 rounded hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <FaArrowLeft />
            All news in this category
          </Link>
        </div>
      </div>
      <EditorInsights />
    </div>
  );
};

export default News;
