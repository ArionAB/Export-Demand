import React, { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/modal";
import Post from "./post";
import { useContext } from "react";
import { PostContext } from "../../Context/postContext";

import styles from "./farmers.styles.scss";

export const Farmers = () => {
  const { farmPosts } = useContext(PostContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false); //Closes form after user submits data
  }, [farmPosts]);

  return (
    <>
      <h1>Farmer's Market</h1>
      <button onClick={() => setShow(true)}>Add your farm</button>
      <Modal onClose={() => setShow(false)} show={show} />
      <div className="container">
        {farmPosts
          ? farmPosts.map((farm, index) => (
              <div key={farm.id}>
                <Post farm={farm} />
              </div>
            ))
          : ""}
      </div>{" "}
    </>
  );
};
