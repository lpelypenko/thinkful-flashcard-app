import React from "react";
import { NavLink } from "react-router-dom";
import DeleteDeckButton from "./DeleteDeckButton";
import Icon from "../common/Icon";

function DeckListItem({ deck }) {
  return (
    <div class="card w-100">
      <div class="card-body">
        <h5 class="card-title">{deck.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{deck.cards.length} cards</h6>
        <p class="card-text">{deck.description}</p>
        <div className="d-flex justify-content-between"></div>
        <NavLink to={`/decks/${deck.id}`}>
          <button type="button" className="ml-2 btn btn-secondary">
            <Icon type={"View"} /> View
          </button>
        </NavLink>
        <NavLink to={`/decks/${deck.id}/study`}>
          <button type="button" className="btn btn-primary">
            <Icon type={"Study"} /> Study
          </button>
        </NavLink>
        <DeleteDeckButton deck={deck} />
      </div>
    </div>
  );
}

export default DeckListItem;
