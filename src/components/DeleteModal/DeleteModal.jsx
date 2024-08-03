import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts//operations";
import Modal from "react-modal";
import css from "./DeleteModal.module.css";

export default function DeleteModal({
  closeDeleteModal,
  deleteModalIsopen,
  id,
  name,
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

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Modal
      isOpen={deleteModalIsopen}
      onRequestClose={closeDeleteModal}
      style={customStyles}
    >
      <h2>
        Delete this contact: <span>{name}</span> ?
      </h2>
      <div className={css.btns}>
        <button onClick={closeDeleteModal} type="button">
          No
        </button>
        <button onClick={handleDelete} type="button">
          Yes
        </button>
      </div>
    </Modal>
  );
}
