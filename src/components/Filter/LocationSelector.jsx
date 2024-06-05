import React from "react";
import css from "./LocationSelector.module.css";

const cities = [
  "Kyiv",
  "Lviv",
  "Odesa",
  "Kharkiv",
  "Dnipro",
  "Zaporizhzhia",
  "Vinnytsia",
  "Chernihiv",
  "Sumy",
  "Poltava",
];

const LocationSelector = ({ onSelect }) => {
  return (
    <div className={css.locationSelector}>
      {cities.map((city) => (
        <div
          key={city}
          className={css.locationItem}
          onClick={() => onSelect(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
};

export default LocationSelector;
