import css from "./VehicleType.module.css";

import sprite from "../../../image/sprite.svg";

function VehicleType({ selectedVehicleType, onChange }) {
  return (
    <div className={css.vehicleTypeContainer}>
      <h2 className={css.title}>Vehicle Type</h2>
      <hr className={css.filterHr} />
      <div className={css.radioContainer}>
        <label className={css.radioLabel}>
          <input
            type="radio"
            name="vehicleType"
            value="van"
            checked={selectedVehicleType === "van"}
            onChange={onChange}
            className={css.radioInput}
          />
          <svg className={css.icon}>
            <use href={`${sprite}#van`} />
          </svg>
          Van
        </label>
        <label className={css.radioLabel}>
          <input
            type="radio"
            name="vehicleType"
            value="fullyIntegrated"
            checked={selectedVehicleType === "fullyIntegrated"}
            onChange={onChange}
            className={css.radioInput}
          />
          <svg className={css.icon}>
            <use href={`${sprite}#fully-integrated`} />
          </svg>
          Fully Integrated
        </label>
        <label className={css.radioLabel}>
          <input
            type="radio"
            name="vehicleType"
            value="alcove"
            checked={selectedVehicleType === "alcove"}
            onChange={onChange}
            className={css.radioInput}
          />
          <svg className={css.icon}>
            <use href={`${sprite}#alcove`} />
          </svg>
          Alcove
        </label>
      </div>
    </div>
  );
}

export default VehicleType;
