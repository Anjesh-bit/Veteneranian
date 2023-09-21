import Modal from "@mui/material/Modal";

const VideoPlayerModal = (props) => {
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
