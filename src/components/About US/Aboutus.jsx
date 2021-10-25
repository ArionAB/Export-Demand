import styles from "../About US/aboutus.styles.scss";

export function AboutUS() {
  return (
    <div className="AboutUS">
      <h1 className="title">ABOUT US</h1>
      <p>
        MIA Group has over thirty years of export business development
        experience. Due to Brexit we are the new bespoke division of our larger
        parent company MIA and deliver a tailor-made service creating and
        delivering export demand for our clients.
      </p>
      <div className="two_imgs">
        <img
          src={require("../../images/homepage-left.jpeg").default}
          alt="two people"
        />
        <img
          src={require("../../images/homepage-right.jpeg").default}
          alt="two people"
        />
      </div>
      <p>
        EXPORT DEMAND'S knowledge of export markets began in 1988 with the Group
        when Hong Kong still belonged to the UK and the Berlin wall still
        existed. Since 1988 our Project Directors have specialized in developing
        Export Business for Western Manufacturers in Russia, East Europe,
        Europe, China, Asia, America, and North America.
      </p>
      <p>
        Our clients find that finding and employing the right technical staff is
        becoming harder and harder even impossible sometimes to find the right
        team to help them grow.
      </p>
      <p>
        Although our clients are extremely strong in terms of manufacturing,
        when it comes to exporting the technology finding the right contacts and
        qualifying those contacts can sometimes be problematic.
      </p>
      <p>
        Here at EXPORT DEMAND over the years, we have built vital one to one
        relations and we have the right connections to your local partners,
        resellers and end-users.
      </p>
      <p>
        Importantly we employ industry-specific research staff, with the
        necessary technical expertise to build business in emerging markets and
        to be able to generate enquiries that have a definite commercial
        interest in your Technology or Solutions.
      </p>

      <h1 className="title">OUR MISSION</h1>
      <p>
        Our Mission is to increase our clients turnover in chosen export
        markets. We achieve this by handpicking our Manufacturers, presenting
        them as a chosen and preferred supplier and placing them with Key Buyers
        and Local Partners looking for the best possible manufacturing
        technology or solution.
      </p>
      <h1 className="title">Our Expertise</h1>
      <i class="fas fa-check"></i>
    </div>
  );
}
