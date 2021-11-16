import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from "./our_goals.styles.scss";
export const Goals = () => {
  const plus = <FontAwesomeIcon icon={faPlus} />;
  const minus = <FontAwesomeIcon icon={faMinus} />;
  const [show, setShow] = useState(false);
  const [showtwo, setShowtwo] = useState(false);
  const [showthree, setShowthree] = useState(false);
  const [showfour, setShowfour] = useState(false);

  return (
    <>
      <div className="container">
        <div className="image"></div>
        <div className="goals">
          <div className="plusAndTitle" onClick={() => setShow(!show)}>
            <div className="add">
              <div>{plus} </div>
              <h3>Some title</h3>
            </div>
            {show ? (
              <div className="expanded">
                <h1>How does the project work?</h1>
                <ul>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="plusAndTitle" onClick={() => setShowtwo(!showtwo)}>
            <div className="add">
              <div>{plus} </div>
              <h3>Some title</h3>
            </div>
            {showtwo ? (
              <div className="expanded">
                <h1>How does the project work?</h1>
                <ul>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                </ul>
              </div>
            ) : null}
          </div>
          <div
            className="plusAndTitle"
            onClick={() => setShowthree(!showthree)}
          >
            <div className="add">
              <div>{plus} </div>
              <h3>Some title</h3>
            </div>
            {showthree ? (
              <div className="expanded">
                <h1>How does the project work?</h1>
                <ul>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="plusAndTitle" onClick={() => setShowfour(!showfour)}>
            <div className="add">
              <div>{plus} </div>
              <h3>Some title</h3>
            </div>
            {showfour ? (
              <div className="expanded">
                <h1>How does the project work?</h1>
                <ul>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                  <li>Some item in the list</li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

/* <div className="image">
<img
  id="goals"
  src={
    require("../../images/Farm-to-Table-Thumbnail-721x541.png").default
  }
  alt="farm to table"
/>
</div> */
