import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function DeleteDeckButton({ deck }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    const result = window.confirm(
      `Delete this deck: ${deck.name}? \n \n You will not be able to recover it.`
    );
    if (result) {
      deleteDeck(deck.id).then(navigate(0));
    }
  };

  return (
    <button
      type="button"
      className="ml-auto p-2 bd-highlight btn btn-outline-danger"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}

export default DeleteDeckButton;
