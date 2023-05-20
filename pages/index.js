// Install these dependencies: yarn add react-modal uuid
import { useState } from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";

Modal.setAppElement("#__next");

const defaultFormState = {
  title: "",
  image: null,
  xCoordinate: "",
  yCoordinate: "",
  rhinoFile: null,
  notes: "",
};

export default function Home() {
  const [structures, setStructures] = useState([]);
  const [currentStructure, setCurrentStructure] = useState(defaultFormState);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleInputChange(e) {
    setCurrentStructure({
      ...currentStructure,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileChange(e) {
    setCurrentStructure({
      ...currentStructure,
      [e.target.name]: e.target.files[0],
    });
  }

  function handleSave() {
    if (!currentStructure.id) {
      setStructures([...structures, { ...currentStructure, id: uuidv4() }]);
    }
    setCurrentStructure(defaultFormState);
    closeModal();
  }

  function handleDelete() {
    setStructures(
      structures.filter((structure) => structure.id !== currentStructure.id)
    );
    setCurrentStructure(defaultFormState);
    closeModal();
  }

  function handleStructureClick(id) {
    const structure = structures.find((s) => s.id === id);
    setCurrentStructure(structure);
    openModal();
  }

  return (
    <div>
      <button onClick={openModal}>Add New Structure</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
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
        <button onClick={handleSave}>Save</button>
        <br />
        <button onClick={handleDelete}>Delete</button>
      </Modal>
      {structures.map((structure) => (
        <div
          key={structure.id}
          onClick={() => handleStructureClick(structure.id)}
        >
          {structure.title}
        </div>
      ))}
    </div>
  );
}
