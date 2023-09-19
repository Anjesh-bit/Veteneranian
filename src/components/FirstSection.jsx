import Button from "../common/Button";
import "./css/FirstSection.css";

const FirstSection = () => {
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
      <div className="right_section">This contains Images</div>
    </div>
  );
};

export default FirstSection;
