import React, { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/modal";
import Post from "./post";
import { useContext } from "react";
import { PostContext, PostContextProvider } from "../../Context/postContext";

import styles from "./farmers.styles.scss";

export const Farmers = () => {
  const { posts } = useContext(PostContext);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  console.log("stars", posts, "stars");

  /*   useEffect(() => {
    setShow(false); //Closes form after user submits data
  }, [posts]); */

  const searchField = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1>Farmer's Market</h1>
      <input
        type="search"
        placeholder="search for a product or farm"
        onChange={searchField}
      />
      <button onClick={() => setShow(true)}>Add your farm</button>
      <Modal onClose={() => setShow(false)} show={show} />
      <div className="reverse">
        {posts
          ? posts.map((farm, index) => (
              <div className="Filtered" key={index}>
                <Post farm={farm} />
              </div>
            ))
          : ""}{" "}
      </div>
    </>
  );
};
