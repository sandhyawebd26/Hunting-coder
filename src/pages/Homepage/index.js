import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";

const home = () => {
  const [blogs, setblogs] = useState([]);
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
    console.log("useEffect is running");
    getAllBlogs();
  }, []);
  return (
    <>
      <div className=" my-10">
        <div className="flex flex-col justify-center items-center my-10 gap-5">
          <h2 className="text-2xl font-bold text-blue-400">Hunting Coder</h2>
          <Image src={logo} width={100} height={100} alt="" />
        </div>
        <div className="container px-40 block mx-auto">
          <h3 className="text-blue-500 font-bold text-center my-10 text-2xl">
            Popular Blogs
          </h3>

          {blogs.map((d) => {
            return (
              <div className="card-2 mb-16 text-center" key={blogs.slug}>
                <h3 className="mb-5 text-blue-600 font-semibold text-lg">
                  {d.title}
                </h3>
                <p className="text-[#666] flex ">
                  {d.description.substr(0, 200)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default home;
