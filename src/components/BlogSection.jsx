import React from "react";
import BlogCard from "./BlogCard";

let data = [
  {
    id: 1,
    img: "./images/post__1.webp",
    title: "Healthy Food Healthy Life",
    date: "Oct 23, 2023",
    comment: 8,
  },
  {
    id: 2,
    img: "./images/post__2.webp",
    title: "Healthy Food Healthy Life",
    date: "Oct 23, 2023",
    comment: 1,
  },
  {
    id: 3,
    img: "./images/post__3.webp",
    title: "Healthy Food Healthy Life",
    date: "Oct 33, 2023",
    comment: 6,
  },
];

const BlogSection = () => {
  return <div className="container pt-16">
    <h2 className="font-bold text-2xl">Latest News</h2>
    <p className="text-gray-500">Present post in a best way to highlish intesting moments of your blog</p>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4 ">
        {data.map(el=> <BlogCard key={el.id} img={el.img} title={el.title} date={el.date} comment={el.comment}/>)}
    </div>
  </div>;
};

export default BlogSection;
