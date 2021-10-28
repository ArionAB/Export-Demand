import React from "react";
import { Redirect } from "react-router";

export const Post = ({ match }) => {
  const url = match.params.url; //Components named in Route elements will have a match prop.
  const postUrl = ["my-first-blog-post"];

  /* const postDoesNotExist = postUrl.indexOf(url) === -1;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  } */

  //managed to make redirect work without this code. Keeping it here in case i need it
};
