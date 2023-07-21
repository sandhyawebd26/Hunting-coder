// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 
import * as fs from "fs";

export default function handler(req, res) {
    // const { slug } = req.params; // Access the slug from req.query

    console.log(slug)
    fs.readdir('blogdata', (req, res) => {
        console.log("sandhya")
    })
    res.status(200).json({ name: 'John Doe' })
}
