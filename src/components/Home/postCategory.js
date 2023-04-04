import React, { useState, useEffect } from "react";
import axios from "axios";
import { Badge } from "@mantine/core";

function PostCategory() {
  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    let wp_API_Url = `http://localhost:10039`;
    axios
      .get(`${wp_API_Url}/wp-json/wp/v2/categories`)
      .then((response) => {
        console.log(response);
        setCategoris(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {console.log("categ", categoris)}
      {categoris.map((category) => (
        <Badge color="pink" mr={5} variant="light" key={category.id}>
          {category.name}
        </Badge>
      ))}
    </>
  );
}
export default PostCategory;
