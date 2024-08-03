import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  const [deleteModalIsopen, setDeleteModalIsopen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const openDeleteModal = () => setDeleteModalIsopen(true);
  const closeDeleteModal = () => setDeleteModalIsopen(false);

  const openEditModal = () => setEditModalIsOpen(true);
  const closeEditModal = () => setEditModalIsOpen(false);

  return (
    <>
      <div>
        <div className={css.container}>
          <FaUserAlt />
          <p>{name}</p>
        </div>
        <div className={css.container}>
          <FaPhoneAlt />
          <a href={`tel: + ${number}`}>{number}</a>
        </div>
      </div>
      <div className={css.btns}>
        <button onClick={openEditModal} className={css.btn}>
          Edit
        </button>
        <button onClick={openDeleteModal} className={css.btn}>
          Delete
        </button>
      </div>

      <DeleteModal
        deleteModalIsopen={deleteModalIsopen}
        closeDeleteModal={closeDeleteModal}
        id={id}
        name={name}
      />
      <EditModal
        editModalIsOpen={editModalIsOpen}
        closeEditModal={closeEditModal}
        name={name}
        number={number}
        id={id}
      />
    </>
  );
}
