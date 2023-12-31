import vet1 from "../assets/Vet1.jpg";
import vet2 from "../assets/Vet2.jpg";
import vet3 from "../assets/Vet3.jpg";

import dog1 from "../assets/Dog1.jpg";
import dog3 from "../assets/Dog3.jpg";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import FavoriteIcon from "@mui/icons-material/Favorite";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Button from "../common/Button";

//css data
const color = {
  color: "#daac00",
};

const fontSize = {
  fontSize: "90px",
};

//data
const vetDogData = [{ vet: dog1 }, { vet: dog3 }, { vet: dog1 }];

const vetDoctorData = [
  {
    vet: vet1,
    select: true,
  },
  {
    vet: vet2,
  },
  {
    vet: vet3,
  },
];

const vetData = [
  {
    vet: vet1,
    data: "Veterinarian doctor",
    body: "Lorem ipsum data for veterinarian doctor",
  },
  {
    vet: vet2,
    data: "Dental care",
    body: "Lorem ipsum data for dental care",
  },
  {
    vet: vet3,
    data: "Veterinarian",
    body: "Lorem ipsum data for veterinarian",
  },
];

const vetSliderData = [
  {
    image: vet1,
    name: "Imma Watson",
    description: "Doctor",
    socails: [
      {
        socialcon: <InstagramIcon style={color} />,
        link: "https://www.instagram.com/",
      },
      {
        socialcon: <FacebookIcon />,
        link: "https://facebook.com/",
      },
      {
        socialcon: <TwitterIcon />,
        link: "https://twitter.com/",
      },
      {
        socialcon: <WhatsAppIcon />,
        link: "https://whatsapp.com/",
      },
    ],
  },
  {
    image: vet2,
    name: "Josh Mario",
    description: "Administartor",
    socails: [
      {
        socialcon: <InstagramIcon />,
        link: "https://www.instagram.com/",
      },
      {
        socialcon: <FacebookIcon />,
        link: "https://facebook.com/",
      },
      {
        socialcon: <TwitterIcon />,
        link: "https://twitter.com/",
      },
      {
        socialcon: <WhatsAppIcon />,
        link: "https://whatsapp.com/",
      },
    ],
  },
  {
    image: vet3,
    name: "Eva mario",
    description: "Doctor",
    socails: [
      {
        socialcon: <InstagramIcon />,
        link: "https://www.instagram.com/",
      },
      {
        socialcon: <FacebookIcon />,
        link: "https://facebook.com/",
      },
      {
        socialcon: <TwitterIcon />,
        link: "https://twitter.com/",
      },
      {
        socialcon: <WhatsAppIcon />,
        link: "https://whatsapp.com/",
      },
    ],
  },

  {
    image: vet1,
    name: "Imma gilson",
    description: "Doctor",
    socails: [
      {
        socialcon: <InstagramIcon />,
        link: "https://www.instagram.com/",
      },
      {
        socialcon: <FacebookIcon />,
        link: "https://facebook.com/",
      },
      {
        socialcon: <TwitterIcon />,
        link: "https://twitter.com/",
      },
      {
        socialcon: <WhatsAppIcon />,
        link: "https://whatsapp.com/",
      },
    ],
  },
  {
    image: vet2,
    name: "Carie Watson",
    description: "Administartor",
    socails: [
      {
        socialcon: <InstagramIcon />,
        link: "https://www.instagram.com/",
      },
      {
        socialcon: <FacebookIcon />,
        link: "https://facebook.com/",
      },
      {
        socialcon: <TwitterIcon />,
        link: "https://twitter.com/",
      },
      {
        socialcon: <WhatsAppIcon />,
        link: "https://whatsapp.com/",
      },
    ],
  },
  {
    image: vet3,
    name: "Lily Watson",
    description: "Doctor",
    socails: [
      {
        socialcon: <InstagramIcon />,
        link: "https://www.instagram.com/",
      },
      {
        socialcon: <FacebookIcon />,
        link: "https://facebook.com/",
      },
      {
        socialcon: <TwitterIcon />,
        link: "https://twitter.com/",
      },
      {
        socialcon: <WhatsAppIcon />,
        link: "https://whatsapp.com/",
      },
    ],
  },
  {
    image: dog1,
    name: "Mores Watson",
    description: "Dog Mores",
    socails: [
      {
        socialcon: <InstagramIcon />,
        link: "https://www.instagram.com/",
      },
      {
        socialcon: <FacebookIcon />,
        link: "https://facebook.com/",
      },
      {
        socialcon: <TwitterIcon />,
        link: "https://twitter.com/",
      },
      {
        socialcon: <WhatsAppIcon />,
        link: "https://whatsapp.com/",
      },
    ],
  },
  {
    image: dog3,
    name: "Alison Watson",
    description: "Dog Alison",
    socails: [
      {
        socialcon: <InstagramIcon />,
        link: "https://www.instagram.com/",
      },
      {
        socialcon: <FacebookIcon />,
        link: "https://facebook.com/",
      },
      {
        socialcon: <TwitterIcon />,
        link: "https://twitter.com/",
      },
      {
        socialcon: <WhatsAppIcon />,
        link: "https://whatsapp.com/",
      },
    ],
  },
  {
    image: dog1,
    name: "Nimesh Watson",
    description: "Dog Watson",
    socails: [
      {
        socialcon: <InstagramIcon />,
        link: "https://www.instagram.com/",
      },
      {
        socialcon: <FacebookIcon />,
        link: "https://facebook.com/",
      },
      {
        socialcon: <TwitterIcon />,
        link: "https://twitter.com/",
      },
      {
        socialcon: <WhatsAppIcon />,
        link: "https://whatsapp.com/",
      },
    ],
  },
];

