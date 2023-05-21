// Install these dependencies: yarn add react-modal uuid
import { useState } from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import styles from "./Home.module.css";
import StructureModal from "./StructureModal";

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
  const [showPicture, setShowPicture] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setShowPicture(false);
  }

  const handleShowPicture = () => {
    setShowPicture(true);
  };

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
    <div className={styles.home}>
      <button onClick={openModal} className={styles.button}>
        Add New Structure
      </button>
      <StructureModal
        modalIsOpen={modalIsOpen}
        onRequestClose={closeModal}
        currentStructure={currentStructure}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        handleSave={handleSave}
        handleDelete={handleDelete}
        handleShowPicture={handleShowPicture}
        showPicture={showPicture}
      />
      {structures.map((structure) => (
        <div
          key={structure.id}
          onClick={() => handleStructureClick(structure.id)}
          className={styles.structure}
        >
          {structure.title}
        </div>
      ))}
    </div>
  );
}
