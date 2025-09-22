import React from "react";

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <header>
        <h1>Blog</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default BlogLayout;
