import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DeckListItem from "./DeckListItem";
import { listDecks } from "../../utils/api";
import ErrorMessage from "../common/ErrorMessage";
import Icon from "../common/Icon";

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
    <div>
      <DeckListItem key={deck.id} deck={deck} />
    </div>
  ));
  console.log(decks);

  return (
    <div>
      <NavLink to="/decks/new">
        <button
          type="button"
          style={{ margin: "20px 8px" }}
          className="btn btn-secondary"
        >
          <Icon type="Add" />
          Create Deck
        </button>
      </NavLink>
      <div style={{ margin: "8px" }}>{deckList}</div>
    </div>
  );
}

export default DeckList;
