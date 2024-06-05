import Form from "../Form/Form";
import Categories from "./Categories";
import Details from "./Details";
import css from "./Features.module.css";

const Features = ({ details }) => {
  return (
    <div className={css.featuresForm}>
      <div className={css.featuresWrap}>
        <Categories />
        <Details details={details} />
      </div>
      <Form />
    </div>
  );
};
export default Features;
