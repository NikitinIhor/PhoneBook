import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { useState } from "react";
import Modal from "react-modal";
import css from "./EditModal.module.css";

export default function EditModal({
  editModalIsOpen,
  closeEditModal,
  name,
  number,
  id,
}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "rgb(249, 98, 98)",
      borderRadius: 8,
      color: "white",
      boxShadow: "8px 8px 8px black",
    },
  };

  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editContact({ id, contact: { name: newName, number: newNumber } })
    );
    closeEditModal();
  };

  return (
    <Modal
      isOpen={editModalIsOpen}
      onRequestClose={closeEditModal}
      style={customStyles}
    >
      <form onSubmit={handleSubmit} className={css.content}>
        <div className={css.container}>
          <label>Name</label>
          <input
            onChange={(e) => setNewName(e.target.value)}
            type="text"
            name="name"
            value={newName}
          />
        </div>
        <div className={css.container}>
          <label>Number</label>
          <input
            onChange={(e) => setNewNumber(e.target.value)}
            type="number"
            name="number"
            value={newNumber}
          />
        </div>

        <div className={css.btns}>
          <button onClick={closeEditModal} type="button">
            No
          </button>
          <button type="submit">Yes</button>
        </div>
      </form>
    </Modal>
  );
}
