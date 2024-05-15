import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DeckListItem from "./DeckListItem";
import { listDecks } from "../../utils/api";
import ErrorMessage from "../common/ErrorMessage";

function DeckList() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const deckList = decks.map((deck) => (
    <DeckListItem key={deck.id} deck={deck} />
  ));
  console.log(decks);

  return (
    <div>
      <NavLink to="/decks/new">
        <button type="button" className="btn btn-info">
          Create Deck
        </button>
      </NavLink>
      <section>{deckList}</section>
    </div>
  );
}

export default DeckList;
