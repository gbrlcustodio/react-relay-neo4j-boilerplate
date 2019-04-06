import React from "react";

const BlogPostPreview = ({ post, environment }) => {
  return <div key={post.id}>{post.title}</div>;
};

export default BlogPostPreview;
