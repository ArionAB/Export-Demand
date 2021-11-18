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
              <h3>AGRICULTURE CO-OPS</h3>
            </div>
            {show ? (
              <div className="expanded">
                <ul>
                  <li>
                    2 million farmers are members of more than 2,100 co-ops in
                    the U.S.
                  </li>
                  <li>
                    There are more than 1.2 million agricultural co-ops across
                    the globe
                  </li>
                  <li>
                    Farm co-ops generate about $6.5 billion in net income each
                    year
                  </li>
                  <li>
                    More than 250,000 people are employed by farmer-owned co-ops
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="plusAndTitle" onClick={() => setShowtwo(!showtwo)}>
            <div className="add">
              <div>{plus} </div>
              <h3>HOW FARM CO-OPS WORK</h3>
            </div>
            {showtwo ? (
              <div className="expanded">
                <ul>
                  <li>
                    Agricultural co-ops have existed for as long as people have
                    been farming
                  </li>
                  <li>
                    In a cooperative, members would pool their financial
                    resources and expertise to support each other’s farms
                  </li>
                  <li>
                    Farms function collectively, they can achieve significant
                    long-term success
                  </li>
                  <li>
                    In a farmer-owned co-op, like-minded food producers help
                    build a better local economy in the communities they serve.
                  </li>
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
              <h3>CO-OP ASSOCIATIONS IN AGRICULTURE</h3>
            </div>
            {showthree ? (
              <div className="expanded">
                <ul>
                  <li>
                    <a href="http://ncfc.org/">
                      National Council of Farmer Cooperatives
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="http://ncfc.org/">National Farmers Union</a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.ica.coop/en">
                      International Co-operative Alliance
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://betterworld.coop/">
                      Cooperatives for a Better World
                    </a>
                  </li>
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
