import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SingleBlog = (props) => {

  const [blog, setBlog] = useState(props.Blog);
  // const router = useRouter();

  const getBlogBySlug = () => {

    // const { slug } = router.query; // Use the slug from router.query, not the function variable

    // fetch(`/api/${slug}`) // Access the API route through the /api path
    //   .then(async (response) => {
    //     let responseData = await response.json();
    //     return responseData;
    //   })
    //   .then((data) => {
    //     console.log("blog", data);
    //     setBlog(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching blog:", error);
    //   });
  };

  // useEffect(() => {
  //   console.log("useEffect is running");
  //   getBlogBySlug();
  // }, [router.query.slug]); // Listen for changes to the slug in router.query

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div className="block mx-auto p-10">
          <h1 className="text-xl mb-5 text-center">{blog.title}</h1>
          <hr />
          <p className="mt-3 text-center">{blog.description}</p>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query.slug)

  const { slug } = context.query;
  let res = await fetch(`http://localhost:3000/api/${slug}`) // Access the API route through the /api path
  let Blog =await  res.json()
  console.log(Blog)
  // Pass data to the page via props
  return {
    props: { Blog },
  };
}


export default SingleBlog;


// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";

// const slug = () => {

//   const [blog, setBlog] = useState(null);
//   const router = useRouter();

//   const getBlogBySlug = () => {
//     fetch(`/api/${slug}`)
//       .then(async (a) => {
//         let reponseGet = await a.json();
//         return reponseGet;
//       })
//       .then((res) => {
//         console.log("blogs", res);
//         setBlog(res);
//         console.log(res);
//       });
//   };

//   useEffect(() => {
//     const { slug } = router.query;
//     console.log(slug)

//     console.log("useEffect is running");
//     if (slug) {
//       getBlogBySlug();
//     }
//   }, [slug]);

//   if (!blog) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <>
//       <div>
//         <div className="block mx-auto p-10">
//           <h1 className="text-xl mb-5 text-center">{blog.title}</h1>
//           <hr />
//           <p className="mt-3 text-center">{blog.description}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default slug;
