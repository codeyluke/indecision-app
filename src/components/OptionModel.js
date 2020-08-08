import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const OptionModel = (props) => {
  const { selectedOption, closeModal } = props;
  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button className="button" onClick={closeModal}>
        Okay
      </button>
    </Modal>
  );
};

Modal.setAppElement("#app");

export default OptionModel;
