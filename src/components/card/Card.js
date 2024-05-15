import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Card({ card, handleDelete }) {
  const { pathname } = useLocation();

  return (
    <div className="border border-dark my-4 mx-5 rounded p-4 bg-light">
      <table>
        <tbody>
          <tr className="m-2 text-center">
            <td className="col-md-4 m-2">{card.front}</td>
            <td className="col-md-4 m-2">{card.back}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <NavLink to={`${pathname}/cards/${card.id}/edit`}>
          <button type="button" className="p-2 btn btn-secondary mt-4">
            Edit
          </button>
        </NavLink>
        <button
          type="button"
          className="ml-3 p-2 bd-highlight btn btn-outline-danger mt-4"
          onClick={() => {
            console.log("handleDelete", handleDelete);
            handleDelete();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
