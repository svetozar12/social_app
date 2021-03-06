import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Index";
import PublicBlogs from "../pages/Blogs/PublicBlogs";
import PublicBlogsByAuthor from "../pages/Blogs/PublicBlogsByAuthor";
import SingleBlog from "../pages/Index/SingleBlog";
import NotFound from "../pages/404/NotFound";
import EditBlog from "../pages/Edit/EditBlog";
import CreateBlog from "../pages/Create/CreateBlog";
import { useCookies } from "react-cookie";

const PageRoutes = ({ user }: { user: any }) => {
  // const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);

  return (
    <Routes>
      <Route path="/login" element={<Login user={user} />} />
      <Route path="/register" element={<Register user={user} />} />
      <Route path="/" element={<Dashboard user={user} />} />
      <Route path="/:id" element={<SingleBlog user={user} />} />
      <Route path="/blogs" element={<PublicBlogs user={user} />} />
      <Route
        path="/blogs/:author_id"
        element={<PublicBlogsByAuthor user={user} />}
      />
      <Route path="/edit/:blog_id" element={<EditBlog user={user} />} />
      <Route path="/create" element={<CreateBlog user={user} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
