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
      >
        <>{children}</>
      </Modal>
    </>
  );
};

export default VideoPlayerModal;
