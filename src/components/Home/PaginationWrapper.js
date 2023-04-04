/*
 * Import remote dependancies
 */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Pagination from "./Pagination";

export default function PaginationWrapper() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [nrofpages, setNumberofpage] = useState(1);

  // When the page number changes call the api for posts.
  useEffect(() => {
    Axios.get("http://localhost:10039/wp-json/wp/v2/posts", {
      params: { page: page },
    }).then((response) => {
      // Store the number of posible pages.
      setNumberofpage(response.headers["x-wp-totalpages"]);
      // Store the posts from the response.
      setPosts(response.data);
    });
  }, [page, setPosts]);

  return (
    <>
      <h1>Navigate Wp Rest Api Posts</h1>

      <Pagination
        nrOfPages={nrofpages}
        currentpage={page}
        onSelectPage={(n) => setPage(n)}
      />
      {posts &&
        posts.length &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title.rendered}</h2>
            </div>
          );
        })}
    </>
  );
}
