import React, { useEffect } from "react";
import { readDeck, updateCard, readCard } from "../../utils/api";
import { useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import CardForm from "./CardForm";

export default function AddCard() {
  const navigate = useNavigate();
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const deckData = await readDeck(deckId);
        setDeck(deckData);
        const cardData = await readCard(cardId);
        setCard(cardData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [deckId, cardId]);

  const handleChange = ({ target }) => {
    setCard({ ...card, [target.name]: target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const abortController = new AbortController();
    try {
      await updateCard(card, abortController.signal);
      navigate(`/decks/${deckId}`);
    } catch (error) {
      console.log(error);
    }
  };

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
            <NavLink to={`/decks/${deckId}`}>{deck.name}</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h3>Edit Card</h3>

      <CardForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        cardData={card}
        deckId={deckId}
        isAdd={false}
      />
    </>
  );
}
