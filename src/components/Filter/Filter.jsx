import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import sprite from "../../image/sprite.svg";
import LocationSelector from "./LocationSelector";
import VehicleType from "./VehicleType/VehicleType";
import css from "./Filter.module.css";

// import Categories from "../Features/Categories";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const [isLocationSelectorVisible, setLocationSelectorVisible] =
    useState(false);
  const [selectedVehicleType, setSelectedVehicleType] = useState("van");

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const handleInputClick = () => {
    setLocationSelectorVisible(true);
  };

  const handleLocationSelect = (city) => {
    dispatch(setFilter(city));
    setLocationSelectorVisible(false);
  };
  const handleVehicleTypeChange = (event) => {
    setSelectedVehicleType(event.target.value);
  };
  return (
    <div className={css.filterDiv}>
      <label className={css.labelFilter}>
        Location
        <div className={css.inputContainer}>
          {!isLocationSelectorVisible && (
            <svg className={css.iconLocation}>
              <use href={`${sprite}#map-pin`} />
            </svg>
          )}
          <input
            className={css.inputFilter}
            type="text"
            value={filter}
            onChange={changeFilter}
            onClick={handleInputClick}
            placeholder="City"
          />
        </div>
        {isLocationSelectorVisible && (
          <LocationSelector onSelect={handleLocationSelect} />
        )}
      </label>
      <h2 className={css.filterTitle}>Filters</h2>
      <div className={css.categoriesDiv}>
        <h3 className={css.categoriesTitle}>Vehicle equipment</h3>
        <hr className={css.filterHr} />
        {/* <Categories /> */}
      </div>
      <div className={css.vehicleTypeContainer}>
        <VehicleType
          selectedVehicleType={selectedVehicleType}
          onChange={handleVehicleTypeChange}
        />
      </div>
      <button className={css.filterButton} type="button">
        Search
      </button>
    </div>
  );
};

export default Filter;
