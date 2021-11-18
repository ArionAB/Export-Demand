import React, { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/modal";
import Post from "./post";
import { useContext } from "react";
import { PostContext } from "../../Context/postContext";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

import styles from "./farmers.styles.scss";

export const Farmers = () => {
  const { farmPosts } = useContext(PostContext);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        setCurrentUser(userAuth);
      }
      return unsubscribe;
    });
  }, []);

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
      {currentUser ? (
        <button className="add-farm" onClick={() => setShow(true)}>
          Add your farm
        </button>
      ) : (
        <Link className="myButton" to="/signin">
          Sign in to add a farm
        </Link>
      )}
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
