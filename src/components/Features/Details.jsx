import css from "./Features.module.css";

const Details = ({ details }) => {
  const vehicleDetails = [
    { label: "Form", value: details.form },
    { label: "Length", value: details.length },
    { label: "Width", value: details.width },
    { label: "Height", value: details.height },
    { label: "Tank", value: details.tank },
    { label: "Consumption", value: details.consumption },
  ];

  // const { form, length, width, height, tank, consumption } = details;

  return (
    <div className={css.detailsDiv}>
      <h3 className={css.detailsTitle}>Vehicle details</h3>
      {vehicleDetails.map((vehicleDetail, index) => (
        <div key={index}>
          <span>{vehicleDetail.label}</span>
          <span>{vehicleDetail.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Details;
