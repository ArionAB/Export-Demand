import styles from "../About US/aboutus.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function AboutUS() {
  return (
    <div className="AboutUS">
      <h1 className="title">ABOUT US</h1>
      <div className="who_we_are">
        <img src={require("../../images/bees2.jpg").default} alt="two people" />
        <div className="article_right">
          <h2>Who we are</h2>
          <p>
            Cooperatives strive to maximize the benefits they generate for their
            members (which usually involves zero-profit operation). Agricultural
            cooperatives are therefore created in situations where farmers
            cannot obtain essential services from IOFs (because the provision of
            these services is judged to be unprofitable by the IOFs), or when
            IOFs provide the services at disadvantageous terms to the farmers
            (i.e., the services are available, but the profit-motivated prices
            are too high for the farmers).
            <p>
              The former situations are characterized in economic theory as
              market failure or missing services motive. The latter drive the
              creation of cooperatives as a competitive yardstick or as a means
              of allowing farmers to build countervailing market power to oppose
              the IOFs.[1] The concept of competitive yardstick implies that
              farmers, faced with unsatisfactory performance by IOFs, may form a
              cooperative firm whose purpose is to force the IOFs, through
              competition, to improve their service to farmers.
            </p>
          </p>
        </div>
      </div>
      <div className="our_products">
        <div className="article_left">
          <h2>Our products</h2>
          <p>
            Locally grown food tastes and looks better. The crops are picked at
            their peak and farmstead products, like cheeses, are hand-crafted
            for best flavor. Livestock products are processed in nearby
            facilities and typically the farmer has a direct relationship with
            processors, overseeing quality, unlike animals processed in large
            industrial facilities.
            <p>
              Local food is better for you. The shorter time between the farm
              and your table, the less likely it is that nutrients will be lost
              from fresh food. Food imported from far away has traveled on
              trucks or planes and has sat in warehouses before it gets to you.
            </p>
          </p>
        </div>
        <img
          src={require("../../images/vegetable_stand.jpg").default}
          alt="two people"
        />
      </div>
      <div className="why_organic">
        <img
          src={require("../../images/vinyard.jpg").default}
          alt="two people"
        />
        <div className="article_bottom">
          <h2>Why organic?</h2>
          <p>
            How your food is grown or raised can have a major impact on your
            mental and emotional health as well as the environment. Organic
            foods often have more beneficial nutrients, such as antioxidants,
            than their conventionally-grown counterparts and people with
            allergies to foods, chemicals, or preservatives may find their
            symptoms lessen or go away when they eat only organic foods.
          </p>
          <p>
            Organic produce contains fewer pesticides. Chemicals such as
            synthetic fungicides, herbicides, and insecticides are widely used
            in conventional agriculture and residues remain on (and in) the food
            we eat.
          </p>
        </div>
      </div>

      <div className="farmers">
        <h1>Meet Our Farmers</h1>
        <div className="farmer_1">
          <img
            src={require("../../images/farmer_1.jpg").default}
            alt="two people"
          />
          <h2>John Deere</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
        <div className="farmer_2">
          <img
            src={require("../../images/farmer_2.jpg").default}
            alt="two people"
          />
          <h2>Scoot Smith</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
        <div className="farmer_3">
          <img
            src={require("../../images/farmer_3.jpg").default}
            alt="two people"
          />
          <h2>John Cena</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
      </div>
      <div className="footer">
        <h1>We Need More Hands!</h1>
        <button className="apply">Apply</button>
      </div>
    </div>
  );
}
