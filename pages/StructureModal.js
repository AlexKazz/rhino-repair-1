// StructureModal.js
import Modal from "react-modal";
import styles from "./Home.module.css";

Modal.setAppElement("#__next");

function StructureModal({
  modalIsOpen,
  onRequestClose,
  currentStructure,
  handleInputChange,
  handleFileChange,
  handleSave,
  handleDelete,
}) {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={onRequestClose}>
      <h2>Structure Details</h2>
      <input
        name="title"
        placeholder="Title"
        value={currentStructure.title}
        onChange={handleInputChange}
      />
      <br />
      <input type="file" name="image" onChange={handleFileChange} />
      <br />
      <input
        name="xCoordinate"
        placeholder="X Coordinate"
        value={currentStructure.xCoordinate}
        onChange={handleInputChange}
      />
      <br />
      <input
        name="yCoordinate"
        placeholder="Y Coordinate"
        value={currentStructure.yCoordinate}
        onChange={handleInputChange}
      />
      <br />
      <input type="file" name="rhinoFile" onChange={handleFileChange} />
      <br />
      <textarea
        name="notes"
        placeholder="Notes"
        value={currentStructure.notes}
        onChange={handleInputChange}
      />
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
