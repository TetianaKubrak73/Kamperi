import css from "./Home.module.css";
import camperImage from "../../image/camper.jpg";

const Home = () => {
  return (
    <div className={css.homeDiv}>
      <img className={css.homeImage} src={camperImage} alt="Camper" />
      <p className={css.homeText}>
        Campers are popular all over the world, and not so long ago they became
        popular in Ukraine. Ukraine is the perfect place to rent a campervan or
        motorhome and hit the road. The concept of iconic American road trips
        continues to attract people from all over the world to experience the
        splendor of its many landscapes. Curiosity attracts local and foreign
        tourists to all the wonders that can be found throughout the country.
        Ukrainians have a great sense of adventure and love for nature, making
        motorhomes the perfect way to enjoy road trips. No matter where you go
        in Ukraine, we recommend that you find a campground near you. Be sure to
        contact campsites to find campsites that best suit your needs. Please
        note that some campsites must be booked in advance. With some campsites,
        especially in high season, you will have to contact them months in
        advance, while others follow the “first come, first served” rule.
      </p>
    </div>
  );
};
export default Home;
