import { footerData } from "../data/Data";
import "./css/Footer.css";

const Footer = () => {
  return (
    <div className="app_footer">
      {footerData.map((section, index) => (
        <div className="app_inner_footer_wrapper" key={index}>
          <div className="app_about">
            {section.about && section.about.length > 0 && (
              <ul>
                {section.about.map((item, subIndex) => (
                  <li key={subIndex}>{item.data}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="app_services">
            {section.services && section.services.length > 0 && (
              <ul>
                {section.services.map((item, subIndex) => (
                  <li key={subIndex}>{item.data}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="app_icons_newsletter">
            {section.iconsNewsLetter && section.iconsNewsLetter.length > 0 && (
              <ul>
                {section.iconsNewsLetter.map((item, subIndex) => (
                  <li key={subIndex}>{item.data}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
