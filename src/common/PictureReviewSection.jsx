import Button from "./Button";
import "./css/PictureReviews.css";

const PictureReviewSection = (props) => {
  const { data, className } = props;
  return (
    <div className="app_picture_reviews__section_wrapper">
      <div className="picture_reviews_top_section">
        <h1>Veteninarian Doctor</h1>
        <p>Veterinarians treat disease and disorders</p>
      </div>
      <div className="picture_reviews_buttom_section ">
        <div className="image_wrapper">
          {/* map thrugh all the data which returns new array without initial array modification */}
          {data?.map((vetData, index) => (
            <div className="container" key={index}>
              <div className="image_container">
                <img
                  src={vetData.vet}
                  alt={"vetImages" + index}
                  loading="lazy"
                />
              </div>
              <div className="margin">
                <h2>{vetData.data}</h2>
                <p>{vetData.body}</p>
              </div>
              {className === "buy_now_btn" && (
                <>
                  <p style={{ fontWeight: 600, fontSize: "1.3em" }}>
                    <del>100$</del> 80$
                  </p>
                  <Button btnText="Buy Now" btnClassName={className} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureReviewSection;
