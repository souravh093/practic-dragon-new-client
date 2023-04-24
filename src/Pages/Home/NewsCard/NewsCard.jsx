import moment from "moment";
import React from "react";
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const   NewsCard = ({ news }) => {
  const { _id, title, author, details, image_url, rating, total_view } = news;
  return (
    <div className="border-2 mb-10 rounded-lg">
      <div className="flex items-center justify-between px-5 py-3 bg-red-50">
        <div className="flex gap-3 items-center">
          <img className="w-10 rounded-full" src={author?.img} alt="" />
          <div>
            <h2 className="text-lg font-semibold">
              {author.name ? author.name : "No name"}
            </h2>
            <p>{moment(author?.published_date).format("yyyy-MM-DD")}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <FaBookmark className="text-xl" />
          <FaShareAlt className="text-xl" />
        </div>
      </div>

      <div className="mb-5 px-5">
        <div>
          <h2 className="text-2xl font-bold my-3">{title}</h2>
          <img className="w-full" src={image_url} alt="" />
          <p className="mt-3">
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link
                  className="text-yellow-600 hover:text-yellow-500"
                  to={`/news/${_id}`}
                >
                  Read More
                </Link>
              </>
            )}
          </p>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between items-center">
          <div className="text-xl flex items-center gap-3">
            <Rating
              readonly
              placeholderRating={rating?.number}
              emptySymbol={
                <FaRegStar className="text-yellow-500" />
              }
              placeholderSymbol={
                <FaStar className="text-yellow-500" />
              }
              fullSymbol={
                <FaStar />
              }
            />
            {rating?.number}
          </div>
          <div className="flex items-center gap-2 text-xl">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
