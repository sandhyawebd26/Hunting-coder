// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// // 
// import * as fs from "fs";

// export default function handler(req, res) {
//     const { slug } = req.query; // Access the slug from req.query

//     console.log(slug)
//     fs.readdir(`blogdata/${slug}.json`, (err, data) => {

//        if (err){
//         res.status(500).json({error: "No such blog found"})
//        }
//     })
//     console.log(req,query.slug)
//     res.status(200).json({ name: 'John Doe' })
// }
import fs from "fs";

export default function handler(req, res) {
  const { slug } = req.query;
console.log(slug)
  fs.readFile(`blogdata/${slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(404).json({ error: "No such blog found" });
    } else {
      const blogData = JSON.parse(data);
      res.status(200).json(blogData);
    }
  });
}

