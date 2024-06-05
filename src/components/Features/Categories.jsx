import css from "./Features.module.css";
import sprite from "../../image/sprite.svg";

const Categories = ({
  adults,
  transmission,
  TV,
  engine,
  kitchen,
  beds,
  airConditioner,
  CD,
  radio,
  hob,
  toilet,
  freezer,
  microwave,
  gas,
  water,
  shower,
}) => {
  return (
    <div className={css.categoriesDiv}>
      <ul>
        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#adults`} />
          </svg>
          {adults} adults
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#transmission`} />
          </svg>
          {transmission}transmission
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#TV`} />
          </svg>
          {TV}TV
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#engine`} />
          </svg>
          {engine}engine
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#kitchen`} />
          </svg>
          {kitchen}kitchen
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#beds`} />
          </svg>
          {beds}beds
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#air-conditioner`} />
          </svg>
          {airConditioner} airConditioner
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#cd`} />
          </svg>
          {CD}CD
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#radio`} />
          </svg>
          {radio}radio
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#hob`} />
          </svg>
          {hob} hob
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#toilet`} />
          </svg>
          {toilet} toilet
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#freezer`} />
          </svg>
          {freezer} freezer
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#microwave`} />
          </svg>
          {microwave} microwave
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#gas`} />
          </svg>
          {gas} gas
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#water`} />
          </svg>
          {water} water
        </li>

        <li className={css.categoriesItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#shower`} />
          </svg>
          {shower} shower
        </li>
      </ul>
    </div>
  );
};

export default Categories;
