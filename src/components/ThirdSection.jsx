import PictureReviewSection from "../common/PictureReviewSection";
import { vetData } from "../data/Data";

/*pass the props to PictureReviewSection which is a child Component
we can use propsTypes for specific dataTypes to be passed but not used here
*/
const ThirdSection = () => {
  return <PictureReviewSection data={vetData} />;
};

export default ThirdSection;
