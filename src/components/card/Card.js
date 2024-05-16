import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../common/Icon";

function Card({ card, handleDelete }) {
  const { pathname } = useLocation();

  return (
    <div className="border border-grey rounded p-4 ">
      <table>
        <tbody>
          <tr className="text-center">
            <td className="col-md-2 m-2">{card.front}</td>
            <td className="col-md-2 m-2">{card.back}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <NavLink to={`${pathname}/cards/${card.id}/edit`}>
          <button type="button" className="p-2 btn btn-secondary mt-4">
            <Icon type={"Edit"} /> Edit
          </button>
        </NavLink>
        <button
          type="button"
          className="btn btn-danger mt-4"
          onClick={() => {
            console.log("handleDelete", handleDelete);
            handleDelete();
          }}
        >
          <Icon type={"Delete"} />
        </button>
      </div>
    </div>
  );
}

export default Card;
