import React, { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/modal";
import Post from "./post";
import { useContext } from "react";
import { PostContext } from "../../Context/postContext";

import styles from "./farmers.styles.scss";

export const Farmers = () => {
  const { farmPosts } = useContext(PostContext);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  console.log("stars", farmPosts, "stars");

  useEffect(() => {
    setShow(false); //Closes form after user submits data
  }, [farmPosts]);

  const searchField = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="title-search">
        <h1 className="market-title">FARMER'S MARKET</h1>
        <input
          className="search"
          type="search"
          placeholder="Search for a product or farm"
          onChange={searchField}
        ></input>
      </div>
      <button className="add-farm" onClick={() => setShow(true)}>
        Add your farm
      </button>
      <Modal onClose={() => setShow(false)} show={show} />
      <div className="reverse">
        {farmPosts
          ? farmPosts
              .filter((farm) => {
                if (search === "") {
                  return farm;
                } else if (
                  farm.title.toLowerCase().includes(search.toLowerCase()) ||
                  farm.product.toLowerCase().includes(search.toLowerCase())
                ) {
                  return farm;
                }
              })
              .map((farm, index) => (
                <div className="filtered" key={index}>
                  <Post farm={farm} />
                </div>
              ))
          : ""}{" "}
      </div>
    </>
  );
};
