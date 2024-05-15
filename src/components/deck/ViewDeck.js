import React, { useState, useEffect } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { readDeck, deleteCard } from "../../utils/api";
import CardList from "../card/CardList";
import DeleteDeckButton from "./DeleteDeckButton";

function ViewDeck() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const { deckId } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal)
      .then((deck) => {
        setDeck(deck);
        setCards(deck.cards);
      })
      .catch(console.error);
    return () => abortController.abort();
  }, [deckId]);

  const handleCardDelete = (cardId) => {
    const result = window.confirm(
      `Delete this card? \n \n You will not be able to recover it.`
    );
    if (result) {
      deleteCard(cardId).then(() => {
        setCards((currentCards) =>
          currentCards.filter((card) => card.id !== cardId)
        );
      });
    }
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <h4>{deck.name}</h4>
      <p>{deck.description}</p>
      <div className="d-flex flex-row bd-highlight mb-1">
        <NavLink to={`${pathname}/edit`}>
          <button type="button" className="ml-2 btn btn-secondary">
            Edit
          </button>
        </NavLink>
        <NavLink to={`${pathname}/study`}>
          <button type="button" className="ml-2 btn btn-secondary mr-2">
            Study
          </button>
        </NavLink>
        <NavLink to={`${pathname}/cards/new`}>
          <button type="button" className="btn btn-info mr-2">
            Add Cards
          </button>
        </NavLink>
        <DeleteDeckButton deck={deck} />
      </div>
      <br />
      <h3>Cards</h3>
      {deck.cards && <CardList cards={cards} handleDelete={handleCardDelete} />}
    </div>
  );
}

export default ViewDeck;
