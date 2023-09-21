import Button from "../common/Button";
import "./css/FirstSection.css";
import { useState, useEffect } from "react";
import { vetDoctorData } from "../data/Data";

const FirstSection = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const image = vetDoctorData.find((img) => img.select);
    setImage(image);
  }, []); // run only once when the component mounts

  return (
    <div className="app_first_section_wrapper">
      <div className="left_section">
        <h1>First I wanted to be a Veterian</h1>
        <p>
          To become a veterinary doctor, one needs to complete a bachelor’s
          degree in veterinary science or a related field, followed by a doctor
          of veterinary medicine.
        </p>
        <div className="btn_section">
          <Button btnText="Contact" btnClassName="app_contact_btn" />
          <Button btnText="Services" btnClassName="app_services_btn" />
        </div>
      </div>
      <div className="right_section">
        <img src={image?.vet} alt="vetdoctor" loading="lazy" />
      </div>
    </div>
  );
};

export default FirstSection;
