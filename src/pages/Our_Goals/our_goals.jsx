import React from "react";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandMiddleFinger, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./our_goals.styles.scss";

export const Goals = () => {
  const element = <FontAwesomeIcon icon={faPlus} />;

  return (
    <div className="container">
      <div className="image">
        <img
          src={
            require("../../images/Farm-to-Table-Thumbnail-721x541.png").default
          }
          alt="farm to table"
        />
      </div>
      <div className="goals">
        <div className="plusAndTitle">
          <div>{element}</div>
          <h3>Some title</h3>
          <div
            className={clsx({
              [styles.hidden]: [styles.show],
            })}
          >
            <h1>Title</h1>
            <ul>
              <li>Some text</li>
              <li>Some text</li>
              <li>Some text</li>
              <li>Some text</li>
              <li>Some text</li>
            </ul>
          </div>
        </div>
        <div className="plusAndTitle">
          <div>{element}</div>
          <h3>Some title</h3>
        </div>
        <div className="plusAndTitle">
          <div>{element}</div>
          <h3>Some title</h3>
        </div>
        <div className="plusAndTitle">
          <div>{element}</div>
          <h3>Some title</h3>
        </div>
      </div>
    </div>
  );
};
