// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogdata')
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item)
    myFile = fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(myFile)
    console.log(myFile)
  }

}

// import * as fs from "fs";

// export default function handler(req, res) {
//   fs.readdir('blogdata', (err, data) => {

//     if (err) {
//       console.log(err)
//       res.status(500).json({ error: "no blog found" })
//     }
//     console.log(data);

//     let allBlogs = [];
//     data.forEach((item) => {
//       console.log(item)
//       fs.readFile(('blogdata/' + item), (d) => {
//         allBlogs.push(d)
//       })
//     })
//     res.status(200).json(data)
//   })
// }

// import * as fs from "fs";

// export default function handler(req, res) {
//   fs.readFile(`./blogdata/${slug}}`, 'utf-8', (err, data) => {

//     if (err){
//       console.log(err)
//       res.status(500).json({error: "no blog found"})
//     }
//     console.log(req.query)
//     res.status(200).json(JSON.parse(data))
//   })
// }
