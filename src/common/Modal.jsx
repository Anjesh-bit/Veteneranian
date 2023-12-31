import Modal from "@mui/material/Modal";

//videoPlayerModal which open when expand button is clicked for expanded view
const VideoPlayerModal = (props) => {
  // props received for open model and handle the Close
  const {
    isOpen,
    handleOnCloseModal,
    ariaLabelBy,
    ariaLableDescribedBy,
    children,
  } = props;

  return (
    <>
      {/* modal state updated through reducer */}
      <Modal
        open={isOpen}
        onClose={handleOnCloseModal}
        aria-labelledby={ariaLabelBy}
        aria-describedby={ariaLableDescribedBy}
        style={{ zIndex: 99999999 }}
      >
        <>{children}</>
      </Modal>
    </>
  );
};

export default VideoPlayerModal;
