import React, { useEffect } from "react";
import { readDeck, createCard } from "../../utils/api";
import { useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import CardForm from "./CardForm";

export default function AddCard() {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    loadDeck();
  }, [deckId]);

  const initialAddCardState = {
    front: "",
    back: "",
  };

  const [cardData, setCardData] = useState({ ...initialAddCardState });
  const handleChange = ({ target }) => {
    setCardData({ ...cardData, [target.name]: target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const abortController = new AbortController();
    try {
      await createCard(deckId, cardData, abortController.signal);
      navigate(`/decks/${deckId}`);
    } catch (error) {
      console.log(error);
    }

    setCardData({ ...initialAddCardState });
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{ lineHeight: "inherit" }}>
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
            Add Card
          </li>
        </ol>
      </nav>
      <h3>{deck.name}: Add Card</h3>

      <CardForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        cardData={cardData}
        deckId={deckId}
        isAdd={true}
      />
    </div>
  );
}
