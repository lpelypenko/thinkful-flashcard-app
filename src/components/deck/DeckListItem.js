import React from "react";
import { NavLink } from "react-router-dom";
import DeleteDeckButton from "./DeleteDeckButton";

function DeckListItem({ deck }) {
  return (
    <article>
      <div>
        <div>
          <h4>{deck.name}</h4>
          {deck.cards.length} cards
        </div>
        <p>{deck.description}</p>
        <div className="d-flex flex-row bd-highlight mb-1">
          <NavLink to={`/decks/${deck.id}`}>
            <button type="button" className="ml-2 btn btn-secondary">
              View
            </button>
          </NavLink>
          <NavLink to={`/decks/${deck.id}/study`}>
            <button type="button" className="ml-2 btn btn-secondary">
              Study
            </button>
          </NavLink>
          <DeleteDeckButton deck={deck} />
        </div>
      </div>
    </article>
  );
}

export default DeckListItem;
