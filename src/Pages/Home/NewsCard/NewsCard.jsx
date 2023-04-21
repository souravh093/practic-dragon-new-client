import React from "react";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url } = news;
  return (
    <div className="w-full bg-base-100 mb-10 border-2 rounded">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="px-5 py-5">
        <h2 className="text-2xl">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
