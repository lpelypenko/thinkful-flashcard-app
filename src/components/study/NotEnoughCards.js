import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../common/Icon";

const NotEnoughCards = ({ deckId, numberOfCards, deck }) => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">
              <span
                className="oi oi-home mr-1"
                style={{ color: "#0d6efd" }}
              ></span>
              Home
            </NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/">{deck.name}</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h3>Study</h3>
      <h4>Not enough cards in the deck.</h4>
      <p>
        You need at least 3 cards to study. There are {numberOfCards} cards in
        this deck.
      </p>
      <NavLink to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
        <Icon type={"add"} /> Add Cards
      </NavLink>
    </>
  );
};

export default NotEnoughCards;
