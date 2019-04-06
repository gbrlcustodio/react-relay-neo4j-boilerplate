import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import BlogPostPreview from "./BlogPostPreview";

const BlogPosts = ({ environment }) => {
  return (
    <div>
      <h1>Blog posts</h1>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query BlogPostsQuery {
            AllBlogPosts {
              id
              title
            }
          }
        `}
        render={({ error, props }) => {
          if (error) {
            return <p>Error!</p>;
          }

          if (!props) {
            return <p>Loading...</p>;
          }

          const { AllBlogPosts } = props;

          return (
            AllBlogPosts &&
            AllBlogPosts.map(post => (
              <BlogPostPreview key={post.id} post={post} />
            ))
          );
        }}
      />
    </div>
  );
};

export default BlogPosts;
