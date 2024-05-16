import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../common/Breadcrumb";

const NotEnoughCards = ({ deckId, numberOfCards, deck }) => {
  const breadcrumbItems = [
    { link: "/", title: "Home", active: false },
    { link: `/decks/${deckId}`, title: deck.name, active: false },
    { link: "", title: "Study", active: true },
  ];
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <h3>Study</h3>
      <h4>Not enough cards in the deck.</h4>
      <p>
        You need at least 3 cards to study. There are {numberOfCards} cards in
        this deck.
      </p>
      <NavLink to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
        Add Cards
      </NavLink>
    </div>
  );
};

export default NotEnoughCards;
