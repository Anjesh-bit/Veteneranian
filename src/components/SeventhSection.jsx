import { useEffect, useState } from "react";
import { vetDoctorData, vetSeventhSecData } from "../data/Data";
import "./css/SeventhSection.css";

const SeventhSection = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const image = vetDoctorData.find((img) => img.select);
    setImage(image);
  }, []); // run only once when the component mounts

  return (
    <div className="app_seventh_sec_wrapper">
      <div className="image_seventh_wrapper">
        <img src={image?.vet} alt="vetdoctor" loading="lazy" />
      </div>
      <div className="app_inner_wrapper">
        {vetSeventhSecData?.map((data, index) => (
          <div className="data_container" key={`${index} + 4`}>
            <ul>
              <li>{data.icon}</li>
              <li>{data.count}</li>
              <li>{data.title}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeventhSection;
