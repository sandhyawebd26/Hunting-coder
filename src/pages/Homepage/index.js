import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";

const home = () => {
  return (
    <>
      <div className=" my-10">
        <div className="flex flex-col justify-center items-center my-10 gap-5">
          <h2 className="text-2xl font-bold text-blue-400">Hunting Coder</h2>
          <Image src={logo} width={100} height={100}/>
        </div>
        <div className="container px-40 block mx-auto">
          <h3 className="text-blue-500 font-bold text-center my-10 text-2xl">Popular Blogs</h3>
          <div className="card-1 mb-16 text-center ">
            <Link href={"/Blogpost/Regular Exercise"}>
              <h3 className="mb-5 text-blue-600 font-semibold text-lg ">
                The Benefits of Regular Exercise
              </h3>
            </Link>
            <p className="text-[#666]">
              Discover the numerous benefits of incorporating regular exercise
              into your daily routine. From improved physical health to mental
              well-being, find out why exercise is essential for a balanced
              lifestyle.
            </p>
          </div>

          <div className="card-2 mb-16 text-center">
            <h3 className="mb-5 text-blue-600 font-semibold text-lg">
              Traveling on a Budget: Tips and Tricks
            </h3>
            <p className="text-[#666] flex ">
              Learn how to make the most of your travel experiences without
              breaking the bank. Explore budget-friendly destinations,
              accommodation options, and money-saving strategies for an
              unforgettable journey.
            </p>
          </div>

          <div className="card-3 mb-16 text-center">
            <h3 className="mb-5 text-blue-600 font-semibold text-lg">
              Mastering Time Management for Productivity
            </h3>
            <p className="text-[#666]">
              Unlock the secrets of effective time management to boost your
              productivity and achieve your goals. Explore practical techniques
              and tools to optimize your daily schedule and make the most of
              your time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
