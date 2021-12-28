import React from "react";
import axios from "axios";

const DeleteArticle = ({ id }) => {
  const handleDelete = () => {
    axios.delete("http://localhost:3000/article" + id);
    window.location.reload();
  };
  return (
    <button
      onClick={() => {
        if (window.confirm("Voulez cous supprimer ?")) handleDelete();
      }}
    >
      supprimer
    </button>
  );
};

export default DeleteArticle;
