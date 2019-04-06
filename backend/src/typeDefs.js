const typeDefs = `
type BlogPost {
  id: ID
  content: String
  createdAt: DateTime
  title: String
  updatedAt: DateTime
}
type Query {
  AllBlogPosts: [BlogPost]
}
`;

export default typeDefs;
