import React from "react";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";
import BlogCard from "./BlogCard";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 22, 2022",
    aosDelay: "0",
  },
  {
    id: 2,
    image: Img2,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    aosDelay: "300",
  },
  {
    id: 3,
    image: Img3,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    aosDelay: "500",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <div className="container">
          <h1
            data-aos="fade-up"
            className="my-8 border-l-8 border-primary py-2 pl-2 text-3xl font-semibold"
          >
            Our Blogs
          </h1>
          {/* Blogs card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="0"
            className="text-center"
          >
            <button className="btn-primary">View All Posts</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsComp;