const vetSeventhSecData = [
  {
    title: "Happy Clients",
    count: "+34793",
    icon: <FavoriteIcon style={fontSize} />,
  },
  {
    title: "Department",
    count: "+45382",
    icon: <DirectionsRunIcon style={fontSize} />,
  },
  {
    title: "Vaccinations",
    count: "+56783",
    icon: <VaccinesIcon style={fontSize} />,
  },
];

const footerData = [
  {
    about: [
      { data: <h2>About</h2> },
      { data: "History" },
      { data: "Our Teams" },
      { data: "Brand Guidliness" },
      { data: "Terms and Condition" },
      { data: "Privacy Policies" },
    ],
  },
  {
    services: [
      { data: <h2>Services</h2> },
      { data: "How to order" },
      { data: "Our Products" },
      { data: "Order Status" },
      { data: "Promo" },
      { data: "Payment Method" },
    ],
  },
  {
    iconsNewsLetter: [
      { data: <h2>Title</h2> },
      { data: "This is vet" },
      { data: "Our services are world wide" },
      {
        data: (
          <div className="main_container_ico">
            <i className="material-icons">email</i>
            <input type="text" className="news_letter" />
          </div>
        ),
      },
    ],
    icons: [
      { data: <InstagramIcon /> },
      { data: <FacebookIcon /> },
      { data: <TwitterIcon /> },
      { data: <WhatsAppIcon /> },
    ],
  },
];

const postsData = [
  {
    picture: vet1,
    header: "As a vet and lover of dog",
    date: "February 9,2020",
    paragraph:
      "vet doctors are great in exploring dogs vet doctors are great in exploring dogs",
    button: <Button btnText="Read more" btnClassName="posts_btn" />,
  },
  {
    picture: vet2,
    header: "As a vet and lover of dog",
    date: "February 10,2020",
    paragraph:
      "vet doctors are great in exploring dogs vet doctors are great in exploring dogs",
    button: <Button btnText="Read more" btnClassName="posts_btn" />,
  },
  {
    picture: vet3,
    header: "As a vet and lover of dog",
    date: "February 11,2020",
    paragraph:
      "vet doctors are great in exploring dogs vet doctors are great in exploring dogs",
    button: <Button btnText="Read more" btnClassName="posts_btn" />,
  },
];

export {
  vetDogData,
  vetDoctorData,
  vetData,
  vetSliderData,
  vetSeventhSecData,
  footerData,
  postsData,
};
