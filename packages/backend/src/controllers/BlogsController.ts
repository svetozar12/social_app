import { Router } from "express";
import Blogs from "../models/Blogs.model";
import paginatedResults from "../middlewares/pagination";
import isObjEmpty from "../utils/isObjEmpty";

const BlogsController = Router();

// get single blog
BlogsController.get("/:blog_id", async (req, res) => {
  try {
    const blog = await Blogs.findOne({ _id: req.params.blog_id });
    if (!blog) return res.send("Not found").status(404);
    return res.json(blog);
  } catch (err) {
    return res.json({ success: false, msg: err }).status(500);
  }
});

// gets all blogs by user
BlogsController.get(
  "/",
  paginatedResults(Blogs, "public"),
  async (req, res) => {
    try {
      console.log(res.paginatedResults);

      if (!res.paginatedResults)
        return res.status(404).json({ message: "Not found" });
      return res.send(res.paginatedResults).status(200);
    } catch (err) {
      return res.json({ success: false, msg: err }).status(500);
    }
  },
);

BlogsController.post("/", async (req, res) => {
  try {
    const blog = {
      owner_id: req.body.owner_id,
      title: req.body.title,
      status: req.body.status,
      article: req.body.article,
      date: new Date(),
    };
    const isBlog = await Blogs.findOne({
      owner_id: blog.owner_id,
      title: blog.title,
    });
    if (isBlog) return res.status(409).send("Already exist");
    const newBlog = new Blogs(blog);
    newBlog.save();

    return res.json(newBlog);
  } catch (err) {
    return res.json({ success: false, msg: err }).status(500);
  }
});

BlogsController.put("/", async (req, res) => {
  try {
    const isBlog = await Blogs.findOne({
      owner_id: req.body.owner_id,
      _id: req.body.blog_id,
    });

    if (!isBlog) return res.status(404).send("Not found");
    const isEmpty = isObjEmpty(req.body);
    const blog = {
      owner_id: isBlog?.owner_id,
      title: req.body.title || isBlog.title,
      status: req.body.status || isBlog.status,
      date: !isEmpty ? new Date() : isBlog?.date,
    };
    const updatedBlog = await Blogs.findByIdAndUpdate(isBlog._id, blog);

    return res.send("blog was updated");
  } catch (err) {
    return res.json({ success: false, msg: err }).status(500);
  }
});

BlogsController.delete("/", async (req, res) => {
  try {
    const isBlog = await Blogs.deleteOne({
      owner_id: req.body.owner_id,
      _id: req.body.blog_id,
    });
    console.log(isBlog, req.body);

    if (isBlog.deletedCount === 0)
      return res.send("blog already has been deleted").status(409);

    return res.send("blog was deleted").status(201);
  } catch (err) {
    return res.json({ success: false, msg: err }).status(500);
  }
});

export default BlogsController;
