import { useRouter } from "next/router";
import React from "react";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div>
        <div className="block mx-auto p-10">
          <h1 className="text-xl mb-5 text-center">Title of the page {slug}</h1>
          <hr />
          <p className="mt-3 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit Neque animi
            laboriosam odit ducimus pariatur similique repellendus
          </p>
        </div>
      </div>
    </>
  );
};

export default slug;
