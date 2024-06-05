// import { useForm } from "react-hook-form";
import React, { useState } from "react";
import css from "./Form.module.css";
import DatePicker from "react-datepicker";

const Form = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <form className={css.form}>
      <div className={css.formDiv}>
        <h2 className={css.formTitle}>Book your campervan now</h2>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={css.formInputContainer}>
        <input
          className={css.formInput}
          type="text"
          placeholder="Name"
          autoComplete="on"
          required
        />
        <input
          className={css.formInput}
          type="email"
          placeholder="Email"
          autoComplete="on"
          required
        />
        <div className={css.formDateInputContainer}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className={css.formInput}
            placeholderText="Booking date"
            required
          />
          <span className={css.calendarIcon}></span>
        </div>
        <textarea
          className={css.formComment}
          name="comment"
          placeholder="Comment"
          required
        ></textarea>
        <button className={css.formButton} type="submit">
          Send
        </button>
      </div>
    </form>
  );
};
export default Form;
