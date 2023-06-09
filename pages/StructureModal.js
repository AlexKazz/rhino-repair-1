// StructureModal.js
import { useState } from "react";
import Modal from "react-modal";
import styles from "./Home.module.css";
import PictureDisplay from "./PictureDisplay";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    width: "1000px", // Set a max width here
    height: "600px",
    margin: "auto",
  },
};

function StructureModal({
  modalIsOpen,
  onRequestClose,
  currentStructure,
  handleInputChange,
  handleFileChange,
  handleSave,
  handleDelete,
  handleShowPicture,
  showPicture,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <h2>Structure Details</h2>
      <div className={styles.inputField}>
        <label>Title:</label>
        <input
          name="title"
          placeholder="Title"
          value={currentStructure.title}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <label className="text-black">Upload Structure Photo:</label>
      <input
        className="mb-6"
        type="file"
        name="image"
        onChange={handleFileChange}
      />

      <br />

      <br />
      <label className="text-black">Upload Rhino3D File:</label>
      <input
        className="mb-6"
        type="file"
        name="rhinoFile"
        onChange={handleFileChange}
      />
      <br />
      <button onClick={handleShowPicture} className={styles.button}>
        Display Picture
      </button>
      {showPicture && <PictureDisplay />}
      <div className={styles.inputField}>
        <label>Notes:</label>
        <textarea
          name="notes"
          placeholder="Notes"
          value={currentStructure.notes}
          onChange={handleInputChange}
        />
      </div>

      <br />
      <button onClick={handleSave} className={styles.button}>
        Save
      </button>
      <br />
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </Modal>
  );
}

export default StructureModal;
