import Link from "next/link";
import React, { useEffect, useState } from "react";

// step 1 : Collect all the files from blogData directory
// step 2: Iterate through the blogs and show them
const Blog = () => {
  const [blogs, setblogs] = useState(null);

  const getAllBlogs = () => {
    fetch("/api/blogs")
      .then(async (a) => {
        let reponseGet = await a.json();
        return reponseGet;
      })
      .then((res) => {
        console.log("blogs", res);
        setblogs(res);
        console.log(res);
      });
  };

  useEffect(() => {
    console.log("useEfffect is running");
    getAllBlogs();
  }, []);

  if (!blogs) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" my-10">
        <div className="container px-40 block mx-auto">
          {blogs?.map((data) => {
            // console.log(data);
            return (
              <div className="card-1 mb-16" key={data.slug}>
                <Link href={`/Blogpost/${data.slug}`}>
                  <h3 className="mb-5 text-blue-600 font-semibold text-lg">
                    {data.title}
                  </h3>
                </Link>
                <p className="text-[#666]">{data.description.substr(0,200)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
