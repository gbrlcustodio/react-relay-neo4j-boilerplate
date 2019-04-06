import React from "react";
import BlogPosts from "../components/BlogPosts";
import initEnvironment from "../lib/createRelayEnvironment";

const environment = initEnvironment();

const Home = () => <BlogPosts environment={environment} />;

export default Home;
